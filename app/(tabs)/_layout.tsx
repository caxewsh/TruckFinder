import { View, Platform } from 'react-native';
import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { colors, spacing } from '../../theme';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.darkGray, // Plus foncé pour une meilleure visibilité
        headerShown: false,
        tabBarStyle: {
        backgroundColor: colors.white,
        borderTopWidth: 1,
        borderTopColor: colors.lightGray,
        height: Platform.OS === 'ios' ? 80 : 60, // Hauteur plus grande sur iOS pour le safe area
        paddingTop: 8,
        paddingBottom: Platform.OS === 'ios' ? 20 : 0, // Espacement pour le safe area iOS
        paddingHorizontal: 4, // Réduction du padding horizontal
        ...Platform.select({
          android: {
            elevation: 8,
          },
        }),
      },
        tabBarLabelStyle: {
          fontSize: 11, // Taille de police réduite pour éviter le débordement
          fontWeight: '500',
          marginBottom: 6,
          paddingHorizontal: 0, // Suppression du padding horizontal des labels
        },
        tabBarItemStyle: {
          paddingVertical: 4,
          paddingHorizontal: 2, // Réduction du padding horizontal des items
        },
        tabBarIconStyle: {
          marginBottom: -4, // Ajustement de l'icône pour un meilleur alignement
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Accueil',
          tabBarIcon: ({ color }: { color: string }) => <FontAwesome name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="recherche"
        options={{
          title: 'Recherche',
          tabBarIcon: ({ color }: { color: string }) => <FontAwesome name="search" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="carte"
        options={{
          title: 'Carte',
          tabBarIcon: ({ color }: { color: string }) => <FontAwesome name="map" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="favoris"
        options={{
          title: 'Favoris',
          tabBarIcon: ({ color }: { color: string }) => <FontAwesome name="heart" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color }: { color: string }) => <FontAwesome name="user" size={22} color={color} />,
        }}
      />
    </Tabs>
  );
}
