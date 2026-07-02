import { Activity, Ruler, ShieldCheck, Wrench, type LucideIcon } from 'lucide-react'

export type GalleryImage = {
  file: string
  title: string
  tag: string
  fit?: 'cover' | 'contain'
}

export type Contact = {
  label: string
  display: string
  number: string
}

export type ProductMode = {
  id: string
  name: string
  title: string
  copy: string
  specs: string[]
  accent: string
  photo: string
}

export type Capability = {
  icon: LucideIcon
  title: string
  copy: string
}

export const whatsappText = encodeURIComponent(
  'Halo PT. Aluminium Kreasi Indonesia, saya ingin konsultasi kebutuhan Bedhead Panel.',
)

export const contacts: Contact[] = [
  {
    label: 'Marketing/Admin',
    display: '+62 857-6782-1575',
    number: '6285767821575',
  },
  {
    label: 'Admin 1',
    display: '+62 813-8226-2952',
    number: '6281382262952',
  },
  {
    label: 'Admin 2',
    display: '+62 813-9893-0559',
    number: '6281398930559',
  },
]

export const primaryContact = contacts[0]
export const whatsappUrl = `https://wa.me/${primaryContact.number}?text=${whatsappText}`
export const emailAddress = 'aluminiumkreasiindonesia@gmail.com'
export const instagramUrl =
  'https://www.instagram.com/aluminiumkreasi_indonesia?igsh=MWE0MzY3YjI5ZjU4MQ=='
export const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=Gudang%20Akasia%20Sumber%20Jaya%20Tambun%20Selatan%20Bekasi%2017519'

export const productVideo = {
  file: 'WhatsApp Video 2026-06-27 at 2.58.38 PM.mp4',
  title: 'Dokumentasi Bedhead Panel AKI',
}

export const navItems = [
  { label: 'Produk', href: '#produk' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'Proses', href: '#proses' },
  { label: 'Kontak', href: '#kontak' },
]

export const projectImages: GalleryImage[] = [
  {
    file: 'type baru.png',
    title: 'Bedhead panel terpasang di dinding medis',
    tag: 'Instalasi',
    fit: 'cover',
  },
  {
    file: 'Gemini_Generated_Image_b3t2zcb3t2zcb3t2.png',
    title: 'Aplikasi panel pada ruang rawat modern',
    tag: 'Ruang Rawat',
    fit: 'cover',
  },
  {
    file: 'Gemini_Generated_Image_zha88bzha88bzha8 (1).png',
    title: 'Konsep kamar pasien dengan panel medis',
    tag: 'Kamar Pasien',
    fit: 'cover',
  },
  {
    file: 'full prisma.png',
    title: 'Bodi panel Prisma sebelum konfigurasi modul',
    tag: 'Panel Kosong',
    fit: 'contain',
  },
  {
    file: 'WhatsApp Image 2025-08-18 at 9.10.11 AM.png',
    title: 'Panel motif kayu dengan gas medis dan stop kontak',
    tag: 'Contoh Unit',
    fit: 'contain',
  },
  {
    file: 'WhatsApp Image 2025-08-18 at 9.10.12 AM.png',
    title: 'Panel putih dengan kombinasi outlet lengkap',
    tag: 'Contoh Unit',
    fit: 'contain',
  },
]

