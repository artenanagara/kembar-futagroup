export const newsHero = {
  breadcrumbs: ['Beranda', 'Berita'],
  title: 'Berita & Insight',
  description: 'Cerita, perkembangan, dan kabar terbaru dari ekosistem Kembar Futagroup.',
  image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1800&q=85'
}

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
    slug: 'perkuat-ekosistem-manufaktur-klaten',
    title: 'Kembar Futagroup Perkuat Ekosistem Manufaktur Berbasis Klaten',
    excerpt: 'Investasi lini produksi baru memperkuat kapasitas pengecoran logam dan permesinan di fasilitas Klaten.',
    category: 'Perusahaan',
    date: '2026-06-19',
    readTime: '5 Menit Baca',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85',
    content: [
      { type: 'heading', text: 'Investasi Lini Produksi Baru' },
      { type: 'paragraph', text: 'Kembar Futagroup menambah kapasitas produksi di fasilitas utamanya di Klaten dengan menghadirkan lini pengecoran dan permesinan baru. Langkah ini menjadi bagian dari strategi jangka panjang grup untuk memperkuat posisinya sebagai holding manufaktur yang berakar dari industri cor logam.' },
      { type: 'paragraph', text: 'Penambahan kapasitas ini diharapkan dapat mempercepat waktu produksi sekaligus menjaga konsistensi mutu produk yang dikirim ke berbagai proyek, mulai dari infrastruktur kawasan hingga produk ruang publik.' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1400&q=85', alt: 'Lini produksi baru di fasilitas Klaten', caption: 'Lini pengecoran dan permesinan baru di fasilitas Klaten.' },
      { type: 'heading', text: 'Investasi pada Manusia, Bukan Hanya Mesin' },
      { type: 'paragraph', text: 'Selain investasi mesin, grup juga menyiapkan pelatihan teknis bagi karyawan agar dapat mengoperasikan lini produksi baru secara optimal, sejalan dengan komitmen perusahaan terhadap pengembangan sumber daya manusia lokal.' }
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
      { type: 'heading', text: 'Langkah Awal Menuju Pasar Regional' },
      { type: 'paragraph', text: 'Setelah bertahun-tahun melayani pasar domestik, produk manufaktur Kembar Futagroup kini mulai menjangkau pasar ekspor, termasuk Singapura dan Timor Leste. Langkah ini menjadi tonggak penting dalam perjalanan grup sebagai holding manufaktur yang berakar dari Klaten.' },
      { type: 'heading', text: 'Langkah Awal Menuju Pasar Regional' },
      { type: 'paragraph', text: 'Setelah bertahun-tahun melayani pasar domestik, produk manufaktur Kembar Futagroup kini mulai menjangkau pasar ekspor, termasuk Singapura dan Timor Leste. Langkah ini menjadi tonggak penting dalam perjalanan grup sebagai holding manufaktur yang berakar dari Klaten.' },
      { type: 'heading', text: 'Langkah Awal Menuju Pasar Regional' },
      { type: 'paragraph', text: 'Setelah bertahun-tahun melayani pasar domestik, produk manufaktur Kembar Futagroup kini mulai menjangkau pasar ekspor, termasuk Singapura dan Timor Leste. Langkah ini menjadi tonggak penting dalam perjalanan grup sebagai holding manufaktur yang berakar dari Klaten.' },
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
    title: 'Kembar Futagroup Raih Sertifikasi Standar Mutu Produksi',
    excerpt: 'Sertifikasi ini menegaskan komitmen grup terhadap konsistensi mutu di setiap tahap produksi.',
    category: 'Perusahaan',
    date: '2026-05-10',
    readTime: '3 Menit Baca',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=85',
    content: [
      { type: 'heading', text: 'Evaluasi Menyeluruh Sistem Produksi' },
      { type: 'paragraph', text: 'Sebagai bagian dari komitmen menjaga mutu produk, Kembar Futagroup berhasil meraih sertifikasi standar mutu produksi untuk unit usaha manufaktur dan permesinannya.' },
      { type: 'paragraph', text: 'Proses sertifikasi mencakup evaluasi menyeluruh terhadap sistem kontrol kualitas, mulai dari bahan baku, proses produksi, hingga distribusi produk ke pelanggan.' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?auto=format&fit=crop&w=1400&q=85', alt: 'Proses kontrol kualitas produksi', caption: 'Proses inspeksi kontrol kualitas di lini produksi.' },
      { type: 'heading', text: 'Meningkatkan Kepercayaan Mitra dan Pelanggan' },
      { type: 'paragraph', text: 'Pencapaian ini diharapkan dapat meningkatkan kepercayaan mitra dan pelanggan terhadap produk-produk yang dihasilkan oleh unit usaha di bawah grup.' }
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
      { type: 'paragraph', text: 'Kembar Futagroup turut berkontribusi dalam pembangunan Ibu Kota Nusantara (IKN) melalui penyediaan produk infrastruktur, utilitas kawasan, dan elemen ruang publik.' },
      { type: 'paragraph', text: 'Kontribusi ini mencakup komponen drainase, furnitur jalan, serta produk cor logam yang digunakan untuk mendukung kebutuhan infrastruktur kawasan berskala nasional.' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85', alt: 'Produk infrastruktur untuk kawasan IKN', caption: 'Komponen infrastruktur dan utilitas kawasan yang dikirim ke lokasi proyek.' },
      { type: 'heading', text: 'Bukti Kapabilitas Produksi dari Klaten untuk Indonesia' },
      { type: 'paragraph', text: 'Keterlibatan dalam proyek strategis nasional ini menjadi bukti nyata kapabilitas produksi grup dalam mendukung pembangunan infrastruktur Indonesia dari Klaten untuk seluruh negeri.' }
    ]
  },
  {
    slug: 'program-csr-pelatihan-las-klaten',
    title: 'Program CSR: Kembar Futagroup Latih Warga Klaten Keahlian Las',
    excerpt: 'Pelatihan keahlian teknik las digelar untuk membuka peluang kerja bagi warga sekitar fasilitas produksi.',
    category: 'CSR',
    date: '2026-04-02',
    readTime: '3 Menit Baca',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=85',
    content: [
      { type: 'heading', text: 'Membekali Warga dengan Keahlian Teknis' },
      { type: 'paragraph', text: 'Sebagai bagian dari program tanggung jawab sosial perusahaan, Kembar Futagroup menggelar pelatihan keahlian teknik las bagi warga di sekitar fasilitas produksi di Klaten.' },
      { type: 'paragraph', text: 'Program ini bertujuan membekali warga dengan keterampilan teknis yang relevan dengan kebutuhan industri manufaktur, sekaligus membuka peluang kerja di unit-unit usaha grup maupun industri sejenis lainnya.' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1581093196277-9f608732e2c5?auto=format&fit=crop&w=1400&q=85', alt: 'Pelatihan teknik las bagi warga Klaten', caption: 'Sesi pelatihan teknik las bagi warga sekitar fasilitas produksi.' },
      { type: 'heading', text: 'Rencana Perluasan Program Pelatihan' },
      { type: 'paragraph', text: 'Ke depannya, grup berencana memperluas program pelatihan serupa ke bidang keahlian lain seperti permesinan dan quality control.' }
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
