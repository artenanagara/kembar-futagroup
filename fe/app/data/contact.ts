export const contactHero = {
  breadcrumbs: ['Beranda', 'Kontak'],
  title: 'Hubungi Kami',
  description: 'Punya kebutuhan produk, proyek, atau kerja sama? Tim Kembar Futagroup siap membantu Anda menemukan solusi yang tepat.',
  image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=85'
}

export const contactIntro = {
  eyebrow: 'Mari Terhubung',
  title: 'Satu pintu untuk seluruh ekosistem usaha kami.',
  paragraphs: [
    'Dari kebutuhan produk ruang publik, pengecoran custom, mesin tepat guna, material lansekap, hingga kerja sama proyek dan properti — Anda dapat menghubungi kami melalui satu titik kontak.',
    'Sampaikan kebutuhan Anda, dan tim kami akan mengarahkannya ke unit usaha yang paling sesuai di dalam ekosistem grup.'
  ]
}

export type ContactChannel = {
  icon: string
  label: string
  value: string
  href: string
  note?: string
}

export const contactChannels: ContactChannel[] = [
  {
    icon: 'i-lucide-mail',
    label: 'Email',
    value: 'kembarfutagroup@gmail.com',
    href: 'mailto:kembarfutagroup@gmail.com',
    note: 'Untuk pertanyaan umum, penawaran, dan kerja sama.'
  },
  {
    icon: 'i-lucide-message-circle',
    label: 'WhatsApp',
    value: '0821 3672 8913',
    href: 'https://wa.me/6282136728913',
    note: 'Respons cepat untuk kebutuhan produk dan proyek.'
  }
]

export type ContactLocation = {
  label: string
  name: string
  address: string
  mapUrl: string
}

export const contactLocations: ContactLocation[] = [
  {
    label: 'Kantor Pusat & Produksi',
    name: 'Kembar Futagroup',
    address: 'Krenekan, Klepu, Kecamatan Ceper, Kabupaten Klaten, Jawa Tengah',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Klepu+Ceper+Klaten+Jawa+Tengah'
  },
  {
    label: 'Showroom Futake Indonesia',
    name: 'PT Futake Indonesia',
    address: 'Jl. Solo–Jogja, Klepu, Kecamatan Ceper, Kabupaten Klaten, Jawa Tengah 57465',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Futake+Indonesia+Ceper+Klaten'
  }
]

export const contactSocial = {
  eyebrow: 'Media Sosial',
  title: 'Ikuti perkembangan kami',
  links: [
    { label: 'Instagram', to: 'https://www.instagram.com/futakeindonesia/' },
    { label: 'LinkedIn', to: 'https://www.linkedin.com/company/futake-hardware-indonesia/' },
    { label: 'YouTube', to: 'https://www.youtube.com/@FutakeIndonesia' }
  ]
}
