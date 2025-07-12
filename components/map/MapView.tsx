import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Text from '../Text';
import { colors, spacing } from '../../theme';

interface MapViewProps {
  children?: React.ReactNode;
  showPlaceholder?: boolean;
}

export const MapView: React.FC<MapViewProps> = ({
  children,
  showPlaceholder = true,
}) => {
  return (
    <View style={styles.mapContainer}>
      {showPlaceholder ? (
        <View style={styles.mapPlaceholder}>
          <FontAwesome name="map" size={48} color={colors.primary} />
          <Text variant="h3" style={styles.mapText} color="dark">
            Carte interactive
          </Text>
          <Text style={styles.mapHint} color="gray">
            (Intégration de la carte à venir)
          </Text>
        </View>
      ) : (
        children
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    height: 300,
    backgroundColor: colors.lightGray,
    margin: spacing.md,
    marginTop: 0,
    borderRadius: 16,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapPlaceholder: {
    alignItems: 'center',
    padding: spacing.lg,
  },
  mapText: {
    marginVertical: spacing.sm,
  },
  mapHint: {
    textAlign: 'center',
    paddingHorizontal: spacing.lg,
  },
});