export const finishImages: GalleryImage[] = [
  { file: 'IMG_7851.png', title: 'Panel putih minimal', tag: 'Finishing', fit: 'contain' },
  { file: 'IMG_7866.png', title: 'Panel biru putih', tag: 'Finishing', fit: 'contain' },
  { file: 'IMG_7871.png', title: 'Panel kuning putih', tag: 'Finishing', fit: 'contain' },
  { file: 'IMG_7874.png', title: 'Panel biru gloss', tag: 'Finishing', fit: 'contain' },
  { file: 'IMG_7875.png', title: 'Panel motif kayu gelap', tag: 'Finishing', fit: 'contain' },
  { file: 'IMG_7877.png', title: 'Panel motif kayu terang', tag: 'Finishing', fit: 'contain' },
  { file: 'IMG_7880.png', title: 'Panel merah oranye', tag: 'Finishing', fit: 'contain' },
  { file: 'IMG_7883.png', title: 'Panel hijau muda', tag: 'Finishing', fit: 'contain' },
  { file: 'IMG_7894.png', title: 'Panel abu-abu', tag: 'Finishing', fit: 'contain' },
  { file: 'IMG_7895.png', title: 'Panel silver', tag: 'Finishing', fit: 'contain' },
  { file: 'IMG_7897.png', title: 'Panel gold', tag: 'Finishing', fit: 'contain' },
  { file: 'IMG_7900.png', title: 'Panel turquoise', tag: 'Finishing', fit: 'contain' },
  { file: 'IMG_7903.png', title: 'Panel cokelat', tag: 'Finishing', fit: 'contain' },
  { file: 'IMG_7911.png', title: 'Panel hijau terang', tag: 'Finishing', fit: 'contain' },
  { file: 'IMG_7918.png', title: 'Panel hijau gelap', tag: 'Finishing', fit: 'contain' },
  { file: 'IMG_7922.png', title: 'Panel hitam', tag: 'Finishing', fit: 'contain' },
  { file: 'IMG_7925.png', title: 'Panel merah', tag: 'Finishing', fit: 'contain' },
  { file: 'IMG_7929.png', title: 'Panel hitam cokelat', tag: 'Finishing', fit: 'contain' },
  { file: 'IMG_7931.png', title: 'Panel hitam elegan', tag: 'Finishing', fit: 'contain' },
  { file: 'IMG_7933.png', title: 'Panel magenta', tag: 'Finishing', fit: 'contain' },
]

export const catalogImages: GalleryImage[] = [
  { file: 'katalog typ baru.png', title: 'Katalog bedhead panel medis premium', tag: 'Katalog', fit: 'contain' },
  { file: '2.png', title: 'Diagram teknis type II', tag: 'Spesifikasi', fit: 'contain' },
  { file: '3.png', title: 'Diagram teknis type II Prisma biru', tag: 'Spesifikasi', fit: 'contain' },
  { file: '4.png', title: 'Diagram teknis type II Prisma kayu', tag: 'Spesifikasi', fit: 'contain' },
  { file: '5.png', title: 'Perlengkapan elektrikal', tag: 'Komponen', fit: 'contain' },
  { file: '6.png', title: 'Katalog saklar dan stop kontak', tag: 'Komponen', fit: 'contain' },
  { file: '7.png', title: 'Pilihan komponen panel', tag: 'Komponen', fit: 'contain' },
  { file: '8.png', title: 'Katalog modul kelistrikan', tag: 'Komponen', fit: 'contain' },
  { file: '9.png', title: 'Pilihan warna solid glossy', tag: 'Warna', fit: 'contain' },
  { file: '10.png', title: 'Kartu warna solid', tag: 'Warna', fit: 'contain' },
  { file: '11.png', title: 'Pilihan wood coating', tag: 'Warna', fit: 'contain' },
]

export const galleryGroups = [
  {
    label: 'Sorotan Produk & Proyek',
    description: 'Foto utama produk, contoh instalasi, dan visual aplikasi di ruang pasien.',
    items: projectImages,
  },
  {
    label: 'Pilihan Finishing Panel',
    description: 'Variasi warna dan motif yang dapat dipakai untuk menyesuaikan identitas ruang.',
    items: finishImages,
  },
  {
    label: 'Katalog, Warna & Spesifikasi',
    description: 'Materi pendukung untuk melihat tipe panel, pilihan komponen, dan referensi warna.',
    items: catalogImages,
  },
]

