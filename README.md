# TruckFinder

Application mobile pour trouver et localiser les food trucks à proximité.

## 🚀 Structure du projet

```
app/
├── (tabs)/                     # Écrans principaux avec barre d'onglets
│   ├── screens/                # Écrans de l'application
│   │   └── HomeScreen.tsx      # Écran d'accueil
│   ├── tabs/                   # Configuration des onglets
│   │   ├── tabs.config.tsx     # Configuration des onglets
│   │   └── TabNavigator.tsx    # Navigateur d'onglets
│   ├── _layout.tsx             # Layout principal des onglets
│   └── index.tsx               # Point d'entrée de l'application
├── components/                 # Composants réutilisables
│   ├── ui/                     # Composants d'interface utilisateur
│   └── Text.tsx                # Composant de texte personnalisé
├── navigation/                 # Configuration de la navigation
│   └── routes.ts               # Constantes de routes
├── theme/                      # Thème et styles
│   ├── colors.ts               # Palette de couleurs
│   ├── spacing.ts              # Espacements
│   └── typography.ts           # Typographie
└── types/                      # Types TypeScript
    └── navigation.ts           # Types pour la navigation
```

## 📱 Onglets

L'application contient actuellement 4 onglets principaux :

1. **Accueil** - Vue d'ensemble des food trucks à proximité
2. **Recherche** - Recherche avancée de food trucks
3. **Carte** - Visualisation des food trucks sur une carte
4. **Favoris** - Liste des food trucks favoris

## 🛠 Configuration

### Variables d'environnement

Créez un fichier `.env` à la racine du projet avec les variables suivantes :

```env
# Configuration de l'API
API_URL=your_api_url_here
API_KEY=your_api_key_here

# Configuration des services tiers
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

### Installation

1. Installer les dépendances :
   ```bash
   yarn install
   # ou
   npm install
   ```

2. Lancer l'application :
   ```bash
   npx expo start
   ```

## 🧩 Ajouter un nouvel écran

1. Créez un nouveau fichier dans `app/(tabs)/screens/` :
   ```typescript
   // NouvelEcran.tsx
   import { View, StyleSheet } from 'react-native';
   import { Text } from '../../components/Text';
   import { colors, spacing } from '../../theme';

   export default function NouvelEcran() {
     return (
       <View style={styles.container}>
         <Text variant="h1">Nouvel Écran</Text>
       </View>
     );
   }

   const styles = StyleSheet.create({
     container: {
       flex: 1,
       padding: spacing.md,
       backgroundColor: colors.white,
     },
   });
   ```

2. Ajoutez l'export dans `app/(tabs)/screens/index.ts` :
   ```typescript
   export { default as NouvelEcran } from './NouvelEcran';
   ```

3. Si c'est un nouvel onglet, ajoutez-le dans `app/(tabs)/tabs/tabs.config.tsx` :
   ```typescript
   {
     name: ROUTES.TABS.NEW_TAB,
     title: 'Nouvel Onglet',
     icon: ({ color }) => <FontAwesome name="star" size={22} color={color} />,
   }
   ```

## 🎨 Thème et styles

### Couleurs

Utilisez les couleurs définies dans `theme/colors.ts` :

```typescript
import { colors } from '../theme';

// Utilisation
<View style={{ backgroundColor: colors.primary }} />
```

### Typographie

Utilisez les styles de texte prédéfinis :

```typescript
import { Text } from '../components/Text';

// Utilisation
<Text variant="h1">Titre principal</Text>
<Text variant="body">Texte normal</Text>
<Text variant="caption">Légende</Text>
```

## 🔄 Navigation

Pour naviguer entre les écrans, utilisez le hook `useRouter` :

```typescript
import { useRouter } from 'expo-router';
import { ROUTES } from '../navigation/routes';

function MonComposant() {
  const router = useRouter();

  const handlePress = () => {
    // Navigation vers un autre écran
    router.push(ROUTES.TABS.SEARCH);
  };

  return (
    <Button onPress={handlePress} title="Aller à la recherche" />
  );
}
```

## 📦 Dépendances principales

- Expo Router - Navigation
- React Native - UI Framework
- TypeScript - Typage statique
- React Native Vector Icons - Icônes
- (Ajoutez d'autres dépendances au besoin)

## 📝 Licence

MIT
