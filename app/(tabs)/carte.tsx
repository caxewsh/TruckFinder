import { View, StyleSheet, Platform, StatusBar } from 'react-native';
import { Stack } from 'expo-router';
import ScreenLayout from '../../components/ScreenLayout';
import { colors } from '../../theme';
import { SearchBar } from '../../components/map/SearchBar';
import { MapView } from '../../components/map/MapView';
import { LocationButton } from '../../components/map/LocationButton';
import { NearbyTrucksList } from '../../components/map/NearbyTrucksList';
import { Truck } from '../../components/map/types';

// Données factices pour les food trucks à proximité
const MOCK_NEARBY_TRUCKS: Truck[] = [
  {
    id: 1,
    name: 'Le Camion Gourmand',
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
  {
    id: 4,
    name: 'Burger House',
    cuisineType: 'Fast-food',
    distance: '0.5 km',
    rating: 4.2,
  },
];

export default function CarteScreen() {
  const handleSearchPress = () => {
    // TODO: Implémenter la navigation vers l'écran de recherche
    console.log('Search pressed');
  };

  const handleFilterPress = () => {
    // TODO: Afficher les filtres
    console.log('Filter pressed');
  };

  const handleLocationPress = () => {
    // TODO: Centrer la carte sur la position actuelle
    console.log('Location pressed');
  };

  const handleSeeAllPress = () => {
    // TODO: Naviguer vers la liste complète des food trucks
    console.log('See all pressed');
  };

  const handleTruckPress = (truck: Truck) => {
    // TODO: Naviguer vers la page de détail du food truck
    console.log('Truck pressed:', truck.name);
  };

  return (
    <ScreenLayout scrollable={false}>
      <StatusBar barStyle="dark-content" />
      <Stack.Screen options={{ 
        title: 'Carte',
        headerShown: true,
        headerStyle: [
          {
            backgroundColor: colors.white,
          },
          Platform.OS === 'android' && { 
            elevation: 1,
            borderBottomWidth: 1,
            borderBottomColor: colors.lightGray,
          },
          Platform.OS === 'ios' && { 
            shadowOpacity: 0,
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
      
      <View style={styles.container}>
        <SearchBar 
          onSearchPress={handleSearchPress}
          onFilterPress={handleFilterPress}
        />
        
        <View style={styles.mapWrapper}>
          <MapView showPlaceholder={true} />
          <LocationButton onPress={handleLocationPress} />
        </View>
        
        <NearbyTrucksList 
          trucks={MOCK_NEARBY_TRUCKS}
          onSeeAllPress={handleSeeAllPress}
          onTruckPress={handleTruckPress}
        />
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mapWrapper: {
    position: 'relative',
  },
});
