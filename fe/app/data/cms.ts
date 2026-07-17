export type ArticleStatus = 'draft' | 'review' | 'scheduled' | 'published'
export type ArticleCategory = 'Proyek' | 'Bisnis' | 'Perusahaan' | 'CSR' | 'Karir'

export type Article = {
  id: string
  title: string
  slug: string
  category: ArticleCategory
  status: ArticleStatus
  author: string
  publishDate: string
  readTime: string
  wordCount: number
  focusKeyword: string
  tags: string
  excerpt: string
  content: string
  metaTitle: string
  metaDescription: string
  ogTitle: string
  imageAlt: string
  score: number
  updatedAt: string
}

export type MediaItem = {
  id: string
  name: string
  type: 'Hero' | 'Inline' | 'Thumbnail' | 'Draft'
  size: string
  dimensions: string
  status: 'ready' | 'needs-alt' | 'draft'
  usedIn: string
  altText: string
}

export const cmsArticles: Article[] = [
  {
    id: 'beautifikasi-stasiun-klaten',
    title: 'Kilas Proyek: Kembar Futagroup di Balik Beautifikasi Stasiun Klaten',
    slug: 'beautifikasi-stasiun-klaten',
    category: 'Proyek',
    status: 'published',
    author: 'Content Lead',
    publishDate: '19 Jun 2026',
    readTime: '4 menit',
    wordCount: 820,
    focusKeyword: 'proyek stasiun klaten',
    tags: 'proyek, ruang publik, klaten',
    excerpt: 'Bollard, kursi tunggu, hingga tanaman dari unit bisnis grup mempercantik wajah baru Stasiun Klaten.',
    content: 'Program beautifikasi Stasiun Klaten menjadi salah satu proyek yang paling dekat dengan rumah bagi Kembar Futagroup. Melalui unit bisnisnya, grup memasok produk-produk yang kini menyambut penumpang di area stasiun, mulai dari bollard pembatas, kursi tunggu, hingga tanaman penghijau.\n\nKolaborasi antarunit menjadi kunci. Elemen cor logam dikerjakan lini pengecoran dan fabrikasi grup, sementara elemen hijau disiapkan oleh Futafarm.',
    metaTitle: 'Kembar Futagroup di Balik Beautifikasi Stasiun Klaten',
    metaDescription: 'Kilas proyek beautifikasi Stasiun Klaten bersama Kembar Futagroup, dari bollard, kursi tunggu, hingga tanaman penghijau.',
    ogTitle: 'Beautifikasi Stasiun Klaten oleh Kembar Futagroup',
    imageAlt: 'Elemen ruang publik hasil produksi Kembar Futagroup di Stasiun Klaten',
    score: 92,
    updatedAt: '13 Jul 2026'
  },
  {
    id: 'ekspansi-pasar-ekspor-singapura',
    title: 'Perluas Pasar, Produk Kembar Futagroup Kini Diekspor ke Singapura',
    slug: 'ekspansi-pasar-ekspor-singapura',
    category: 'Bisnis',
    status: 'review',
    author: 'SEO Specialist',
    publishDate: '15 Jul 2026',
    readTime: '4 menit',
    wordCount: 760,
    focusKeyword: 'produk manufaktur ekspor',
    tags: 'ekspor, manufaktur, singapura',
    excerpt: 'Produk cor logam dan komponen manufaktur grup mulai menjangkau pasar Singapura dan Timor Leste.',
    content: 'Setelah bertahun-tahun melayani pasar domestik, produk manufaktur Kembar Futagroup mulai menjangkau pasar ekspor. Langkah ini menjadi tonggak penting dalam perjalanan grup sebagai holding manufaktur yang berakar dari Klaten.\n\nProduk yang diekspor meliputi komponen cor logam dan elemen ruang publik yang telah melalui proses kontrol kualitas ketat.',
    metaTitle: 'Produk Manufaktur Kembar Futagroup Diekspor ke Singapura',
    metaDescription: 'Kembar Futagroup memperluas pasar ekspor produk manufaktur dan cor logam ke Singapura dan Timor Leste.',
    ogTitle: 'Produk Kembar Futagroup Masuk Pasar Ekspor',
    imageAlt: 'Pengiriman ekspor produk manufaktur Kembar Futagroup',
    score: 84,
    updatedAt: '12 Jul 2026'
  },
  {
    id: 'sertifikasi-standar-mutu-produksi',
    title: 'ISO 14001, ISO 45001, hingga TKDN: Kredensial Mutu Unit Bisnis',
    slug: 'sertifikasi-standar-mutu-produksi',
    category: 'Perusahaan',
    status: 'scheduled',
    author: 'Editor',
    publishDate: '18 Jul 2026',
    readTime: '3 menit',
    wordCount: 640,
    focusKeyword: 'sertifikasi manufaktur',
    tags: 'iso, tkdn, mutu produksi',
    excerpt: 'Unit bisnis grup mengantongi sertifikasi ISO 14001:2015, ISO 45001, TKDN, dan terdaftar di e-Katalog LKPP.',
    content: 'Sebagai bagian dari komitmen menjaga mutu produk, unit bisnis Kembar Futagroup mengantongi sertifikasi ISO 14001:2015 untuk manajemen lingkungan dan ISO 45001 untuk keselamatan dan kesehatan kerja.\n\nSelain itu, produk grup telah tersertifikasi TKDN dan terdaftar sebagai penyedia di e-Katalog LKPP.',
    metaTitle: 'Sertifikasi Mutu Produksi Kembar Futagroup',
    metaDescription: 'Kredensial mutu unit bisnis Kembar Futagroup mencakup ISO 14001, ISO 45001, TKDN, dan e-Katalog LKPP.',
    ogTitle: 'Kredensial Mutu Kembar Futagroup',
    imageAlt: 'Proses kontrol kualitas produksi manufaktur',
    score: 79,
    updatedAt: '11 Jul 2026'
  },
  {
    id: 'program-csr-kembar-futagroup-klaten',
    title: 'Puluhan Kegiatan CSR Kembar Futagroup Terdata di Forum CSR Kabupaten Klaten',
    slug: 'program-csr-kembar-futagroup-klaten',
    category: 'CSR',
    status: 'draft',
    author: 'CSR Team',
    publishDate: 'Belum dijadwalkan',
    readTime: '3 menit',
    wordCount: 520,
    focusKeyword: 'csr perusahaan klaten',
    tags: 'csr, klaten, masyarakat',
    excerpt: 'Dari pendidikan hingga pemberdayaan ekonomi, program CSR grup menjangkau masyarakat sekitar wilayah operasi.',
    content: 'Melalui PT Futake Indonesia, program tanggung jawab sosial Kembar Futagroup terdata resmi di Forum CSR Kabupaten Klaten. Program tersebut mencakup bidang pendidikan, pemberdayaan ekonomi, sosial, serta sarana dan prasarana.\n\nBidang sosial dan pendidikan menjadi porsi terbesar dari kegiatan yang berjalan di sekitar wilayah operasi.',
    metaTitle: 'Program CSR Kembar Futagroup di Klaten',
    metaDescription: 'Program CSR Kembar Futagroup menjangkau pendidikan, sosial, pemberdayaan ekonomi, dan sarana masyarakat di Klaten.',
    ogTitle: 'CSR Kembar Futagroup untuk Masyarakat Klaten',
    imageAlt: 'Kegiatan sosial Kembar Futagroup bersama masyarakat Klaten',
    score: 68,
    updatedAt: '10 Jul 2026'
  }
]

