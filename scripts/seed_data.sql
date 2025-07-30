-- Script SQL pour insérer des données de test dans la base de données Supabase
-- À exécuter dans l'éditeur SQL de Supabase

-- Désactiver temporairement les contraintes de clé étrangère
SET session_replication_role = 'replica';

-- 1. Insérer des utilisateurs de test (nécessite d'être connecté avec un compte admin Supabase)
-- Note: Les mots de passe sont stockés de manière sécurisée par Supabase Auth
-- Vous devrez créer ces utilisateurs manuellement via l'interface d'authentification Supabase
-- ou utiliser l'API d'inscription depuis votre application

-- 2. Insérer des profils utilisateur (après avoir créé les utilisateurs via l'interface d'authentification)
-- Remplacez les UUID par ceux de vos utilisateurs réels
INSERT INTO public.profiles (id, username, email, phone, user_type)
VALUES 
  ('00000000-0000-0000-0000-000000000001', 'client1', 'client1@example.com', '0601020304', 'client')
  ON CONFLICT (id) DO NOTHING;

INSERT INTO public.profiles (id, username, email, phone, user_type)
VALUES 
  ('00000000-0000-0000-0000-000000000002', 'owner1', 'owner1@example.com', '0601020305', 'owner')
  ON CONFLICT (id) DO NOTHING;

-- 3. Insérer des food trucks
WITH inserted_truck AS (
  INSERT INTO public.food_trucks (owner_id, name, description, cuisine_type, logo_url, cover_url, is_active)
  VALUES 
    ('00000000-0000-0000-0000-000000000002', 'Le Camion Qui Fume', 'Spécialités de burgers artisanaux avec des produits frais et locaux', 'Burgers', 'https://example.com/logo1.jpg', 'https://example.com/cover1.jpg', true)
  RETURNING id
)
-- 4. Insérer l'emplacement du food truck
INSERT INTO public.locations (food_truck_id, coordinates, address, city, postal_code, country, is_current)
SELECT 
  id, 
  ST_SetSRID(ST_MakePoint(2.3522, 48.8566), 4326), 
  '5 Rue de Rivoli', 
  'Paris', 
  '75004', 
  'France', 
  true
FROM inserted_truck
ON CONFLICT (food_truck_id, is_current) DO NOTHING;

-- 5. Insérer les menus du food truck
INSERT INTO public.menus (food_truck_id, name, description, price, category, image_url, is_available)
SELECT 
  id, 
  'Burger Classique', 
  'Pain brioché, steak haché 100% boeuf, cheddar affiné, oignons caramélisés, salade, sauce maison', 
  12.50, 
  'Burgers', 
  'https://example.com/menu1.jpg', 
  true
FROM inserted_truck
ON CONFLICT (food_truck_id, name) DO NOTHING;

-- 6. Ajouter un événement de test
WITH inserted_event AS (
  INSERT INTO public.events (title, description, start_time, end_time, location_id, food_truck_id, max_participants, is_active)
  SELECT 
    'Soirée Spéciale Burgers',
    'Venez nombreux pour une soirée spéciale avec nos burgers du moment',
    NOW() + interval '2 days',
    NOW() + interval '2 days 4 hours',
    l.id,
    l.food_truck_id,
    50,
    true
  FROM public.locations l
  WHERE l.food_truck_id = (SELECT id FROM public.food_trucks WHERE name = 'Le Camion Qui Fume' LIMIT 1)
  LIMIT 1
  RETURNING id
)
-- 7. Ajouter des participants à l'événement
INSERT INTO public.event_participants (event_id, user_id, status)
SELECT 
  id,
  '00000000-0000-0000-0000-000000000001', -- ID du client
  'registered'
FROM inserted_event
ON CONFLICT (event_id, user_id) DO NOTHING;

-- 8. Ajouter aux favoris
INSERT INTO public.favorites (user_id, food_truck_id)
VALUES 
  ('00000000-0000-0000-0000-000000000001', (SELECT id FROM public.food_trucks WHERE name = 'Le Camion Qui Fume' LIMIT 1))
ON CONFLICT (user_id, food_truck_id) DO NOTHING;

-- Réactiver les contraintes de clé étrangère
SET session_replication_role = 'origin';

-- Vérifier les données insérées
SELECT 'Profiles:' as table_name, COUNT(*) as count FROM public.profiles
UNION ALL
SELECT 'Food Trucks:', COUNT(*) FROM public.food_trucks
UNION ALL
SELECT 'Locations:', COUNT(*) FROM public.locations
UNION ALL
SELECT 'Menus:', COUNT(*) FROM public.menus
UNION ALL
SELECT 'Events:', COUNT(*) FROM public.events
UNION ALL
SELECT 'Event Participants:', COUNT(*) FROM public.event_participants
UNION ALL
SELECT 'Favorites:', COUNT(*) FROM public.favorites;
