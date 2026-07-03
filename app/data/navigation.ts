import { businessUnits } from './business-units'
import { productSolutions } from './product-solutions'

export type NavChild = {
  label: string
  to: string
  description?: string
}

export type NavItem = {
  label: string
  to: string
  hasDropdown?: boolean
  dropdownLimit?: number
  eyebrow?: string
  description?: string
  image?: {
    src: string
    alt: string
  }
  children?: NavChild[]
}

export const navItems: NavItem[] = [
  {
    label: 'Tentang Kami',
    to: '/tentang-kami/profil',
    hasDropdown: true,
    dropdownLimit: 3,
    eyebrow: 'Tentang Grup',
    description: 'Kenali profil, nilai pendiri, dan struktur Kembar Futago Group sebagai ekosistem manufaktur dari Klaten.',
    image: {
      src: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=900&q=85',
      alt: 'Aktivitas manufaktur Kembar Futago Group'
    },
    children: [
      {
        label: 'Profil',
        to: '/tentang-kami/profil',
        description: 'Cerita, perjalanan, visi, dan budaya perusahaan.'
      },
      {
        label: 'Value Owner',
        to: '/tentang-kami/value-owner',
        description: 'Prinsip pendiri yang membentuk cara grup bekerja.'
      },
      {
        label: 'Struktur',
        to: '/tentang-kami/struktur',
        description: 'Peta ekosistem holding, kapabilitas, dan unit usaha.'
      }
    ]
  },
  {
    label: 'Unit Bisnis',
    to: '/unit-bisnis',
    hasDropdown: true,
    dropdownLimit: 3,
    eyebrow: 'Unit Bisnis',
    description: 'Berbagai unit usaha grup saling terhubung untuk mendukung manufaktur, teknik, lansekap, dan infrastruktur.',
    image: {
      src: businessUnits[0]?.image ?? '',
      alt: 'Unit bisnis Kembar Futago Group'
    },
    children: businessUnits.map(unit => ({
      label: unit.name,
      to: `/unit-bisnis/${unit.slug}`,
      description: unit.description
    }))
  },
  {
    label: 'Produk & Solusi',
    to: '/produk-solusi',
    hasDropdown: true,
    dropdownLimit: 3,
    eyebrow: 'Produk & Solusi',
    description: 'Produk dan layanan teknis dari riset, engineering, produksi, kontrol kualitas, hingga distribusi.',
    image: {
      src: productSolutions[0]?.image ?? '',
      alt: 'Produk dan solusi industri'
    },
    children: productSolutions.map(solution => ({
      label: solution.name,
      to: `/produk-solusi/${solution.slug}`,
      description: solution.description
    }))
  },
  { label: 'Proyek', to: '#' },
  { label: 'Kegiatan CSR', to: '#' },
  { label: 'Berita', to: '#' },
  { label: 'Karir', to: '#' }
]

export const footerColumns = [
  ['Navigasi', 'Beranda', 'Tentang Kami', 'Unit Usaha', 'Produk & Solusi', 'Keberlanjutan'],
  ['Tentang Kami', 'Profil', 'Value Owner', 'Struktur'],
  ['Informasi', 'Berita & Insight', 'Karir', 'Kontak'],
  ['Unit Usaha', 'Ayem Tentrem Logam', 'Kembar Teknika', 'Zwilling', 'Futago Karya', 'Futake', 'Futastone', 'Futafarm']
]
