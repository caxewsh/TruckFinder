import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  '(tabs)': NavigatorScreenParams<TabParamList>;
  // Ajoutez d'autres écrans ici (modals, écrans de navigation, etc.)
};

export type TabParamList = {
  index: undefined;
  recherche: undefined;
  carte: undefined;
  favoris: undefined;
  profil: undefined;
};

// Déclaration des types pour useNavigation
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
