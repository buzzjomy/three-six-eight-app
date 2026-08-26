import React from 'react';
import { ScrollView, StyleSheet, useWindowDimensions, View, ViewStyle } from 'react-native';
import { colors } from '../theme/theme';

const DESKTOP_BREAKPOINT = 768;
const DESKTOP_MAX_WIDTH = 640;

type Props = {
  children: React.ReactNode;
  scroll?: boolean;
  style?: ViewStyle;
};

export function Screen({ children, scroll = true, style }: Props) {
  const { width } = useWindowDimensions();
  const isDesktop = width >= DESKTOP_BREAKPOINT;
  const inner = (
    <View style={isDesktop && styles.innerDesktop}>{children}</View>
  );

  if (!scroll) {
    return (
      <View style={[styles.container, style]}>{inner}</View>
    );
  }
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {inner}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingBottom: 48,
  },
  innerDesktop: {
    width: '100%',
    maxWidth: DESKTOP_MAX_WIDTH,
    alignSelf: 'center',
  },
});
