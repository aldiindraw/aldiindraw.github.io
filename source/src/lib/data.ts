export const PROFILE = {
  name: "Aldi Indrawan",
  first: "Aldi",
  initials: "AI",
  role: "IT Specialist",
  focus: "Computer Vision & Intelligent Transportation Systems",
  email: "aldiindrawan@mail.ugm.ac.id",
  phone: "0812-7331-0959",
  phoneHref: "https://wa.me/6281273310959?text=Halo%20Aldi%2C%20saya%20melihat%20portofolio%20Anda.",
  location: "Sleman, Yogyakarta",
  campus: "Universitas Gadjah Mada",
  program: "Magister Ilmu Komputer",
  summary:
    "Saya profesional teknologi informasi dengan pengalaman di integrasi infrastruktur jaringan, pengelolaan sistem TI, dan keamanan data. Karier saya berawal sebagai Network & IT Support Specialist, dari situ saya membangun fondasi di stabilitas sistem, pengelolaan infrastruktur digital, dan optimasi perangkat keras maupun lunak di berbagai organisasi.",
  summary2:
    "Kini saya memperdalam Intelligent Transportation Systems (ITS) dan Computer Vision. Saya tertarik membangun sistem yang memproses data real-time dan mengubah data mentah menjadi wawasan untuk keputusan yang lebih cepat, akurat, dan efisien.",
  quote: "Mengubah data mentah menjadi wawasan untuk keputusan yang lebih cepat dan akurat.",
  github: "https://github.com/aldiindraw",
  linkedin: "https://www.linkedin.com/in/aldi-indrawan-256329386/",
  scholar: "https://scholar.google.com/citations?hl=en&user=lPCd34QAAAAJ",
  researchgate: "https://www.researchgate.net/profile/Aldi-Indrawan",
  instagram: "https://www.instagram.com/aldiindrawann/",
  cv: "/CV-Aldi-Indrawan.pdf",
};

export const NAV = [
  { id: "about", label: "Tentang" },
  { id: "journey", label: "Pengalaman" },
  { id: "skills", label: "Keahlian" },
  { id: "work", label: "Proyek" },
  { id: "design", label: "Desain" },
  { id: "contact", label: "Kontak" },
];

export type Family = "Computer Vision" | "Pemrograman" | "Web" | "Infrastruktur & Data" | "Desain" | "Konsep";
export const FAMILIES: Family[] = ["Computer Vision", "Pemrograman", "Web", "Infrastruktur & Data", "Desain", "Konsep"];

