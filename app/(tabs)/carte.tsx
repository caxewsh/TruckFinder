import { View, StyleSheet, Platform, StatusBar } from 'react-native';
import { Stack } from 'expo-router';
import { Text } from '../../components/Text';
import { ScreenLayout } from '../../components/ScreenLayout';
import { colors, spacing } from '../../theme';

export default function CarteScreen() {
  return (
    <ScreenLayout scrollable={false}>
      <StatusBar barStyle="dark-content" />
      <Stack.Screen options={{ 
        title: 'Carte',
        headerShown: true,
        headerStyle: [
          {
            backgroundColor: colors.white,
          },
          Platform.OS === 'android' && { 
            elevation: 0,
            borderBottomWidth: 1,
            borderBottomColor: colors.lightGray,
          },
          Platform.OS === 'ios' && { 
            shadowOpacity: 0,
            borderBottomWidth: 1,
            borderBottomColor: colors.lightGray,
          },
        ].filter(Boolean) as any,
        headerTitleStyle: {
          color: colors.dark,
          fontSize: 18,
          fontWeight: '600',
        },
      }} />
      
      <View style={styles.container}>
        <View style={styles.header}>
          <Text variant="h1" style={styles.title}>Carte</Text>
          <Text variant="body" style={styles.subtitle}>
            Localisez les food trucks autour de vous
          </Text>
        </View>
        
        <View style={styles.mapContainer}>
          <View style={styles.mapPlaceholder}>
            <Text style={styles.mapText}>Carte des food trucks</Text>
            <Text style={styles.mapHint}>(Intégration de la carte à venir)</Text>
          </View>
          
          {/* Bouton de localisation flottant */}
          <View style={styles.locationButton}>
            <Text style={styles.locationButtonText}>📍</Text>
          </View>
        </View>
        
        {/* Barre de recherche flottante */}
        <View style={styles.searchBar}>
          <Text style={styles.searchText}>Rechercher un food truck...</Text>
        </View>
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.white,
  },
  header: {
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: 16,
    color: colors.darkGray,
    marginBottom: spacing.md,
  },
  mapContainer: {
    flex: 1,
    position: 'relative',
  },
  mapPlaceholder: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    margin: spacing.md,
    marginTop: 0,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  mapText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.dark,
    marginBottom: spacing.xs,
  },
  mapHint: {
    fontSize: 14,
    color: colors.darkGray,
    fontStyle: 'italic',
  },
  searchBar: {
    position: 'absolute',
    top: Platform.select({
      ios: spacing.lg,
      android: (StatusBar.currentHeight || 0) + spacing.sm,
    }),
    left: spacing.md,
    right: spacing.md,
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: spacing.sm,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchText: {
    color: colors.darkGray,
    marginLeft: spacing.xs,
  },
  locationButton: {
    position: 'absolute',
    bottom: spacing.lg,
    right: spacing.lg,
    backgroundColor: colors.white,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  locationButtonText: {
    fontSize: 24,
  },
});
