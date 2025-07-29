import { View, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { ProfileHeader } from './ProfileHeader';
import { ProfileSection } from './ProfileSection';
import { ProfileMenuItem } from './ProfileMenuItem';
import { LogoutButton } from './LogoutButton';
import Text from '../Text';
import { colors } from '../../theme';

type ClientProfileProps = {
  onLogout: () => void;
  onEditProfile: () => void;
  onEditPicture: () => void;
  onMenuPress: (item: string) => void;
};

export function ClientProfile({
  onLogout,
  onEditProfile,
  onEditPicture,
  onMenuPress,
}: ClientProfileProps) {
  return (
    <ScrollView style={styles.container}>
      <ProfileHeader 
        name="John Doe"
        email="john.doe@example.com"
        onEditPress={onEditPicture}
        onEditProfilePress={onEditProfile}
      />
      
      {/* Section Commandes */}
      <ProfileSection title="Mes Commandes">
        <ProfileMenuItem
          icon={<FontAwesome name="history" size={20} color={colors.primary} />}
          title="Historique des commandes"
          onPress={() => onMenuPress('Historique des commandes')}
        />
        
        <ProfileMenuItem
          icon={<FontAwesome name="heart" size={20} color={colors.primary} />}
          title="Favoris"
          onPress={() => onMenuPress('Favoris')}
        />
      </ProfileSection>
      
      {/* Section Compte */}
      <ProfileSection title="Compte">
        <ProfileMenuItem
          icon={<FontAwesome name="user" size={20} color={colors.primary} />}
          title="Informations personnelles"
          onPress={() => onMenuPress('Informations personnelles')}
        />
        
        <ProfileMenuItem
          icon={<FontAwesome name="lock" size={20} color={colors.primary} />}
          title="Sécurité"
          onPress={() => onMenuPress('Sécurité')}
        />
        
        <ProfileMenuItem
          icon={<FontAwesome name="bell" size={20} color={colors.primary} />}
          title="Notifications"
          onPress={() => onMenuPress('Notifications')}
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
          onPress={() => onMenuPress('Langue')}
        />
        
        <ProfileMenuItem
          icon={<FontAwesome name="moon-o" size={20} color={colors.primary} />}
          title="Thème"
          rightContent={
            <Text variant="body" color="gray">Système</Text>
          }
          onPress={() => onMenuPress('Thème')}
        />
      </ProfileSection>
      
      {/* Section Aide & Support */}
      <ProfileSection title="Aide & Support">
        <ProfileMenuItem
          icon={<FontAwesome name="question-circle" size={20} color={colors.primary} />}
          title="Centre d'aide"
          onPress={() => onMenuPress('Centre d\'aide')}
        />
        
        <ProfileMenuItem
          icon={<FontAwesome name="envelope" size={20} color={colors.primary} />}
          title="Nous contacter"
          onPress={() => onMenuPress('Nous contacter')}
        />
      </ProfileSection>
      
      {/* Bouton de déconnexion */}
      <LogoutButton 
        onPress={onLogout}
        version="1.0.0"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
