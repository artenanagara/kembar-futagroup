export type ProductSolution = {
  slug: string
  name: string
  description: string
  category: string
  image: string
}

export const productSolutions: ProductSolution[] = [
  {
    slug: 'cor-logam-custom',
    name: 'Cor Logam Custom',
    description: 'Komponen cor logam yang dirancang sesuai kebutuhan proyek, fungsi, dan kondisi lapangan.',
    category: 'Produk',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85'
  },
  {
    slug: 'mesin-produksi',
    name: 'Mesin Produksi',
    description: 'Perancangan dan fabrikasi mesin untuk mendukung proses manufaktur yang lebih presisi.',
    category: 'Solusi',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=85'
  },
  {
    slug: 'infrastruktur-kawasan',
    name: 'Infrastruktur Kawasan',
    description: 'Produk utilitas, drainase, dan elemen pendukung untuk kawasan industri dan ruang publik.',
    category: 'Solusi',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85'
  },
  {
    slug: 'elemen-lansekap',
    name: 'Elemen Lansekap',
    description: 'Bangku taman, bollard, penerangan, dan komponen ruang luar yang siap digunakan.',
    category: 'Produk',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85'
  },
  {
    slug: 'engineering-produksi',
    name: 'Engineering Produksi',
    description: 'Pendampingan teknis dari kebutuhan, desain, produksi, hingga kontrol kualitas.',
    category: 'Layanan',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=85'
  }
]
