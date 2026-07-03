export type BusinessUnit = {
  slug: string
  name: string
  description: string
  category: string
  group: 'manufaktur-logam' | 'mesin-teknik' | 'material-lansekap'
  image: string
  cardImage?: string
}

export const businessUnitPage = {
  hero: {
    breadcrumbs: ['Beranda', 'Unit Bisnis'],
    title: 'Unit Bisnis',
    description: 'Kembar Futa Group menaungi sejumlah unit usaha yang bekerja sebagai satu ekosistem — dari pengecoran logam, manufaktur, material lansekap, hingga properti.',
    image: 'https://images.unsplash.com/photo-1779608993307-456d4a9ab4fa?auto=format&fit=crop&w=1800&q=85'
  },
  intro: {
    eyebrow: 'Satu Ekosistem',
    title: 'Bukan sekumpulan usaha terpisah,tapi satu ekosistem yang saling menopang.',
    paragraphs: [
      'Setiap unit usaha di Kembar Futa Group lahir dari satu akar yang sama: keahlian mengolah logam di Klaten. Dari sana, masing-masing tumbuh dengan fokusnya sendiri — ada yang mendalami pengecoran, manufaktur mesin, material lansekap, hingga pengembangan properti.',
      'Yang membuatnya menjadi ekosistem adalah cara mereka terhubung. Bahan baku, kapabilitas produksi, dan jaringan pasar mengalir antar unit, sehingga kekuatan di satu lini menjadi nilai tambah bagi lini lainnya.'
    ]
  },
  filters: [
    { label: 'Semua', value: 'all' },
    { label: 'Manufaktur & Logam', value: 'manufaktur-logam' },
    { label: 'Mesin & Teknik', value: 'mesin-teknik' },
    { label: 'Material & Lansekap', value: 'material-lansekap' }
  ]
} as const

export const businessUnits: BusinessUnit[] = [
  {
    slug: 'futake-indonesia',
    name: 'Futake Indonesia',
    description: 'Merek konsumen dan industri nasional yang menyatukan produk grup mendukung proyek strategi nasional',
    category: 'Manufaktur',
    group: 'manufaktur-logam',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=900&q=80',
    cardImage: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=900&q=80'
  },
  {
    slug: 'kembar-teknika',
    name: 'Kembar Teknika',
    description: 'Unit teknik yang merancang mesin, komponen custom, dan solusi produksi untuk kebutuhan industri.',
    category: 'Manufaktur',
    group: 'mesin-teknik',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    cardImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
  },
  {
    slug: 'zwilling',
    name: 'Zwilling',
    description: 'Brand produk industri dan lansekap yang menghadirkan elemen ruang publik siap pakai.',
    category: 'Manufaktur',
    group: 'material-lansekap',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80',
    cardImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80'
  },
  {
    slug: 'ayam-tentrem-logam',
    name: 'Ayam Tentrem Logam',
    description: 'Pusat pengolahan logam dengan pengalaman panjang dalam pengecoran dan fabrikasi.',
    category: 'Manufaktur',
    group: 'manufaktur-logam',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80',
    cardImage: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80'
  },
  {
    slug: 'futago-karya',
    name: 'Futago Karya',
    description: 'Mendukung pengerjaan proyek kawasan melalui produk utilitas, landscape, dan infrastruktur.',
    category: 'Manufaktur',
    group: 'material-lansekap',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=900&q=80',
    cardImage: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=900&q=80'
  },
  {
    slug: 'tvilling',
    name: 'Tvilling',
    description: 'Menghubungkan kebutuhan desain, material, dan produksi untuk produk ruang luar yang presisi.',
    category: 'Manufaktur',
    group: 'material-lansekap',
    image: 'https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=900&q=80',
    cardImage: 'https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=900&q=80'
  }
]
