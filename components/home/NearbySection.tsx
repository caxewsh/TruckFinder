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
            <View style={styles.nearbyItemContent} />
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
    backgroundColor: colors.lightGray,
    borderRadius: 12,
    marginRight: spacing.md,
    overflow: 'hidden',
  },
  nearbyItemContent: {
    flex: 1,
  },
});
