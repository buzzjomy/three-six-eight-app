import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { CompositeNavigationProp } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View } from 'react-native';
import { Button } from '../components/Button';
import { ServiceCard } from '../components/Cards';
import { PageHeader } from '../components/PageHeader';
import { Screen } from '../components/Screen';
import { Section } from '../components/Section';
import { spacing } from '../theme/theme';
import { services } from '../data/content';
import type { RootStackParamList, TabParamList } from '../navigation/types';

type Nav = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'Services'>,
  NativeStackNavigationProp<RootStackParamList>
>;

export function ServicesScreen() {
  const navigation = useNavigation<Nav>();

  return (
    <Screen>
      <PageHeader
        title="What Service We Offer"
        subtitle="A full range of services in hair care, skin care, nail care, and make-up."
      />

      <Section title="Our specialities">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onPress={() => navigation.navigate('ServiceDetail', { serviceId: service.id })}
          />
        ))}
      </Section>

      <View style={{ paddingHorizontal: spacing.lg, marginTop: spacing.xl }}>
        <Button label="Make Appointment" onPress={() => navigation.navigate('Appointment')} />
      </View>
    </Screen>
  );
}
