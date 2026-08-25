import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, radii, spacing, typography } from '../theme/theme';
import type { BlogPost, Service } from '../data/content';

export function StatGrid({ stats }: { stats: { label: string; value: string }[] }) {
  return (
    <View style={styles.statGrid}>
      {stats.map((stat) => (
        <View key={stat.label} style={styles.statBox}>
          <Text style={styles.statValue}>{stat.value}</Text>
          <Text style={styles.statLabel}>{stat.label}</Text>
        </View>
      ))}
    </View>
  );
}

export function HighlightCard({
  icon,
  title,
  body,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  body: string;
}) {
  return (
    <View style={styles.highlightCard}>
      <View style={styles.iconBadge}>
        <Ionicons name={icon} size={20} color={colors.accentDark} />
      </View>
      <Text style={styles.highlightTitle}>{title}</Text>
      <Text style={styles.highlightBody}>{body}</Text>
    </View>
  );
}

export function ServiceCard({ service, onPress }: { service: Service; onPress?: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.serviceCard, pressed && styles.pressed]}
    >
      <View style={styles.iconBadge}>
        <Ionicons name={service.icon} size={22} color={colors.accentDark} />
      </View>
      <View style={styles.serviceTextWrap}>
        <Text style={styles.serviceTitle}>{service.name}</Text>
        <Text style={styles.serviceSummary}>{service.summary}</Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color={colors.muted} />
    </Pressable>
  );
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <View style={styles.blogCard}>
      <Text style={styles.blogTitle}>{post.title}</Text>
      <Text style={styles.blogExcerpt}>{post.excerpt}</Text>
      <Text style={styles.blogMeta}>{post.readTime}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  statGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginTop: spacing.md,
  },
  statBox: {
    flexBasis: '47%',
    flexGrow: 1,
    backgroundColor: colors.surface,
    borderRadius: radii.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  statValue: {
    ...typography.h1,
    color: colors.ink,
  },
  statLabel: {
    ...typography.bodySmall,
    color: colors.muted,
    marginTop: 2,
  },
  iconBadge: {
    width: 40,
    height: 40,
    borderRadius: radii.sm,
    backgroundColor: '#F1E7D6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  highlightCard: {
    backgroundColor: colors.surface,
    borderRadius: radii.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginTop: spacing.md,
  },
  highlightTitle: {
    ...typography.h2,
    color: colors.ink,
    marginTop: spacing.sm,
  },
  highlightBody: {
    ...typography.bodySmall,
    color: colors.muted,
    marginTop: spacing.xs,
  },
  serviceCard: {
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
  serviceTextWrap: {
    flex: 1,
  },
  serviceTitle: {
    ...typography.h2,
    color: colors.ink,
  },
  serviceSummary: {
    ...typography.bodySmall,
    color: colors.muted,
    marginTop: 2,
  },
  blogCard: {
    backgroundColor: colors.surface,
    borderRadius: radii.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginTop: spacing.sm,
  },
  blogTitle: {
    ...typography.h2,
    color: colors.ink,
  },
  blogExcerpt: {
    ...typography.bodySmall,
    color: colors.muted,
    marginTop: spacing.xs,
  },
  blogMeta: {
    ...typography.label,
    color: colors.accentDark,
    marginTop: spacing.sm,
  },
});
