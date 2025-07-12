import React from 'react';
import { View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Text from '../Text';
import { colors, spacing } from '../../theme';

interface ProfileHeaderProps {
  name: string;
  email: string;
  onEditPress?: () => void;
  onEditProfilePress?: () => void;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  name,
  email,
  onEditPress,
  onEditProfilePress,
}) => {
  return (
    <View style={styles.header}>
      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          <FontAwesome name="user" size={40} color={colors.white} />
        </View>
        <TouchableOpacity 
          style={styles.editButton} 
          onPress={onEditPress}
          activeOpacity={0.8}
        >
          <FontAwesome name="pencil" size={16} color={colors.primary} />
        </TouchableOpacity>
      </View>
      
      <Text variant="h2" style={styles.userName} color="dark">
        {name}
      </Text>
      <Text variant="body" color="gray">
        {email}
      </Text>
      
      <TouchableOpacity 
        style={styles.editProfileButton}
        onPress={onEditProfilePress}
        activeOpacity={0.8}
      >
        <Text variant="body" color="primary" style={styles.editProfileText}>
          Modifier le profil
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    padding: spacing.xl,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: spacing.md,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: colors.white,
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: colors.dark,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  userName: {
    marginBottom: spacing.xs,
  },
  editProfileButton: {
    marginTop: spacing.lg,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
  },
  editProfileText: {
    fontWeight: '600',
  },
});
