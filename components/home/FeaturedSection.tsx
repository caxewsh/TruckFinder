import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Text from '../Text';
import { colors, spacing } from '../../theme';

export interface FeaturedItem {
  id: string | number;
  title: string;
  description: string;
  imageUrl?: string;
}

interface FeaturedSectionProps {
  title: string;
  items: FeaturedItem[];
  onItemPress?: (item: FeaturedItem) => void;
}

export const FeaturedSection: React.FC<FeaturedSectionProps> = ({
  title,
  items,
  onItemPress,
}) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <View style={styles.section}>
      <Text variant="h3" style={styles.sectionTitle}>
        {title}
      </Text>
      
      <TouchableOpacity 
        style={styles.featuredCard}
        onPress={() => onItemPress?.(items[0])}
        activeOpacity={0.9}
      >
        <Text>{items[0].description}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    padding: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  sectionTitle: {
    marginBottom: spacing.md,
    color: colors.dark,
  },
  featuredCard: {
    backgroundColor: colors.lightGray,
    borderRadius: 12,
    padding: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    height: 180,
  },
});
