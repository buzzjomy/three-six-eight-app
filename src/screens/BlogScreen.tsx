import React from 'react';
import { BlogCard } from '../components/Cards';
import { PageHeader } from '../components/PageHeader';
import { Screen } from '../components/Screen';
import { Section } from '../components/Section';
import { blogPosts } from '../data/content';

export function BlogScreen() {
  return (
    <Screen>
      <PageHeader title="Blog & Articles" subtitle="Beauty tips and updates from our specialists." />
      <Section title="Latest posts">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </Section>
    </Screen>
  );
}
