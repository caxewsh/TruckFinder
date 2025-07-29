import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Stack } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../../theme';
import Text from '../Text';
import ScreenLayout from '../ScreenLayout';

type AccountTypeSelectionProps = {
  onSelectAccountType: (type: 'client' | 'owner') => void;
};

export function AccountTypeSelection({ onSelectAccountType }: AccountTypeSelectionProps) {
  return (
    <ScreenLayout scrollable={false}>
      <Stack.Screen options={{ 
        title: 'Choisissez un type de compte',
        headerShown: false
      }} />
      
      <View style={styles.container}>
        <Text variant="h2" style={styles.title}>
          Bienvenue sur TruckFinder
        </Text>
        <Text style={styles.subtitle}>
          Choisissez votre type de compte pour continuer
        </Text>
        
        <View style={styles.cardsContainer}>
          {/* Client Card */}
          <TouchableOpacity 
            style={[styles.card, styles.clientCard]}
            onPress={() => onSelectAccountType('client')}
          >
            <View style={styles.cardIconContainer}>
              <FontAwesome5 name="user" size={32} color={colors.primary} />
            </View>
            <Text variant="h3" style={styles.cardTitle}>
              Client
            </Text>
            <Text style={styles.cardDescription}>
              Je veux découvrir et commander dans des food trucks
            </Text>
          </TouchableOpacity>
          
          {/* Owner Card */}
          <TouchableOpacity 
            style={[styles.card, styles.ownerCard]}
            onPress={() => onSelectAccountType('owner')}
          >
            <View style={styles.cardIconContainer}>
              <FontAwesome5 name="truck" size={32} color={colors.primary} />
            </View>
            <Text variant="h3" style={styles.cardTitle}>
              Propriétaire
            </Text>
            <Text style={styles.cardDescription}>
              Je gère un food truck et je veux développer mon activité
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  title: {
    textAlign: 'center',
    marginBottom: 8,
    color: colors.dark,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 40,
    color: colors.gray,
    fontSize: 16,
  },
  cardsContainer: {
    gap: 20,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  clientCard: {
    borderTopWidth: 4,
    borderTopColor: colors.primary,
  },
  ownerCard: {
    borderTopWidth: 4,
    borderTopColor: colors.secondary,
  },
  cardIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: `${colors.primary}1A`, // 10% opacity of primary color
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    marginBottom: 8,
    color: colors.dark,
  },
  cardDescription: {
    textAlign: 'center',
    color: colors.gray,
    fontSize: 14,
    lineHeight: 20,
  },
});
