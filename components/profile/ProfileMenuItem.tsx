import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Text from '../Text';
import { colors, spacing } from '../../theme';

interface ProfileMenuItemProps {
  icon: React.ReactNode;
  title: string;
  rightContent?: React.ReactNode;
  showArrow?: boolean;
  badge?: string | number;
  onPress?: () => void;
}

export const ProfileMenuItem: React.FC<ProfileMenuItemProps> = ({
  icon,
  title,
  rightContent,
  showArrow = true,
  badge,
  onPress,
}) => {
  return (
    <TouchableOpacity 
      style={styles.menuItem} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.menuLeft}>
        <View style={styles.menuIcon}>
          {icon}
        </View>
        <Text variant="body" style={styles.menuText}>
          {title}
        </Text>
      </View>
      
      <View style={styles.menuRight}>
        {badge && (
          <View style={styles.badge}>
            <Text variant="caption" style={styles.badgeText}>
              {badge}
            </Text>
          </View>
        )}
        {rightContent}
        {showArrow && (
          <FontAwesome 
            name="chevron-right" 
            size={16} 
            color={colors.gray} 
            style={styles.menuArrow} 
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuIcon: {
    width: 24,
    alignItems: 'center',
    marginRight: spacing.md,
  },
  menuText: {
    flex: 1,
  },
  menuRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuArrow: {
    marginLeft: spacing.sm,
  },
  badge: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xs,
    marginRight: spacing.sm,
  },
  badgeText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
});
