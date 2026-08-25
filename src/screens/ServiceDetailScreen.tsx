import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from '../components/Button';
import { Screen } from '../components/Screen';
import { colors, radii, spacing, typography } from '../theme/theme';
import { services } from '../data/content';
import type { RootStackParamList } from '../navigation/types';

export function ServiceDetailScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, 'ServiceDetail'>>();
  const insets = useSafeAreaInsets();
  const service = services.find((s) => s.id === route.params.serviceId) ?? services[0];

  return (
    <Screen>
      <View style={[styles.header, { paddingTop: insets.top + spacing.md }]}>
        <Pressable onPress={() => navigation.goBack()} style={styles.backButton} hitSlop={12}>
          <Ionicons name="arrow-back" size={20} color={colors.onInk} />
        </Pressable>
        <View style={styles.iconBadge}>
          <Ionicons name={service.icon} size={26} color={colors.accent} />
        </View>
        <Text style={styles.title}>{service.name}</Text>
        <Text style={styles.summary}>{service.summary}</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.description}>{service.description}</Text>
        <Button
          label="Make Appointment"
          onPress={() => navigation.navigate('Appointment')}
          style={{ marginTop: spacing.xl }}
        />
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
  iconBadge: {
    width: 52,
    height: 52,
    borderRadius: radii.md,
    backgroundColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...typography.display,
    color: colors.onInk,
    marginTop: spacing.md,
  },
  summary: {
    ...typography.body,
    color: '#C7C6D6',
    marginTop: spacing.xs,
  },
  body: {
    padding: spacing.lg,
  },
  description: {
    ...typography.body,
    color: colors.inkSoft,
  },
});
