export const careersHero = {
  breadcrumbs: ['Beranda', 'Karir'],
  title: 'Karir',
  description: 'Kembar Futagroup membuka ruang bagi talenta yang ingin belajar, bekerja, dan berkontribusi di dalam ekosistem lintas industri: logam, manufaktur, lansekap, infrastruktur, dan pengembangan kawasan.',
  image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1800&q=85'
}

export const careersIntro = {
  eyebrow: 'Bekerja Bersama Kami',
  title: 'Tempat untuk belajar, bekerja, dan bertumbuh.',
  paragraphs: [
    'Kembar Futagroup dibangun oleh orang-orang yang bekerja di berbagai bidang: produksi, manufaktur, penjualan, proyek, keuangan, operasional, kreatif, hingga pengembangan unit bisnis.',
    'Setiap peran memiliki kontribusi penting dalam menjaga ekosistem grup tetap bergerak. Di sini, pekerjaan bukan hanya tentang menyelesaikan tugas, tetapi juga tentang belajar dari proses, membangun kualitas kerja, dan memberi manfaat melalui peran masing-masing.'
  ],
  image: {
    src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=85',
    alt: 'Tim Kembar Futagroup bekerja bersama'
  }
}

export const careersJobsSection = {
  eyebrow: 'Lowongan Tersedia',
  title: 'Temukan posisi yang sesuai dengan Anda',
  // CONTOH: posisi di bawah adalah ilustrasi bidang yang umum dibuka, bukan lowongan aktif.
  note: 'Posisi berikut merupakan contoh ilustrasi bidang yang umum dibuka di lingkungan grup. Untuk lowongan yang sedang aktif, silakan hubungi kami.'
}

export const workCulture = {
  eyebrow: 'Budaya Kerja',
  title: 'Nilai yang hadir dalam pekerjaan sehari-hari',
  values: [
    {
      title: 'Tanggung Jawab',
      description: 'Menjaga amanah dalam setiap pekerjaan.'
    },
    {
      title: 'Kerja Sama',
      description: 'Bergerak bersama lintas tim dan unit bisnis.'
    },
    {
      title: 'Pembelajaran',
      description: 'Terus memperbaiki cara kerja dan kemampuan.'
    },
    {
      title: 'Ketelitian',
      description: 'Menjaga kualitas dalam proses dan hasil kerja.'
    }
  ]
}

export const careerAreas = {
  eyebrow: 'Area Karir',
  title: 'Berbagai ruang untuk mengambil peran',
  description: 'Kembar Futagroup membuka ruang karir di berbagai fungsi kerja, dari produksi dan operasional lapangan hingga pemasaran, administrasi, kreatif, dan pengembangan bisnis.',
  items: [
    {
      title: 'Produksi & Operasional',
      description: 'Peran yang berhubungan dengan proses produksi, workshop, dan operasional lapangan.'
    },
    {
      title: 'Engineering & Manufaktur',
      description: 'Peran teknis dalam perancangan, permesinan, dan pengembangan produk manufaktur.'
    },
    {
      title: 'Sales, Marketing & Project',
      description: 'Peran yang menghubungkan produk dan solusi grup dengan pelanggan serta proyek di lapangan.'
    },
    {
      title: 'Finance & Administration',
      description: 'Peran yang menjaga keuangan, administrasi, dan operasional internal grup tetap tertata.'
    }
  ]
}

export const workEnvironment = {
  title: 'Suasana Kerja',
  description: 'Lingkungan kerja di Kembar Futagroup mempertemukan berbagai latar belakang dan keahlian. Ada yang bekerja di workshop, di lapangan, di kantor, di proyek, hingga di ruang kreatif digital.'
}

export type JobListing = {
  slug: string
  title: string
  division: string
  city: string
  type: string
  datePosted: string
  validThrough: string
  description: string
  responsibilities: string[]
  requirements: string[]
}

