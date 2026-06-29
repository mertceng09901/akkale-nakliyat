import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

// Google Fonts entegrasyonu (Next.js bunu otomatik optimize eder)
const inter = Inter({ subsets: ["latin"] });

// GLOBAL SEO METADATA
// Alt sayfalarda ezilmediği sürece sitenin varsayılan başlık ve açıklaması budur.
export const metadata: Metadata = {
  title: "Nef Nakliyat | İstanbul Evden Eve Nakliyat",
  description: "İstanbul'un 39 ilçesinde sigortalı, asansörlü ve güvenilir evden eve nakliyat hizmeti. Nef Nakliyat ile eşyalarınız güvende.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-50`}>
        
        {/* GLOBAL NAVBAR (Üst Menü) */}
        <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            {/* Logo Alanı */}
            <Link href="/" className="text-2xl font-extrabold tracking-tighter">
              <span className="text-blue-600">NEF</span>
              <span className="text-gray-800">NAKLİYAT</span>
            </Link>
            
            {/* Navigasyon Linkleri (Mobil uyum için 'hidden md:flex' kullanıldı) */}
            <nav className="hidden md:flex space-x-8 text-sm font-semibold text-gray-600 items-center">
              <Link href="/" className="hover:text-blue-600 transition-colors">Ana Sayfa</Link>
              <Link href="/" className="hover:text-blue-600 transition-colors">Hizmet Bölgelerimiz</Link>
              <Link href="/" className="hover:text-blue-600 transition-colors">Hakkımızda</Link>
              <button className="bg-blue-600 text-white px-5 py-2.5 rounded-md hover:bg-blue-700 transition-all shadow-sm">
                Fiyat Al
              </button>
            </nav>
          </div>
        </header>

        {/* SAYFA İÇERİKLERİ BURAYA GELECEK */}
        <main className="flex-grow">
          {children}
        </main>

        {/* GLOBAL FOOTER (Alt Bilgi) */}
        <footer className="bg-gray-900 text-gray-300 py-12 text-center border-t-4 border-blue-600">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-white mb-4">Nef Nakliyat</h3>
            <p className="mb-6 text-gray-400 max-w-lg mx-auto">
              İstanbul içi ve şehirler arası profesyonel, asansörlü ve sigortalı taşımacılık hizmetleri.
            </p>
            <div className="border-t border-gray-800 pt-6 mt-6">
              <p className="text-sm">© {new Date().getFullYear()} Nef Nakliyat A.Ş. Tüm hakları saklıdır.</p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}