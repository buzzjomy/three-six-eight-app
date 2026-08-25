import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { Button } from '../components/Button';
import { PageHeader } from '../components/PageHeader';
import { Screen } from '../components/Screen';
import { Section } from '../components/Section';
import { colors, radii, spacing, typography } from '../theme/theme';
import { contact } from '../data/content';
import type { RootStackParamList } from '../navigation/types';

function ContactRow({
  icon,
  label,
  value,
  onPress,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: string;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.row, pressed && styles.pressed]}>
      <View style={styles.iconBadge}>
        <Ionicons name={icon} size={20} color={colors.accentDark} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.rowLabel}>{label}</Text>
        <Text style={styles.rowValue}>{value}</Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color={colors.muted} />
    </Pressable>
  );
}

export function ContactScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const call = (phone: string) => Linking.openURL(`tel:${phone.replace(/\s+/g, '')}`);
  const email = () => Linking.openURL(`mailto:${contact.email}`);
  const whatsapp = () =>
    Linking.openURL(`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hi, I would like to know more about your services.')}`);
  const openMaps = () =>
    Linking.openURL(`https://maps.google.com/?q=${encodeURIComponent(contact.mapsQuery)}`);

  return (
    <Screen>
      <PageHeader title="Get In Touch" subtitle="Reach out for queries about treatments and services." />

      <Section title="Contact details">
        <ContactRow
          icon="call-outline"
          label="Phone"
          value={contact.phones.join(' / ')}
          onPress={() => call(contact.phones[0])}
        />
        <ContactRow icon="logo-whatsapp" label="WhatsApp" value={contact.phones[2]} onPress={whatsapp} />
        <ContactRow icon="mail-outline" label="Email" value={contact.email} onPress={email} />
        <ContactRow icon="location-outline" label="Address" value={contact.address} onPress={openMaps} />
      </Section>

      <View style={styles.hoursCard}>
        <Text style={styles.hoursTitle}>Opening Hours</Text>
        {contact.hours.map((h) => (
          <View key={h.days} style={styles.hoursRow}>
            <Text style={styles.hoursDays}>{h.days}</Text>
            <Text style={styles.hoursTime}>{h.time}</Text>
          </View>
        ))}
      </View>

      <View style={{ paddingHorizontal: spacing.lg, marginTop: spacing.xl }}>
        <Button label="Make Appointment" onPress={() => navigation.navigate('Appointment')} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: radii.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginTop: spacing.sm,
  },
  pressed: {
    opacity: 0.8,
  },
  iconBadge: {
    width: 40,
    height: 40,
    borderRadius: radii.sm,
    backgroundColor: '#F1E7D6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowLabel: {
    ...typography.label,
    color: colors.muted,
  },
  rowValue: {
    ...typography.body,
    color: colors.ink,
    marginTop: 2,
  },
  hoursCard: {
    marginTop: spacing.xl,
    marginHorizontal: spacing.lg,
    backgroundColor: colors.ink,
    borderRadius: 20,
    padding: spacing.lg,
  },
  hoursTitle: {
    ...typography.h2,
    color: colors.accent,
  },
  hoursRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.md,
  },
  hoursDays: {
    ...typography.bodySmall,
    color: colors.onInk,
    fontWeight: '600',
  },
  hoursTime: {
    ...typography.bodySmall,
    color: '#C7C6D6',
  },
});
