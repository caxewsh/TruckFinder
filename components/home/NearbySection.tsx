import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Text from '../Text';
import { colors, spacing } from '../../theme';
import { Truck } from '../map/types';

export interface NearbySectionProps {
  title: string;
  trucks: Truck[];
  onSeeAllPress?: () => void;
  onTruckPress?: (truck: Truck) => void;
}

export const NearbySection: React.FC<NearbySectionProps> = ({
  title,
  trucks,
  onSeeAllPress,
  onTruckPress,
}) => {
  if (trucks.length === 0) {
    return null;
  }

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text variant="h3" style={styles.sectionTitle}>
          {title}
        </Text>
      </View>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.nearbyList}
      >
        {trucks.map((truck) => (
          <TouchableOpacity 
            key={truck.id} 
            style={styles.nearbyItem}
            onPress={() => onTruckPress?.(truck)}
            activeOpacity={0.9}
          >
            <View style={styles.nearbyItemContent}>
              <Text variant="body" style={styles.truckName} numberOfLines={1}>
                {truck.name}
              </Text>
              <Text variant="caption" style={styles.truckCuisine} numberOfLines={1}>
                {truck.cuisineType}
              </Text>
              <View style={styles.truckInfo}>
                <Text variant="caption" style={styles.truckDistance}>
                  {truck.distance}
                </Text>
                <Text variant="caption" style={styles.truckRating}>
                  ★ {truck.rating}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    padding: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  sectionTitle: {
    color: colors.dark,
  },
  nearbyList: {
    flexDirection: 'row',
  },
  nearbyItem: {
    width: 200,
    height: 120,
    backgroundColor: colors.white,
    borderRadius: 12,
    marginRight: spacing.md,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.lightGray,
    padding: spacing.md,
  },
  nearbyItemContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  truckName: {
    fontWeight: '600',
    color: colors.dark,
    marginBottom: spacing.xs,
  },
  truckCuisine: {
    color: colors.gray,
    marginBottom: spacing.sm,
  },
  truckInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  truckDistance: {
    color: colors.gray,
  },
  truckRating: {
    color: colors.primary,
    fontWeight: '600',
  },
});
