import React from 'react';
import { TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../../theme';

interface LocationButtonProps {
  onPress?: () => void;
  style?: object;
}

export const LocationButton: React.FC<LocationButtonProps> = ({
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity 
      style={[styles.locationButton, style]} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      <FontAwesome name="location-arrow" size={20} color={colors.primary} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  locationButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: colors.white,
    width: 44,
    height: 44,
    borderRadius: 22,
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
});