export type Skill = { name: string; sym: string; family: Family; logo?: string; icon?: string; projects: string[]; cv?: boolean };
const SR = "SiRuangan", BM = "Mesin pencari catatan medis", TS = "Toko Sepatu Online", PO = "Perpustakaan Online", GD = "Galeri Desain";
export const SKILLS: Skill[] = [
  { name: "Python", sym: "Py", family: "Computer Vision", logo: "python", projects: [SR, BM], cv: true },
  { name: "OpenCV", sym: "Cv", family: "Computer Vision", logo: "opencv", projects: [], cv: true },
  { name: "Open3D", sym: "O3", family: "Computer Vision", icon: "cube", projects: [], cv: true },
  { name: "Point Cloud", sym: "Pc", family: "Computer Vision", icon: "cloud", projects: [], cv: true },
  { name: "DBSCAN", sym: "Db", family: "Computer Vision", icon: "cluster", projects: [], cv: true },
  { name: "Machine Learning", sym: "Ml", family: "Computer Vision", icon: "spark", projects: [], cv: true },
  { name: "Intel RealSense", sym: "Rs", family: "Computer Vision", icon: "camera", projects: [], cv: true },
  { name: "NumPy", sym: "Np", family: "Computer Vision", logo: "numpy", projects: [], cv: true },
  { name: "Pandas", sym: "Pd", family: "Computer Vision", logo: "pandas", projects: [], cv: true },
  { name: "Matplotlib", sym: "Mp", family: "Computer Vision", logo: "matplotlib", projects: [], cv: true },
  { name: "Java", sym: "Jv", family: "Pemrograman", logo: "java", projects: [BM] },
  { name: "PHP", sym: "Ph", family: "Pemrograman", logo: "php", projects: [TS, PO] },
  { name: "JavaScript", sym: "Js", family: "Pemrograman", logo: "javascript", projects: [SR] },
  { name: "TypeScript", sym: "Ts", family: "Pemrograman", logo: "typescript", projects: [SR] },
  { name: "SQL", sym: "Sq", family: "Pemrograman", icon: "database", projects: [TS, PO, SR] },
  { name: "LaTeX", sym: "Lx", family: "Pemrograman", logo: "latex", projects: [], cv: true },
  { name: "Next.js", sym: "Nx", family: "Web", logo: "nextjs", projects: [SR] },
  { name: "React", sym: "Re", family: "Web", logo: "react", projects: [SR] },
  { name: "Tailwind CSS", sym: "Tw", family: "Web", logo: "tailwindcss", projects: [SR] },
  { name: "FastAPI", sym: "Fa", family: "Web", logo: "fastapi", projects: [SR] },
  { name: "HTML", sym: "Ht", family: "Web", logo: "html5", projects: [PO] },
  { name: "CSS", sym: "Cs", family: "Web", logo: "css3", projects: [TS] },
  { name: "Jaringan Komputer", sym: "Nw", family: "Infrastruktur & Data", icon: "network", projects: [], cv: true },
  { name: "Manajemen Sistem TI", sym: "It", family: "Infrastruktur & Data", icon: "server", projects: [], cv: true },
  { name: "Keamanan Data", sym: "Ks", family: "Infrastruktur & Data", icon: "shield", projects: [], cv: true },
  { name: "Dukungan Teknis", sym: "Dt", family: "Infrastruktur & Data", icon: "wrench", projects: [], cv: true },
  { name: "Docker", sym: "Dk", family: "Infrastruktur & Data", logo: "docker", projects: [SR] },
  { name: "MySQL", sym: "My", family: "Infrastruktur & Data", logo: "mysql", projects: [TS, PO] },
  { name: "SQLite", sym: "Sl", family: "Infrastruktur & Data", logo: "sqlite", projects: [SR] },
  { name: "Git & GitHub", sym: "Gt", family: "Infrastruktur & Data", logo: "git", projects: [SR, BM] },
  { name: "Canva", sym: "Cn", family: "Desain", logo: "canva", projects: [GD] },
  { name: "SketchUp", sym: "Sk", family: "Desain", icon: "cube", projects: [GD] },
  { name: "UI/UX", sym: "Ux", family: "Desain", icon: "pen", projects: [SR] },
  { name: "Information Retrieval", sym: "Ir", family: "Konsep", icon: "search", projects: [BM] },
  { name: "Analisis Data", sym: "An", family: "Konsep", icon: "chart", projects: [], cv: true },
  { name: "Agile/Scrum", sym: "As", family: "Konsep", icon: "loop", projects: [SR] },
];

