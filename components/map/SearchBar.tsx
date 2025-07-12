import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Text from '../Text';
import { colors, spacing } from '../../theme';

interface SearchBarProps {
  onSearchPress?: () => void;
  onFilterPress?: () => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearchPress,
  onFilterPress,
  placeholder = 'Rechercher un food truck...',
}) => {
  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity 
        style={styles.searchBar}
        onPress={onSearchPress}
        activeOpacity={0.8}
      >
        <FontAwesome name="search" size={16} color={colors.gray} />
        <Text style={styles.searchText} color="gray">
          {placeholder}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.filterButton} 
        onPress={onFilterPress}
        activeOpacity={0.8}
      >
        <FontAwesome name="sliders" size={20} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    padding: spacing.md,
    paddingBottom: spacing.sm,
    alignItems: 'center',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    borderRadius: 12,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    marginRight: spacing.sm,
  },
  searchText: {
    marginLeft: spacing.sm,
  },
  filterButton: {
    backgroundColor: colors.primary,
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
