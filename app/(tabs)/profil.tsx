import { View, StyleSheet, ScrollView, Platform } from 'react-native';
import { Stack } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import ScreenLayout from '../../components/ScreenLayout';
import Text from '../../components/Text';
import { ProfileHeader } from '../../components/profile/ProfileHeader';
import { ProfileSection } from '../../components/profile/ProfileSection';
import { ProfileMenuItem } from '../../components/profile/ProfileMenuItem';
import { LogoutButton } from '../../components/profile/LogoutButton';
import { colors } from '../../theme';

export default function ProfilScreen() {
  const handleEditPress = () => {
    // TODO: Implémenter la logique d'édition de la photo de profil
    console.log('Edit profile picture');
  };

  const handleEditProfilePress = () => {
    // TODO: Naviguer vers l'écran d'édition du profil
    console.log('Edit profile');
  };

  const handleLogout = () => {
    // TODO: Implémenter la déconnexion
    console.log('Logout');
  };

  const handleMenuPress = (item: string) => {
    // TODO: Gérer la navigation en fonction de l'élément du menu
    console.log('Menu item pressed:', item);
  };

  return (
    <ScreenLayout scrollable={false}>
      <Stack.Screen options={{ 
        title: 'Profil',
        headerStyle: {
          backgroundColor: colors.white,
          ...Platform.select({
            ios: {
              shadowOpacity: 0,
              borderBottomWidth: 1,
              borderBottomColor: colors.lightGray,
            },
            android: {
              elevation: 1,
              borderBottomWidth: 1,
              borderBottomColor: colors.lightGray,
            },
          }),
        },
        headerTitleStyle: {
          color: colors.dark,
          fontSize: 18,
          fontWeight: '600',
        },
      }} />
      
      <ScrollView style={styles.container}>
        <ProfileHeader 
          name="John Doe"
          email="john.doe@example.com"
          onEditPress={handleEditPress}
          onEditProfilePress={handleEditProfilePress}
        />
        
        {/* Section Compte */}
        <ProfileSection title="Compte">
          <ProfileMenuItem
            icon={<FontAwesome name="user" size={20} color={colors.primary} />}
            title="Informations personnelles"
            onPress={() => handleMenuPress('Informations personnelles')}
          />
          
          <ProfileMenuItem
            icon={<FontAwesome name="lock" size={20} color={colors.primary} />}
            title="Sécurité"
            onPress={() => handleMenuPress('Sécurité')}
          />
          
          <ProfileMenuItem
            icon={<FontAwesome name="bell" size={20} color={colors.primary} />}
            title="Notifications"
            onPress={() => handleMenuPress('Notifications')}
          />
        </ProfileSection>
        
        {/* Section Préférences */}
        <ProfileSection title="Préférences">
          <ProfileMenuItem
            icon={<FontAwesome name="language" size={20} color={colors.primary} />}
            title="Langue"
            rightContent={
              <Text variant="body" color="gray">Français</Text>
            }
            onPress={() => handleMenuPress('Langue')}
          />
          
          <ProfileMenuItem
            icon={<FontAwesome name="moon-o" size={20} color={colors.primary} />}
            title="Thème"
            rightContent={
              <Text variant="body" color="gray">Système</Text>
            }
            onPress={() => handleMenuPress('Thème')}
          />
        </ProfileSection>
        
        {/* Section Aide & Support */}
        <ProfileSection title="Aide & Support">
          <ProfileMenuItem
            icon={<FontAwesome name="question-circle" size={20} color={colors.primary} />}
            title="Centre d'aide"
            onPress={() => handleMenuPress('Centre d\'aide')}
          />
          
          <ProfileMenuItem
            icon={<FontAwesome name="envelope" size={20} color={colors.primary} />}
            title="Nous contacter"
            onPress={() => handleMenuPress('Nous contacter')}
          />
          
          <ProfileMenuItem
            icon={<FontAwesome name="info-circle" size={20} color={colors.primary} />}
            title="À propos"
            onPress={() => handleMenuPress('À propos')}
          />
        </ProfileSection>
        
        {/* Bouton de déconnexion */}
        <LogoutButton 
          onPress={handleLogout}
          version="1.0.0"
        />
      </ScrollView>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
