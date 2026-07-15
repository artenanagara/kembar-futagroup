export type ProductSolutionUnit = {
  name: string
  slug: string
}

export type ProductSolutionDetail = {
  overview: {
    title: string
    paragraphs: string[]
  }
  items: {
    title: string
    description: string
  }[]
  applications: string[]
  units: ProductSolutionUnit[]
}

export type ProductSolution = {
  slug: string
  name: string
  description: string
  navDescription: string
  category: string
  group: 'produk' | 'solusi' | 'layanan'
  image: string
  cardImage?: string
  detail: ProductSolutionDetail
}

export const productSolutionPage = {
  hero: {
    breadcrumbs: ['Beranda', 'Produk & Solusi'],
    title: 'Produk & Solusi',
    description: 'Rangkaian produk manufaktur dan layanan teknis untuk kebutuhan proyek, kawasan, ruang publik, dan proses produksi.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1800&q=85'
  },
  focus: {
    eyebrow: 'Fokus Kami',
    title: 'Kembar Futagroup merancang produk ruang publik, pengecoran, mesin, drainase, lanskap, dan material finishing untuk kebutuhan proyek.',
    paragraphs: [
      'Berbasis di Klaten, Kembar Futagroup dikenal sebagai holding produk logam olahan yang menaungi lini seperti Futake, Futago Karya, Futastone, Futafarm, serta unit manufaktur terkait.',
      'Kapabilitas grup bergerak dari furnitur jalan dan pedestrian, pengecoran logam, mesin tepat guna, penghijauan kota, infrastruktur drainase, hingga batu dan terrazzo.'
    ]
  },
  capabilityBand: {
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1800&q=85',
    labels: ['Furnitur Jalan & Pedestrian', 'Pengecoran Logam & Foundry', 'Mesin Tepat Guna', 'Infrastruktur Drainase']
  },
  industries: [
    {
      name: 'Infrastruktur Kota',
      image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1100&q=85'
    },
    {
      name: 'Ruang Publik',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1100&q=85'
    },
    {
      name: 'Manufaktur',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1100&q=85'
    },
    {
      name: 'Kawasan Industri',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1100&q=85'
    },
    {
      name: 'Pertanian & UMKM',
      image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1100&q=85'
    },
    {
      name: 'Properti & Lansekap',
      image: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1100&q=85'
    },
    {
      name: 'Pengolahan Sampah',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1100&q=85'
    }
  ]
} as const

