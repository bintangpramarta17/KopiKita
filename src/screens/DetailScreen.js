import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';
import { formatRupiah } from '../data/menuData';
import { useFavorites } from '../context/FavoriteContext';

export default function DetailScreen({ route }) {
  const { item } = route.params;
  const { isFavorite, toggleFavorite } = useFavorites();
  const [selectedVariant, setSelectedVariant] = useState(item.variants[0]);
  const favorited = isFavorite(item.id);

  const handleOrder = () => {
    Alert.alert(
      'Pesanan Disiapkan',
      `${item.name} (${selectedVariant}) seharga ${formatRupiah(item.price)} berhasil ditambahkan ke simulasi pesanan.`
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <Image source={item.image} style={styles.heroImage} />

        <View style={styles.body}>
          <View style={styles.topRow}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{item.category}</Text>
            </View>
            <View style={styles.ratingRow}>
              <Ionicons name="star" size={16} color={COLORS.accent} />
              <Text style={styles.ratingText}>{item.rating} / 5.0</Text>
            </View>
          </View>

          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>

          <Text style={styles.sectionLabel}>Pilih Varian</Text>
          <View style={styles.variantRow}>
            {item.variants.map((variant) => {
              const active = selectedVariant === variant;
              return (
                <TouchableOpacity
                  key={variant}
                  style={[styles.variantBtn, active && styles.variantBtnActive]}
                  onPress={() => setSelectedVariant(variant)}
                >
                  <Text style={[styles.variantText, active && styles.variantTextActive]}>
                    {variant}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <Text style={styles.sectionLabel}>Komposisi Utama</Text>
          <View style={styles.ingredientsWrap}>
            {item.ingredients.map((ing) => (
              <View key={ing} style={styles.ingChip}>
                <Text style={styles.ingText}>{ing}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View>
          <Text style={styles.priceLabel}>Harga</Text>
          <Text style={styles.priceValue}>{formatRupiah(item.price)}</Text>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.favBtn}
            onPress={() => toggleFavorite(item)}
          >
            <Ionicons
              name={favorited ? 'heart' : 'heart-outline'}
              size={24}
              color={favorited ? COLORS.danger : COLORS.primary}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.orderBtn} onPress={handleOrder}>
            <Text style={styles.orderBtnText}>Pesan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  scroll: { paddingBottom: 24 },
  heroImage: { width: '100%', height: 260, backgroundColor: COLORS.border },
  body: { padding: 20 },
  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  badge: {
    backgroundColor: '#F3E9DF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: { fontSize: 12, fontWeight: '700', color: COLORS.secondary },
  ratingRow: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  ratingText: { fontSize: 14, fontWeight: '700', color: COLORS.textPrimary },
  title: { fontSize: 24, fontWeight: '800', color: COLORS.primary, marginTop: 10 },
  description: {
    fontSize: 14,
    color: COLORS.textMuted,
    lineHeight: 22,
    marginTop: 8,
    marginBottom: 20,
  },
  sectionLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 10,
  },
  variantRow: { flexDirection: 'row', gap: 12, marginBottom: 22 },
  variantBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.surface,
    alignItems: 'center',
  },
  variantBtnActive: { borderColor: COLORS.secondary, backgroundColor: '#FDF6F0' },
  variantText: { fontSize: 14, fontWeight: '600', color: COLORS.textMuted },
  variantTextActive: { color: COLORS.secondary, fontWeight: '700' },
  ingredientsWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  ingChip: {
    backgroundColor: COLORS.surface,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  ingText: { fontSize: 12, color: COLORS.textPrimary },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  priceLabel: { fontSize: 12, color: COLORS.textMuted },
  priceValue: { fontSize: 20, fontWeight: '800', color: COLORS.primary },
  actions: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  favBtn: {
    width: 48,
    height: 48,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  orderBtn: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 14,
  },
  orderBtnText: { color: COLORS.surface, fontSize: 15, fontWeight: '700' },
});
