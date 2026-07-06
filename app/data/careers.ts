export const careersHero = {
  breadcrumbs: ['Beranda', 'Karir'],
  title: 'Karir',
  description: 'Bangun kariermu bersama Kembar Futagroup dan jadi bagian dari ekosistem manufaktur yang terus tumbuh dari Klaten untuk Indonesia.',
  image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1800&q=85'
}

export const careersIntro = {
  eyebrow: 'Mengapa Bergabung',
  title: 'Tumbuh bersama tim yang membangun industri dari akarnya.',
  paragraphs: [
    'Kami percaya pertumbuhan perusahaan berjalan beriringan dengan pertumbuhan setiap orang di dalamnya. Di Kembar Futagroup, kamu belajar langsung dari proses produksi, engineering, hingga pengembangan bisnis di berbagai unit usaha grup.',
    'Dari lantai produksi di Klaten hingga proyek berskala nasional, setiap peran punya kontribusi nyata terhadap industri dan pembangunan Indonesia.'
  ],
  image: {
    src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=85',
    alt: 'Tim engineering Kembar Futagroup berdiskusi'
  }
}

export const careerBenefits = [
  {
    number: '01',
    title: 'Pengembangan Karier',
    description: 'Pelatihan teknis dan jenjang karier yang jelas di setiap unit usaha grup.'
  },
  {
    number: '02',
    title: 'Lingkungan Kolaboratif',
    description: 'Bekerja lintas unit usaha dengan tim yang saling mendukung dan terbuka.'
  },
  {
    number: '03',
    title: 'Kesejahteraan Karyawan',
    description: 'Jaminan kesehatan, tunjangan, dan keseimbangan kerja yang terjaga.'
  }
]

export type JobListing = {
  slug: string
  title: string
  city: string
  type: string
  description: string
  responsibilities: string[]
  requirements: string[]
}

export const jobListings: JobListing[] = [
  {
    slug: 'staff-quality-control',
    title: 'Staff Quality Control',
    city: 'Klaten, Jawa Tengah',
    type: 'Penuh Waktu',
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
    title: 'Teknisi Mesin Produksi',
    city: 'Klaten, Jawa Tengah',
    type: 'Penuh Waktu',
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
    title: 'Marketing Executive',
    city: 'Yogyakarta',
    type: 'Penuh Waktu',
    description: 'Mengembangkan strategi pemasaran dan menjalin hubungan dengan calon klien untuk produk dan solusi dari unit usaha grup.',
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
    title: 'Drafter & Desainer Produk',
    city: 'Klaten, Jawa Tengah',
    type: 'Kontrak',
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
    title: 'Staff Purchasing',
    city: 'Klaten, Jawa Tengah',
    type: 'Penuh Waktu',
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
    title: 'Magang Engineering',
    city: 'Klaten, Jawa Tengah',
    type: 'Magang',
    description: 'Kesempatan belajar langsung di tim engineering, mulai dari riset produk hingga proses produksi di fasilitas manufaktur grup.',
    responsibilities: [
      'Membantu tim engineering dalam riset dan pengembangan produk',
      'Ikut serta dalam proses evaluasi teknis di lapangan',
      'Membantu dokumentasi teknis dan laporan proyek',
      'Belajar langsung dari proses produksi di berbagai unit usaha'
    ],
    requirements: [
      'Mahasiswa aktif Teknik Mesin/Industri/terkait',
      'Bersedia magang minimal 3 bulan',
      'Memiliki rasa ingin tahu tinggi dan mau belajar',
      'Diutamakan berdomisili di Klaten atau sekitarnya'
    ]
  }
]

export const careersListImage = {
  src: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=85',
  alt: 'Fasilitas produksi Kembar Futagroup'
}
