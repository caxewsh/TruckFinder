import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../Text';
import { colors, spacing } from '../../theme';

interface ProfileSectionProps {
  title: string;
  children: ReactNode;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({
  title,
  children,
}) => {
  return (
    <View style={styles.section}>
      <Text variant="h3" style={styles.sectionTitle}>
        {title}
      </Text>
      <View style={styles.sectionContent}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  sectionTitle: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.md,
    color: colors.dark,
  },
  sectionContent: {
    backgroundColor: colors.white,
  },
});
