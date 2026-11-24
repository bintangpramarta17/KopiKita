import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';
import { useFavorites } from '../context/FavoriteContext';
import { MENU_DATA } from '../data/menuData';

export default function ProfileScreen() {
  const { favorites } = useFavorites();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.headerTitle}>Profil & Informasi</Text>

        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={36} color={COLORS.surface} />
          </View>
          <Text style={styles.name}>[cecep gimang ]</Text>
          <Text style={styles.status}>Status: [Mahasiswa]</Text>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{MENU_DATA.length}</Text>
            <Text style={styles.statLabel}>Total Menu</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{favorites.length}</Text>
            <Text style={styles.statLabel}>Favorit Saya</Text>
          </View>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Tentang Aplikasi</Text>
          <Text style={styles.infoText}>
            KopiKita adalah prototipe aplikasi katalog kedai kopi yang dibangun menggunakan
            React Native (Expo) untuk UTS Mata Kuliah Aplikasi Berbasis Platform.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Legalitas & Sumber Aset</Text>
          <Text style={styles.infoText}>• Ikon: @expo/vector-icons (Ionicons — Open Source MIT)</Text>
          <Text style={styles.infoText}>• Referensi Foto: Unsplash (Bebas Lisensi Komersial & Edukasi)</Text>
          <Text style={styles.infoText}>• Framework: React Native Expo + React Navigation</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  scroll: { padding: 20 },
  headerTitle: { fontSize: 24, fontWeight: '800', color: COLORS.primary, marginBottom: 18 },
  profileCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 18,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 16,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  name: { fontSize: 18, fontWeight: '700', color: COLORS.textPrimary },
  nim: { fontSize: 13, color: COLORS.textMuted, marginTop: 4 },
  statsRow: { flexDirection: 'row', gap: 12, marginBottom: 16 },
  statBox: {
    flex: 1,
    backgroundColor: COLORS.surface,
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  statNumber: { fontSize: 22, fontWeight: '800', color: COLORS.primary },
  statLabel: { fontSize: 12, color: COLORS.textMuted, marginTop: 4 },
  infoCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 14,
  },
  infoTitle: { fontSize: 15, fontWeight: '700', color: COLORS.primary, marginBottom: 6 },
  infoText: { fontSize: 13, color: COLORS.textMuted, lineHeight: 20 },
});