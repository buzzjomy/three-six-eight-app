import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  Alert,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from '../components/Button';
import { Screen } from '../components/Screen';
import { colors, radii, spacing, typography } from '../theme/theme';
import { contact, services } from '../data/content';
import type { RootStackParamList } from '../navigation/types';

export function AppointmentScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const insets = useSafeAreaInsets();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceId, setServiceId] = useState(services[0].id);
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');

  const selectedService = services.find((s) => s.id === serviceId)!;

  const canSubmit = name.trim().length > 0 && phone.trim().length > 0;

  const buildMessage = () =>
    [
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : null,
      `Service: ${selectedService.name}`,
      preferredDate ? `Preferred date/time: ${preferredDate}` : null,
      notes ? `Notes: ${notes}` : null,
    ]
      .filter(Boolean)
      .join('\n');

  const submitByEmail = async () => {
    if (!canSubmit) {
      Alert.alert('Missing details', 'Please add your name and phone number first.');
      return;
    }
    const subject = encodeURIComponent('Appointment Request');
    const body = encodeURIComponent(buildMessage());
    const url = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      Linking.openURL(url);
    } else {
      Alert.alert('No email app found', 'Please call or WhatsApp us instead.');
    }
  };

  const submitByWhatsapp = () => {
    if (!canSubmit) {
      Alert.alert('Missing details', 'Please add your name and phone number first.');
      return;
    }
    const text = encodeURIComponent(`Appointment request:\n${buildMessage()}`);
    Linking.openURL(`https://wa.me/${contact.whatsapp}?text=${text}`);
  };

  const callToBook = () => {
    Linking.openURL(`tel:${contact.phones[0].replace(/\s+/g, '')}`);
  };

  return (
    <Screen>
      <View style={[styles.header, { paddingTop: insets.top + spacing.md }]}>
        <Pressable onPress={() => navigation.goBack()} style={styles.backButton} hitSlop={12}>
          <Ionicons name="arrow-back" size={20} color={colors.onInk} />
        </Pressable>
        <Text style={styles.headerTitle}>Make an Appointment</Text>
        <Text style={styles.headerSubtitle}>
          Tell us a bit about yourself and we will confirm your slot.
        </Text>
      </View>

      <View style={styles.form}>
        <Field label="Full name" value={name} onChangeText={setName} placeholder="Your name" />
        <Field
          label="Phone number"
          value={phone}
          onChangeText={setPhone}
          placeholder="e.g. 98765 43210"
          keyboardType="phone-pad"
        />
        <Field
          label="Email (optional)"
          value={email}
          onChangeText={setEmail}
          placeholder="you@example.com"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Service</Text>
        <View style={styles.chipRow}>
          {services.map((service) => (
            <Pressable
              key={service.id}
              onPress={() => setServiceId(service.id)}
              style={[styles.chip, serviceId === service.id && styles.chipActive]}
            >
              <Text
                style={[styles.chipText, serviceId === service.id && styles.chipTextActive]}
              >
                {service.name}
              </Text>
            </Pressable>
          ))}
        </View>

        <Field
          label="Preferred date & time (optional)"
          value={preferredDate}
          onChangeText={setPreferredDate}
          placeholder="e.g. 12 Sep, 4:00 PM"
        />
        <Field
          label="Notes (optional)"
          value={notes}
          onChangeText={setNotes}
          placeholder="Anything we should know?"
          multiline
        />

        <Button label="Send via Email" onPress={submitByEmail} style={{ marginTop: spacing.lg }} />
        <Button
          label="Send via WhatsApp"
          variant="outline"
          onPress={submitByWhatsapp}
          style={{ marginTop: spacing.sm }}
        />
        <Button
          label="Call to Book"
          variant="outline"
          onPress={callToBook}
          style={{ marginTop: spacing.sm }}
        />

        <Text style={styles.disclaimer}>
          Sending a request opens your email or WhatsApp app with the details pre-filled, or
          starts a call. This does not automatically confirm your appointment — we will get back
          to you to confirm the slot.
        </Text>
      </View>
    </Screen>
  );
}

function Field({
  label,
  multiline,
  ...props
}: React.ComponentProps<typeof TextInput> & { label: string }) {
  return (
    <View style={styles.fieldWrap}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...props}
        multiline={multiline}
        style={[styles.input, multiline && styles.inputMultiline]}
        placeholderTextColor={colors.muted}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.ink,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },
  headerTitle: {
    ...typography.h1,
    color: colors.onInk,
  },
  headerSubtitle: {
    ...typography.body,
    color: '#E3B0C4',
    marginTop: spacing.xs,
  },
  form: {
    padding: spacing.lg,
  },
  fieldWrap: {
    marginBottom: spacing.md,
  },
  label: {
    ...typography.label,
    color: colors.muted,
    marginBottom: spacing.xs,
  },
  input: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.sm,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm + 2,
    color: colors.ink,
    fontSize: 15,
  },
  inputMultiline: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  chip: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radii.pill,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  chipActive: {
    backgroundColor: colors.ink,
    borderColor: colors.ink,
  },
  chipText: {
    ...typography.bodySmall,
    color: colors.ink,
  },
  chipTextActive: {
    color: colors.accent,
    fontWeight: '600',
  },
  disclaimer: {
    ...typography.bodySmall,
    color: colors.muted,
    marginTop: spacing.lg,
  },
});
