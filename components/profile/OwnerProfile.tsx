import { View, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { ProfileHeader } from './ProfileHeader';
import { ProfileSection } from './ProfileSection';
import { ProfileMenuItem } from './ProfileMenuItem';
import { LogoutButton } from './LogoutButton';
import Text from '../Text';
import { colors } from '../../theme';

type OwnerProfileProps = {
  onLogout: () => void;
  onEditProfile: () => void;
  onEditPicture: () => void;
  onMenuPress: (item: string) => void;
};

export function OwnerProfile({
  onLogout,
  onEditProfile,
  onEditPicture,
  onMenuPress,
}: OwnerProfileProps) {
  return (
    <ScrollView style={styles.container}>
      <ProfileHeader 
        name="Food Truck du Chef"
        email="contact@foodtruckduchef.com"
        onEditPress={onEditPicture}
        onEditProfilePress={onEditProfile}
      />
      
      {/* Section Business */}
      <ProfileSection title="Mon Business">
        <ProfileMenuItem
          icon={<FontAwesome5 name="chart-line" size={20} color={colors.primary} />}
          title="Tableau de bord"
          onPress={() => onMenuPress('Tableau de bord')}
        />
        
        <ProfileMenuItem
          icon={<FontAwesome5 name="utensils" size={20} color={colors.primary} />}
          title="Gestion du menu"
          onPress={() => onMenuPress('Gestion du menu')}
        />
        
        <ProfileMenuItem
          icon={<FontAwesome5 name="calendar-alt" size={20} color={colors.primary} />}
          title="Calendrier & Emplacements"
          onPress={() => onMenuPress('Calendrier')}
        />
        
        <ProfileMenuItem
          icon={<FontAwesome5 name="receipt" size={20} color={colors.primary} />}
          title="Commandes"
          badge="5 nouvelles"
          onPress={() => onMenuPress('Commandes')}
        />
      </ProfileSection>
      
      {/* Section Compte */}
      <ProfileSection title="Compte">
        <ProfileMenuItem
          icon={<FontAwesome5 name="store" size={20} color={colors.primary} />}
          title="Informations du food truck"
          onPress={() => onMenuPress('Informations du food truck')}
        />
        
        <ProfileMenuItem
          icon={<FontAwesome name="user" size={20} color={colors.primary} />}
          title="Propriétaire"
          onPress={() => onMenuPress('Propriétaire')}
        />
        
        <ProfileMenuItem
          icon={<FontAwesome name="lock" size={20} color={colors.primary} />}
          title="Sécurité"
          onPress={() => onMenuPress('Sécurité')}
        />
      </ProfileSection>
      
      {/* Section Statistiques */}
      <ProfileSection title="Statistiques">
        <ProfileMenuItem
          icon={<FontAwesome5 name="chart-pie" size={20} color={colors.primary} />}
          title="Vue d'ensemble"
          onPress={() => onMenuPress('Statistiques')}
        />
        
        <ProfileMenuItem
          icon={<FontAwesome5 name="money-bill-wave" size={20} color={colors.primary} />}
          title="Revenus"
          onPress={() => onMenuPress('Revenus')}
        />
      </ProfileSection>
      
      {/* Section Support */}
      <ProfileSection title="Support">
        <ProfileMenuItem
          icon={<FontAwesome name="question-circle" size={20} color={colors.primary} />}
          title="Aide & Support"
          onPress={() => onMenuPress('Aide & Support')}
        />
        
        <ProfileMenuItem
          icon={<FontAwesome name="cog" size={20} color={colors.primary} />}
          title="Paramètres avancés"
          onPress={() => onMenuPress('Paramètres avancés')}
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
