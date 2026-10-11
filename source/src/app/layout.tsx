import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({ src: "../fonts/inter-tight-latin-wght-normal.woff2", variable: "--font-inter", display: "swap", weight: "100 900" });
const serif = localFont({
  src: [
    { path: "../fonts/instrument-serif-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/instrument-serif-latin-400-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-serif", display: "swap",
});
const mono = localFont({ src: "../fonts/jetbrains-mono-latin-wght-normal.woff2", variable: "--font-mono", display: "swap", weight: "100 800" });

export const metadata: Metadata = {
  title: "Aldi Indrawan | Fullstack Developer, Desainer UI dan AI Agent",
  description: "Portofolio Aldi Indrawan: fullstack developer, desainer antarmuka, dan pengembang AI agent. Mahasiswa S2 Ilmu Komputer Universitas Gadjah Mada.",
  icons: { icon: "/favicon.svg" },
};
export const viewport: Viewport = { themeColor: "#f4f2ee", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable} ${serif.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