export const productSolutions: ProductSolution[] = [
  {
    slug: 'furnitur-jalan-pedestrian',
    name: 'Furnitur Jalan & Pedestrian',
    description: 'Tiang lampu PJU oktagonal, bollard, bangku dan meja, papan nama jalan, wayfinding, bak sampah, ubin pemandu atau taktil, hingga pagar antik.',
    navDescription: 'Tiang lampu, bollard, bangku, dan perlengkapan jalan lainnya.',
    category: 'Produk',
    group: 'produk',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85',
    cardImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85',
    detail: {
      overview: {
        title: 'Elemen ruang publik yang membentuk wajah kota, dari trotoar hingga taman.',
        paragraphs: [
          'Furnitur jalan dan pedestrian adalah lini produk grup yang paling terlihat — hadir di trotoar, taman kota, alun-alun, hingga kawasan wisata. Setiap produk dirancang agar fungsional, tahan cuaca, sekaligus memperkuat karakter visual sebuah kawasan.',
          'Diproduksi melalui rantai pengecoran, fabrikasi, dan finishing internal grup, produk kami dapat disesuaikan desain, ukuran, dan materialnya — dari katalog standar hingga desain khusus untuk identitas kawasan tertentu. Produk furnitur jalan grup telah digunakan di kawasan seperti Malioboro (Yogyakarta), Stasiun Klaten, dan Alun-alun Toboali.'
        ]
      },
      items: [
        { title: 'Tiang Lampu PJU & Taman', description: 'Tiang lampu jalan oktagonal, tiang lampu taman antik, hingga tiang lampu tenaga surya.' },
        { title: 'Bollard', description: 'Tiang pembatas jalan untuk pengaman sekaligus penataan area pedestrian.' },
        { title: 'Bangku & Meja Taman', description: 'Bangku pedestrian dan set meja-kursi taman untuk ruang publik dan area komersial.' },
        { title: 'Papan Nama & Wayfinding', description: 'Papan nama jalan, rambu penunjuk arah, dan elemen wayfinding kawasan.' },
        { title: 'Tempat Sampah', description: 'Bak sampah publik dengan beragam desain dan kapasitas.' },
        { title: 'Guiding Block & Pagar Antik', description: 'Ubin pemandu difabel dan pagar ornamen cor logam untuk elemen dekoratif kawasan.' }
      ],
      applications: ['Kawasan pedestrian & trotoar', 'Taman kota & alun-alun', 'Kawasan wisata & heritage', 'Area komersial & perkantoran', 'Stasiun & fasilitas publik'],
      units: [
        { name: 'Futake', slug: 'futake' },
        { name: 'Kembar Teknika', slug: 'kembar-teknika' },
        { name: 'Ayem Tentrem Logam', slug: 'ayem-tentrem-logam' },
        { name: 'Futago Karya', slug: 'futago-karya' }
      ]
    }
  },
  {
    slug: 'pengecoran-logam-foundry',
    name: 'Pengecoran Logam & Foundry',
    description: 'Pengecoran komponen besi cor dan aluminium untuk kebutuhan proyek, utilitas kawasan, elemen ruang publik, dan produk custom sesuai spesifikasi.',
    navDescription: 'Pengecoran besi cor dan aluminium untuk kebutuhan proyek.',
    category: 'Produksi',
    group: 'layanan',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85',
    cardImage: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85',
    detail: {
      overview: {
        title: 'Titik awal dari hampir setiap produk grup: logam cair menjadi komponen presisi.',
        paragraphs: [
          'Pengecoran logam adalah akar keahlian Kembar Futagroup. Berbasis di sentra industri cor logam Ceper, Klaten, kami mengolah besi cor dan aluminium menjadi komponen dasar — baik untuk produk katalog grup maupun pesanan custom sesuai spesifikasi teknis.',
          'Sebagai layanan foundry, kami menerima kebutuhan pengecoran komponen untuk proyek, utilitas kawasan, hingga elemen ruang publik. Setiap hasil cor melewati kontrol kualitas sebelum diteruskan ke tahap fabrikasi, perakitan, dan finishing.'
        ]
      },
      items: [
        { title: 'Pengecoran Besi Cor', description: 'Komponen besi cor untuk kebutuhan struktural, utilitas, dan produk ruang publik.' },
        { title: 'Pengecoran Aluminium', description: 'Komponen aluminium untuk kebutuhan yang menuntut bobot lebih ringan.' },
        { title: 'Komponen Custom', description: 'Pengecoran sesuai gambar teknik dan spesifikasi khusus dari klien atau proyek.' },
        { title: 'Quality Control', description: 'Pemeriksaan dimensi dan kualitas hasil cor sebelum masuk tahap produksi berikutnya.' }
      ],
      applications: ['Komponen infrastruktur & utilitas', 'Elemen ruang publik', 'Produk custom sesuai spesifikasi', 'Suku cadang & komponen industri'],
      units: [
        { name: 'Ayem Tentrem Logam', slug: 'ayem-tentrem-logam' },
        { name: 'Zwilling', slug: 'zwilling' }
      ]
    }
  },
  {
    slug: 'mesin-tepat-guna',
    name: 'Mesin Tepat Guna',
    description: 'Pengembangan dan perakitan mesin untuk kebutuhan industri, pertanian, konstruksi, dan kitchen equipment agar proses kerja lebih efisien.',
    navDescription: 'Pengembangan mesin untuk industri, pertanian, dan konstruksi.',
    category: 'Solusi',
    group: 'solusi',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=85',
    cardImage: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=85',
    detail: {
      overview: {
        title: 'Mesin yang membuat produksi lebih efisien, dirancang sesuai skala penggunanya.',
        paragraphs: [
          'Mesin tepat guna adalah solusi permesinan yang dirancang agar sesuai dengan kebutuhan nyata di lapangan — dari usaha skala kecil dan menengah hingga kebutuhan produksi internal grup. Fokusnya bukan pada mesin termahal, melainkan mesin yang paling pas untuk jenis, volume, dan ruang kerja penggunanya.',
          'Tim kami merancang dan merakit mesin dengan lebih dulu memahami kebutuhan pelanggan, sehingga setiap unit mudah dioperasikan dan dirawat. Selain melayani UMKM, kami juga membuat mesin custom untuk mendukung proses produksi di unit-unit lain dalam ekosistem grup.'
        ]
      },
      items: [
        { title: 'Mesin Konstruksi', description: 'Mesin cetak batako, paving, dan bata interlock untuk kebutuhan konstruksi.' },
        { title: 'Mesin Pertanian & Pangan', description: 'Mesin giling daging, pengolah makanan, dan peralatan produksi pangan.' },
        { title: 'Mesin Industri & UMKM', description: 'Mesin begel, mesin produksi, dan peralatan tepat guna untuk usaha kecil-menengah.' },
        { title: 'Mesin Custom', description: 'Perancangan dan perakitan mesin sesuai spesifikasi khusus proyek atau unit internal.' }
      ],
      applications: ['Industri & manufaktur', 'Pertanian & pengolahan pangan', 'Konstruksi', 'UMKM & usaha kecil-menengah'],
      units: [
        { name: 'Kembar Teknika', slug: 'kembar-teknika' }
      ]
    }
  },
  {
    slug: 'lanskap-penghijauan-kota',
    name: 'Lanskap & Penghijauan Kota',
    description: 'Solusi lanskap dan penghijauan untuk taman, koridor pedestrian, area publik, kawasan komersial, dan ruang luar perkotaan.',
    navDescription: 'Solusi lanskap dan penghijauan ruang publik perkotaan.',
    category: 'Solusi',
    group: 'solusi',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=85',
    cardImage: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=85',
    detail: {
      overview: {
        title: 'Elemen hijau yang melengkapi ruang publik, dari bibit hingga taman jadi.',
        paragraphs: [
          'Lanskap dan penghijauan kota menghadirkan sisi hijau dari proyek ruang publik grup. Kami menyediakan tanaman dan mengerjakan penataan lanskap untuk taman kota, koridor pedestrian, kawasan komersial, dan ruang luar perkotaan.',
          'Dimulai dari pembibitan dan perawatan tanaman hingga siap tanam, dilanjutkan perencanaan tata letak dan eksekusi penghijauan di lokasi. Dipadukan dengan material keras — batu, precast, dan furnitur jalan — dari unit lain, kami dapat menghadirkan solusi lanskap yang menyeluruh dalam satu proyek.'
        ]
      },
      items: [
        { title: 'Pembibitan Tanaman', description: 'Pohon peneduh, tanaman hias, dan elemen hijau siap tanam dari nursery sendiri.' },
        { title: 'Penataan Lanskap', description: 'Perencanaan dan pengerjaan softscape untuk taman dan ruang publik.' },
        { title: 'Penghijauan Kawasan', description: 'Penghijauan taman kota, koridor pedestrian, dan kawasan komersial.' },
        { title: 'Perawatan Tanaman', description: 'Perawatan tanaman untuk memastikan pertumbuhan optimal setelah penanaman.' }
      ],
      applications: ['Taman kota & ruang terbuka hijau', 'Koridor pedestrian', 'Kawasan komersial & perkantoran', 'Area publik & kawasan wisata'],
      units: [
        { name: 'Futafarm', slug: 'futafarm' },
        { name: 'Futastone', slug: 'futastone' }
      ]
    }
  },
  {
    slug: 'infrastruktur-drainase',
    name: 'Infrastruktur Drainase',
    description: 'Komponen drainase dan utilitas kawasan seperti grating, grill, manhole cover, saluran, dan pendukung infrastruktur jalan maupun kawasan.',
    navDescription: 'Komponen drainase dan utilitas kawasan perkotaan.',
    category: 'Solusi',
    group: 'solusi',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85',
    cardImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85',
    detail: {
      overview: {
        title: 'Komponen yang menjaga kawasan tetap berfungsi — jarang terlihat, namun penting.',
        paragraphs: [
          'Infrastruktur drainase mencakup komponen cor logam dan beton yang menjadi tulang punggung sistem air dan utilitas sebuah kawasan. Meski jarang jadi sorotan, produk ini menentukan apakah jalan, trotoar, dan kawasan dapat berfungsi baik dalam jangka panjang.',
          'Kami memproduksi beragam komponen drainase dan utilitas — dari grating dan manhole cover hingga saluran beton — dengan standar mutu yang konsisten. Produk-produk ini telah mendukung berbagai proyek infrastruktur jalan dan kawasan.'
        ]
      },
      items: [
        { title: 'Grating & Steel Grating', description: 'Penutup saluran besi cor dan baja untuk jalan dan kawasan.' },
        { title: 'Manhole Cover', description: 'Tutup lubang kontrol besi cor untuk utilitas jalan dan kawasan.' },
        { title: 'Grill Cover & Tree Grate', description: 'Penutup grill dan pelindung akar pohon untuk area pedestrian.' },
        { title: 'Deck Drain & Roof Drain', description: 'Komponen drainase untuk jembatan, bangunan, dan area parkir.' },
        { title: 'Saluran & Buis Beton', description: 'Saluran precast dan cetakan buis beton untuk sistem drainase.' }
      ],
      applications: ['Drainase jalan & jalan raya', 'Utilitas kawasan & perkotaan', 'Jembatan & area parkir', 'Kawasan industri & komersial'],
      units: [
        { name: 'Futago Karya', slug: 'futago-karya' },
        { name: 'Ayem Tentrem Logam', slug: 'ayem-tentrem-logam' }
      ]
    }
  },
  {
    slug: 'batu-terazzo',
    name: 'Batu & Terazzo',
    description: 'Material batu dan terrazzo untuk kebutuhan lantai, elemen arsitektural, lanskap, area publik, dan finishing proyek.',
    navDescription: 'Material batu dan terrazzo untuk lantai dan finishing.',
    category: 'Produk',
    group: 'produk',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85',
    cardImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85',
    detail: {
      overview: {
        title: 'Material finishing yang memadukan kekuatan, keawetan, dan nilai estetika.',
        paragraphs: [
          'Batu dan terrazzo adalah lini material finishing grup untuk kebutuhan lantai, elemen arsitektural, dan penataan ruang publik. Menggabungkan batu alam dengan produk terrazzo dan beton olahan, lini ini menjawab kebutuhan estetika sekaligus daya tahan.',
          'Dari sisi retail kami melayani kebutuhan skala kecil hingga menengah, sementara dari sisi proyek kami terlibat dalam perencanaan material untuk konstruksi dan penataan kawasan — termasuk penyesuaian bentuk, tekstur, dan dimensi sesuai desain.'
        ]
      },
      items: [
        { title: 'Batu Alam', description: 'Andesit, batu palimanan, dan batu alam lain untuk lantai dan elemen bangunan.' },
        { title: 'Terrazzo', description: 'Lantai, wastafel, pot, dan bollard terrazzo dengan tampilan elegan dan tahan lama.' },
        { title: 'Stamp Concrete', description: 'Beton cetak bermotif untuk area luar dan jalur pedestrian.' },
        { title: 'Precast & Custom', description: 'Produk cetak beton dan penyesuaian bentuk sesuai kebutuhan proyek.' }
      ],
      applications: ['Lantai hunian & komersial', 'Elemen arsitektural & fasad', 'Lanskap & area publik', 'Finishing proyek kawasan'],
      units: [
        { name: 'Futastone', slug: 'futastone' }
      ]
    }
  }
]
