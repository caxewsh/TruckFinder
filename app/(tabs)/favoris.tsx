import { View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { Text } from '../../components/Text';
import { ScreenLayout } from '../../components/ScreenLayout';
import { colors, spacing } from '../../theme';

export default function FavorisScreen() {
  return (
    <ScreenLayout>
      <Stack.Screen options={{ title: 'Favoris' }} />
      <Text variant="h1" style={styles.title}>Favoris</Text>
      <Text variant="body" style={styles.subtitle}>
        Retrouvez vos food trucks préférés.
      </Text>
      
      <View style={styles.emptyState}>
        <Text variant="body" style={styles.emptyText}>
          Vous n'avez pas encore de favoris
        </Text>
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: spacing.sm,
    color: colors.dark,
  },
  subtitle: {
    marginBottom: spacing.lg,
    color: colors.darkGray,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },
  emptyText: {
    color: colors.darkGray,
    textAlign: 'center',
  },
});
