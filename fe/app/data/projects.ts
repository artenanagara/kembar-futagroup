export const projectsHero = {
  breadcrumbs: ['Beranda', 'Proyek'],
  title: 'Proyek',
  description: 'Jejak karya Kembar Futagroup di ruang publik, kawasan, dan infrastruktur — dari revitalisasi kota hingga proyek strategis nasional.',
  image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=85'
}

export const projectsIntro = {
  eyebrow: 'Karya di Lapangan',
  title: 'Produk kami bukan sekadar katalog, tetapi bagian dari ruang yang digunakan setiap hari.',
  paragraphs: [
    'Dari tiang lampu di kawasan wisata, kursi di ruang tunggu stasiun, hingga komponen infrastruktur kawasan — produk dan pengerjaan grup hadir di berbagai proyek publik dan swasta di seluruh Indonesia.',
    'Setiap proyek dikerjakan sebagai kolaborasi antarunit: pengecoran di hulu, fabrikasi dan finishing di tengah, hingga pengiriman dan pemasangan di lapangan. Cara kerja inilah yang membuat grup dapat menangani kebutuhan dari skala kecil hingga proyek berskala kawasan.'
  ]
}

export type Project = {
  title: string
  location: string
  year: string
  category: string
  description: string
  image: string
}

// Proyek terverifikasi dari publikasi & profil unit bisnis grup (Futake, Kembar Teknika,
// Futago Karya). Angka lingkup detail belum dikonfirmasi klien — deskripsi dijaga faktual
// tanpa klaim kuantitatif yang belum pasti.
export const projects: Project[] = [
  {
    title: 'Revitalisasi Kawasan Malioboro',
    location: 'Yogyakarta',
    year: '2017',
    category: 'Ruang Publik',
    description: 'Penyediaan street furniture untuk penataan kawasan pedestrian Malioboro — mulai dari tiang lampu, kursi pedestrian, hingga elemen jalan lainnya yang mendukung kenyamanan pengunjung.',
    image: 'https://images.unsplash.com/photo-1555899434-94d1368aa7af?auto=format&fit=crop&w=1100&q=85'
  },
  {
    title: 'Beautifikasi Stasiun Klaten',
    location: 'Klaten, Jawa Tengah',
    year: '2024',
    category: 'Ruang Publik',
    description: 'Pasokan bollard, kursi tunggu, dan tanaman penghijau untuk mempercantik wajah baru Stasiun Klaten — memadukan elemen cor logam dan elemen hijau dalam satu proyek.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1100&q=85'
  },
  {
    title: 'Jembatan Pandansimo',
    location: 'Bantul, DI Yogyakarta',
    year: '2023',
    category: 'Infrastruktur',
    description: 'Dukungan komponen dan elemen logam untuk kebutuhan infrastruktur jembatan, sebagai bagian dari jangkauan pengerjaan grup di proyek infrastruktur publik.',
    image: 'https://images.unsplash.com/photo-1470004914212-05527e49370b?auto=format&fit=crop&w=1100&q=85'
  },
  {
    title: 'Penataan Alun-alun Toboali',
    location: 'Bangka Selatan',
    year: '2023',
    category: 'Ruang Publik',
    description: 'Penyediaan elemen street furniture untuk penataan ruang publik alun-alun, menjangkau kebutuhan proyek di luar Pulau Jawa.',
    image: 'https://images.unsplash.com/photo-1600484472172-a02f4b7c2d64?auto=format&fit=crop&w=1100&q=85'
  },
  {
    title: 'Tiang Lampu Solar Masjid Qalbun Syakur',
    location: 'Prambanan, Klaten',
    year: '2024',
    category: 'Furnitur Jalan',
    description: 'Produksi dan pemasangan tiang lampu tenaga surya untuk area masjid, memadukan produk cor logam dengan solusi penerangan hemat energi.',
    image: 'https://images.unsplash.com/photo-1516216628859-9bccecab13ca?auto=format&fit=crop&w=1100&q=85'
  },
  {
    title: 'Renovasi GOR Klaten',
    location: 'Klaten, Jawa Tengah',
    year: '2024',
    category: 'Fasilitas Publik',
    description: 'Dukungan produk dan pengerjaan untuk renovasi gelanggang olahraga, memperkuat kontribusi grup pada fasilitas publik di kota asalnya.',
    image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&w=1100&q=85'
  }
]

export const projectsNational = {
  eyebrow: 'Proyek Strategis Nasional',
  title: 'Mendukung pembangunan dari Klaten untuk Indonesia',
  description: 'Melalui unit bisnisnya, grup turut mendukung kebutuhan proyek strategis nasional dan kawasan prioritas — dengan jangkauan pengiriman yang membentang dari Bengkulu, Paser, hingga Labuan Bajo.',
  items: [
    {
      title: 'Ibu Kota Nusantara (IKN)',
      description: 'Dukungan produk infrastruktur, utilitas kawasan, dan elemen ruang publik untuk pembangunan ibu kota baru.'
    },
    {
      title: 'Kawasan Strategis Pariwisata Nasional (KSPN)',
      description: 'Penyediaan elemen ruang publik dan street furniture untuk penataan kawasan pariwisata prioritas.'
    },
    {
      title: 'Ekspor Regional',
      description: 'Produk cor logam dan elemen ruang publik grup telah menjangkau pasar Singapura dan Timor Leste.'
    }
  ]
}
