import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/theme';
import { brand } from '../data/content';

export function BrandMark({ dark = false, compact = false }: { dark?: boolean; compact?: boolean }) {
  const textColor = dark ? colors.onInk : colors.ink;
  return (
    <View style={styles.row}>
      <Image source={require('../../assets/logo-368.png')} style={styles.badge} resizeMode="contain" />
      {!compact && (
        <View>
          <Text style={[styles.name, { color: textColor }]}>{brand.name.toUpperCase()}</Text>
          <Text style={[styles.tagline, { color: dark ? colors.accent : colors.muted }]}>
            {brand.tagline}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  badge: {
    height: 48,
    aspectRatio: 480 / 651,
  },
  name: {
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 1,
  },
  tagline: {
    fontSize: 11,
    fontWeight: '500',
    letterSpacing: 0.4,
  },
});
