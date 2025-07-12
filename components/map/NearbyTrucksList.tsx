import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Text from '../Text';
import { colors, spacing } from '../../theme';
import { TruckCard } from './TruckCard';
import { Truck } from './types';

interface NearbyTrucksListProps {
  trucks: Truck[];
  onSeeAllPress?: () => void;
  onTruckPress?: (truck: Truck) => void;
  title?: string;
  seeAllText?: string;
}

export const NearbyTrucksList: React.FC<NearbyTrucksListProps> = ({
  trucks,
  onSeeAllPress,
  onTruckPress,
  title = 'À proximité',
  seeAllText = 'Tout voir',
}) => {
  if (trucks.length === 0) {
    return null;
  }

  return (
    <View style={styles.nearbySection}>
      <View style={styles.sectionHeader}>
        <Text variant="h3" color="dark">{title}</Text>
        <TouchableOpacity onPress={onSeeAllPress}>
          <Text variant="body" color="primary">{seeAllText}</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.nearbyList}
      >
        {trucks.map((truck) => (
          <TruckCard 
            key={truck.id} 
            truck={truck} 
            onPress={onTruckPress}
            style={styles.truckCard}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  nearbySection: {
    marginTop: spacing.md,
    paddingHorizontal: spacing.md,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  nearbyList: {
    paddingBottom: spacing.sm,
  },
  truckCard: {
    marginRight: spacing.md,
  },
});
