import { nakliyeIlceleri } from '../../../utils/ilceler';
import { notFound } from 'next/navigation';
import IletisimFormu from '../../../components/IletisimFormu';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Home, Building2, Package, Shield, Truck, Music, MapPin, CheckCircle, Phone, MessageCircle } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ ilce: string }> }): Promise<Metadata> {
  const { ilce } = await params;
  const ilceVerisi = nakliyeIlceleri.find((i) => i.slug === ilce);
  if (!ilceVerisi) return {};
  return {
    title: `${ilceVerisi.isim} Evden Eve Nakliyat | Akkale Nakliyat`,
    description: `${ilceVerisi.isim} bölgesinde sigortalı, asansörlü ve profesyonel evden eve nakliyat hizmeti. Akkale Nakliyat ile güvenli taşınma deneyimi yaşayın. Hemen ücretsiz teklif alın!`,
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
    { icon: <Home size={28} />, baslik: 'Evden Eve Nakliyat', aciklama: `${ilceVerisi.isim} içinde ve ilçe dışına profesyonel ev taşıma hizmeti.`, color: '#facc15' },
    { icon: <Building2 size={28} />, baslik: 'Ofis Taşıma', aciklama: 'İş günü kaybı olmadan ofisinizi yeni adresine taşıyoruz.', color: '#06b6d4' },
    { icon: <Package size={28} />, baslik: 'Parça Eşya', aciklama: 'Tek koltuktan komple eve kadar her büyüklükte taşıma.', color: '#8b5cf6' },
    { icon: <Shield size={28} />, baslik: 'Sigortalı Taşıma', aciklama: 'Tüm eşyalarınız kapsamlı sigorta güvencesiyle taşınır.', color: '#f97316' },
    { icon: <Truck size={28} />, baslik: 'Şehirler Arası', aciklama: "Türkiye'nin her yerine güvenli uzun mesafe nakliyat.", color: '#eab308' },
    { icon: <Music size={28} />, baslik: 'Piyano Taşıma', aciklama: 'Hassas ve değerli piyanoları özel ekipmanlarla taşıyoruz.', color: '#10b981' },
  ];

  const ozellikler = [
    'Sigortalı Taşımacılık',
    'Asansörlü Nakliyat',
    '7/24 Hizmet',
    'Ücretsiz Ekspertiz',
    'Uzman Ekip',
    'Garantili Teslimat',
  ];

  return (
    <div style={{ fontFamily: "'Quicksand', sans-serif" }}>

      {/* ══════════════ HERO — LACİVERT ══════════════ */}
      <section style={{
        background: 'linear-gradient(135deg, #050d1a 0%, #0a1628 55%, #1a2e54 100%)',
        padding: '60px 20px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Dekoratif halkalar */}
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(250,204,21,0.14) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-60px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(30,58,110,0.4) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '28px', fontSize: '0.85rem', color: '#475569' }}>
            <Link href="/" className="nav-link" style={{ fontSize: '0.85rem' }}>Ana Sayfa</Link>
            <span>›</span>
            <span style={{ color: '#facc15' }}>{ilceVerisi.isim} Nakliyat</span>
          </div>

          {/* HERO GRID — CSS class ile responsive */}
          <div className="ilce-hero-grid">

            {/* Sol: İçerik */}
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'rgba(250,204,21,0.12)', border: '1px solid rgba(250,204,21,0.3)',
                color: '#facc15', fontSize: '0.75rem', fontWeight: 700,
                letterSpacing: '2px', textTransform: 'uppercase' as const,
                padding: '6px 16px', borderRadius: '50px', marginBottom: '20px',
              }}>
                <MapPin size={14} /> {ilceVerisi.isim} — İstanbul
              </div>

              <h1 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2rem, 6vw, 3.2rem)',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '20px',
                lineHeight: 1.2,
              }}>
                {ilceVerisi.isim}{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #facc15, #eab308)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Evden Eve Nakliyat
                </span>
              </h1>

              <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.8, marginBottom: '28px' }}>
                <strong style={{ color: '#facc15' }}>{ilceVerisi.isim}</strong> bölgesinde profesyonel, sigortalı ve asansörlü nakliyat hizmetleri sunuyoruz.
                Uzman ekibimiz eşyalarınızı özenle paketler, güvenle yeni adresinize taşır.
              </p>

              {/* Özellikler — 2 kolon grid */}
              <div className="ilce-features-grid" style={{ marginBottom: '32px' }}>
                {ozellikler.map(f => (
                  <div key={f} style={{ color: '#e2e8f0', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle size={16} color="#facc15" /> {f}
                  </div>
                ))}
              </div>

              {/* CTA Butonları */}
              <div className="ilce-cta-btns">
                <a href="tel:+905301234567" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                  <Phone size={18} /> Hemen Ara
                </a>
                <a href="https://wa.me/905301234567" target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                  <MessageCircle size={18} /> WhatsApp&apos;tan Yaz
                </a>
              </div>
            </div>

            {/* Sağ: 3D İletişim Kartı — mobilde gizli */}
            <div className="ilce-form-col">
              {/* 3D Kart Wrapper */}
              <div style={{
                background: 'linear-gradient(145deg, #1e3a6e, #0A1628)',
                border: '1px solid rgba(250,204,21,0.28)',
                borderRadius: '24px',
                padding: '32px 28px',
                boxShadow: '8px 8px 0px rgba(234,179,8,0.18), 16px 16px 0px rgba(234,179,8,0.07), 0 30px 60px rgba(0,0,0,0.5)',
                transform: 'perspective(900px) rotateY(-5deg) rotateX(2deg)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Köşe dekor */}
                <div style={{ position: 'absolute', top: '-1px', right: '-1px', width: '70px', height: '70px', background: 'linear-gradient(135deg, #facc15, transparent)', borderRadius: '0 24px 0 70px', opacity: 0.18 }} />

                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '8px' }}>📋</div>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', color: '#fff', marginBottom: '4px' }}>
                    Ücretsiz Teklif Al
                  </h2>
                  <p style={{ color: '#64748b', fontSize: '0.82rem' }}>2 dakikada fiyat öğren</p>
                </div>
                <IletisimFormu />
              </div>
            </div>
          </div>

          {/* MOBİLDE GÖRÜNEN: Gerçek form */}
          <div className="ilce-mobile-cta" style={{ marginTop: '32px' }}>
            <div style={{ textAlign: 'center', marginBottom: '16px' }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', color: '#ffffff', marginBottom: '6px' }}>
                Ücretsiz Teklif Al
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.85rem' }}>Formu doldurun, sizi hemen arayalım</p>
            </div>
            <IletisimFormu />
          </div>
        </div>
      </section>

      {/* ══════════════ HİZMETLER — BEYAZ ══════════════ */}
      <section style={{ padding: '80px 20px' }} className="section-white">
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="section-badge-light">🚚 Hizmetlerimiz</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#0A1628', marginBottom: '12px' }}>
              {ilceVerisi.isim} Bölgesinde{' '}
              <span style={{ background: 'linear-gradient(135deg, #facc15, #eab308)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Sunduğumuz Hizmetler
              </span>
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>Her türlü taşıma ihtiyacınız için yanınızdayız.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
            {hizmetler.map((h) => (
              <div
                key={h.baslik}
                className="light-card"
                style={{ padding: '28px', position: 'relative', overflow: 'hidden' }}
              >
                {/* Üst renk şeridi */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${h.color}, transparent)`, borderRadius: '16px 16px 0 0' }} />

                <div style={{
                  width: '52px', height: '52px',
                  background: `${h.color}18`,
                  border: `2px solid ${h.color}40`,
                  borderRadius: '14px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: h.color,
                  marginBottom: '16px',
                }}>
                  {h.icon}
                </div>
                <h3 style={{ color: '#0A1628', fontSize: '1rem', fontWeight: 700, marginBottom: '8px', fontFamily: "'Playfair Display', serif" }}>{h.baslik}</h3>
                <p style={{ color: '#64748b', fontSize: '0.86rem', lineHeight: 1.7 }}>{h.aciklama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ BİLGİ BÖLÜMÜ — LACİVERT ══════════════ */}
      <section style={{ padding: '80px 20px' }} className="section-navy">
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>

          {/* 3D Bilgi Kutusu */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
            border: '1px solid rgba(250,204,21,0.2)',
            borderRadius: '24px',
            padding: '48px 40px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)',
          }}>
            {/* Dekoratif sol çizgi */}
            <div style={{ position: 'absolute', left: 0, top: '40px', bottom: '40px', width: '4px', background: 'linear-gradient(to bottom, #facc15, #eab308, transparent)', borderRadius: '0 4px 4px 0' }} />

            {/* 3D ikon */}
            <div style={{
              width: '72px', height: '72px',
              background: 'linear-gradient(135deg, #facc15, #eab308)',
              borderRadius: '20px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '2rem',
              marginBottom: '24px',
              boxShadow: '6px 6px 0px rgba(234,179,8,0.25), 0 16px 32px rgba(234,179,8,0.2)',
              transform: 'perspective(300px) rotateX(5deg) rotateY(-5deg)',
            }}>
              📍
            </div>

            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#ffffff', marginBottom: '20px' }}>
              {ilceVerisi.isim} Nakliyat Hakkında
            </h2>
            <p style={{ color: '#94a3b8', lineHeight: 1.9, marginBottom: '16px', fontSize: '0.97rem' }}>
              <strong style={{ color: '#facc15' }}>{ilceVerisi.isim}</strong> bölgesinde evden eve nakliyat hizmeti arıyorsanız,
              Akkale Nakliyat olarak yanınızdayız. Yılların deneyimiyle bölgedeki tüm sokak ve binaları iyi bilen ekibimiz,
              taşınma sürecinizi en verimli şekilde planlar.
            </p>
            <p style={{ color: '#94a3b8', lineHeight: 1.9, marginBottom: '16px', fontSize: '0.97rem' }}>
              {ilceVerisi.isim} nakliyat hizmetlerimiz kapsamında; profesyonel paketleme, demonte-montaj işlemleri,
              asansörlü taşıma ve sigorta güvencesi dahildir.
            </p>
            <p style={{ color: '#94a3b8', lineHeight: 1.9, fontSize: '0.97rem' }}>
              Ücretsiz ekspertiz hizmetimizden yararlanmak ve {ilceVerisi.isim} nakliyat fiyatlarımız hakkında
              bilgi almak için hemen bizimle iletişime geçin. 7/24 hizmet anlayışımızla her zaman yanınızdayız.
            </p>

            {/* Alt güven rozetleri */}
            <div style={{ display: 'flex', gap: '20px', marginTop: '28px', flexWrap: 'wrap' }}>
              {[
                { icon: '⭐', text: '4.9/5 Google' },
                { icon: '🛡️', text: 'Sigortalı' },
                { icon: '⏱️', text: '7/24 Hizmet' },
                { icon: '🏆', text: '10+ Yıl' },
              ].map(b => (
                <div key={b.text} style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', fontSize: '0.85rem' }}>
                  <span>{b.icon}</span><span>{b.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ DİĞER BÖLGELER — BEYAZ ══════════════ */}
      <section style={{ padding: '60px 20px' }} className="section-light">
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h3 style={{ color: '#0A1628', fontSize: '1rem', fontWeight: 600, marginBottom: '20px', textAlign: 'center' }}>
            Diğer İlçelerde de Hizmet Veriyoruz
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            {nakliyeIlceleri.filter(i => i.slug !== ilce).slice(0, 15).map((i) => (
              <Link key={i.slug} href={`/nakliye-hizmeti/${i.slug}`} style={{
                display: 'inline-block',
                padding: '8px 18px',
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '50px',
                color: '#475569',
                fontSize: '0.82rem',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              }}>
                📍 {i.isim}
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}