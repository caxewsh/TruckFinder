import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import Text from '../Text';
import { colors, spacing } from '../../theme';

interface LogoutButtonProps {
  onPress?: () => void;
  version?: string;
}

export const LogoutButton: React.FC<LogoutButtonProps> = ({
  onPress,
  version = '1.0.0',
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.button}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Text variant="body" style={styles.buttonText} color="error">
          Se déconnecter
        </Text>
      </TouchableOpacity>
      
      <Text variant="caption" color="gray" style={styles.versionText}>
        Version {version}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.xl,
    alignItems: 'center',
  },
  button: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.error,
  },
  buttonText: {
    fontWeight: '600',
    textAlign: 'center',
  },
  versionText: {
    marginTop: spacing.lg,
  },
});
