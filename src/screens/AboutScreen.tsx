import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HighlightCard } from '../components/Cards';
import { Screen } from '../components/Screen';
import { Section } from '../components/Section';
import { colors, spacing, typography } from '../theme/theme';
import { aboutCopy, brand, founder, highlights } from '../data/content';
import type { RootStackParamList } from '../navigation/types';

export function AboutScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const insets = useSafeAreaInsets();

  return (
    <Screen>
      <View style={[styles.header, { paddingTop: insets.top + spacing.md }]}>
        <Pressable onPress={() => navigation.goBack()} style={styles.backButton} hitSlop={12}>
          <Ionicons name="arrow-back" size={20} color={colors.onInk} />
        </Pressable>
        <Text style={styles.headerTitle}>About Us</Text>
      </View>

      <Section
        eyebrow={`Since ${brand.since}`}
        title="A salon, spa, and clinic under one roof"
        body={aboutCopy.mission}
      />
      <Section eyebrow="Our story" title="Our philosophy" body={aboutCopy.intro} />
      <Section title="A pioneer in Kerala" body={aboutCopy.pioneer} />

      <Section eyebrow="Why choose us" title="What sets us apart">
        {highlights.map((item) => (
          <HighlightCard key={item.title} icon={item.icon} title={item.title} body={item.body} />
        ))}
      </Section>

      <View style={styles.founderCard}>
        <Text style={styles.founderTitle}>Our Motive</Text>
        <Text style={styles.founderBody}>{aboutCopy.motive}</Text>
        <Text style={styles.founderName}>{founder.name}</Text>
        <Text style={styles.founderRole}>{founder.title}</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.ink,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    ...typography.h1,
    color: colors.onInk,
  },
  founderCard: {
    marginTop: spacing.xl,
    marginHorizontal: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  founderTitle: {
    ...typography.label,
    color: colors.accentDark,
  },
  founderBody: {
    ...typography.body,
    color: colors.muted,
    marginTop: spacing.sm,
  },
  founderName: {
    ...typography.h2,
    color: colors.ink,
    marginTop: spacing.md,
  },
  founderRole: {
    ...typography.bodySmall,
    color: colors.muted,
  },
});
