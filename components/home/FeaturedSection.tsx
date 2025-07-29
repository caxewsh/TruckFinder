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
      
      <View style={styles.featuredCard}>
        <View style={styles.cardContent}>
          <Text variant="h3" style={styles.cardTitle}>{items[0].title}</Text>
          <Text style={styles.cardDescription}>{items[0].description}</Text>
          <TouchableOpacity 
            style={styles.seeMoreButton}
            onPress={() => onItemPress?.(items[0])}
            activeOpacity={0.8}
          >
            <Text style={styles.seeMoreText}>Voir plus</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: spacing.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  cardContent: {
    alignItems: 'flex-start',
  },
  cardTitle: {
    marginBottom: spacing.sm,
    color: colors.dark,
    fontWeight: '600',
  },
  cardDescription: {
    marginBottom: spacing.md,
    color: colors.darkGray,
    lineHeight: 20,
  },
  seeMoreButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: 20,
  },
  seeMoreText: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 14,
  },
});
