import { View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { Text } from '../../components/Text';
import { ScreenLayout } from '../../components/ScreenLayout';
import { colors, spacing } from '../../theme';

export default function ProfilScreen() {
  return (
    <ScreenLayout>
      <Stack.Screen options={{ title: 'Profil' }} />
      <Text variant="h1" style={styles.title}>Profil</Text>
      <Text variant="body" style={styles.subtitle}>
        Gérez votre compte et vos préférences.
      </Text>
      
      <View style={styles.content}>
        <View style={styles.section}>
          <Text variant="h3" style={styles.sectionTitle}>Compte</Text>
          {/* Ici vous pourriez ajouter les informations du compte */}
        </View>
        
        <View style={styles.section}>
          <Text variant="h3" style={styles.sectionTitle}>Préférences</Text>
          {/* Ici vous pourriez ajouter les préférences */}
        </View>
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
  content: {
    width: '100%',
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    marginBottom: spacing.md,
    color: colors.dark,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    paddingBottom: spacing.xs,
  },
});
