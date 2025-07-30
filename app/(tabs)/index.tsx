import { View, StyleSheet, Platform } from 'react-native';
import { Stack } from 'expo-router';
import ScreenLayout from '../../components/ScreenLayout';
import { Header } from '../../components/home/Header';
import { FeaturedSection } from '../../components/home/FeaturedSection';
import { NearbySection } from '../../components/home/NearbySection';
import { Truck } from '../../components/map/types';
import { colors } from '../../theme';

// Données factices pour la section "À la une"
const FEATURED_ITEMS = [
  {
    id: 1,
    title: 'Food Truck du moment',
    description: 'Découvrez nos food trucks du moment',
  },
];

// Données factices pour les food trucks à proximité
const NEARBY_TRUCKS: Truck[] = [
  {
    id: 1,
    name: 'Mémé Patate',
    cuisineType: 'Cuisine française',
    distance: '0.8 km',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Tacos Avenue',
    cuisineType: 'Cuisine mexicaine',
    distance: '1.2 km',
    rating: 4.0,
  },
  {
    id: 3,
    name: 'Pasta Express',
    cuisineType: 'Cuisine italienne',
    distance: '1.5 km',
    rating: 4.8,
  },
];

export default function Index() {
  const handleFeaturedPress = (item: any) => {
    // TODO: Naviguer vers la page du food truck en vedette
    console.log('Featured item pressed:', item);
  };

  const handleTruckPress = (truck: Truck) => {
    // TODO: Naviguer vers la page de détail du food truck
    console.log('Truck pressed:', truck.name);
  };

  const handleSeeAllPress = () => {
    // TODO: Naviguer vers la liste complète des food trucks
    console.log('See all pressed');
  };

  return (
    <ScreenLayout scrollable={true}>
      <Stack.Screen options={{
        title: 'Accueil',
        headerShown: true,
        headerStyle: [
          {
            backgroundColor: colors.white,
          },
          Platform.OS === 'ios' && {
            shadowOpacity: 0,
            borderBottomWidth: 1,
            borderBottomColor: colors.lightGray,
          },
          Platform.OS === 'android' && {
            elevation: 1,
            borderBottomWidth: 1,
            borderBottomColor: colors.lightGray,
          },
        ].filter(Boolean) as any,
        headerTitleStyle: {
          color: colors.dark,
          fontSize: 18,
          fontWeight: '600',
        },
      }} />
      
      <Header 
        title="Bienvenue"
        subtitle="Découvrez les meilleurs food trucks près de chez vous."
      />
      
      <FeaturedSection 
        title="À la une"
        items={FEATURED_ITEMS}
        onItemPress={handleFeaturedPress}
      />
      
      <NearbySection 
        title="Près de chez vous"
        trucks={NEARBY_TRUCKS}
        onTruckPress={handleTruckPress}
        onSeeAllPress={handleSeeAllPress}
      />
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