export type Entry = { kind: "Pekerjaan" | "Pendidikan" | "Organisasi"; period: string; title: string; place: string; where?: string; points: string[] };
export const JOURNEY: Entry[] = [
  { kind: "Pendidikan", period: "Agustus 2025 – sekarang", title: "Magister Ilmu Komputer", place: "Universitas Gadjah Mada", points: [] },
  {
    kind: "Pekerjaan", period: "2024 – sekarang", title: "IT Staff (Full Time)", place: "Institut Teknologi & Kesehatan Ika Bina", where: "Labuhan Batu",
    points: [
      "Mengelola dan merawat lebih dari 50 unit komputer di laboratorium dengan uptime 99%.",
      "Mengelola konten website institusi; trafik pengunjung naik 15% dalam 6 bulan lewat optimasi konten.",
      "Mendesain lebih dari 30 materi promosi digital (poster, flyer) untuk berbagai acara; rata-rata partisipasi acara naik 20%.",
      "Menjadi titik kontak utama dukungan teknis dan menyelesaikan berbagai permintaan pemecahan masalah setiap minggu.",
    ],
  },
  {
    kind: "Pekerjaan", period: "2022 – 2024", title: "Guru (Kontrak)", place: "SMK Swasta Siti Banun", where: "Labuhan Batu",
    points: [
      "Menerapkan pembelajaran berbasis LMS untuk penyampaian materi; efisiensi pengumpulan tugas naik 40%.",
      "Membuat materi ajar interaktif dengan perangkat lunak presentasi dan desain; keterlibatan siswa naik 25% berdasarkan survei akhir semester.",
      "Mengelola nilai dan presensi 3 kelas (90+ siswa) secara digital dengan aplikasi spreadsheet.",
    ],
  },
  {
    kind: "Pekerjaan", period: "2020 – 2021", title: "HS Staff (Magang)", place: "Telkom Indonesia", where: "Bogor",
    points: [
      "Menganalisis data keluhan pelanggan bulanan dan menemukan 3 masalah teknis paling berulang; laporannya dipakai tim teknis untuk memprioritaskan perbaikan.",
      "Membantu menyusun dan menyebarkan data internal agar 100+ karyawan departemen menerima informasi terbaru.",
      "Mengelola administrasi dan data presensi, cuti, dan ketidakhadiran untuk mendukung tim SDM.",
    ],
  },
  {
    kind: "Organisasi", period: "Januari 2020 – Januari 2021", title: "Ketua Klub Bulu Tangkis", place: "Universitas Gunadarma", where: "Depok",
    points: [
      "Memimpin latihan rutin (3 sesi per minggu) untuk 100+ anggota aktif.",
      "Menginisiasi turnamen internal tiap kuartal dengan rata-rata 40 peserta.",
      "Memimpin promosi lewat Instagram dan WhatsApp; pendaftaran anggota baru naik 30%.",
    ],
  },
  { kind: "Pendidikan", period: "2018 – 2022", title: "S1 Informatika", place: "Universitas Gunadarma", points: ["IPK 3,33"] },
];

