import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, radii, spacing, typography } from '../theme/theme';
import type { BlogPost, Service, VideoLink } from '../data/content';

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
      <Image source={service.image} style={styles.serviceThumb} resizeMode="cover" />
      <View style={styles.serviceTextWrap}>
        <Text style={styles.serviceTitle}>{service.name}</Text>
        <Text style={styles.serviceSummary}>{service.summary}</Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color={colors.muted} />
    </Pressable>
  );
}

export function BlogCard({ post, onPress }: { post: BlogPost; onPress?: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.blogCard, pressed && styles.pressed]}
    >
      <Image source={post.image} style={styles.blogThumb} resizeMode="cover" />
      <View style={styles.blogTextWrap}>
        <Text style={styles.blogTitle}>{post.title}</Text>
        <Text style={styles.blogExcerpt}>{post.excerpt}</Text>
        <Text style={styles.blogMeta}>{post.readTime}</Text>
      </View>
    </Pressable>
  );
}

export function VideoLinkCard({ video, onPress }: { video: VideoLink; onPress?: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.videoCard, pressed && styles.pressed]}
    >
      <View style={styles.videoThumbWrap}>
        <Image source={video.thumbnail} style={styles.videoThumb} resizeMode="cover" />
        <View style={styles.playOverlay}>
          <Ionicons name="play" size={16} color="#FFFFFF" />
        </View>
      </View>
      <Text style={styles.videoLabel}>{video.label}</Text>
      <Ionicons name="logo-facebook" size={18} color={colors.muted} />
    </Pressable>
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
    flexBasis: '31%',
    flexGrow: 1,
    backgroundColor: colors.surface,
    borderRadius: radii.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  statValue: {
    ...typography.h2,
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
    backgroundColor: '#F6DCE6',
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
  serviceThumb: {
    width: 56,
    height: 56,
    borderRadius: radii.md,
    backgroundColor: colors.border,
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
    flexDirection: 'row',
    gap: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: radii.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginTop: spacing.sm,
  },
  blogThumb: {
    width: 72,
    height: 72,
    borderRadius: radii.md,
    backgroundColor: colors.border,
  },
  blogTextWrap: {
    flex: 1,
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
  videoCard: {
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
  videoLabel: {
    ...typography.h2,
    color: colors.ink,
    flex: 1,
  },
  videoThumbWrap: {
    width: 56,
    height: 56,
    borderRadius: radii.md,
    overflow: 'hidden',
    backgroundColor: colors.border,
  },
  videoThumb: {
    width: '100%',
    height: '100%',
  },
  playOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.28)',
  },
});
