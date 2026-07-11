# Kembar Futagroup

Website company profile Kembar Futagroup berbasis Nuxt 4 dan Nuxt UI.

## Struktur Proyek

```
app/
├── pages/            Rute halaman (file-based routing), path Indonesia di-mapping lewat nuxt.config.ts
├── components/
│   ├── brand/         Logo & elemen identitas brand
│   ├── cards/          Kartu ringkasan (unit bisnis, produk, berita)
│   ├── layout/          Header, footer, CTA section
│   ├── navigation/       Mega menu, back link, breadcrumb
│   ├── sections/          Blok halaman yang dipakai ulang (page hero, section header, dst)
│   └── ui/                 Primitif UI (button, badge, reveal text)
├── data/              Konten situs (unit bisnis, produk, karir, berita, navigasi) — sumber tunggal, dipakai halaman & sitemap
├── composables/       Vue composables (state/logic yang dipakai ulang antar komponen)
├── plugins/            Plugin Nuxt (Lenis smooth scroll, section reveal animation)
├── utils/               Fungsi utilitas murni (format tanggal, dst)
├── assets/css/          Stylesheet global (Tailwind entry point)
└── app.vue             Root app: SEO default, schema.org, page transition

public/
├── favicon.ico        Tetap di root (konvensi browser/crawler)
└── images/
    ├── brand/            Logo & og-image (aset identitas brand)
    ├── hero/              Gambar banner halaman (page hero)
    ├── expertise/          Ikon/gambar bidang keahlian di beranda
    └── misc/               Foto & ilustrasi konten lainnya
```

## Setup

Install dependencies:

```bash
npm install
```

Jalankan development server:

```bash
npm run dev
```

Build production:

```bash
npm run build
```

Validasi kode:

```bash
npm run lint
npm run typecheck
```

## Deploy ke Vercel

Import repository ini di Vercel:

- Framework Preset: `Nuxt.js`
- Install Command: `npm ci`
- Build Command: `npm run build`
- Root Directory: kosongkan, gunakan root repository
- Output Directory: biarkan default, Nuxt/Nitro akan dideteksi otomatis oleh Vercel

Setiap push ke branch `main` akan menjadi production deployment. Branch lain akan dibuat sebagai preview deployment.