export type Project = {
  id: string; index: string; title: string; kicker: string; description: string;
  features: string[]; tech: { name: string; logo?: string }[]; github?: string;
  images: { src: string; alt: string; w: number; h: number }[]; note: string;
};
export const PROJECTS: Project[] = [
  {
    id: "bm25", index: "01", title: "Mesin pencari catatan medis", kicker: "Proyek kelompok Sistem Temu Balik Informasi",
    description:
      "Mesin pencari untuk catatan klinis teks bebas yang dipasang sebagai modul di OpenMRS. Membandingkan lima varian pencarian, dari BM25 polos sampai normalisasi istilah klinis (negasi, singkatan, sinonim).",
    features: [
      "Lima varian pencarian dibandingkan", "2.316 dokumen MTSamples dan 50 query",
      "Normalisasi klinis tidak menurunkan kualitas", "Waktu respons sekitar 3,6 kali lebih cepat",
      "Mode bandingkan semua varian", "Keterbatasan dicatat di laporan",
    ],
    tech: [{ name: "Java", logo: "java" }, { name: "Apache Lucene" }, { name: "Python", logo: "python" }, { name: "OpenMRS" }],
    github: "https://github.com/aldiindraw/stbi-openmrs-bm25",
    images: [
      { src: "/images/stbi-hasil-pencarian.webp", w: 1440, h: 420, alt: "Halaman pencarian BM25 di OpenMRS dengan lima dokumen hasil beserta skor dan cuplikan teks." },
      { src: "/images/stbi-bandingkan-varian.webp", w: 1440, h: 775, alt: "Mode bandingkan semua varian untuk kueri hypertension, hasil kelima varian berdampingan." },
    ],
    note: "Hasil evaluasi K=10: BM25 polos P@10 0,540 dan nDCG@10 0,683; normalisasi klinis P@10 0,542 dan nDCG@10 0,687. Selisihnya kecil; penilaian relevansi semi-otomatis.",
  },
  {
    id: "siruangan", index: "02", title: "SiRuangan", kicker: "Peminjaman ruangan kampus UGM",
    description:
      "Aplikasi fullstack untuk mengajukan dan menyetujui peminjaman ruangan di lingkungan kampus. Dikerjakan tim empat orang dengan metode Agile/Scrum. Peran saya ada di fitur booking, dashboard persetujuan, dan penyambungan antarmuka dengan API.",
    features: [
      "Endpoint API booking di FastAPI", "Dashboard persetujuan admin di Next.js",
      "Profil pengguna dengan Google OAuth", "Jendela detail booking dengan mode gelap",
      "Perbaikan proxy /api di Next.js", "Alur kerja pull request di GitHub",
    ],
    tech: [{ name: "Next.js", logo: "nextjs" }, { name: "FastAPI", logo: "fastapi" }, { name: "Docker", logo: "docker" }, { name: "SQLite", logo: "sqlite" }],
    github: "https://github.com/aldiindraw/Boking-Ruangan-Universitas-Gadjah-Mada",
    images: [
      { src: "/images/siruangan-approval.webp", w: 1140, h: 500, alt: "Dashboard Approval untuk admin: dua pengajuan peminjaman menunggu keputusan dengan tombol Setujui dan Tolak." },
      { src: "/images/siruangan-landing.webp", w: 1400, h: 698, alt: "Landing page SiRuangan dengan tombol Masuk Portal dan kartu contoh status ruangan." },
    ],
    note: "Tangkapan layar dari aplikasi yang dijalankan di komputer lokal dengan akun uji coba dan data contoh. Repositori saya adalah fork dari repo tim.",
  },
  {
    id: "toko", index: "03", title: "Toko Sepatu Online", kicker: "Toko online dua sisi",
    description:
      "Toko online untuk pelanggan dan admin. Pelanggan bisa mendaftar, masuk, melihat katalog dan detail produk, memakai keranjang, lalu checkout. Admin punya area sendiri untuk mengelola toko.",
    features: ["Daftar dan masuk pelanggan", "Katalog dan detail produk", "Keranjang dan checkout", "Area admin terpisah"],
    tech: [{ name: "PHP", logo: "php" }, { name: "MySQL", logo: "mysql" }, { name: "CSS", logo: "css3" }],
    github: "https://github.com/aldiindraw/TOKO-SEPATU-ONLINE",
    images: [
      { src: "/images/toko-produk.webp", w: 1400, h: 631, alt: "Halaman depan toko: daftar lima produk sepatu dengan harga, stok, dan tombol Lihat Detail." },
      { src: "/images/toko-detail.webp", w: 1400, h: 875, alt: "Detail produk sepatu basket dengan pilihan jumlah dan tombol Tambah ke Keranjang." },
    ],
    note: "Dijalankan di komputer lokal. Nama dan harga produk adalah data contoh.",
  },
  {
    id: "perpus", index: "04", title: "Perpustakaan Online", kicker: "Sistem informasi perpustakaan sekolah",
    description:
      "Sistem informasi perpustakaan sekolah dengan katalog buku, pendaftaran dan login anggota, halaman admin, pencatatan denda keterlambatan, halaman berita dan kontak, serta laporan yang bisa dicetak.",
    features: ["Katalog dan pencarian buku", "Pendaftaran dan login anggota", "Halaman admin", "Denda keterlambatan", "Berita dan kontak", "Laporan yang bisa dicetak"],
    tech: [{ name: "PHP", logo: "php" }, { name: "MySQL", logo: "mysql" }, { name: "HTML", logo: "html5" }],
    github: "https://github.com/aldiindraw/PERPUSTAKAAN_ONLINE",
    images: [
      { src: "/images/perpus-beranda.webp", w: 1400, h: 875, alt: "Beranda E-Perpus dengan tombol Masuk ke Sistem dan kolom pencarian buku." },
      { src: "/images/perpus-katalog.webp", w: 1060, h: 600, alt: "Katalog buku dengan empat kartu buku dan tombol Pinjam." },
    ],
    note: "Dijalankan di komputer lokal dengan data dari file SQL di repositori.",
  },
];

