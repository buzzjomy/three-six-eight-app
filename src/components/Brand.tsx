import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/theme';
import { brand } from '../data/content';

export function BrandMark({ dark = false, compact = false }: { dark?: boolean; compact?: boolean }) {
  const textColor = dark ? colors.onInk : colors.ink;
  return (
    <View style={styles.row}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{brand.shortName}</Text>
      </View>
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
    gap: 10,
  },
  badge: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: colors.ink,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: colors.accent,
    fontWeight: '700',
    fontSize: 14,
    letterSpacing: 0.5,
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
