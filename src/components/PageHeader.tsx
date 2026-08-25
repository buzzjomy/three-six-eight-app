import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, spacing, typography } from '../theme/theme';
import { BrandMark } from './Brand';

type Props = {
  title: string;
  subtitle?: string;
};

export function PageHeader({ title, subtitle }: Props) {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insets.top + spacing.md }]}>
      <Image
        source={require('../../assets/hero-orchid.png')}
        style={styles.orchid}
        resizeMode="contain"
      />
      <BrandMark dark compact />
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.ink,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    overflow: 'hidden',
  },
  orchid: {
    position: 'absolute',
    right: -30,
    bottom: -30,
    width: 160,
    height: 160,
    opacity: 0.5,
  },
  title: {
    ...typography.display,
    color: colors.onInk,
    marginTop: spacing.lg,
  },
  subtitle: {
    ...typography.body,
    color: '#C7C6D6',
    marginTop: spacing.xs,
  },
});
