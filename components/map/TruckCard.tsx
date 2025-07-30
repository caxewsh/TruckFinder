import React from 'react';
import { View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Text from '../Text';
import { colors, spacing } from '../../theme';
import { Truck } from './types';

interface TruckCardProps {
  truck: Truck;
  onPress?: (truck: Truck) => void;
  style?: object;
}

export const TruckCard: React.FC<TruckCardProps> = ({
  truck,
  onPress,
  style,
}) => {
  const handlePress = () => {
    if (onPress) {
      onPress(truck);
    }
  };

  return (
    <TouchableOpacity 
      style={[styles.nearbyItem, style]} 
      onPress={handlePress}
      activeOpacity={0.9}
    >
      <View style={styles.nearbyImage}>
        {truck.imageUrl ? (
          <Text>Image</Text>
        ) : (
          <FontAwesome name="truck" size={32} color={colors.primary} />
        )}
      </View>
      <View style={styles.nearbyInfo}>
        <Text variant="body" style={styles.nearbyName} color="dark">
          {truck.name}
        </Text>
        <View style={styles.ratingContainer}>
          {[1, 2, 3, 4, 5].map((star) => (
            <FontAwesome 
              key={star} 
              name={star <= Math.round(truck.rating) ? 'star' : 'star-o'} 
              size={12} 
              color={colors.secondary} 
              style={styles.starIcon}
            />
          ))}
        </View>
        <Text variant="caption" color="gray">
          {truck.cuisineType} • {truck.distance}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  nearbyItem: {
    width: 200,
    backgroundColor: colors.white,
    borderRadius: 12,
    marginRight: spacing.md,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: colors.dark,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  nearbyImage: {
    height: 120,
    backgroundColor: colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nearbyInfo: {
    padding: spacing.md,
  },
  nearbyName: {
    fontWeight: '600',
    marginBottom: spacing.xs,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: spacing.xs,
  },
  starIcon: {
    marginRight: 2,
  },
});
