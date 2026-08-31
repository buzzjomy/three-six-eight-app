import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from '../components/Button';
import { HighlightCard, StatGrid } from '../components/Cards';
import { PageHeader } from '../components/PageHeader';
import { Screen } from '../components/Screen';
import { Section } from '../components/Section';
import { colors, spacing, typography } from '../theme/theme';
import { aboutCopy, brand, contact, founder, highlights, services, stats } from '../data/content';
import type { RootStackParamList, TabParamList } from '../navigation/types';

type Nav = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'Home'>,
  NativeStackNavigationProp<RootStackParamList>
>;

export function HomeScreen() {
  const navigation = useNavigation<Nav>();
  const insets = useSafeAreaInsets();

  return (
    <Screen>
      <PageHeader
        title={`Thousands of clients trust ${brand.name}.`}
        subtitle={`Beauty & wellness, since ${brand.since}.`}
      />

      <View style={styles.ctaRow}>
        <Button
          label="Make Appointment"
          onPress={() => navigation.navigate('Appointment')}
          style={styles.flexButton}
        />
        <Button
          label="View Services"
          variant="outline"
          onPress={() => navigation.navigate('Services')}
          style={styles.heroOutlineButton}
        />
      </View>

      <Section
        eyebrow="Who we are"
        title={`We Provide The Best Beauty Services Since ${brand.since}`}
        body={aboutCopy.mission}
      >
        <Button
          label="More About Us"
          variant="outline"
          onPress={() => navigation.navigate('About')}
          style={styles.aboutButton}
        />
      </Section>

      <Section eyebrow="Why choose us" title="What sets us apart">
        {highlights.map((item) => (
          <HighlightCard key={item.title} icon={item.icon} title={item.title} body={item.body} />
        ))}
      </Section>

      <View style={styles.founderCard}>
        <Text style={styles.founderQuote}>
          “{aboutCopy.intro.split('. ').slice(0, 2).join('. ')}.”
        </Text>
        <Text style={styles.founderName}>{founder.name}</Text>
        <Text style={styles.founderTitle}>{founder.title}</Text>
      </View>

      <Section eyebrow="By the numbers" title="Trusted by the community">
        <StatGrid stats={stats} />
      </Section>

      <Section
        eyebrow="Services"
        title="What Service We Offer"
        body="A full range of services in hair care, skin care, nail care, and make-up."
      >
        <Button
          label="View All Services"
          variant="outline"
          onPress={() => navigation.navigate('Services')}
          style={styles.aboutButton}
        />
      </Section>

      <View style={styles.appointmentCard}>
        <Text style={styles.appointmentTitle}>Make An Appointment</Text>
        <Text style={styles.appointmentBody}>
          Schedule an appointment with our specialists to get the right solution for your
          concerns.
        </Text>
        {contact.hours.map((h) => (
          <View key={h.days} style={styles.hoursRow}>
            <Text style={styles.hoursDays}>{h.days}</Text>
            <Text style={styles.hoursTime}>{h.time}</Text>
          </View>
        ))}
        <Button
          label="Make Appointment"
          onPress={() => navigation.navigate('Appointment')}
          style={{ marginTop: spacing.md }}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  ctaRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
    marginTop: -spacing.lg,
  },
  flexButton: {
    flex: 1,
  },
  heroOutlineButton: {
    flex: 1,
    backgroundColor: colors.surface,
    borderColor: colors.surface,
  },
  aboutButton: {
    marginTop: spacing.md,
    alignSelf: 'flex-start',
  },
  founderCard: {
    marginTop: spacing.xl,
    marginHorizontal: spacing.lg,
    backgroundColor: colors.ink,
    borderRadius: 20,
    padding: spacing.lg,
  },
  founderQuote: {
    ...typography.body,
    color: colors.onInk,
    fontStyle: 'italic',
  },
  founderName: {
    ...typography.h2,
    color: colors.accent,
    marginTop: spacing.md,
  },
  founderTitle: {
    ...typography.bodySmall,
    color: '#E3B0C4',
  },
  appointmentCard: {
    marginTop: spacing.xl,
    marginHorizontal: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  appointmentTitle: {
    ...typography.h1,
    color: colors.ink,
  },
  appointmentBody: {
    ...typography.body,
    color: colors.muted,
    marginTop: spacing.xs,
  },
  hoursRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.md,
  },
  hoursDays: {
    ...typography.bodySmall,
    color: colors.ink,
    fontWeight: '600',
  },
  hoursTime: {
    ...typography.bodySmall,
    color: colors.muted,
  },
});
