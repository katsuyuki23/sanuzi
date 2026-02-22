# Platform Micromodeling Produk Artisan Lokal
### Berbasis Parameterisasi Digital & Dynamic Capacity Pricing

---

## 🔍 Gambaran Umum

Platform ini adalah sistem digital yang mengubah cara produk kerajinan tangan (artisan) dijual secara online. Alih-alih hanya menampilkan foto dan harga tetap, platform ini memungkinkan pembeli **mengkonfigurasi produk secara langsung** (pilih ukuran, material, warna, dll), dan harga akan **otomatis dihitung secara real-time** berdasarkan parameter yang dipilih.

Selain itu, platform ini memiliki sistem manajemen kapasitas produksi — artinya ketika seorang artisan sudah hampir penuh pesanan, harga akan naik otomatis (dynamic pricing), sehingga artisan tidak kelebihan beban kerja dan pembeli mendapat transparansi penuh.

---

## ❗ Masalah yang Diselesaikan

| Masalah | Penjelasan |
|--------|-----------|
| **Harga tidak transparan** | Pembeli tidak tahu kenapa harga segini, artisan pun sering jual rugi |
| **Produk sulit dikustomisasi** | Marketplace biasa hanya foto + deskripsi statis |
| **Artisan overbooked** | Tidak ada sistem yang mengatur kapasitas pesanan |
| **Sulit bersaing global** | Tanpa standar data, produk lokal tidak bisa bersaing di pasar internasional |

**Masalah inti:** Marketplace konvensional memodelkan produk sebagai `(Foto, Deskripsi, Harga)` — padahal produk artisan sesungguhnya adalah fungsi dari banyak variabel produksi.

---

## 🎯 Tujuan Penelitian

### Tujuan Utama
Membangun prototipe platform digital yang menggunakan **parameter engine** untuk meningkatkan efisiensi, transparansi harga, dan nilai jual produk artisan lokal.

### Tujuan Spesifik
1. Merancang model matematis harga berbasis variabel produksi nyata
2. Membangun sistem manajemen kapasitas produksi per artisan
3. Menguji apakah fitur **AR (Augmented Reality) preview** meningkatkan niat beli
4. Mengukur dampak sistem terhadap margin keuntungan artisan

---

## 🏗️ Rancangan Sistem

### Cara Kerja Platform

```
Artisan membuat "template produk"
    ↓
Tentukan parameter: ukuran, material, warna, kompleksitas
    ↓
Sistem hitung harga otomatis berdasarkan rumus
    ↓
Pembeli pilih spesifikasi → lihat 3D preview / AR
    ↓
Harga menyesuaikan kapasitas artisan (jika penuh → harga naik)
    ↓
Order masuk → artisan terima dengan beban kerja terkelola
```

### Model Harga

Harga dihitung dengan rumus:

```
P = B + (M × α) + (L × β) + (C × γ)
```

| Simbol | Arti | Contoh |
|--------|------|--------|
| `B` | Harga dasar | Rp 100.000 |
| `M` | Biaya material | Kayu jati vs kayu pinus |
| `α` | Bobot material | 1.5 untuk material premium |
| `L` | Jam kerja (labor hours) | 5 jam vs 15 jam |
| `β` | Nilai per jam kerja | Rp 25.000/jam |
| `C` | Indeks kompleksitas | Ukiran detail = nilai tinggi |
| `γ` | Bobot kompleksitas | 0.8–2.0 |

### Model Kapasitas + Dynamic Pricing

```
Slot Tersedia = Total Kapasitas - Pesanan Aktif

Jika Slot Tersedia < k (ambang batas):
    Harga Baru = Harga × (1 + δ)
```

> Contoh: Artisan punya kapasitas 10 pesanan/bulan. Sudah ada 8 pesanan. Sistem otomatis naikkan harga 15% untuk 2 slot tersisa.

---

## 🧩 Komponen Teknis

### Frontend
- **React / Next.js** — tampilan web interaktif
- **Three.js** — preview produk 3D di browser
- **WebXR** — fitur AR (lihat produk di ruangan nyata via kamera HP)

### Backend
- **Node.js / Laravel** — server & logika bisnis
- **PostgreSQL** — database produk, pesanan, kapasitas

### Pricing Engine
- **Fase 1:** Rule-based (formula tetap)
- **Fase 2:** Machine Learning regression (belajar dari data historis)

### Entitas Data Utama
```
Artisan
  └── ProductTemplate
        └── ParameterSet (material, dimensi, warna, dll)
  └── ProductionCapacity
        └── TotalCapacity
        └── BookedSlots
        └── AvailableSlots
  └── Order
        └── ComplexityIndex
        └── LeadTimeScore
```

---

## 🔬 Hipotesis Penelitian

| Kode | Hipotesis | Target |
|------|-----------|--------|
| H1 | Platform parametrik meningkatkan margin artisan | ≥ +15% |
| H2 | Fitur AR preview meningkatkan conversion rate | ≥ +20% |
| H3 | Dynamic capacity pricing mengurangi overbooking | ≥ -30% |

---

## 📊 Indikator Keberhasilan

| Indikator | Target |
|-----------|--------|
| Margin keuntungan artisan | +15–25% |
| Conversion rate pembeli | +20% |
| Kasus overbooking | -30% |
| Rata-rata nilai pesanan | +18% |

---

## 🗓️ Roadmap (12 Bulan)

```
Bulan 1–2   → Analisis kebutuhan (wawancara artisan, mapping workflow)
Bulan 3–4   → Desain sistem & model data
Bulan 5–7   → Development MVP (Parameter Engine + Pricing Engine)
Bulan 8–9   → Uji coba terbatas bersama komunitas artisan
Bulan 10    → Evaluasi & pengumpulan data
Bulan 11–12 → Perbaikan & publikasi ilmiah
```

---

## 🌟 Dampak Jangka Panjang

- **Standarisasi digital** produk artisan Indonesia
- **Daya saing global** meningkat karena data produk terstruktur
- **Ekosistem kreatif berbasis data** — bukan sekadar jualan online
- **Model replikasi** ke sektor lain: fashion lokal, furniture, kerajinan logam

---

## 📦 Luaran yang Dihasilkan

1. Prototipe platform fungsional (bisa digunakan langsung)
2. Paper ilmiah tentang model pricing mikro-produksi
3. Dataset parameter produk artisan (dapat digunakan komunitas riset)
4. Potensi Hak Kekayaan Intelektual (HKI)

---

## ⚠️ Risiko & Mitigasi

| Risiko | Solusi |
|--------|--------|
| Artisan gagap teknologi | Program onboarding manual & pendampingan |
| AR terlalu berat di HP lama | Fallback ke preview 3D statis |
| Manipulasi parameter harga | Sistem audit & validasi input |
| Resistensi terhadap perubahan | Mulai dari pilot komunitas kecil dulu |

---

> **Inti dari penelitian ini:** Bukan sekadar membangun marketplace baru, tetapi membangun **infrastruktur digital parametrik** yang mentransformasi kerajinan fisik menjadi entitas data yang bisa dihitung, disimulasikan, dan dioptimasi.
