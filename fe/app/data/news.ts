export const newsHero = {
  breadcrumbs: ['Beranda', 'Berita'],
  title: 'Berita & Insight',
  description: 'Cerita, perkembangan, dan kabar terbaru dari ekosistem Kembar Futagroup.',
  image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1800&q=85'
}

// CONTOH: artikel di bawah adalah materi ilustrasi berbasis fakta nyata (ekspor, IKN,
// sertifikasi, CSR), namun dikemas sebagai contoh — tanggal dan detail naratif belum resmi.
// Ganti dengan rilis berita aktual sebelum publikasi.
export const newsDisclaimer = 'Artikel di halaman ini merupakan contoh ilustrasi. Kabar dan rilis resmi akan diperbarui secara berkala.'

export type NewsContentBlock
  = | { type: 'heading', text: string }
    | { type: 'paragraph', text: string }
    | { type: 'image', src: string, alt: string, caption?: string }

export type NewsPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image: string
  content: NewsContentBlock[]
}

export const newsPosts: NewsPost[] = [
  {
    slug: 'beautifikasi-stasiun-klaten',
    title: 'Kilas Proyek: Kembar Futagroup di Balik Beautifikasi Stasiun Klaten',
    excerpt: 'Bollard, kursi tunggu, hingga tanaman dari unit usaha grup mempercantik wajah baru Stasiun Klaten.',
    category: 'Proyek',
    date: '2026-06-19',
    readTime: '4 Menit Baca',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85',
    content: [
      { type: 'heading', text: 'Karya Grup di Ruang Publik Kota Sendiri' },
      { type: 'paragraph', text: 'Program beautifikasi Stasiun Klaten pada 2024 menjadi salah satu proyek yang paling dekat dengan rumah bagi Kembar Futagroup. Melalui unit usahanya, grup memasok produk-produk yang kini menyambut penumpang di area stasiun: bollard pembatas, kursi tunggu, hingga tanaman penghijau.' },
      { type: 'paragraph', text: 'Kolaborasi antarunit menjadi kunci: elemen cor logam dikerjakan lini pengecoran dan fabrikasi grup, sementara elemen hijau disiapkan oleh Futafarm — memperlihatkan cara kerja ekosistem grup dalam satu proyek nyata.' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1400&q=85', alt: 'Elemen ruang publik hasil produksi grup', caption: 'Elemen ruang publik hasil produksi unit usaha grup.' },
      { type: 'heading', text: 'Dari Stasiun ke Proyek Publik Lainnya' },
      { type: 'paragraph', text: 'Stasiun Klaten melengkapi jejak grup di ruang publik berbagai daerah — dari Jembatan Pandansimo, Alun-alun Toboali, hingga renovasi GOR Klaten — sekaligus menegaskan posisi grup sebagai mitra proyek beautifikasi dan infrastruktur ruang publik.' }
    ]
  },
  {
    slug: 'ekspansi-pasar-ekspor-singapura',
    title: 'Perluas Pasar, Produk Kembar Futagroup Kini Diekspor ke Singapura',
    excerpt: 'Produk cor logam dan komponen manufaktur grup mulai menjangkau pasar Singapura dan Timor Leste.',
    category: 'Bisnis',
    date: '2026-05-28',
    readTime: '4 Menit Baca',
    image: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=85',
    content: [
      { type: 'heading', text: 'Langkah Awal Menuju Pasar Regional' },
      { type: 'paragraph', text: 'Setelah bertahun-tahun melayani pasar domestik, produk manufaktur Kembar Futagroup kini mulai menjangkau pasar ekspor, termasuk Singapura dan Timor Leste. Langkah ini menjadi tonggak penting dalam perjalanan grup sebagai holding manufaktur yang berakar dari Klaten.' },
      { type: 'paragraph', text: 'Produk yang diekspor meliputi komponen cor logam dan elemen ruang publik yang telah melalui proses kontrol kualitas ketat sesuai standar internasional.' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1400&q=85', alt: 'Pengiriman ekspor produk manufaktur', caption: 'Proses pengiriman produk untuk pasar ekspor.' },
      { type: 'heading', text: 'Membuka Peluang Kolaborasi Lintas Negara' },
      { type: 'paragraph', text: 'Perluasan pasar ini sejalan dengan visi grup untuk menghadirkan produk manufaktur lokal yang mampu bersaing di tingkat regional, sekaligus membuka peluang kolaborasi dengan mitra bisnis di luar negeri.' }
    ]
  },
  {
    slug: 'sertifikasi-standar-mutu-produksi',
    title: 'ISO 14001, ISO 45001, hingga TKDN: Kredensial Mutu Unit Usaha Kembar Futagroup',
    excerpt: 'Unit usaha grup mengantongi sertifikasi ISO 14001:2015, ISO 45001, TKDN, dan terdaftar di e-Katalog LKPP.',
    category: 'Perusahaan',
    date: '2026-05-10',
    readTime: '3 Menit Baca',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=85',
    content: [
      { type: 'heading', text: 'Kredensial yang Menopang Kepercayaan Proyek' },
      { type: 'paragraph', text: 'Sebagai bagian dari komitmen menjaga mutu produk, unit usaha Kembar Futagroup — di antaranya Futago Karya dan Kembar Teknika — mengantongi sertifikasi ISO 14001:2015 untuk manajemen lingkungan dan ISO 45001 untuk keselamatan dan kesehatan kerja.' },
      { type: 'paragraph', text: 'Selain itu, produk grup telah tersertifikasi TKDN (Tingkat Komponen Dalam Negeri) dan terdaftar sebagai penyedia di e-Katalog LKPP, sehingga memenuhi syarat untuk kebutuhan pengadaan barang dan jasa pemerintah.' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?auto=format&fit=crop&w=1400&q=85', alt: 'Proses kontrol kualitas produksi', caption: 'Proses inspeksi kontrol kualitas di lini produksi.' },
      { type: 'heading', text: 'Meningkatkan Kepercayaan Mitra dan Pelanggan' },
      { type: 'paragraph', text: 'Kredensial ini menjadi dasar kepercayaan kontraktor, pengembang, dan instansi pemerintah terhadap produk-produk yang dihasilkan oleh unit usaha di bawah grup — dari furnitur jalan hingga komponen infrastruktur drainase.' }
    ]
  },
  {
    slug: 'dukung-pembangunan-infrastruktur-ikn',
    title: 'Kembar Futagroup Dukung Pembangunan Infrastruktur IKN',
    excerpt: 'Produk infrastruktur dan utilitas kawasan dari grup turut mendukung proyek Ibu Kota Nusantara.',
    category: 'Proyek',
    date: '2026-04-22',
    readTime: '4 Menit Baca',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
    content: [
      { type: 'heading', text: 'Kontribusi untuk Proyek Strategis Nasional' },
      { type: 'paragraph', text: 'Kembar Futagroup melalui unit usahanya turut mendukung kebutuhan proyek strategis nasional, termasuk pembangunan Ibu Kota Nusantara (IKN) dan kawasan strategis pariwisata nasional (KSPN), melalui penyediaan produk infrastruktur, utilitas kawasan, dan elemen ruang publik.' },
      { type: 'paragraph', text: 'Jangkauan pengiriman grup telah mencakup pelanggan dari berbagai penjuru — dari Bengkulu, Paser, hingga Labuan Bajo — dengan produk berupa komponen drainase, furnitur jalan, serta produk cor logam untuk kebutuhan infrastruktur kawasan.' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85', alt: 'Produk infrastruktur untuk kawasan IKN', caption: 'Komponen infrastruktur dan utilitas kawasan yang dikirim ke lokasi proyek.' },
      { type: 'heading', text: 'Bukti Kapabilitas Produksi dari Klaten untuk Indonesia' },
      { type: 'paragraph', text: 'Keterlibatan dalam proyek strategis nasional ini menjadi bukti nyata kapabilitas produksi grup dalam mendukung pembangunan infrastruktur Indonesia dari Klaten untuk seluruh negeri.' }
    ]
  },
  {
    slug: 'program-csr-kembar-futagroup-klaten',
    title: 'Puluhan Kegiatan CSR Kembar Futagroup Terdata di Forum CSR Kabupaten Klaten',
    excerpt: 'Dari pendidikan hingga pemberdayaan ekonomi, program CSR grup menjangkau masyarakat sekitar wilayah operasi.',
    category: 'CSR',
    date: '2026-04-02',
    readTime: '3 Menit Baca',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=85',
    content: [
      { type: 'heading', text: 'Komitmen Sosial yang Terdata Resmi' },
      { type: 'paragraph', text: 'Melalui PT Futake Indonesia, program tanggung jawab sosial Kembar Futagroup terdata resmi di Forum CSR Kabupaten Klaten. Sepanjang 2023–2024, grup menjalankan puluhan kegiatan yang mencakup bidang pendidikan, pemberdayaan ekonomi, sosial, serta sarana dan prasarana.' },
      { type: 'paragraph', text: 'Bidang sosial dan pendidikan menjadi porsi terbesar — mulai dari dukungan kegiatan masyarakat di sekitar fasilitas produksi di Kecamatan Ceper hingga program aksesibilitas pendidikan bagi masyarakat di sekitar wilayah operasi.' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1581093196277-9f608732e2c5?auto=format&fit=crop&w=1400&q=85', alt: 'Kegiatan sosial bersama masyarakat Klaten', caption: 'Kegiatan sosial bersama masyarakat di sekitar wilayah operasi.' },
      { type: 'heading', text: 'Tumbuh Bersama Masyarakat Sekitar' },
      { type: 'paragraph', text: 'Bagi grup, kegiatan ini adalah wujud misi "tumbuh bersama, bermanfaat bersama" — memastikan pertumbuhan usaha juga dirasakan oleh masyarakat di sekitar wilayah operasi, dari lapangan kerja hingga program pemberdayaan.' }
    ]
  },
  {
    slug: 'buka-program-magang-engineering-2026',
    title: 'Kembar Futagroup Buka Program Magang Engineering 2026',
    excerpt: 'Program magang ini memberi kesempatan mahasiswa belajar langsung dari proses produksi dan engineering grup.',
    category: 'Karir',
    date: '2026-03-15',
    readTime: '3 Menit Baca',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=85',
    content: [
      { type: 'heading', text: 'Belajar Langsung dari Lapangan' },
      { type: 'paragraph', text: 'Kembar Futagroup membuka program magang engineering bagi mahasiswa aktif yang tertarik mempelajari proses produksi manufaktur secara langsung di lapangan.' },
      { type: 'paragraph', text: 'Selama program berlangsung, peserta magang akan dilibatkan dalam riset dan pengembangan produk, evaluasi teknis, hingga dokumentasi proyek bersama tim engineering grup.' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1581091012184-7d33a58c8fd1?auto=format&fit=crop&w=1400&q=85', alt: 'Mahasiswa magang belajar dari tim engineering', caption: 'Peserta magang belajar langsung bersama tim engineering.' },
      { type: 'heading', text: 'Mempersiapkan Talenta Muda Industri' },
      { type: 'paragraph', text: 'Program ini menjadi salah satu wujud komitmen grup dalam mengembangkan talenta muda di bidang manufaktur dan teknik, sekaligus mempersiapkan calon tenaga kerja yang siap terjun ke industri.' }
    ]
  }
]
