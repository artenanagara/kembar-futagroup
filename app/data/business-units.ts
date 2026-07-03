export type BusinessUnit = {
  slug: string
  name: string
  description: string
  category: string
  image: string
}

export const businessUnits: BusinessUnit[] = [
  {
    slug: 'futake-indonesia',
    name: 'Futake Indonesia',
    description: 'Merek konsumen dan industri nasional yang menyatukan produk grup mendukung proyek strategis nasional.',
    category: 'Manufaktur',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=900&q=80'
  },
  {
    slug: 'kembar-teknika',
    name: 'Kembar Teknika',
    description: 'Unit teknik yang merancang mesin, komponen custom, dan solusi produksi untuk kebutuhan industri.',
    category: 'Manufaktur',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
  },
  {
    slug: 'zwilling',
    name: 'Zwilling',
    description: 'Brand produk industri dan lansekap yang menghadirkan elemen ruang publik siap pakai.',
    category: 'Manufaktur',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80'
  },
  {
    slug: 'ayam-tentrem-logam',
    name: 'Ayam Tentrem Logam',
    description: 'Pusat pengolahan logam dengan pengalaman panjang dalam pengecoran dan fabrikasi.',
    category: 'Manufaktur',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80'
  },
  {
    slug: 'futago-karya',
    name: 'Futago Karya',
    description: 'Mendukung pengerjaan proyek kawasan melalui produk utilitas, landscape, dan infrastruktur.',
    category: 'Manufaktur',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=900&q=80'
  },
  {
    slug: 'tvilling',
    name: 'Tvilling',
    description: 'Menghubungkan kebutuhan desain, material, dan produksi untuk produk ruang luar yang presisi.',
    category: 'Manufaktur',
    image: 'https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=900&q=80'
  }
]
