export const PROFILE = {
  name: "Aldi Indrawan",
  first: "Aldi",
  initials: "AI",
  role: "Fullstack Developer",
  email: "indrawan.aldi17@gmail.com",
  phone: "0812-7331-0959",
  phoneHref: "https://wa.me/6281273310959?text=Halo%20Aldi%2C%20saya%20melihat%20portofolio%20Anda.",
  location: "Yogyakarta, Indonesia",
  campus: "Universitas Gadjah Mada",
  program: "S2 Ilmu Komputer",
  summary:
    "Saya fullstack developer yang juga menekuni desain antarmuka dan pengembangan AI agent. Saat ini saya menempuh S2 Ilmu Komputer di Universitas Gadjah Mada, Yogyakarta.",
  summary2:
    "Saya senang menggabungkan tampilan yang rapi, sistem yang andal, dan kecerdasan buatan menjadi produk yang mudah dipakai. Saya terbiasa belajar dengan cepat, bekerja dalam tim, dan menyelesaikan pekerjaan dengan teliti.",
  quote: "Tampilan yang rapi, sistem yang andal, dan AI, dijadikan satu produk yang mudah dipakai.",
  github: "https://github.com/aldiindraw",
  linkedin: "https://www.linkedin.com/in/aldi-indrawan-256329386/",
  researchgate: "https://www.researchgate.net/profile/Aldi-Indrawan",
  instagram: "https://www.instagram.com/aldiindrawann/",
};

export const NAV = [
  { id: "about", label: "Tentang" },
  { id: "skills", label: "Keahlian" },
  { id: "work", label: "Proyek" },
  { id: "contact", label: "Kontak" },
];

export type Family = "Bahasa" | "Frontend" | "Backend" | "Data & Infra" | "Alat" | "Desain" | "Konsep";
export const FAMILIES: Family[] = ["Bahasa", "Frontend", "Backend", "Data & Infra", "Alat", "Desain", "Konsep"];

export type Skill = { name: string; sym: string; family: Family; logo?: string; icon?: string; projects: string[] };
const SR = "SiRuangan", BM = "Mesin pencari BM25", TS = "Toko Sepatu Online", PO = "Perpustakaan Online";
export const SKILLS: Skill[] = [
  { name: "PHP", sym: "Ph", family: "Bahasa", logo: "php", projects: [TS, PO] },
  { name: "JavaScript", sym: "Js", family: "Bahasa", logo: "javascript", projects: [SR] },
  { name: "TypeScript", sym: "Ts", family: "Bahasa", logo: "typescript", projects: [SR] },
  { name: "Python", sym: "Py", family: "Bahasa", logo: "python", projects: [SR, BM] },
  { name: "Java", sym: "Jv", family: "Bahasa", logo: "java", projects: [BM] },
  { name: "SQL", sym: "Sq", family: "Bahasa", icon: "database", projects: [TS, PO, SR] },
  { name: "Next.js", sym: "Nx", family: "Frontend", logo: "nextjs", projects: [SR] },
  { name: "React", sym: "Re", family: "Frontend", logo: "react", projects: [SR] },
  { name: "Tailwind CSS", sym: "Tw", family: "Frontend", logo: "tailwindcss", projects: [SR] },
  { name: "shadcn/ui", sym: "Sh", family: "Frontend", icon: "component", projects: [SR] },
  { name: "HTML", sym: "Ht", family: "Frontend", logo: "html5", projects: [PO] },
  { name: "CSS", sym: "Cs", family: "Frontend", logo: "css3", projects: [TS] },
  { name: "FastAPI", sym: "Fa", family: "Backend", logo: "fastapi", projects: [SR] },
  { name: "Apache Lucene", sym: "Lu", family: "Backend", icon: "search", projects: [BM] },
  { name: "OpenMRS", sym: "Om", family: "Backend", icon: "cross", projects: [BM] },
  { name: "REST API", sym: "Ap", family: "Backend", icon: "api", projects: [SR] },
  { name: "MySQL", sym: "My", family: "Data & Infra", logo: "mysql", projects: [TS, PO] },
  { name: "SQLite", sym: "Sl", family: "Data & Infra", logo: "sqlite", projects: [SR] },
  { name: "Docker", sym: "Dk", family: "Data & Infra", logo: "docker", projects: [SR] },
  { name: "GitHub Actions", sym: "Ga", family: "Data & Infra", logo: "githubactions", projects: [SR] },
  { name: "Cloudflare", sym: "Cf", family: "Data & Infra", logo: "cloudflare", projects: [SR] },
  { name: "Git", sym: "Gt", family: "Alat", logo: "git", projects: [SR, BM] },
  { name: "Google OAuth", sym: "Oa", family: "Alat", icon: "key", projects: [SR] },
  { name: "Agile/Scrum", sym: "As", family: "Alat", icon: "loop", projects: [SR] },
  { name: "Canva", sym: "Cn", family: "Desain", logo: "canva", projects: [] },
  { name: "UI/UX", sym: "Ux", family: "Desain", icon: "pen", projects: [SR] },
  { name: "SketchUp", sym: "Sk", family: "Desain", icon: "cube", projects: ["Desain 3D rumah dua lantai"] },
  { name: "Information Retrieval", sym: "Ir", family: "Konsep", icon: "search", projects: [BM] },
  { name: "AI Agent", sym: "Ai", family: "Konsep", icon: "agent", projects: [] },
  { name: "LLM", sym: "Ll", family: "Konsep", icon: "spark", projects: [] },
  { name: "Otomasi alur kerja", sym: "Ot", family: "Konsep", icon: "flow", projects: [] },
];

export type Project = {
  id: string; index: string; title: string; kicker: string; description: string;
  features: string[]; tech: { name: string; logo?: string }[]; github?: string;
  images: { src: string; alt: string; w: number; h: number }[]; note: string;
};
export const PROJECTS: Project[] = [
  {
    id: "siruangan", index: "01", title: "SiRuangan", kicker: "Peminjaman ruangan kampus UGM",
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
    id: "bm25", index: "02", title: "Mesin pencari catatan medis", kicker: "Proyek kelompok Sistem Temu Balik Informasi",
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
  {
    id: "rumah3d", index: "05", title: "Desain 3D rumah dua lantai", kicker: "Pemodelan 3D di SketchUp",
    description:
      "Model 3D rumah dua lantai yang saya buat di SketchUp, lengkap dengan atap, jendela dan pintu, balkon lantai atas, taman depan, serta carport. Modelnya dilihat dari beberapa sudut untuk memperlihatkan tata letak ruang luar dan fasad bangunan.",
    features: ["Rumah dua lantai beratap pelana", "Balkon di lantai atas", "Taman dan carport di depan", "Tangga akses di sisi bangunan", "Fasad dengan jendela besar", "Tampilan dari beberapa sudut"],
    tech: [{ name: "SketchUp" }],
    images: [
      { src: "/images/rumah-3d-1.webp", w: 828, h: 521, alt: "Model 3D rumah dua lantai dilihat dari depan: atap abu-abu, jendela biru berbingkai merah marun, balkon, taman rumput, dan carport." },
      { src: "/images/rumah-3d-2.webp", w: 828, h: 984, alt: "Dua sudut pandang model 3D rumah dua lantai: tampak dari sisi samping dan dari atas, memperlihatkan balkon berperabot, taman, dan atap." },
    ],
    note: "Tangkapan dari model 3D yang saya buat di SketchUp.",
  },
];
