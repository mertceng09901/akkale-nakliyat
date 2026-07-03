import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Akkale Nakliyat | İstanbul Evden Eve Nakliyat",
  description: "İstanbul'un 39 ilçesinde sigortalı, asansörlü ve güvenilir evden eve nakliyat hizmeti. Akkale Nakliyat ile eşyalarınız güvende. Hemen ücretsiz teklif alın!",
  keywords: "evden eve nakliyat, istanbul nakliyat, sigortalı nakliyat, asansörlü nakliyat, akkale nakliyat",
  openGraph: {
    title: "Akkale Nakliyat | İstanbul Evden Eve Nakliyat",
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
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen" style={{ background: '#ffffff', color: '#1e293b', fontFamily: "'Quicksand', sans-serif" }}>

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
          <div className="navbar-inner">
            
            {/* Logo */}
            <Link href="/" className="nav-brand" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
              <div className="nav-logo-wrap">
                <Image 
                  src="/logo-real.png" 
                  alt="Akkale Nakliyat Logo" 
                  fill 
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav Links — mobilde gizli */}
            <nav className="desktop-nav-links">
              <Link href="/" className="nav-link">Ana Sayfa</Link>
              <Link href="/#hizmetler" className="nav-link">Hizmetler</Link>
              <Link href="/#bolgeler" className="nav-link">Bölgelerimiz</Link>
              <Link href="/#iletisim" className="nav-link">İletişim</Link>
            </nav>

            {/* Telefon CTA — her zaman görünür */}
            <a href="tel:+905301234567" className="btn-primary nav-phone-btn" style={{ display: 'flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap' }}>
              <Phone size={16} /> Hemen Ara
            </a>
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
                <div style={{ position: 'relative', width: '220px', height: '60px', marginBottom: '16px' }}>
                  <Image 
                    src="/logo-real.png" 
                    alt="Akkale Nakliyat Logo" 
                    fill 
                    style={{ objectFit: 'contain', objectPosition: 'left' }}
                  />
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
                <h4 style={{ color: '#facc15', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
                  Hizmetlerimiz
                </h4>
                {[
                  { label: 'Evden Eve Nakliyat', slug: 'evden-eve-nakliyat' },
                  { label: 'Şehirler Arası Nakliyat', slug: 'sehirler-arasi-nakliyat' },
                  { label: 'Ofis Taşıma', slug: 'ofis-tasima' },
                  { label: 'Piyano Taşıma', slug: 'piyano-tasima' },
                  { label: 'Parça Eşya Taşıma', slug: 'parca-esya-tasima' },
                  { label: 'Sigortalı Taşıma', slug: 'sigortali-tasima' },
                ].map((item) => (
                  <div key={item.slug} style={{ marginBottom: '10px' }}>
                    <Link href={`/hizmetler/${item.slug}`} className="footer-link">
                      → {item.label}
                    </Link>
                  </div>
                ))}
              </div>

              {/* Contact */}
              <div>
                <h4 style={{ color: '#facc15', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
                  İletişim
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[
                    { icon: <Phone size={16} />, label: 'Telefon', value: '0530 123 45 67' },
                    { icon: <Mail size={16} />, label: 'E-posta', value: 'info@akkalenakliyat.com' },
                    { icon: <MapPin size={16} />, label: 'Adres', value: 'İstanbul, Türkiye' },
                    { icon: <Clock size={16} />, label: 'Çalışma', value: '7/24 Hizmetinizdeyiz' },
                  ].map(({ icon, label, value }) => (
                    <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span style={{ marginTop: '1px', color: '#facc15' }}>{icon}</span>
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
                © {new Date().getFullYear()} Akkale Nakliyat A.Ş. Tüm hakları saklıdır.
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