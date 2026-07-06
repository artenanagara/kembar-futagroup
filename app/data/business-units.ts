export type BusinessUnit = {
  slug: string
  name: string
  description: string
  navDescription: string
  category: string
  group: 'manufaktur-logam' | 'mesin-teknik' | 'material-lansekap' | 'agribisnis'
  image: string
  cardImage?: string
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
    description: 'Kembar Futa Group menaungi sejumlah unit usaha yang bekerja sebagai satu ekosistem — dari pengecoran logam, manufaktur, material lansekap, hingga properti.',
    image: 'https://images.unsplash.com/photo-1779608993307-456d4a9ab4fa?auto=format&fit=crop&w=1800&q=85'
  },
  intro: {
    eyebrow: 'Satu Ekosistem',
    title: 'Bukan sekumpulan usaha terpisah,tapi satu ekosistem yang saling menopang.',
    paragraphs: [
      'Setiap unit usaha di Kembar Futa Group lahir dari satu akar yang sama: keahlian mengolah logam di Klaten. Dari sana, masing-masing tumbuh dengan fokusnya sendiri — ada yang mendalami pengecoran, manufaktur mesin, material lansekap, hingga pengembangan properti.',
      'Yang membuatnya menjadi ekosistem adalah cara mereka terhubung. Bahan baku, kapabilitas produksi, dan jaringan pasar mengalir antar unit, sehingga kekuatan di satu lini menjadi nilai tambah bagi lini lainnya.'
    ]
  },
  filters: [
    { label: 'Semua', value: 'all' },
    { label: 'Manufaktur & Logam', value: 'manufaktur-logam' },
    { label: 'Mesin & Teknik', value: 'mesin-teknik' },
    { label: 'Material & Lansekap', value: 'material-lansekap' }
  ]
} as const

