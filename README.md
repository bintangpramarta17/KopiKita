# ☕ KopiKita

**KopiKita** adalah prototipe aplikasi katalog kedai kopi berbasis mobile yang dibangun menggunakan **React Native (Expo)**. Aplikasi ini dibuat sebagai tugas UTS Mata Kuliah *Aplikasi Berbasis Platform*.

Pengguna dapat menjelajahi menu kopi, non-kopi, dan pastry, mencari menu berdasarkan nama, memfilter berdasarkan kategori, melihat detail menu, serta menyimpan menu favorit.

---

## ✨ Fitur Utama

- **Beranda** – sapaan, banner menu spesial, kategori cepat, dan rekomendasi menu populer.
- **Katalog (Explore)** – pencarian menu secara real-time dan filter kategori (Semua, Coffee, Non-Coffee, Pastry).
- **Detail Menu** – gambar, rating, deskripsi, pilihan varian (mis. Ice/Hot), komposisi utama, dan tombol pesan (simulasi).
- **Favorit** – simpan dan hapus menu favorit dengan ikon hati; daftar favorit tampil di tab khusus.
- **Profil** – informasi pengguna, statistik (total menu & jumlah favorit), tentang aplikasi, dan sumber aset.

## 🧰 Teknologi

| Teknologi | Kegunaan |
| --- | --- |
| [React Native](https://reactnative.dev/) `0.88.1` | Framework aplikasi mobile |
| [Expo](https://expo.dev/) `~58` | Toolchain dan runtime pengembangan |
| [React](https://react.dev/) `19.3.0` | Library UI |
| [React Navigation](https://reactnavigation.org/) (Native Stack + Bottom Tabs) | Navigasi antar layar |
| `@expo/vector-icons` (Ionicons) | Ikon antarmuka |
| `react-native-safe-area-context` & `react-native-screens` | Penanganan safe area dan performa layar |
| React Context API | Manajemen state favorit |

## 📁 Struktur Proyek

```
kopikita-app/
├── App.js                      # Entry komponen utama (Provider + Navigation)
├── index.js                    # Registrasi root component Expo
├── app.json                    # Konfigurasi Expo
├── package.json
├── assets/                     # Foto menu (Capuchino, Croissant, IceLatte, MatchaLatte)
└── src/
    ├── components/
    │   └── MenuCard.js         # Kartu menu yang dipakai ulang di beberapa layar
    ├── constants/
    │   └── colors.js           # Palet warna aplikasi
    ├── context/
    │   └── FavoriteContext.js  # State & fungsi toggle favorit
    ├── data/
    │   └── menuData.js         # Data menu, kategori, dan helper formatRupiah
    ├── navigation/
    │   └── AppNavigator.js     # Stack navigator + Bottom Tab navigator
    └── screens/
        ├── HomeScreen.js
        ├── ExploreScreen.js
        ├── FavoriteScreen.js
        ├── ProfileScreen.js
        └── DetailScreen.js
```

## 🍽️ Data Menu

| Menu | Kategori | Harga | Rating |
| --- | --- | --- | --- |
| Iced Latte | Coffee | Rp 28.000 | 4.8 |
| Cappuccino | Coffee | Rp 25.000 | 4.7 |
| Matcha Latte | Non-Coffee | Rp 30.000 | 4.9 |
| Croissant | Pastry | Rp 24.000 | 4.8 |

Data menu disimpan secara lokal di `src/data/menuData.js`, sehingga untuk menambah menu cukup menambahkan objek baru pada array `MENU_DATA` beserta gambarnya di folder `assets/`.

## 🚀 Cara Menjalankan

### Prasyarat

- [Node.js](https://nodejs.org/) (disarankan versi LTS terbaru)
- npm
- Aplikasi **Expo Go** di perangkat Android/iOS, *atau* emulator Android/iOS

### Instalasi

```bash
# 1. Clone repositori
git clone <url-repositori-anda>
cd kopikita-app

# 2. Install dependensi
npm install

# 3. Jalankan development server
npm start
```

Setelah server berjalan, pindai QR code yang muncul menggunakan Expo Go, atau gunakan perintah berikut:

```bash
npm run android   # Jalankan di emulator/perangkat Android
npm run ios       # Jalankan di simulator iOS (macOS)
npm run web       # Jalankan di browser
```

## 🧭 Alur Navigasi

```
Stack Navigator
├── MainTabs (Bottom Tab Navigator)
│   ├── Home      → Beranda
│   ├── Explore   → Katalog
│   ├── Favorit   → Menu Favorit
│   └── Profil    → Profil & Informasi
└── Detail        → Detail Menu
```

## 🎨 Palet Warna

Palet warna KopiKita mengambil nuansa kopi dan susu agar tampilan terasa hangat dan nyaman dilihat. Seluruh warna didefinisikan pada satu berkas (`src/constants/colors.js`) sehingga penggunaannya konsisten di semua halaman.

| Peran | Nama Warna | Hex | RGB | Penggunaan |
| --- | --- | --- | --- | --- |
| Primary | Espresso Brown | `#4A2C2A` | 74, 44, 42 | Banner, tombol Pesan, ikon tab aktif, judul |
| Secondary | Caramel Latte | `#C67C4E` | 198, 124, 78 | Tombol "Lihat Katalog", chip kategori aktif, avatar profil |
| Background | Warm Cream | `#F9F5F0` | 249, 245, 240 | Latar seluruh halaman |
| Text | Dark Roast | `#241C18` | 36, 28, 24 | Teks utama dan judul menu |
| Accent | Warm Gold | `#D4A373` | 212, 163, 115 | Ikon bintang rating dan elemen penekanan |
| Pendukung | Pure White | `#FFFFFF` | 255, 255, 255 | Latar kartu menu |
| Pendukung | Muted Brown | `#7A6F69` | 122, 111, 105 | Teks deskripsi dan keterangan |
| Pendukung | Soft Border | `#EAE0D5` | 234, 224, 213 | Garis tepi kartu dan chip |
| Pendukung | Heart Red | `#D9534F` | 217, 83, 79 | Ikon favorit yang aktif |

## ⚠️ Catatan

- Fitur **Pesan** hanya berupa simulasi (menampilkan `Alert`), belum terhubung ke backend.
- Daftar favorit disimpan di memori (state), sehingga akan **reset** setiap aplikasi ditutup.
- `app.json` merujuk ke file ikon (`icon.png`, `favicon.png`, `android-icon-*.png`) yang perlu ditambahkan ke folder `assets/` agar build produksi berjalan dengan baik.

## 📜 Legalitas & Sumber Aset

- Ikon: [`@expo/vector-icons`](https://icons.expo.fyi/) (Ionicons — Open Source MIT)
- Referensi foto: [Unsplash](https://unsplash.com/) (bebas lisensi komersial & edukasi)
- Framework: React Native Expo + React Navigation

## 👤 Pengembang

- **Nama:** *(isi nama Anda)*
- **Status:** Mahasiswa
- **Mata Kuliah:** Aplikasi Berbasis Platform

## 📄 Lisensi

Proyek ini menggunakan lisensi **MIT**. Lihat berkas [LICENSE](./LICENSE) untuk detail.
