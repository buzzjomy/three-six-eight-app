import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { colors, spacing, typography } from '../theme/theme';

const DESKTOP_BREAKPOINT = 768;

type Props = {
  eyebrow?: string;
  title: string;
  body?: string;
  children?: React.ReactNode;
};

export function Section({ eyebrow, title, body, children }: Props) {
  const { width } = useWindowDimensions();
  const isDesktop = width >= DESKTOP_BREAKPOINT;

  return (
    <View style={styles.container}>
      {eyebrow ? (
        <Text style={[styles.eyebrow, isDesktop && styles.textCenter]}>
          {eyebrow.toUpperCase()}
        </Text>
      ) : null}
      <Text style={[styles.title, isDesktop && styles.textCenter]}>{title}</Text>
      {body ? <Text style={[styles.body, isDesktop && styles.textCenter]}>{body}</Text> : null}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    marginTop: spacing.xl,
  },
  eyebrow: {
    ...typography.label,
    color: colors.accentDark,
    marginBottom: spacing.xs,
  },
  title: {
    ...typography.h1,
    color: colors.ink,
  },
  body: {
    ...typography.body,
    color: colors.muted,
    marginTop: spacing.sm,
  },
  textCenter: {
    textAlign: 'center',
  },
});
