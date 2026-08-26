import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Screen } from '../components/Screen';
import { colors, radii, spacing, typography } from '../theme/theme';
import { blogPosts } from '../data/content';
import type { RootStackParamList } from '../navigation/types';

export function BlogDetailScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, 'BlogDetail'>>();
  const insets = useSafeAreaInsets();
  const post = blogPosts.find((p) => p.id === route.params.postId) ?? blogPosts[0];

  return (
    <Screen>
      <View style={[styles.header, { paddingTop: insets.top + spacing.md }]}>
        <Pressable onPress={() => navigation.goBack()} style={styles.backButton} hitSlop={12}>
          <Ionicons name="arrow-back" size={20} color={colors.onInk} />
        </Pressable>
        <Text style={styles.readTime}>{post.readTime}</Text>
        <Text style={styles.title}>{post.title}</Text>
      </View>

      <View style={styles.body}>
        <Image source={post.image} style={styles.photo} resizeMode="cover" />
        {post.body.split('\n\n').map((paragraph, index) => (
          <Text key={index} style={styles.paragraph}>
            {paragraph}
          </Text>
        ))}
      </View>
    </Screen>
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
  readTime: {
    ...typography.label,
    color: colors.accent,
    marginTop: spacing.md,
  },
  title: {
    ...typography.display,
    color: colors.onInk,
    marginTop: spacing.xs,
  },
  body: {
    padding: spacing.lg,
  },
  photo: {
    width: '100%',
    aspectRatio: 4 / 3,
    borderRadius: radii.lg,
    marginBottom: spacing.lg,
    backgroundColor: colors.border,
  },
  paragraph: {
    ...typography.body,
    color: colors.inkSoft,
    marginBottom: spacing.md,
  },
});
