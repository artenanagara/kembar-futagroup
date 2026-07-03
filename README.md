# Kembar Futagroup

Website company profile Kembar Futagroup berbasis Nuxt 4 dan Nuxt UI.

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
