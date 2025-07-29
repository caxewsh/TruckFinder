import { useState } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Stack } from 'expo-router';
import ScreenLayout from '../../components/ScreenLayout';
import { AccountTypeSelection } from '../../components/account/AccountTypeSelection';
import { ClientProfile } from '../../components/profile/ClientProfile';
import { OwnerProfile } from '../../components/profile/OwnerProfile';
import { colors } from '../../theme';

type AccountType = 'client' | 'owner' | null;

export default function ProfilScreen() {
  const [accountType, setAccountType] = useState<AccountType>(null);

  const handleSelectAccountType = (type: 'client' | 'owner') => {
    setAccountType(type);
    // TODO: Save account type to storage when auth is implemented
  };

  const handleLogout = () => {
    setAccountType(null);
    // TODO: Clear auth state when implemented
  };

  const handleEditPress = () => {
    // TODO: Implement profile picture edit logic
    console.log('Edit profile picture');
  };

  const handleEditProfilePress = () => {
    // TODO: Navigate to edit profile screen
    console.log('Edit profile');
  };

  const handleMenuPress = (item: string) => {
    // TODO: Handle menu item press
    console.log('Menu item pressed:', item);
  };

  // Show account type selection if not selected
  if (!accountType) {
    return (
      <ScreenLayout scrollable={false}>
        <AccountTypeSelection onSelectAccountType={handleSelectAccountType} />
      </ScreenLayout>
    );
  }

  // Show the appropriate profile based on account type
  return (
    <ScreenLayout scrollable={false}>
      <Stack.Screen options={{ 
        title: accountType === 'client' ? 'Mon Profil' : 'Mon Food Truck',
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
      
      {accountType === 'client' ? (
        <ClientProfile 
          onLogout={handleLogout}
          onEditProfile={handleEditProfilePress}
          onEditPicture={handleEditPress}
          onMenuPress={handleMenuPress}
        />
      ) : (
        <OwnerProfile 
          onLogout={handleLogout}
          onEditProfile={handleEditProfilePress}
          onEditPicture={handleEditPress}
          onMenuPress={handleMenuPress}
        />
      )}
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
