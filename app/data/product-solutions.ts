export type ProductSolution = {
  slug: string
  name: string
  description: string
  navDescription: string
  category: string
  group: 'produk' | 'solusi' | 'layanan'
  image: string
  cardImage?: string
}

export const productSolutionPage = {
  hero: {
    breadcrumbs: ['Beranda', 'Produk & Solusi'],
    title: 'Produk & Solusi',
    description: 'Rangkaian produk manufaktur dan layanan teknis untuk kebutuhan proyek, kawasan, ruang publik, dan proses produksi.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1800&q=85'
  },
  focus: {
    eyebrow: 'Fokus Kami',
    title: 'Kembar Futagroup merancang produk ruang publik, pengecoran, mesin, drainase, lanskap, dan material finishing untuk kebutuhan proyek.',
    paragraphs: [
      'Berbasis di Klaten, Kembar Futagroup dikenal sebagai holding produk logam olahan yang menaungi lini seperti Futake, Futago Karya, Futastone, Futafarm, serta unit manufaktur terkait.',
      'Kapabilitas grup bergerak dari furnitur jalan dan pedestrian, pengecoran logam, mesin tepat guna, penghijauan kota, infrastruktur drainase, hingga batu dan terrazzo.'
    ]
  },
  capabilityBand: {
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1800&q=85',
    labels: ['Furnitur Jalan & Pedestrian', 'Pengecoran Logam & Foundry', 'Mesin Tepat Guna', 'Infrastruktur Drainase']
  },
  industries: [
    {
      name: 'Infrastruktur Kota',
      image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1100&q=85'
    },
    {
      name: 'Ruang Publik',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1100&q=85'
    },
    {
      name: 'Manufaktur',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1100&q=85'
    },
    {
      name: 'Kawasan Industri',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1100&q=85'
    },
    {
      name: 'Pertanian & UMKM',
      image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1100&q=85'
    },
    {
      name: 'Properti & Lansekap',
      image: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1100&q=85'
    },
    {
      name: 'Pengolahan Sampah',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1100&q=85'
    }
  ]
} as const

export const productSolutions: ProductSolution[] = [
  {
    slug: 'furnitur-jalan-pedestrian',
    name: 'Furnitur Jalan & Pedestrian',
    description: 'Tiang lampu PJU oktagonal, bollard, bangku dan meja, papan nama jalan, wayfinding, bak sampah, ubin pemandu atau taktil, hingga pagar antik.',
    navDescription: 'Tiang lampu, bollard, bangku, dan perlengkapan jalan lainnya.',
    category: 'Produk',
    group: 'produk',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85',
    cardImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85'
  },
  {
    slug: 'pengecoran-logam-foundry',
    name: 'Pengecoran Logam & Foundry',
    description: 'Pengecoran komponen besi cor dan aluminium untuk kebutuhan proyek, utilitas kawasan, elemen ruang publik, dan produk custom sesuai spesifikasi.',
    navDescription: 'Pengecoran besi cor dan aluminium untuk kebutuhan proyek.',
    category: 'Produksi',
    group: 'layanan',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85',
    cardImage: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85'
  },
  {
    slug: 'mesin-tepat-guna',
    name: 'Mesin Tepat Guna',
    description: 'Pengembangan dan perakitan mesin untuk kebutuhan industri, pertanian, konstruksi, dan kitchen equipment agar proses kerja lebih efisien.',
    navDescription: 'Pengembangan mesin untuk industri, pertanian, dan konstruksi.',
    category: 'Solusi',
    group: 'solusi',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=85',
    cardImage: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=85'
  },
  {
    slug: 'lanskap-penghijauan-kota',
    name: 'Lanskap & Penghijauan Kota',
    description: 'Solusi lanskap dan penghijauan untuk taman, koridor pedestrian, area publik, kawasan komersial, dan ruang luar perkotaan.',
    navDescription: 'Solusi lanskap dan penghijauan ruang publik perkotaan.',
    category: 'Solusi',
    group: 'solusi',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=85',
    cardImage: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=85'
  },
  {
    slug: 'infrastruktur-drainase',
    name: 'Infrastruktur Drainase',
    description: 'Komponen drainase dan utilitas kawasan seperti grating, grill, manhole cover, saluran, dan pendukung infrastruktur jalan maupun kawasan.',
    navDescription: 'Komponen drainase dan utilitas kawasan perkotaan.',
    category: 'Solusi',
    group: 'solusi',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85',
    cardImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85'
  },
  {
    slug: 'batu-terazzo',
    name: 'Batu & Terazzo',
    description: 'Material batu dan terrazzo untuk kebutuhan lantai, elemen arsitektural, lanskap, area publik, dan finishing proyek.',
    navDescription: 'Material batu dan terrazzo untuk lantai dan finishing.',
    category: 'Produk',
    group: 'produk',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85',
    cardImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85'
  }
]
