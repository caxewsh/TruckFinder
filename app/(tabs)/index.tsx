import { View, StyleSheet, Platform } from 'react-native';
import { Stack } from 'expo-router';
import { Text } from '../../components/Text';
import { ScreenLayout } from '../../components/ScreenLayout';
import { colors, spacing } from '../../theme';

export default function Index() {
  return (
    <ScreenLayout>
      <Stack.Screen options={{
        title: 'Accueil',
        headerShown: true,
        headerStyle: [
          {
            backgroundColor: colors.white,
          },
          Platform.OS === 'ios' && {
            shadowOpacity: 0,
            borderBottomWidth: 1,
            borderBottomColor: colors.lightGray,
          },
          Platform.OS === 'android' && {
            elevation: 1,
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
        <Text variant="h1" style={styles.title}>Bienvenue</Text>
        <Text variant="body" style={styles.subtitle}>
          Découvrez les meilleurs food trucks près de chez vous.
        </Text>
        
        <View style={styles.content}>
          <Text variant="h3" style={styles.sectionTitle}>Nos recommandations</Text>
          {/* Ici vous pourriez ajouter une liste de food trucks recommandés */}
        </View>
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.md,
    paddingBottom: Platform.OS === 'ios' ? 100 : 80, // Ajustement pour la tabBar
  },
  title: {
    marginBottom: spacing.sm,
    color: colors.dark,
    fontSize: 28,
    fontWeight: '700',
  },
  subtitle: {
    marginBottom: spacing.lg,
    color: colors.darkGray,
    fontSize: 16,
  },
  sectionTitle: {
    marginTop: spacing.xl,
    marginBottom: spacing.md,
    color: colors.dark,
    fontSize: 20,
    fontWeight: '600',
  },
  content: {
    width: '100%',
    flex: 1,
  },
});