export const cmsMediaItems: MediaItem[] = [
  {
    id: 'stasiun-klaten',
    name: 'stasiun-klaten.webp',
    type: 'Hero',
    size: '480 KB',
    dimensions: '1600 x 1000',
    status: 'ready',
    usedIn: 'Beautifikasi Stasiun Klaten',
    altText: 'Elemen ruang publik hasil produksi Kembar Futagroup di Stasiun Klaten'
  },
  {
    id: 'quality-control',
    name: 'quality-control.webp',
    type: 'Inline',
    size: '390 KB',
    dimensions: '1400 x 900',
    status: 'ready',
    usedIn: 'Sertifikasi Mutu Produksi',
    altText: 'Proses kontrol kualitas produksi manufaktur'
  },
  {
    id: 'csr-klaten',
    name: 'csr-klaten.webp',
    type: 'Draft',
    size: '420 KB',
    dimensions: '1500 x 950',
    status: 'needs-alt',
    usedIn: 'Program CSR Kembar Futagroup Klaten',
    altText: 'Kegiatan sosial Kembar Futagroup bersama masyarakat Klaten'
  },
  {
    id: 'ekspor-produk',
    name: 'ekspor-produk.webp',
    type: 'Thumbnail',
    size: '310 KB',
    dimensions: '1200 x 800',
    status: 'draft',
    usedIn: 'Ekspansi Pasar Ekspor Singapura',
    altText: 'Pengiriman ekspor produk manufaktur Kembar Futagroup'
  }
]

