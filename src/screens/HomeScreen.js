import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';
import { MENU_DATA, CATEGORIES } from '../data/menuData';
import MenuCard from '../components/MenuCard';

export default function HomeScreen({ navigation }) {
  const featuredMenus = MENU_DATA.slice(0, 3);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Selamat Datang di</Text>
            <Text style={styles.brand}>KopiKita</Text>
          </View>
          <TouchableOpacity
            style={styles.searchBtn}
            onPress={() => navigation.navigate('Explore')}
          >
            <Ionicons name="search" size={20} color={COLORS.primary} />
          </TouchableOpacity>
        </View>

        <View style={styles.banner}>
          <View style={styles.bannerTextWrap}>
            <Text style={styles.bannerTag}>MENU SPESIAL</Text>
            <Text style={styles.bannerTitle}>Nikmati Seduhan Hangat Hari Ini</Text>
            <TouchableOpacity
              style={styles.bannerBtn}
              onPress={() => navigation.navigate('Explore')}
            >
              <Text style={styles.bannerBtnText}>Lihat Katalog</Text>
            </TouchableOpacity>
          </View>
          <Ionicons name="cafe" size={64} color={COLORS.accent} />
        </View>

        <Text style={styles.sectionTitle}>Kategori Cepat</Text>
        <View style={styles.categoryRow}>
          {CATEGORIES.filter((c) => c !== 'Semua').map((cat) => (
            <TouchableOpacity
              key={cat}
              style={styles.catChip}
              onPress={() => navigation.navigate('Explore', { selectedCategory: cat })}
            >
              <Text style={styles.catChipText}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Rekomendasi Populer</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Explore')}>
            <Text style={styles.seeAll}>Semua</Text>
          </TouchableOpacity>
        </View>

        {featuredMenus.map((item) => (
          <MenuCard
            key={item.id}
            item={item}
            onPress={() => navigation.navigate('Detail', { item })}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  scroll: { padding: 20 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: { fontSize: 14, color: COLORS.textMuted },
  brand: { fontSize: 26, fontWeight: '800', color: COLORS.primary },
  searchBtn: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: COLORS.surface,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  banner: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  bannerTextWrap: { flex: 1, paddingRight: 12 },
  bannerTag: { fontSize: 11, fontWeight: '700', color: COLORS.accent, letterSpacing: 1 },
  bannerTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: COLORS.surface,
    marginTop: 6,
    marginBottom: 14,
  },
  bannerBtn: {
    alignSelf: 'flex-start',
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
  },
  bannerBtnText: { color: COLORS.surface, fontWeight: '700', fontSize: 13 },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 12,
  },
  seeAll: { fontSize: 13, fontWeight: '600', color: COLORS.secondary, marginBottom: 12 },
  categoryRow: { flexDirection: 'row', gap: 10, marginBottom: 24 },
  catChip: {
    flex: 1,
    backgroundColor: COLORS.surface,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  catChipText: { fontSize: 13, fontWeight: '600', color: COLORS.primary },
});
