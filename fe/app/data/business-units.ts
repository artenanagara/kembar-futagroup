export type BusinessUnitGroup = 'manufaktur-logam' | 'channel-pasar' | 'material-lansekap' | 'properti'

export type BusinessUnit = {
  slug: string
  name: string
  description: string
  navDescription: string
  category: string
  group: BusinessUnitGroup
  image: string
  cardImage?: string
  /** URL website resmi unit usaha; tidak semua unit memiliki situs publik. */
  website?: string
  about: {
    eyebrow: string
    title: string
    paragraphs: string[]
  }
  focus: {
    title: string
    description: string
    items: {
      title: string
      description: string
    }[]
  }
}

export const businessUnitPage = {
  hero: {
    breadcrumbs: ['Beranda', 'Unit Bisnis'],
    title: 'Unit Bisnis',
    description: 'Kembar Futagroup menaungi sejumlah unit usaha yang bekerja sebagai satu ekosistem — dari pengecoran logam, manufaktur, material lansekap, hingga properti.',
    image: 'https://images.unsplash.com/photo-1779608993307-456d4a9ab4fa?auto=format&fit=crop&w=1800&q=85'
  },
  intro: {
    eyebrow: 'Satu Ekosistem',
    title: 'Setiap unit memiliki peran berbeda, namun bergerak dalam arah yang sama.',
    paragraphs: [
      'Kembar Futagroup menaungi delapan unit usaha yang bergerak di empat lini industri: logam, manufaktur, lansekap, dan infrastruktur. Setiap unit dijalankan secara independen dengan standar kerja masing-masing — namun terhubung dalam satu rantai nilai yang saling mendukung.',
      'Dari pengolahan bahan baku logam di hulu, produksi komponen dan manufaktur di tengah, hingga pengembangan lahan dan infrastruktur di hilir, setiap unit mengisi peran spesifik dalam ekosistem industri grup.'
    ]
  },
  filters: [
    { label: 'Semua', value: 'all' },
    { label: 'Manufaktur & Logam', value: 'manufaktur-logam' },
    { label: 'Channel Pasar', value: 'channel-pasar' },
    { label: 'Material & Lansekap', value: 'material-lansekap' },
    { label: 'Properti', value: 'properti' }
  ]
} as const

