import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';
import { useFavorites } from '../context/FavoriteContext';
import MenuCard from '../components/MenuCard';

export default function FavoriteScreen({ navigation }) {
  const { favorites } = useFavorites();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.inner}>
        <Text style={styles.title}>Menu Favorit</Text>
        <Text style={styles.subtitle}>
          {favorites.length} menu tersimpan di daftar pilihanmu
        </Text>

        {favorites.length === 0 ? (
          <View style={styles.emptyBox}>
            <Ionicons name="heart-outline" size={56} color={COLORS.accent} />
            <Text style={styles.emptyTitle}>Belum ada favorit</Text>
            <Text style={styles.emptyDesc}>
              Tekan ikon hati pada menu yang kamu suka untuk menyimpannya di sini.
            </Text>
            <TouchableOpacity
              style={styles.exploreBtn}
              onPress={() => navigation.navigate('Explore')}
            >
              <Text style={styles.exploreBtnText}>Jelajahi Menu</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <FlatList
            data={favorites}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <MenuCard
                item={item}
                onPress={() => navigation.navigate('Detail', { item })}
              />
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  inner: { flex: 1, paddingHorizontal: 20, paddingTop: 16 },
  title: { fontSize: 24, fontWeight: '800', color: COLORS.primary },
  subtitle: { fontSize: 13, color: COLORS.textMuted, marginTop: 4, marginBottom: 18 },
  emptyBox: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 24 },
  emptyTitle: { fontSize: 18, fontWeight: '700', color: COLORS.textPrimary, marginTop: 14 },
  emptyDesc: {
    fontSize: 14,
    color: COLORS.textMuted,
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 20,
    lineHeight: 20,
  },
  exploreBtn: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
  },
  exploreBtnText: { color: COLORS.surface, fontWeight: '700', fontSize: 14 },
});