export const cmsEditorialTasks = [
  { title: 'Lengkapi H2 artikel ekspor', owner: 'SEO Specialist', due: 'Hari ini', progress: 72 },
  { title: 'Upload foto utama CSR', owner: 'CSR Team', due: 'Besok', progress: 45 },
  { title: 'Review meta description sertifikasi', owner: 'Editor', due: '18 Jul', progress: 64 }
]

export const cmsContentChecks = [
  { label: 'Judul artikel', value: 'Optimal', detail: 'Panjang judul masih aman untuk listing dan SEO.', icon: 'i-lucide-heading-1', status: 'ready' },
  { label: 'Slug URL', value: 'Valid', detail: 'Slug rapi, lowercase, dan mudah dibaca.', icon: 'i-lucide-link', status: 'ready' },
  { label: 'Excerpt', value: 'Review', detail: 'Tambahkan manfaat atau konteks supaya lebih kuat.', icon: 'i-lucide-align-left', status: 'warning' },
  { label: 'Gambar utama', value: 'Butuh Alt', detail: 'Alt text harus spesifik sesuai isi foto.', icon: 'i-lucide-image', status: 'warning' },
  { label: 'Internal link', value: '2 link', detail: 'Tambahkan link ke unit bisnis dan produk terkait.', icon: 'i-lucide-waypoints', status: 'warning' },
  { label: 'Meta SEO', value: 'Siap', detail: 'Title dan description sudah dalam batas aman.', icon: 'i-lucide-search-check', status: 'ready' }
]

export const cmsKeywordRows = [
  { keyword: 'proyek stasiun klaten', volume: '1.2K', intent: 'Informational', article: 'Beautifikasi Stasiun Klaten', gap: '+8 posisi' },
  { keyword: 'produk manufaktur ekspor', volume: '2.8K', intent: 'Commercial', article: 'Ekspansi Pasar Ekspor', gap: '+6 posisi' },
  { keyword: 'sertifikasi manufaktur', volume: '1.9K', intent: 'Informational', article: 'Sertifikasi Mutu Produksi', gap: '+5 posisi' },
  { keyword: 'csr perusahaan klaten', volume: '900', intent: 'Local', article: 'Program CSR Klaten', gap: '+11 posisi' }
]

export const cmsCategoryRows = [
  { name: 'Proyek', count: 8, color: 'bg-brand-green' },
  { name: 'Bisnis', count: 5, color: 'bg-brand-orange' },
  { name: 'Perusahaan', count: 6, color: 'bg-ink' },
  { name: 'CSR', count: 4, color: 'bg-emerald-500' },
  { name: 'Karir', count: 3, color: 'bg-amber-500' }
]

export const articleStatusLabel: Record<ArticleStatus, string> = {
  draft: 'Draft',
  review: 'Review',
  scheduled: 'Scheduled',
  published: 'Published'
}

export const articleStatusClass: Record<ArticleStatus, string> = {
  draft: 'border-slate-200 bg-slate-50 text-slate-700',
  review: 'border-amber-200 bg-amber-50 text-amber-800',
  scheduled: 'border-sky-200 bg-sky-50 text-sky-700',
  published: 'border-emerald-200 bg-emerald-50 text-emerald-700'
}

export const mediaStatusLabel: Record<MediaItem['status'], string> = {
  'ready': 'Siap',
  'needs-alt': 'Butuh Alt',
  'draft': 'Draft'
}

export const mediaStatusClass: Record<MediaItem['status'], string> = {
  'ready': 'border-emerald-200 bg-emerald-50 text-emerald-700',
  'needs-alt': 'border-amber-200 bg-amber-50 text-amber-800',
  'draft': 'border-slate-200 bg-slate-50 text-slate-700'
}

export const checkStatusClass: Record<string, string> = {
  ready: 'bg-emerald-500',
  warning: 'bg-amber-500'
}

export const scoreClass = (score: number) => {
  if (score >= 86) {
    return 'text-emerald-700'
  }

  if (score >= 75) {
    return 'text-amber-700'
  }

  return 'text-red-700'
}