export const jobListings: JobListing[] = [
  {
    slug: 'staff-quality-control',
    division: 'Produksi',
    title: 'Staff Quality Control',
    city: 'Klaten, Jawa Tengah',
    type: 'Penuh Waktu',
    datePosted: '2026-07-10',
    validThrough: '2026-08-09',
    description: 'Memastikan setiap produk cor logam dan komponen mesin yang keluar dari fasilitas produksi memenuhi standar mutu sebelum dikirim ke pelanggan.',
    responsibilities: [
      'Melakukan pemeriksaan dimensi dan visual pada produk hasil produksi',
      'Mencatat dan melaporkan hasil inspeksi ke tim produksi',
      'Berkoordinasi dengan tim produksi untuk penanganan produk cacat',
      'Menjaga dokumentasi standar mutu tetap mutakhir'
    ],
    requirements: [
      'Pendidikan minimal D3 Teknik Mesin/Industri',
      'Memahami dasar pengukuran dan alat ukur (jangka sorong, mikrometer)',
      'Teliti dan terbiasa bekerja dengan target waktu',
      'Pengalaman di bidang QC manufaktur menjadi nilai tambah'
    ]
  },
  {
    slug: 'teknisi-mesin-produksi',
    division: 'Produksi',
    title: 'Teknisi Mesin Produksi',
    city: 'Klaten, Jawa Tengah',
    type: 'Penuh Waktu',
    datePosted: '2026-07-10',
    validThrough: '2026-08-09',
    description: 'Mengoperasikan dan merawat mesin produksi agar proses pengecoran, fabrikasi, dan permesinan berjalan lancar sesuai target produksi.',
    responsibilities: [
      'Mengoperasikan mesin produksi sesuai prosedur kerja',
      'Melakukan perawatan berkala dan perbaikan ringan mesin',
      'Melaporkan kendala teknis kepada supervisor produksi',
      'Menjaga kebersihan dan keselamatan area kerja'
    ],
    requirements: [
      'Pendidikan minimal SMK Teknik Mesin/Otomasi',
      'Memahami cara kerja mesin produksi dan perkakas bengkel',
      'Bersedia bekerja dengan sistem shift',
      'Pengalaman di industri manufaktur menjadi nilai tambah'
    ]
  },
  {
    slug: 'marketing-executive',
    division: 'Sales & Marketing',
    title: 'Marketing Executive',
    city: 'Yogyakarta',
    type: 'Penuh Waktu',
    datePosted: '2026-07-10',
    validThrough: '2026-08-09',
    description: 'Mengembangkan strategi pemasaran dan menjalin hubungan dengan calon klien untuk produk dan solusi dari unit bisnis grup.',
    responsibilities: [
      'Menyusun dan menjalankan rencana pemasaran produk dan solusi',
      'Membangun serta menjaga hubungan dengan klien dan mitra',
      'Menyiapkan materi presentasi dan penawaran untuk calon klien',
      'Memantau tren pasar dan aktivitas kompetitor'
    ],
    requirements: [
      'Pendidikan minimal S1 Marketing/Manajemen/Teknik',
      'Pengalaman minimal 2 tahun di bidang pemasaran B2B',
      'Komunikatif dan terbiasa melakukan presentasi ke klien',
      'Bersedia melakukan perjalanan dinas'
    ]
  },
  {
    slug: 'drafter-desainer-produk',
    division: 'Engineering',
    title: 'Drafter & Desainer Produk',
    city: 'Klaten, Jawa Tengah',
    type: 'Kontrak',
    datePosted: '2026-07-10',
    validThrough: '2026-08-09',
    description: 'Menerjemahkan kebutuhan produk menjadi gambar teknik dan desain yang siap diproduksi oleh tim engineering.',
    responsibilities: [
      'Membuat gambar teknik dan detail produk menggunakan software CAD',
      'Berkoordinasi dengan tim engineering dan produksi',
      'Melakukan revisi desain berdasarkan hasil evaluasi produksi',
      'Menyimpan dan mengelola dokumentasi gambar teknik'
    ],
    requirements: [
      'Pendidikan minimal D3 Teknik Mesin/Desain Produk',
      'Menguasai AutoCAD dan/atau SolidWorks',
      'Memahami dasar toleransi dan standar gambar teknik',
      'Terbiasa bekerja dengan tenggat waktu proyek'
    ]
  },
  {
    slug: 'staff-purchasing',
    division: 'Purchasing',
    title: 'Staff Purchasing',
    city: 'Klaten, Jawa Tengah',
    type: 'Penuh Waktu',
    datePosted: '2026-07-10',
    validThrough: '2026-08-09',
    description: 'Mengelola proses pengadaan bahan baku dan material produksi agar kebutuhan operasional grup terpenuhi tepat waktu.',
    responsibilities: [
      'Mencari dan mengevaluasi pemasok bahan baku dan material',
      'Membuat dan memproses purchase order',
      'Memantau jadwal pengiriman dan ketersediaan stok',
      'Bernegosiasi harga dan syarat pembayaran dengan pemasok'
    ],
    requirements: [
      'Pendidikan minimal D3/S1 semua jurusan',
      'Pengalaman di bidang purchasing/procurement menjadi nilai tambah',
      'Teliti dan terbiasa bekerja dengan angka',
      'Mampu bernegosiasi dan berkomunikasi dengan baik'
    ]
  },
  {
    slug: 'magang-engineering',
    division: 'Engineering',
    title: 'Magang Engineering',
    city: 'Klaten, Jawa Tengah',
    type: 'Magang',
    datePosted: '2026-07-10',
    validThrough: '2026-08-09',
    description: 'Kesempatan belajar langsung di tim engineering, mulai dari riset produk hingga proses produksi di fasilitas manufaktur grup.',
    responsibilities: [
      'Membantu tim engineering dalam riset dan pengembangan produk',
      'Ikut serta dalam proses evaluasi teknis di lapangan',
      'Membantu dokumentasi teknis dan laporan proyek',
      'Belajar langsung dari proses produksi di berbagai unit bisnis'
    ],
    requirements: [
      'Mahasiswa aktif Teknik Mesin/Industri/terkait',
      'Bersedia magang minimal 3 bulan',
      'Memiliki rasa ingin tahu tinggi dan mau belajar',
      'Diutamakan berdomisili di Klaten atau sekitarnya'
    ]
  }
]
