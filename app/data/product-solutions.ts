export type ProductSolution = {
  slug: string
  name: string
  description: string
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
    title: 'Kembar Futa Group menghubungkan pengecoran logam, permesinan, dan produk ruang publik menjadi solusi yang siap dipakai proyek.',
    paragraphs: [
      'Berbasis di Klaten, Kembar Futa Group dikenal sebagai holding produk logam olahan yang menaungi lini seperti Futake, Futago, Futastone, Futafarm, serta unit manufaktur terkait.',
      'Kapabilitas grup bergerak dari street furniture, drainase, landscaping, pengecoran logam, sampai pengembangan mesin untuk kebutuhan industri, pertanian, konstruksi, dan kitchen equipment.'
    ]
  },
  capabilityBand: {
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1800&q=85',
    labels: ['Cor Logam Custom', 'Mesin & Permesinan', 'Street Furniture', 'Infrastruktur Drainase']
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
    slug: 'cor-logam-custom',
    name: 'Cor Logam Custom',
    description: 'Pengecoran komponen besi cor dan aluminium untuk kebutuhan proyek, mulai dari manhole cover, grating, grill, sampai elemen custom sesuai spesifikasi.',
    category: 'Produk',
    group: 'produk',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85',
    cardImage: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85'
  },
  {
    slug: 'mesin-produksi',
    name: 'Mesin Produksi',
    description: 'Pengembangan dan perakitan mesin untuk kebutuhan industri, pertanian, konstruksi, dan kitchen equipment agar proses usaha lebih efisien.',
    category: 'Solusi',
    group: 'solusi',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=85',
    cardImage: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=85'
  },
  {
    slug: 'infrastruktur-kawasan',
    name: 'Infrastruktur Kawasan',
    description: 'Produk utilitas kawasan seperti drainase, grating, bollard, pagar, dan komponen pendukung untuk jalan, taman kota, serta kawasan industri.',
    category: 'Solusi',
    group: 'solusi',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85',
    cardImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85'
  },
  {
    slug: 'elemen-lansekap',
    name: 'Elemen Lansekap',
    description: 'Street furniture dan elemen ruang luar seperti kursi taman, PJU, penunjuk arah, tempat sampah, bollard, dan produk pedestrian lain.',
    category: 'Produk',
    group: 'produk',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85',
    cardImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85'
  },
  {
    slug: 'engineering-produksi',
    name: 'Engineering Produksi',
    description: 'Pendampingan teknis dari perumusan kebutuhan, desain, pemilihan material, pengecoran, fabrikasi, machining, hingga kontrol kualitas.',
    category: 'Layanan',
    group: 'layanan',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=85',
    cardImage: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=85'
  }
]
