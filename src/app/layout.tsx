import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nef Nakliyat | İstanbul Evden Eve Nakliyat",
  description: "İstanbul'un 39 ilçesinde sigortalı, asansörlü ve güvenilir evden eve nakliyat hizmeti. Nef Nakliyat ile eşyalarınız güvende. Hemen ücretsiz teklif alın!",
  keywords: "evden eve nakliyat, istanbul nakliyat, sigortalı nakliyat, asansörlü nakliyat, nef nakliyat",
  openGraph: {
    title: "Nef Nakliyat | İstanbul Evden Eve Nakliyat",
    description: "İstanbul'un 39 ilçesinde sigortalı, asansörlü ve güvenilir evden eve nakliyat hizmeti.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`} style={{ background: '#0A1628', color: '#e2e8f0' }}>

        {/* GLOBAL NAVBAR */}
        <header style={{
          background: 'rgba(10, 22, 40, 0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(245, 158, 11, 0.2)',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          animation: 'slideInNav 0.5s ease',
        }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '72px' }}>
            
            {/* Logo */}
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '42px', height: '42px',
                background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
                borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '20px',
                boxShadow: '0 4px 15px rgba(245, 158, 11, 0.4)',
              }}>🚚</div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.4rem', lineHeight: 1 }}>
                  <span style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>NEF</span>
                  <span style={{ color: '#ffffff' }}> NAKLİYAT</span>
                </div>
                <div style={{ fontSize: '0.65rem', color: '#94a3b8', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: '1px' }}>İstanbul • Güvenli Taşımacılık</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
              <Link href="/" className="nav-link">
                Ana Sayfa
              </Link>
              <Link href="/#hizmetler" className="nav-link">
                Hizmetler
              </Link>
              <Link href="/#bolgeler" className="nav-link">
                Bölgelerimiz
              </Link>
              <Link href="/#iletisim" className="nav-link">
                İletişim
              </Link>

              {/* Phone CTA */}
              <a href="tel:+905301234567" className="btn-primary nav-phone-btn">
                📞 Hemen Ara
              </a>
            </nav>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-grow">
          {children}
        </main>

        {/* GLOBAL FOOTER */}
        <footer style={{
          background: 'linear-gradient(135deg, #050d1a 0%, #0A1628 100%)',
          borderTop: '1px solid rgba(245, 158, 11, 0.2)',
          padding: '60px 24px 30px',
        }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>
              
              {/* Brand */}
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.8rem', marginBottom: '12px' }}>
                  <span style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>NEF</span>
                  <span style={{ color: '#ffffff' }}> NAKLİYAT</span>
                </div>
                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '20px', maxWidth: '280px' }}>
                  İstanbul&apos;un 39 ilçesinde sigortalı, asansörlü ve profesyonel taşımacılık hizmetleri sunuyoruz.
                </p>
                <div style={{ display: 'flex', gap: '12px' }}>
                  {['📘', '📸', '🐦', '💼'].map((icon, i) => (
                    <div key={i} style={{
                      width: '36px', height: '36px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      cursor: 'pointer', fontSize: '16px',
                      transition: 'all 0.2s',
                    }}>
                      {icon}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 style={{ color: '#fbbf24', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
                  Hizmetlerimiz
                </h4>
                {['Evden Eve Nakliyat', 'Şehirler Arası Nakliyat', 'Ofis Taşıma', 'Piyano Taşıma', 'Parça Eşya', 'Sigortalı Taşıma'].map((item) => (
                  <div key={item} style={{ marginBottom: '10px' }}>
                    <Link href={`/#hizmetler`} className="footer-link">
                      → {item}
                    </Link>
                  </div>
                ))}
              </div>

              {/* Contact */}
              <div>
                <h4 style={{ color: '#fbbf24', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
                  İletişim
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[
                    { icon: '📞', label: 'Telefon', value: '0530 123 45 67' },
                    { icon: '📧', label: 'E-posta', value: 'info@nefnakliyat.com' },
                    { icon: '📍', label: 'Adres', value: 'İstanbul, Türkiye' },
                    { icon: '🕐', label: 'Çalışma', value: '7/24 Hizmetinizdeyiz' },
                  ].map(({ icon, label, value }) => (
                    <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span style={{ fontSize: '16px', marginTop: '1px' }}>{icon}</span>
                      <div>
                        <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '2px' }}>{label}</div>
                        <div style={{ color: '#e2e8f0', fontSize: '0.9rem', fontWeight: 500 }}>{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <p style={{ color: '#475569', fontSize: '0.85rem' }}>
                © {new Date().getFullYear()} Nef Nakliyat A.Ş. Tüm hakları saklıdır.
              </p>
              <div style={{ display: 'flex', gap: '20px' }}>
                {['Gizlilik Politikası', 'Kullanım Koşulları', 'Çerez Politikası'].map(item => (
                  <Link key={item} href="/" className="footer-link-sm">
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </footer>

        {/* FLOATING WHATSAPP BUTTON */}
        <a
          href="https://wa.me/905301234567"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: 'fixed',
            bottom: '28px',
            right: '28px',
            width: '60px', height: '60px',
            background: 'linear-gradient(135deg, #25D366, #128C7E)',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '28px',
            boxShadow: '0 4px 20px rgba(37, 211, 102, 0.5)',
            zIndex: 999,
            textDecoration: 'none',
            animation: 'float 3s ease-in-out infinite',
            transition: 'transform 0.2s',
          }}
          title="WhatsApp ile iletişime geçin"
        >
          💬
        </a>

      </body>
    </html>
  );
}