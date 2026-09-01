import React from 'react';
import { Linking } from 'react-native';
import { VideoGrid } from '../components/Cards';
import { PageHeader } from '../components/PageHeader';
import { Screen } from '../components/Screen';
import { Section } from '../components/Section';
import { videos } from '../data/content';

export function BlogScreen() {
  return (
    <Screen>
      <PageHeader title="Blog & Articles" subtitle="Beauty tips and updates from our specialists." />
      <Section
        eyebrow="Videos"
        title="Watch Our Videos"
        body="See our treatments and transformations in action on Facebook."
      >
        <VideoGrid videos={videos} onPressVideo={(video) => Linking.openURL(video.url)} />
      </Section>
    </Screen>
  );
}