export const businessUnits: BusinessUnit[] = [
  {
    slug: 'futake-indonesia',
    name: 'Futake Indonesia',
    description: 'Merek konsumen dan industri nasional yang menyatukan produk grup mendukung proyek strategi nasional',
    navDescription: 'Merek konsumen dan industri untuk proyek strategis nasional.',
    category: 'Manufaktur',
    group: 'manufaktur-logam',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=900&q=80',
    cardImage: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=900&q=80',
    about: {
      eyebrow: 'Tentang Unit',
      title: 'Futake Indonesia menjadi wajah produk manufaktur grup untuk kebutuhan proyek, kawasan, dan ruang publik.',
      paragraphs: [
        'Unit ini menghubungkan kemampuan produksi internal Kembar Futa Group dengan kebutuhan pasar yang membutuhkan produk siap pakai, rapi secara desain, dan konsisten secara kualitas.',
        'Futake Indonesia bekerja sebagai kanal brand, katalog produk, dan distribusi sehingga output dari lini pengecoran, fabrikasi, serta finishing dapat menjangkau proyek pemerintah, swasta, dan konsumen profesional.'
      ]
    },
    focus: {
      title: 'Ruang kerja Futake Indonesia berpusat pada produk utilitas dan elemen ruang publik siap deploy.',
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
    slug: 'kembar-teknika',
    name: 'Kembar Teknika',
    description: 'Unit teknik yang merancang mesin, komponen custom, dan solusi produksi untuk kebutuhan industri.',
    navDescription: 'Perancangan mesin dan solusi produksi untuk industri.',
    category: 'Manufaktur',
    group: 'mesin-teknik',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    cardImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    about: {
      eyebrow: 'Tentang Unit',
      title: 'Kembar Teknika fokus pada rekayasa mesin, komponen custom, dan solusi produksi untuk kebutuhan industri.',
      paragraphs: [
        'Unit ini menjadi ruang engineering di dalam ekosistem grup. Pekerjaannya dimulai dari memahami masalah produksi, menerjemahkannya menjadi rancangan teknis, lalu mewujudkannya melalui proses fabrikasi dan perakitan.',
        'Kembar Teknika mendukung kebutuhan internal grup sekaligus melayani kebutuhan eksternal yang memerlukan mesin tepat guna, komponen industri, serta modifikasi alat produksi.'
      ]
    },
    focus: {
      title: 'Lingkup pekerjaan Kembar Teknika mencakup desain teknis sampai pengerjaan mesin siap pakai.',
      description: 'Pendekatannya praktis: mesin harus menyelesaikan masalah kerja, mudah dioperasikan, dan dapat dirawat oleh pengguna.',
      items: [
        {
          title: 'Perancangan mesin',
          description: 'Pengembangan konsep, layout, mekanisme kerja, dan kebutuhan teknis berdasarkan proses produksi.'
        },
        {
          title: 'Fabrikasi dan perakitan',
          description: 'Pengerjaan rangka, komponen, sistem penggerak, serta integrasi mesin sampai siap diuji.'
        },
        {
          title: 'Komponen custom',
          description: 'Pembuatan part khusus untuk lini produksi, alat bantu kerja, jig, fixture, dan kebutuhan teknis lainnya.'
        },
        {
          title: 'Optimasi proses',
          description: 'Modifikasi mesin atau alur kerja agar produksi lebih efisien, stabil, dan sesuai kapasitas target.'
        }
      ]
    }
  },
  {
    slug: 'zwilling',
    name: 'Zwilling',
    description: 'Brand produk industri dan lansekap yang menghadirkan elemen ruang publik siap pakai.',
    navDescription: 'Produk industri dan lansekap siap pakai untuk ruang publik.',
    category: 'Manufaktur',
    group: 'material-lansekap',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80',
    cardImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80',
    about: {
      eyebrow: 'Tentang Unit',
      title: 'Zwilling menghadirkan produk industri dan lansekap untuk ruang luar yang fungsional, kuat, dan siap digunakan.',
      paragraphs: [
        'Unit ini berperan sebagai pengembang lini produk yang dekat dengan kebutuhan kawasan, taman, pedestrian, dan ruang publik. Fokusnya adalah menghasilkan elemen luar ruang yang memiliki fungsi jelas sekaligus tampilan yang layak untuk lingkungan modern.',
        'Dengan dukungan ekosistem produksi grup, Zwilling dapat bergerak dari produk katalog hingga kebutuhan custom untuk proyek dengan karakter desain tertentu.'
      ]
    },
    focus: {
      title: 'Zwilling bekerja pada pengembangan produk outdoor yang menggabungkan material, bentuk, dan fungsi.',
      description: 'Setiap produk diarahkan agar tahan penggunaan luar ruang, mudah dipasang, dan tetap relevan secara visual.',
      items: [
        {
          title: 'Elemen lansekap',
          description: 'Produk pendukung taman, pedestrian, area duduk, wayfinding, dan kebutuhan ruang komunal.'
        },
        {
          title: 'Produk berbasis logam',
          description: 'Pemanfaatan komponen cor, plat, pipa, dan struktur logam untuk produk ruang luar.'
        },
        {
          title: 'Finishing outdoor',
          description: 'Pengembangan warna, tekstur, dan perlindungan permukaan untuk penggunaan luar ruang.'
        },
        {
          title: 'Produk siap proyek',
          description: 'Penyediaan lini produk yang dapat dipilih, disesuaikan, dan diproduksi sesuai kebutuhan proyek.'
        }
      ]
    }
  },
  {
    slug: 'ayam-tentrem-logam',
    name: 'Ayam Tentrem Logam',
    description: 'Pusat pengolahan logam dengan pengalaman panjang dalam pengecoran dan fabrikasi.',
    navDescription: 'Pengecoran dan fabrikasi logam berpengalaman panjang.',
    category: 'Manufaktur',
    group: 'manufaktur-logam',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80',
    cardImage: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80',
    about: {
      eyebrow: 'Tentang Unit',
      title: 'Ayam Tentrem Logam adalah basis pengolahan logam yang menopang kemampuan pengecoran dan fabrikasi grup.',
      paragraphs: [
        'Unit ini membawa pengalaman panjang dalam pengerjaan logam, terutama untuk kebutuhan produk cor, komponen utilitas, dan elemen teknis yang membutuhkan kekuatan material.',
        'Sebagai salah satu akar kapabilitas Kembar Futa Group, Ayam Tentrem Logam menjadi penghubung antara kebutuhan desain produk dan proses produksi berbasis logam.'
      ]
    },
    focus: {
      title: 'Lingkup utama Ayam Tentrem Logam berada di proses foundry, fabrikasi, dan finishing komponen logam.',
      description: 'Pekerjaan disusun untuk menjaga ketepatan bentuk, kekuatan material, dan konsistensi hasil akhir.',
      items: [
        {
          title: 'Pengecoran logam',
          description: 'Produksi komponen besi cor dan aluminium untuk kebutuhan utilitas, mesin, dan elemen ruang publik.'
        },
        {
          title: 'Pola dan cetakan',
          description: 'Pembuatan pola, cetakan, serta penyesuaian dimensi agar produk sesuai kebutuhan teknis.'
        },
        {
          title: 'Fabrikasi lanjutan',
          description: 'Pemotongan, penyambungan, penghalusan, dan pengerjaan struktur pendukung setelah proses cor.'
        },
        {
          title: 'Kontrol kualitas',
          description: 'Pemeriksaan bentuk, permukaan, kekuatan, dan kesiapan produk sebelum masuk proses finishing atau pengiriman.'
        }
      ]
    }
  },
  {
    slug: 'futago-karya',
    name: 'Futago Karya',
    description: 'Mendukung pengerjaan proyek kawasan melalui produk utilitas, landscape, dan infrastruktur.',
    navDescription: 'Produk utilitas, lansekap, dan infrastruktur kawasan.',
    category: 'Manufaktur',
    group: 'material-lansekap',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=900&q=80',
    cardImage: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=900&q=80',
    about: {
      eyebrow: 'Tentang Unit',
      title: 'Futago Karya mendukung pengerjaan proyek kawasan melalui produk utilitas, lansekap, dan infrastruktur.',
      paragraphs: [
        'Unit ini bergerak dekat dengan kebutuhan proyek yang membutuhkan pasokan produk, penyesuaian spesifikasi, serta koordinasi antar lini pekerjaan.',
        'Futago Karya menjembatani kemampuan produksi grup dengan kebutuhan lapangan, mulai dari elemen drainase, pedestrian, utilitas kawasan, hingga produk pendukung ruang luar.'
      ]
    },
    focus: {
      title: 'Fokus Futago Karya adalah memastikan kebutuhan produk proyek dapat dirancang, diproduksi, dan dipenuhi secara terarah.',
      description: 'Pekerjaannya menuntut koordinasi antara spesifikasi teknis, jadwal produksi, dan kebutuhan implementasi di lapangan.',
      items: [
        {
          title: 'Produk utilitas kawasan',
          description: 'Grating, manhole cover, bollard, street furniture, dan elemen pendukung infrastruktur kawasan.'
        },
        {
          title: 'Lansekap dan pedestrian',
          description: 'Produk pendukung taman, trotoar, ruang komunal, dan koridor publik.'
        },
        {
          title: 'Pemenuhan spesifikasi proyek',
          description: 'Penyesuaian material, ukuran, desain, dan finishing mengikuti kebutuhan gambar kerja atau dokumen teknis.'
        },
        {
          title: 'Koordinasi supply',
          description: 'Pengaturan prioritas produksi, pengiriman, dan kesiapan produk untuk kebutuhan pelaksanaan proyek.'
        }
      ]
    }
  },
  {
    slug: 'tvilling',
    name: 'Tvilling',
    description: 'Menghubungkan kebutuhan desain, material, dan produksi untuk produk ruang luar yang presisi.',
    navDescription: 'Desain dan produksi presisi untuk produk ruang luar.',
    category: 'Manufaktur',
    group: 'material-lansekap',
    image: 'https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=900&q=80',
    cardImage: 'https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=900&q=80',
    about: {
      eyebrow: 'Tentang Unit',
      title: 'Tvilling menghubungkan desain, material, dan produksi untuk produk ruang luar yang presisi.',
      paragraphs: [
        'Unit ini berangkat dari kebutuhan produk outdoor yang tidak hanya kuat, tetapi juga membutuhkan proporsi, detail, dan pengalaman visual yang baik.',
        'Tvilling bekerja di antara kebutuhan desainer, arsitek, pengembang kawasan, dan tim produksi untuk menerjemahkan ide menjadi produk yang realistis dibuat.'
      ]
    },
    focus: {
      title: 'Lingkup Tvilling berada pada pengembangan produk, detail desain, dan produksi elemen ruang luar.',
      description: 'Fokusnya adalah menjaga agar bentuk, fungsi, material, dan proses produksi bertemu dalam satu solusi yang layak dipakai.',
      items: [
        {
          title: 'Pengembangan desain',
          description: 'Penyusunan konsep bentuk, proporsi, dan detail produk berdasarkan kebutuhan ruang atau identitas proyek.'
        },
        {
          title: 'Material dan konstruksi',
          description: 'Pemilihan kombinasi logam, beton, batu, kayu, atau finishing yang sesuai penggunaan outdoor.'
        },
        {
          title: 'Prototipe dan penyesuaian',
          description: 'Pembuatan contoh, revisi detail, dan pengujian praktis sebelum produksi lebih lanjut.'
        },
        {
          title: 'Produksi presisi',
          description: 'Koordinasi pengerjaan agar dimensi, sambungan, permukaan, dan hasil akhir sesuai rancangan.'
        }
      ]
    }
  },
  {
    slug: 'futastone',
    name: 'Futastone',
    description: 'Mengolah material batu alam dan produk cetak beton untuk kebutuhan lansekap dan konstruksi.',
    navDescription: 'Material batu alam dan produk cetak beton untuk lansekap.',
    category: 'Manufaktur',
    group: 'material-lansekap',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=900&q=80',
    cardImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=900&q=80',
    about: {
      eyebrow: 'Tentang Unit',
      title: 'Futastone mengolah material batu alam dan produk cetak untuk kebutuhan lansekap, arsitektur, dan konstruksi.',
      paragraphs: [
        'Unit ini memperluas kemampuan grup dari logam ke material hardscape. Produk yang dikerjakan mendukung lantai, dinding, elemen taman, area publik, dan kebutuhan finishing kawasan.',
        'Futastone mengutamakan pengolahan material yang rapi, konsisten, dan mudah diaplikasikan pada proyek yang membutuhkan karakter natural maupun modern.'
      ]
    },
    focus: {
      title: 'Fokus Futastone berada pada material hardscape yang siap masuk ke pekerjaan lansekap dan arsitektural.',
      description: 'Setiap produk diarahkan agar kuat secara fungsi, stabil secara dimensi, dan punya kualitas permukaan yang layak tampil.',
      items: [
        {
          title: 'Batu alam',
          description: 'Pemotongan, pemilahan, dan pengolahan batu untuk lantai, dinding, taman, dan elemen dekoratif.'
        },
        {
          title: 'Produk cetak',
          description: 'Pengerjaan produk berbasis beton, terrazzo, atau material cetak untuk kebutuhan lansekap dan konstruksi.'
        },
        {
          title: 'Finishing permukaan',
          description: 'Pengaturan tekstur, warna, pola, dan treatment permukaan sesuai kebutuhan desain.'
        },
        {
          title: 'Supply proyek',
          description: 'Pemenuhan material hardscape untuk kawasan, taman, ruang publik, properti, dan proyek komersial.'
        }
      ]
    }
  },
  {
    slug: 'futafarm',
    name: 'Futafarm',
    description: 'Unit agribisnis grup yang mengelola produksi dan distribusi hasil pertanian serta peternakan.',
    navDescription: 'Produksi dan distribusi hasil pertanian serta peternakan.',
    category: 'Agribisnis',
    group: 'agribisnis',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=900&q=80',
    cardImage: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=900&q=80',
    about: {
      eyebrow: 'Tentang Unit',
      title: 'Futafarm menjadi lini agribisnis grup yang mengelola produksi, pengolahan, dan distribusi hasil pertanian serta peternakan.',
      paragraphs: [
        'Unit ini memperluas ekosistem Kembar Futa Group ke sektor pangan dan agribisnis. Fokusnya adalah membangun proses yang lebih tertata dari hulu produksi sampai penyaluran produk.',
        'Futafarm juga membuka ruang kolaborasi dengan lingkungan sekitar melalui pengelolaan komoditas, pemanfaatan sumber daya, dan pengembangan rantai pasok lokal.'
      ]
    },
    focus: {
      title: 'Lingkup Futafarm mencakup produksi agribisnis, pengelolaan komoditas, dan distribusi hasil.',
      description: 'Kegiatan unit ini diarahkan untuk menjaga kesinambungan pasokan, kualitas hasil, dan hubungan yang baik dengan pasar maupun mitra lokal.',
      items: [
        {
          title: 'Produksi pertanian',
          description: 'Pengelolaan budidaya, panen, dan penyiapan hasil pertanian sesuai kebutuhan pasar.'
        },
        {
          title: 'Peternakan dan hasil turunan',
          description: 'Pengembangan aktivitas peternakan, pengelolaan hasil, dan pemanfaatan sumber daya pendukung.'
        },
        {
          title: 'Distribusi hasil',
          description: 'Penyaluran produk agribisnis ke jaringan pasar, mitra, dan kebutuhan internal ekosistem.'
        },
        {
          title: 'Kolaborasi lokal',
          description: 'Penguatan rantai pasok bersama petani, peternak, dan mitra sekitar untuk dampak yang berkelanjutan.'
        }
      ]
    }
  }
]
