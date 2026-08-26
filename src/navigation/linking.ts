import * as Linking from 'expo-linking';
import type { LinkingOptions } from '@react-navigation/native';
import type { RootStackParamList } from './types';

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Tabs: {
        screens: {
          Home: '',
          Services: 'services',
          Blog: 'blog',
          Contact: 'contact',
        },
      },
      About: 'about',
      Appointment: 'appointment',
      ServiceDetail: 'services/:serviceId',
      BlogDetail: 'blog/:postId',
    },
  },
};
