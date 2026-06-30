import { nakliyeIlceleri } from '../../../utils/ilceler';
import { notFound } from 'next/navigation';
import IletisimFormu from '../../../components/IletisimFormu';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ ilce: string }> }): Promise<Metadata> {
  const { ilce } = await params;
  const ilceVerisi = nakliyeIlceleri.find((i) => i.slug === ilce);
  if (!ilceVerisi) return {};
  return {
    title: `${ilceVerisi.isim} Evden Eve Nakliyat | Nef Nakliyat`,
    description: `${ilceVerisi.isim} bölgesinde sigortalı, asansörlü ve profesyonel evden eve nakliyat hizmeti. Nef Nakliyat ile güvenli taşınma deneyimi yaşayın. Hemen ücretsiz teklif alın!`,
    keywords: `${ilceVerisi.isim} nakliyat, ${ilceVerisi.isim} evden eve nakliyat, ${ilceVerisi.isim} nakliye`,
  };
}

export async function generateStaticParams() {
  return nakliyeIlceleri.map((ilce) => ({ ilce: ilce.slug }));
}

export default async function Page({ params }: { params: Promise<{ ilce: string }> }) {
  const { ilce } = await params;
  const ilceVerisi = nakliyeIlceleri.find((i) => i.slug === ilce);

  if (!ilceVerisi) {
    notFound();
  }

  const hizmetler = [
    { icon: '🏠', baslik: 'Evden Eve Nakliyat', aciklama: `${ilceVerisi.isim} içinde ve ilçe dışına profesyonel ev taşıma hizmeti.` },
    { icon: '🏢', baslik: 'Ofis Taşıma', aciklama: 'İş günü kaybı olmadan ofisinizi yeni adresine taşıyoruz.' },
    { icon: '📦', baslik: 'Parça Eşya', aciklama: 'Tek koltuktan komple eve kadar her büyüklükte taşıma.' },
    { icon: '🛡️', baslik: 'Sigortalı Taşıma', aciklama: 'Tüm eşyalarınız kapsamlı sigorta güvencesiyle taşınır.' },
    { icon: '🚛', baslik: 'Şehirler Arası', aciklama: "Türkiye'nin her yerine güvenli uzun mesafe nakliyat." },
    { icon: '🎹', baslik: 'Piyano Taşıma', aciklama: 'Hassas ve değerli piyanoları özel ekipmanlarla taşıyoruz.' },
  ];

  return (
    <div>

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #050d1a 0%, #0a1628 50%, #1e3a6e 100%)',
        padding: '80px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Deco */}
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px', fontSize: '0.85rem', color: '#475569' }}>
            <Link href="/" className="nav-link" style={{ fontSize: '0.85rem' }}>
              Ana Sayfa
            </Link>
            <span>›</span>
            <span style={{ color: '#fbbf24' }}>{ilceVerisi.isim} Nakliyat</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: '60px', alignItems: 'start' }}>
            {/* Content */}
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)',
                color: '#fbbf24', fontSize: '0.75rem', fontWeight: 700,
                letterSpacing: '2px', textTransform: 'uppercase' as const,
                padding: '6px 16px', borderRadius: '50px', marginBottom: '20px',
              }}>
                📍 {ilceVerisi.isim} — İstanbul
              </div>

              <h1 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '20px',
                lineHeight: 1.2,
              }}>
                {ilceVerisi.isim}{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Evden Eve Nakliyat
                </span>
              </h1>

              <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '32px' }}>
                <strong style={{ color: '#fbbf24' }}>{ilceVerisi.isim}</strong> bölgesinde profesyonel, sigortalı ve asansörlü nakliyat hizmetleri sunuyoruz.
                Uzman ekibimiz eşyalarınızı özenle paketler, güvenle yeni adresinize taşır.
                7/24 hizmetimizle taşınma sürecinizi stressiz hale getiriyoruz.
              </p>

              {/* Features */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '36px' }}>
                {[
                  '✅ Sigortalı Taşımacılık',
                  '✅ Asansörlü Nakliyat',
                  '✅ 7/24 Hizmet',
                  '✅ Ücretsiz Ekspertiz',
                  '✅ Uzman Ekip',
                  '✅ Garantili Teslimat',
                ].map(f => (
                  <div key={f} style={{ color: '#e2e8f0', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>{f}</div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a href="tel:+905301234567" className="btn-primary" style={{ padding: '14px 32px' }}>
                  📞 Hemen Ara
                </a>
                <a href="https://wa.me/905301234567" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  💬 WhatsApp&apos;tan Yaz
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <IletisimFormu />
            </div>
          </div>
        </div>
      </section>

      {/* ── HİZMETLER ── */}
      <section style={{ padding: '80px 24px', background: '#0f2040' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#ffffff', marginBottom: '12px' }}>
              {ilceVerisi.isim} Bölgesinde{' '}
              <span style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Sunduğumuz Hizmetler
              </span>
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>Her türlü taşıma ihtiyacınız için yanınızdayız.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
            {hizmetler.map((h) => (
              <div key={h.baslik} className="service-card-ilce">
                <div style={{ fontSize: '2.5rem', marginBottom: '14px' }}>{h.icon}</div>
                <h3 style={{ color: '#fbbf24', fontSize: '1.05rem', fontWeight: 700, marginBottom: '8px' }}>{h.baslik}</h3>
                <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: 1.7 }}>{h.aciklama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BİLGİ BÖLÜMÜ ── */}
      <section style={{ padding: '80px 24px', background: '#0A1628' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(245,158,11,0.15)', borderRadius: '20px', padding: '48px' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', color: '#ffffff', marginBottom: '20px' }}>
              {ilceVerisi.isim} Nakliyat Hakkında
            </h2>
            <p style={{ color: '#94a3b8', lineHeight: 1.9, marginBottom: '20px', fontSize: '0.98rem' }}>
              <strong style={{ color: '#fbbf24' }}>{ilceVerisi.isim}</strong> bölgesinde evden eve nakliyat hizmeti arıyorsanız,
              Nef Nakliyat olarak yanınızdayız. Yılların deneyimiyle bölgedeki tüm sokak ve binaları iyi bilen ekibimiz,
              taşınma sürecinizi en verimli şekilde planlar.
            </p>
            <p style={{ color: '#94a3b8', lineHeight: 1.9, marginBottom: '20px', fontSize: '0.98rem' }}>
              {ilceVerisi.isim} nakliyat hizmetlerimiz kapsamında; profesyonel paketleme, demonte-montaj işlemleri,
              asansörlü taşıma ve sigorta güvencesi dahildir. Eşyalarınız özel koruyucu malzemelerle paketlenerek
              hasar riski sıfıra indirilir.
            </p>
            <p style={{ color: '#94a3b8', lineHeight: 1.9, fontSize: '0.98rem' }}>
              Ücretsiz ekspertiz hizmetimizden yararlanmak ve {ilceVerisi.isim} nakliyat fiyatlarımız hakkında
              bilgi almak için hemen bizimle iletişime geçin. 7/24 hizmet anlayışımızla her zaman yanınızdayız.
            </p>
          </div>
        </div>
      </section>

      {/* ── DİĞER BÖLGELER ── */}
      <section style={{ padding: '60px 24px', background: '#0f2040', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h3 style={{ color: '#94a3b8', fontSize: '1rem', fontWeight: 500, marginBottom: '20px', textAlign: 'center' }}>
            Diğer İlçelerde de Hizmet Veriyoruz
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            {nakliyeIlceleri.filter(i => i.slug !== ilce).slice(0, 15).map((i) => (
              <Link key={i.slug} href={`/nakliye-hizmeti/${i.slug}`} className="district-tag">
                {i.isim}
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}