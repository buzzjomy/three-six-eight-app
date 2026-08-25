import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing, typography } from '../theme/theme';

type Props = {
  eyebrow?: string;
  title: string;
  body?: string;
  children?: React.ReactNode;
};

export function Section({ eyebrow, title, body, children }: Props) {
  return (
    <View style={styles.container}>
      {eyebrow ? <Text style={styles.eyebrow}>{eyebrow.toUpperCase()}</Text> : null}
      <Text style={styles.title}>{title}</Text>
      {body ? <Text style={styles.body}>{body}</Text> : null}
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
});