export const productModes: ProductMode[] = [
  {
    id: 'ward',
    name: 'Ward',
    title: 'Ruang Rawat Inap',
    copy: 'Panel horizontal yang ringkas untuk kebutuhan harian ruang rawat, dengan konfigurasi outlet yang mudah disesuaikan.',
    specs: ['Kanal kabel rapi', 'Outlet gas medis', 'Lampu baca terintegrasi'],
    accent: '#0aa6a6',
    photo: 'Gemini_Generated_Image_b3t2zcb3t2zcb3t2.png',
  },
  {
    id: 'icu',
    name: 'ICU',
    title: 'ICU & HCU',
    copy: 'Konfigurasi lebih padat untuk ruang intensif, menyiapkan area listrik, data, gas, dan akses perawatan yang lebih lengkap.',
    specs: ['Kapasitas modul tinggi', 'Akses servis cepat', 'Rail dan aksesoris opsional'],
    accent: '#2f6fed',
    photo: 'type baru.png',
  },
  {
    id: 'vip',
    name: 'VIP',
    title: 'Kamar VIP',
    copy: 'Finishing lebih tenang untuk ruang premium tanpa mengorbankan fungsi medis inti di samping tempat tidur pasien.',
    specs: ['Finishing custom', 'Pencahayaan ambient', 'Tampilan minimal'],
    accent: '#d68b00',
    photo: 'Gemini_Generated_Image_zha88bzha88bzha8 (1).png',
  },
]

export const capabilities: Capability[] = [
  {
    icon: Ruler,
    title: 'Ukuran Custom',
    copy: 'Panjang panel, pembagian kanal, warna, dan posisi modul dapat disesuaikan dengan kebutuhan proyek.',
  },
  {
    icon: ShieldCheck,
    title: 'Material Aluminium',
    copy: 'Bodi panel dibuat dari aluminium yang ringan, kokoh, dan cocok untuk lingkungan klinis yang perlu mudah dirawat.',
  },
  {
    icon: Activity,
    title: 'Fokus Alkes',
    copy: 'Desain diarahkan untuk area pasien: gas medis, listrik, data, nurse call, lampu, dan opsi aksesoris pendukung.',
  },
  {
    icon: Wrench,
    title: 'Mudah Diservis',
    copy: 'Susunan komponen dibuat teratur agar proses pemasangan, pengecekan, dan perawatan lebih efisien.',
  },
]

export const processSteps = [
  {
    title: 'Konsultasi Kebutuhan',
    copy: 'Tim menerima kebutuhan ruangan, jumlah titik, model panel, dan preferensi finishing.',
  },
  {
    title: 'Gambar Kerja',
    copy: 'Layout modul dan ukuran panel dirapikan agar mudah dibaca tim proyek dan instalasi.',
  },
  {
    title: 'Fabrikasi Aluminium',
    copy: 'Produksi dilakukan di Gudang Akasia, Bekasi, dengan fokus pada kerapian bodi dan kanal.',
  },
  {
    title: 'Koordinasi Instalasi',
    copy: 'Panel disiapkan untuk masuk ke tahapan pemasangan, pengecekan, dan serah terima proyek.',
  },
]

export const faqs = [
  {
    question: 'Apakah bedhead panel bisa custom ukuran dan warna?',
    answer:
      'Bisa. Ukuran, warna finishing, posisi modul, serta kebutuhan outlet dapat dikonsultasikan mengikuti kebutuhan ruang rawat atau proyek.',
  },
  {
    question: 'Apakah melayani kebutuhan rumah sakit dan klinik?',
    answer:
      'Ya. PT. Aluminium Kreasi Indonesia berfokus pada kebutuhan alat kesehatan berbahan aluminium, terutama Bedhead Panel untuk area pasien.',
  },
  {
    question: 'Bagaimana cara mulai konsultasi?',
    answer:
      'Hubungi marketing/admin melalui WhatsApp. Siapkan kebutuhan ruangan, jumlah unit, perkiraan ukuran, dan modul yang diperlukan bila sudah ada.',
  },
]
