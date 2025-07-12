import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../Text';
import { colors, spacing } from '../../theme';

interface HeaderProps {
  title: string;
  subtitle: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <View style={styles.header}>
      <Text variant="h1" color="primary">{title}</Text>
      <Text variant="body" color="darkGray" style={styles.subtitle}>
        {subtitle}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: spacing.lg,
    paddingBottom: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  subtitle: {
    marginTop: spacing.xs,
  },
});
