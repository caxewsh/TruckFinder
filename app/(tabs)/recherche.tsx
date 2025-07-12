import { View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import Text from '../../components/Text';
import ScreenLayout from '../../components/ScreenLayout';
import { colors, spacing } from '../../theme';

export default function RechercheScreen() {
  return (
    <ScreenLayout>
      <Stack.Screen options={{ title: 'Recherche' }} />
      <Text variant="h1" style={styles.title}>Recherche</Text>
      <Text variant="body" style={styles.subtitle}>
        Trouvez des food trucks par nom, type de cuisine ou localisation.
      </Text>
      
      <View style={styles.content}>
        {/* Ici vous pourriez ajouter un champ de recherche */}
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
});
