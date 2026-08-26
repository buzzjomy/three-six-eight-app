import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { BlogCard } from '../components/Cards';
import { PageHeader } from '../components/PageHeader';
import { Screen } from '../components/Screen';
import { Section } from '../components/Section';
import { blogPosts } from '../data/content';
import type { RootStackParamList } from '../navigation/types';

export function BlogScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Screen>
      <PageHeader title="Blog & Articles" subtitle="Beauty tips and updates from our specialists." />
      <Section title="Latest posts">
        {blogPosts.map((post) => (
          <BlogCard
            key={post.id}
            post={post}
            onPress={() => navigation.navigate('BlogDetail', { postId: post.id })}
          />
        ))}
      </Section>
    </Screen>
  );
}