export type Design = { src: string; w: number; h: number; title: string; cat: string; desc: string; alt: string };
export const DESIGN_CATS = ["Promosi", "Paspor kesehatan", "Infografis", "Dokumen", "3D SketchUp"];
export const DESIGNS: Design[] = [
  {
    "src": "/images/desain-brosur-biaya.webp",
    "w": 1036,
    "h": 674,
    "title": "Brosur biaya pendidikan dan pendaftaran",
    "cat": "Promosi",
    "desc": "Brosur satu halaman yang memuat rincian biaya per program studi, syarat pendaftaran, gelombang pendaftaran, dan info beasiswa untuk Institut Teknologi dan Kesehatan Ika Bina.",
    "alt": "Brosur berwarna biru berisi tabel biaya kuliah per program studi, syarat pendaftaran, jadwal tiga gelombang, info beasiswa, dan kode QR pendaftaran."
  },
  {
    "src": "/images/desain-brosur-lipat.webp",
    "w": 1035,
    "h": 678,
    "title": "Brosur lipat tiga penerimaan mahasiswa baru",
    "cat": "Promosi",
    "desc": "Brosur lipat tiga untuk penerimaan mahasiswa baru T.A 2025/2026: profil institusi, visi misi, program studi, dan kontak.",
    "alt": "Brosur lipat tiga biru-kuning bertema penerimaan mahasiswa baru dengan profil kampus, visi misi, daftar program studi, dan narahubung."
  },
  {
    "src": "/images/desain-paspor-1.webp",
    "w": 970,
    "h": 693,
    "title": "Sampul Paspor Kesehatan Anak",
    "cat": "Paspor kesehatan",
    "desc": "Sampul buku Paspor Kesehatan Anak bergaya ilustrasi untuk praktik dokter spesialis anak.",
    "alt": "Sampul paspor kesehatan anak: ilustrasi dokter memeriksa anak, burung biru, dan kolom nomor serta nama anak."
  },
  {
    "src": "/images/desain-paspor-2.webp",
    "w": 957,
    "h": 681,
    "title": "Sampul Paspor Kesehatan Anak (versi lain)",
    "cat": "Paspor kesehatan",
    "desc": "Versi kedua sampul Paspor Kesehatan Anak dengan ilustrasi dua anak di atas buku besar.",
    "alt": "Sampul paspor kesehatan anak versi kedua dengan ilustrasi dua anak di atas buku oranye dan kolom nama anak."
  },
  {
    "src": "/images/desain-paspor-data.webp",
    "w": 965,
    "h": 679,
    "title": "Halaman data diri Paspor Kesehatan",
    "cat": "Paspor kesehatan",
    "desc": "Halaman dalam paspor: data anak, data orang tua, dan riwayat persalinan, dengan latar hutan dan kolom grafik di sebelah kiri.",
    "alt": "Halaman dalam paspor kesehatan anak berisi formulir data anak, data orang tua, riwayat persalinan, dan dua kotak grafik di latar hutan."
  },
  {
    "src": "/images/desain-tumbuh-kembang.webp",
    "w": 960,
    "h": 683,
    "title": "Tabel pertumbuhan dan perkembangan balita",
    "cat": "Infografis",
    "desc": "Tabel pertumbuhan dan perkembangan balita menurut umur: berat badan, panjang badan, lingkar kepala, serta gerakan kasar, gerakan halus, komunikasi, dan sosial.",
    "alt": "Tabel berwarna pertumbuhan dan perkembangan balita dari 1 bulan sampai 5 tahun dengan ilustrasi bayi dan anak."
  },
  {
    "src": "/images/desain-jadwal-imunisasi.webp",
    "w": 964,
    "h": 685,
    "title": "Jadwal imunisasi anak usia 0–18 tahun",
    "cat": "Infografis",
    "desc": "Bagan jadwal imunisasi anak usia 0–18 tahun mengikuti rekomendasi IDAI 2024, dengan kode warna untuk primer, cath-up, booster, dan kelompok khusus.",
    "alt": "Bagan jadwal imunisasi anak 0 sampai 18 tahun dengan sel berwarna biru, kuning, krem, merah muda, dan keterangan warna di bawahnya."
  },
  {
    "src": "/images/desain-info-imunisasi.webp",
    "w": 480,
    "h": 686,
    "title": "Leaflet informasi imunisasi",
    "cat": "Infografis",
    "desc": "Leaflet tanya jawab seputar imunisasi: pengertian, tujuan, penyakit yang dapat dicegah, dan siapa yang perlu imunisasi.",
    "alt": "Leaflet informasi imunisasi dengan latar pastel, ilustrasi suntikan dan perisai, serta kotak tanya jawab."
  },
  {
    "src": "/images/desain-terima-kasih.webp",
    "w": 969,
    "h": 678,
    "title": "Halaman penutup bertema anak",
    "cat": "Infografis",
    "desc": "Halaman penutup bergaya ilustrasi: ucapan terima kasih, selamat berlibur, dan tetap jaga kesehatan.",
    "alt": "Halaman penutup berilustrasi anak membaca di atas bumi dengan pelangi dan tulisan terima kasih."
  },
  {
    "src": "/images/desain-kwitansi.webp",
    "w": 962,
    "h": 688,
    "title": "Kwitansi pembayaran",
    "cat": "Dokumen",
    "desc": "Template kwitansi pembayaran dengan watermark logo, kolom nama dan NIM mahasiswa, rincian biaya, dan tanda tangan bendahara.",
    "alt": "Formulir kwitansi pembayaran dengan kop yayasan, kolom isian biaya, dan daftar program studi dengan kotak centang."
  },
  {
    "src": "/images/desain-sertifikat.webp",
    "w": 964,
    "h": 682,
    "title": "Sertifikat seminar online",
    "cat": "Dokumen",
    "desc": "Template sertifikat seminar online bertema penerapan Gen AI di pendidikan tinggi, dengan bingkai biru-emas dan kode QR tanda tangan.",
    "alt": "Sertifikat seminar dengan sudut biru-emas, logo institusi, pita biru muda bertuliskan Seminar Certificate, dan dua kode QR."
  },
  {
    "src": "/images/rumah-3d-1.webp",
    "w": 828,
    "h": 521,
    "title": "Rumah dua lantai: tampak depan",
    "cat": "3D SketchUp",
    "desc": "Model 3D rumah dua lantai di SketchUp dilihat dari depan, dengan balkon, taman, dan carport.",
    "alt": "Model 3D rumah dua lantai dilihat dari depan: atap abu-abu, jendela biru, balkon, taman rumput, dan carport."
  },
  {
    "src": "/images/rumah-3d-2.webp",
    "w": 828,
    "h": 984,
    "title": "Rumah dua lantai: dua sudut pandang",
    "cat": "3D SketchUp",
    "desc": "Model 3D rumah dua lantai di SketchUp dari sisi samping dan dari atas.",
    "alt": "Dua sudut pandang model 3D rumah dua lantai, dari samping dan dari atas."
  }
];
