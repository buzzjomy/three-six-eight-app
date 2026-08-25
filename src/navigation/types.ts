import type { NavigatorScreenParams } from '@react-navigation/native';

export type TabParamList = {
  Home: undefined;
  Services: undefined;
  Blog: undefined;
  Contact: undefined;
};

export type RootStackParamList = {
  Tabs: NavigatorScreenParams<TabParamList>;
  About: undefined;
  Appointment: undefined;
  ServiceDetail: { serviceId: string };
};