export const businessUnits: BusinessUnit[] = [
  {
    slug: 'ayem-tentrem-logam',
    name: 'Ayem Tentrem Logam',
    description: 'Pusat pengecoran logam yang mengolah besi cor dan aluminium menjadi komponen dasar produksi.',
    navDescription: 'Pusat pengecoran logam untuk komponen dasar produksi.',
    category: 'Manufaktur',
    group: 'manufaktur-logam',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80',
    cardImage: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80',
    website: 'https://ayemtentremlogam.co.id/',
    about: {
      eyebrow: 'Tentang Unit',
      title: 'Ayem Tentrem Logam menjadi titik awal produksi grup, mengolah logam cair menjadi komponen siap pakai.',
      paragraphs: [
        'Ayem Tentrem Logam menjalankan proses pengecoran logam — titik awal dari seluruh rangkaian produksi Kembar Futagroup. Berbasis di Ceper, Klaten, salah satu sentra industri cor logam tertua di Indonesia, di sinilah besi cor dan aluminium diolah dari bahan mentah menjadi komponen dasar yang siap diteruskan ke tahap produksi berikutnya.',
        'Selain komponen produksi, unit ini dikenal sebagai pengrajin logam cor antik: tiang lampu taman dan PJU, pagar antik, kursi antik, manhole cover, grill cover, bollard, hingga ornamen logam dekoratif. Ia menjadi fondasi produksi bagi unit-unit lain dalam ekosistem, khususnya Kembar Teknika dan Zwilling yang menangani perakitan dan penyelesaian produk akhir — setiap komponen disesuaikan dengan spesifikasi teknis yang dibutuhkan, baik untuk produk katalog maupun proyek custom.',
        'Selain menopang produksi internal grup, Ayem Tentrem Logam juga menjadi mitra bagi unit trading dan proyek seperti Futago Karya, memastikan pasokan komponen logam tetap konsisten ketika kebutuhan proyek berskala besar datang secara bersamaan.'
      ]
    },
    focus: {
      title: 'Ruang kerja Ayem Tentrem Logam berpusat pada pengecoran logam dan penyediaan komponen dasar produksi.',
      description: 'Setiap proses diarahkan untuk menghasilkan komponen logam yang presisi, konsisten, dan siap diteruskan ke tahap produksi berikutnya.',
      items: [
        {
          title: 'Pengecoran besi cor',
          description: 'Mengolah besi cor menjadi komponen dasar sesuai spesifikasi produk dan proyek.'
        },
        {
          title: 'Pengecoran aluminium',
          description: 'Produksi komponen aluminium untuk kebutuhan yang membutuhkan bobot lebih ringan.'
        },
        {
          title: 'Komponen custom',
          description: 'Penyesuaian bentuk, ukuran, dan spesifikasi sesuai kebutuhan unit produksi lain dalam grup.'
        },
        {
          title: 'Quality check awal',
          description: 'Pemeriksaan kualitas hasil cor sebelum diteruskan ke tahap perakitan dan finishing.'
        }
      ]
    }
  },
  {
    slug: 'kembar-teknika',
    name: 'Kembar Teknika',
    description: 'Unit perakitan mesin tepat guna untuk kebutuhan produksi industri dan UMKM.',
    navDescription: 'Perakitan mesin tepat guna untuk industri dan UMKM.',
    category: 'Manufaktur',
    group: 'manufaktur-logam',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    cardImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    website: 'https://kembarteknika.com/',
    about: {
      eyebrow: 'Tentang Unit',
      title: 'Kembar Teknika merakit mesin tepat guna yang membuat produksi lebih efisien, dari skala UMKM hingga kebutuhan internal grup.',
      paragraphs: [
        'Kembar Teknika adalah unit cor logam dan permesinan dengan pengalaman produksi lebih dari sepuluh tahun di Ceper, Klaten. Fokusnya pada perakitan mesin dan peralatan produksi tepat guna — mulai dari mesin cetak bata dan pengolah pangan hingga peralatan produksi lain — dengan perhatian khusus pada kebutuhan usaha skala kecil dan menengah (UMKM).',
        'Seluruh produk dikerjakan secara custom mengikuti kebutuhan pelanggan: jenis produksi, volume, hingga ruang kerja yang tersedia dipahami lebih dulu sebelum mesin dirancang dan dirakit. Sebagai produsen langsung yang mengantongi sertifikasi ISO 45001, TKDN, dan terdaftar di e-Katalog LKPP, Kembar Teknika juga memproduksi street furniture — tiang lampu PJU, bollard, kursi taman, hingga papan nama jalan — yang memperkuat lini produk pedestrian grup.',
        'Selain melayani kebutuhan UMKM, Kembar Teknika turut merancang dan merakit mesin custom untuk mendukung proses produksi di unit-unit lain dalam ekosistem Kembar Futagroup, menjadikannya bagian penting dari efisiensi produksi internal grup secara keseluruhan.'
      ]
    },
    focus: {
      title: 'Ruang kerja Kembar Teknika berpusat pada perakitan mesin tepat guna dan dukungan produksi UMKM.',
      description: 'Setiap mesin dirakit dengan mempertimbangkan skala usaha, kebutuhan produksi, dan kemudahan pengoperasian di lapangan.',
      items: [
        {
          title: 'Perakitan mesin tepat guna',
          description: 'Merakit mesin produksi yang sesuai kebutuhan usaha skala kecil-menengah.'
        },
        {
          title: 'Rekayasa mesin custom',
          description: 'Merancang mesin sesuai spesifikasi khusus untuk kebutuhan proyek atau unit internal.'
        },
        {
          title: 'Dukungan UMKM',
          description: 'Menyediakan alat produksi yang terjangkau dan mudah dioperasikan pelaku usaha kecil.'
        },
        {
          title: 'Kolaborasi produksi grup',
          description: 'Mendukung kebutuhan mesin produksi untuk unit manufaktur lain dalam ekosistem.'
        }
      ]
    }
  },
  {
    slug: 'zwilling',
    name: 'Zwilling',
    description: 'Unit assembly yang menyelesaikan tahap akhir produksi sebelum produk didistribusikan.',
    navDescription: 'Assembly akhir dan quality control sebelum distribusi.',
    category: 'Manufaktur',
    group: 'manufaktur-logam',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80',
    cardImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80',
    about: {
      eyebrow: 'Tentang Unit',
      title: 'Zwilling menjadi titik penyelesaian akhir sebelum produk grup siap didistribusikan.',
      paragraphs: [
        'Zwilling menjalankan proses assembly (perakitan akhir) yang melengkapi rangkaian produksi dari unit-unit manufaktur lain dalam grup. Komponen yang telah dicor oleh Ayem Tentrem Logam dan dirakit sebagian oleh Kembar Teknika, disatukan dan diselesaikan di sini menjadi produk jadi yang siap digunakan atau didistribusikan.',
        'Posisinya di ujung rantai produksi menjadikan Zwilling titik kontrol kualitas terakhir sebelum produk sampai ke tangan unit trading seperti Futago Karya dan Futake. Setiap produk yang melewati tahap ini diperiksa secara menyeluruh, mulai dari kekuatan sambungan, kerapian finishing, hingga kesesuaian dengan spesifikasi awal.',
        'Dengan berada di titik pertemuan seluruh lini manufaktur grup, Zwilling juga berperan menjaga konsistensi kualitas antar-batch produksi, sehingga produk yang keluar dari ekosistem Kembar Futagroup memiliki standar yang sama meskipun berasal dari proses produksi yang berbeda-beda.'
      ]
    },
    focus: {
      title: 'Ruang kerja Zwilling berpusat pada perakitan akhir dan kontrol kualitas produk grup.',
      description: 'Setiap produk melewati tahap perakitan akhir dan pemeriksaan kualitas sebelum dinyatakan siap didistribusikan.',
      items: [
        {
          title: 'Perakitan akhir',
          description: 'Menyatukan komponen dari berbagai unit manufaktur menjadi produk jadi.'
        },
        {
          title: 'Quality control akhir',
          description: 'Pemeriksaan kualitas menyeluruh sebelum produk diteruskan ke distribusi.'
        },
        {
          title: 'Finishing produk',
          description: 'Penyelesaian tampilan dan detail akhir produk sesuai standar grup.'
        },
        {
          title: 'Persiapan distribusi',
          description: 'Pengemasan dan penyiapan produk untuk diteruskan ke unit trading.'
        }
      ]
    }
  },
  {
    slug: 'futago-karya',
    name: 'Futago Karya',
    description: 'Menjalankan proyek kawasan dan trading produk industri ke klien korporat dan pemerintah.',
    navDescription: 'Project management dan trading produk industri.',
    category: 'Project & Trading',
    group: 'channel-pasar',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=900&q=80',
    cardImage: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=900&q=80',
    website: 'https://futagokarya.co.id/',
    about: {
      eyebrow: 'Tentang Unit',
      title: 'Futago Karya menerjemahkan kapasitas produksi grup menjadi proyek kawasan dan infrastruktur yang nyata.',
      paragraphs: [
        'Futago Karya adalah perusahaan utama Kembar Futagroup yang telah beroperasi lebih dari satu dekade dari Krenekan, Klepu, Ceper, Klaten. Unit ini memproduksi dan memasok produk infrastruktur pedestrian — manhole cover, grill cover, steel grating, tiang lampu, kursi taman, plang nama, bollard, tong sampah, guiding block difabel, deck drain, roof drain, hingga cetakan buis beton dan produk cor custom.',
        'Futago Karya menangani sisi project management sekaligus trading: terlibat sejak perencanaan kebutuhan, koordinasi dengan unit produksi seperti Ayem Tentrem Logam, Kembar Teknika, dan Zwilling, hingga pengawalan proses sampai serah terima. Pendekatan ini memungkinkan klien mendapatkan solusi terintegrasi, alih-alih sekadar membeli produk secara terpisah.',
        'Kepercayaan kontraktor, pengembang, dan instansi pemerintah ditopang kredensial yang lengkap: sertifikasi ISO 14001:2015 dan ISO 45001, sertifikat TKDN, serta terdaftar sebagai penyedia di e-Katalog LKPP — memastikan produk grup memenuhi syarat untuk proyek pengadaan pemerintah dari skala kecil hingga besar.'
      ]
    },
    focus: {
      title: 'Ruang kerja Futago Karya berpusat pada manajemen proyek dan trading produk industri berskala besar.',
      description: 'Setiap proyek dikelola dari perencanaan hingga eksekusi, memastikan kebutuhan klien terhubung dengan kapasitas produksi grup.',
      items: [
        {
          title: 'Manajemen proyek kawasan',
          description: 'Mengelola proyek infrastruktur dan kawasan dari perencanaan hingga serah terima.'
        },
        {
          title: 'Trading produk industri',
          description: 'Mendistribusikan produk grup ke klien korporat dan pemerintah.'
        },
        {
          title: 'Koordinasi produksi',
          description: 'Menghubungkan kebutuhan proyek dengan kapasitas unit manufaktur grup.'
        },
        {
          title: 'Solusi utilitas & lansekap',
          description: 'Menyediakan produk utilitas dan elemen lansekap untuk proyek berskala besar.'
        }
      ]
    }
  },
  {
    slug: 'futake',
    name: 'Futake',
    description: 'Kanal retail dan trading yang menghubungkan produk grup dengan pasar nasional.',
    navDescription: 'Kanal retail dan trading untuk pasar nasional.',
    category: 'Retail & Trading',
    group: 'channel-pasar',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=900&q=80',
    cardImage: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=900&q=80',
    website: 'https://futake.co.id/',
    about: {
      eyebrow: 'Tentang Unit',
      title: 'Futake menjadi kanal utama yang menghubungkan produk grup dengan pasar ritel dan proyek di seluruh Indonesia.',
      paragraphs: [
        'PT Futake Indonesia berdiri pada 2019 sebagai kanal brand, katalog produk, dan distribusi Kembar Futagroup, dengan showroom dan basis operasional di Jl. Solo–Jogja, Klepu, Ceper, Klaten. Melalui Futake, produk turunan logam dan permesinan grup — tiang PJU, kursi besi, manhole cover, grating, mesin rakitan, hingga aksesoris sambungan pipa PDAM — dapat dilihat dan dipesan langsung oleh pelanggan.',
        'Futake menghubungkan lini pengecoran, fabrikasi, dan finishing grup dengan proyek pemerintah, swasta, dan konsumen profesional. Jangkauannya telah membentang jauh melampaui basis produksi di Klaten: dari beautifikasi Stasiun Klaten, Jembatan Pandansimo, hingga Alun-alun Toboali — serta mendukung kebutuhan proyek strategis nasional seperti IKN dan kawasan pariwisata prioritas (KSPN), dengan pelanggan dari Bengkulu sampai Labuan Bajo.',
        'Peran ini menjadikan Futake ujung tombak distribusi grup ke konsumen akhir dan mitra bisnis di tingkat nasional, sekaligus menjadi titik umpan balik pasar yang membantu unit produksi memahami kebutuhan yang terus berkembang di lapangan.'
      ]
    },
    focus: {
      title: 'Ruang kerja Futake berpusat pada produk utilitas dan elemen ruang publik siap deploy.',
      description: 'Setiap pekerjaan diarahkan agar produk mudah dipilih, mudah disesuaikan, dan siap masuk ke kebutuhan proyek berskala kecil hingga besar.',
      items: [
        {
          title: 'Produk ruang publik',
          description: 'Bangku taman, bollard, tiang lampu, papan nama jalan, tempat sampah, dan elemen pedestrian.'
        },
        {
          title: 'Katalog dan distribusi',
          description: 'Penyusunan lini produk, kanal penjualan, serta pemenuhan permintaan proyek dan retail profesional.'
        },
        {
          title: 'Custom product',
          description: 'Penyesuaian desain, ukuran, material, dan finishing sesuai spesifikasi kawasan atau brand proyek.'
        },
        {
          title: 'Koordinasi produksi grup',
          description: 'Menghubungkan kebutuhan pelanggan dengan kemampuan foundry, fabrikasi, perakitan, dan finishing internal.'
        }
      ]
    }
  },
  {
    slug: 'futastone',
    name: 'Futastone',
    description: 'Mengolah material batu alam dan produk cetak beton untuk kebutuhan lansekap dan konstruksi.',
    navDescription: 'Material batu alam dan precast untuk lansekap.',
    category: 'Retail & Project',
    group: 'material-lansekap',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=900&q=80',
    cardImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=900&q=80',
    website: 'https://futastone.com/',
    about: {
      eyebrow: 'Tentang Unit',
      title: 'Futastone menyediakan material batu dan precast yang menopang proyek lansekap dan konstruksi grup.',
      paragraphs: [
        'Futastone menangani pengolahan material batu untuk kebutuhan lansekap dan konstruksi: batu alam seperti andesit, marmer, dan palimanan, hingga engineered stone berupa terrazzo dan stamp concrete. Lini produknya mencakup flooring, wastafel terrazzo, pot terrazzo, hingga bollard terrazzo untuk area pedestrian dan ruang publik.',
        'Unit ini menggabungkan sisi produksi/retail dengan keterlibatan langsung dalam proyek. Dari sisi retail, Futastone melayani kebutuhan material skala kecil hingga menengah; dari sisi proyek, ia terlibat dalam perencanaan material untuk konstruksi dan penataan ruang publik berskala besar — termasuk penyesuaian bentuk, tekstur, dan dimensi sesuai desain kawasan.',
        'Material dari Futastone banyak digunakan untuk mendukung proyek kawasan yang dijalankan bersama Futago Karya, khususnya untuk elemen ruang publik dan infrastruktur berbasis batu dan beton — menjadikan unit ini bagian penting dari rantai material grup untuk proyek-proyek berskala kawasan.'
      ]
    },
    focus: {
      title: 'Ruang kerja Futastone berpusat pada material batu dan precast untuk kebutuhan lansekap dan konstruksi.',
      description: 'Setiap material disiapkan agar sesuai kebutuhan struktural maupun estetika proyek, dari skala retail hingga proyek kawasan.',
      items: [
        {
          title: 'Pengolahan batu alam',
          description: 'Produksi material batu untuk kebutuhan lansekap dan elemen bangunan.'
        },
        {
          title: 'Produksi precast',
          description: 'Pembuatan produk cetak beton sesuai spesifikasi proyek.'
        },
        {
          title: 'Material proyek kawasan',
          description: 'Menyediakan material untuk mendukung proyek yang dijalankan Futago Karya.'
        },
        {
          title: 'Retail material',
          description: 'Penjualan material batu dan precast untuk kebutuhan retail dan proyek kecil.'
        }
      ]
    }
  },
  {
    slug: 'futafarm',
    name: 'Futafarm',
    description: 'Mengelola pembibitan tanaman dan pengerjaan lansekap untuk mendukung penghijauan kota dan kawasan.',
    navDescription: 'Pembibitan tanaman dan pengerjaan lansekap.',
    category: 'Retail & Project',
    group: 'material-lansekap',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=900&q=80',
    cardImage: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=900&q=80',
    website: 'https://futafarm.com/',
    about: {
      eyebrow: 'Tentang Unit',
      title: 'Futafarm menghadirkan elemen hijau yang melengkapi proyek lansekap dan penghijauan kota.',
      paragraphs: [
        'Futafarm menjalankan fungsi pembibitan (nursery) dan pengerjaan lansekap dari Klepu, Ceper, Klaten — memadukan keahlian agronomi dengan desain lansekap. Unit ini menyediakan pohon peneduh dan tanaman hias yang telah digunakan dalam berbagai proyek infrastruktur dan pengembangan kawasan, dari ruang publik hingga area komersial, baik swasta maupun pemerintah.',
        'Proses kerja Futafarm dimulai dari pembibitan dan perawatan tanaman hingga siap ditanam, kemudian dilanjutkan dengan perencanaan tata letak dan eksekusi penghijauan di lokasi proyek. Pendekatan ini memungkinkan unit untuk terlibat dari hulu ke hilir dalam setiap kebutuhan elemen hijau — termasuk pemindahan dan perawatan pohon secara langsung oleh tim sendiri.',
        'Futafarm bekerja beriringan dengan Futastone yang menangani sisi material keras (batu dan precast). Kombinasi keduanya memungkinkan grup menawarkan solusi lansekap yang lebih menyeluruh — dari elemen hijau hingga elemen struktural — dalam satu proyek yang sama, tanpa perlu melibatkan vendor terpisah.'
      ]
    },
    focus: {
      title: 'Ruang kerja Futafarm berpusat pada pembibitan dan penghijauan untuk kebutuhan lansekap kota.',
      description: 'Setiap tanaman dan elemen hijau disiapkan agar sesuai kebutuhan penataan ruang publik, taman kota, hingga kawasan.',
      items: [
        {
          title: 'Pembibitan tanaman',
          description: 'Produksi bibit tanaman untuk kebutuhan penghijauan dan lansekap.'
        },
        {
          title: 'Pengerjaan lansekap',
          description: 'Perencanaan dan eksekusi penataan ruang hijau di proyek kawasan.'
        },
        {
          title: 'Penghijauan kota',
          description: 'Mendukung proyek taman kota dan ruang publik berbasis vegetasi.'
        },
        {
          title: 'Retail tanaman',
          description: 'Penjualan tanaman dan elemen hijau untuk kebutuhan retail dan proyek kecil.'
        }
      ]
    }
  },
  {
    slug: 'futago-land',
    name: 'Futago Land',
    description: 'Mengembangkan properti dan kawasan, dari interior-eksterior hingga kerja sama lahan dan pembangunan.',
    navDescription: 'Pengembangan properti, kawasan, dan kerja sama lahan.',
    category: 'Developer & Property',
    group: 'properti',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
    cardImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
    about: {
      eyebrow: 'Tentang Unit',
      title: 'Futago Land mengelola siklus properti grup secara menyeluruh, dari penataan ruang hingga pengembangan kawasan.',
      paragraphs: [
        'Futago Land menjalankan tiga lini bisnis yang saling melengkapi dalam bidang properti: penataan interior & eksterior, jual-beli & sewa properti, serta pengembangan kawasan (developer). Sebagai unit yang menaungi sisi properti dari ekosistem Kembar Futagroup, Futago Land memungkinkan grup untuk terlibat dalam siklus properti secara menyeluruh.',
        'Pada lini interior & eksterior, Futago Land menangani kebutuhan penataan ruang, baik untuk hunian, komersial, maupun kawasan proyek. Pada lini jual-beli & sewa, unit ini memfasilitasi transaksi properti bagi pelanggan yang membutuhkan unit siap huni atau siap sewa.',
        'Pada lini developer, Futago Land membuka dua skema kerja: pembangunan berdasarkan pesanan langsung dari klien, dan kerja sama lahan — baik menggunakan lahan milik sendiri maupun lahan milik pihak lain yang diajak bekerja sama. Fleksibilitas skema ini memungkinkan Futago Land menjangkau kebutuhan properti dari berbagai jenis klien, tanpa terbatas pada satu model bisnis saja.'
      ]
    },
    focus: {
      title: 'Ruang kerja Futago Land berpusat pada tiga lini properti yang saling melengkapi.',
      description: 'Setiap lini bisnis dijalankan untuk melengkapi kebutuhan properti pelanggan, dari penataan ruang hingga kepemilikan baru.',
      items: [
        {
          title: 'Interior & Eksterior',
          description: 'Jasa desain dan pengerjaan ruang, baik dalam maupun luar bangunan.'
        },
        {
          title: 'Jual Beli & Sewa',
          description: 'Transaksi dan pengelolaan properti untuk kebutuhan pelanggan.'
        },
        {
          title: 'Developer (Pesan Bangunan)',
          description: 'Pembangunan properti berdasarkan pesanan langsung dari klien.'
        },
        {
          title: 'Developer (Kerja Sama Lahan)',
          description: 'Pengembangan kawasan melalui kerja sama lahan, baik milik sendiri maupun pihak lain.'
        }
      ]
    }
  }
]
