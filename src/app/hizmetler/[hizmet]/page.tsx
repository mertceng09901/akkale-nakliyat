import { hizmetler, hizmetGetir } from '../../../utils/hizmetler';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import IletisimFormu from '../../../components/IletisimFormu';
import { Phone, BookOpen, Settings, MessageCircle, Mail, Clock, HelpCircle, FileText, ChevronRight } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ hizmet: string }> }): Promise<Metadata> {
  const { hizmet } = await params;
  const data = hizmetGetir(hizmet);
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDesc,
    keywords: `${data.baslik}, istanbul nakliyat, akkale nakliyat`,
  };
}

export async function generateStaticParams() {
  return hizmetler.map(h => ({ hizmet: h.slug }));
}

export default async function HizmetDetayPage({ params }: { params: Promise<{ hizmet: string }> }) {
  const { hizmet } = await params;
  const data = hizmetGetir(hizmet);
  if (!data) notFound();

  return (
    <div>

      {/* ══ HERO ══ */}
      <section style={{
        position: 'relative',
        minHeight: '520px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #050d1a 0%, #0a1628 50%, #1e3a6e 100%)',
      }}>
        {/* BG Image */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image
            src={data.gorsel}
            alt={data.baslik}
            fill
            style={{ objectFit: 'cover', opacity: 0.2 }}
            priority
          />
        </div>
        {/* Gradient overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(5,13,26,0.95) 40%, rgba(5,13,26,0.5) 100%)' }} />

        {/* Decorative glow */}
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '500px', height: '500px', borderRadius: '50%', background: `radial-gradient(circle, ${data.renk}20 0%, transparent 70%)`, pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 24px', position: 'relative', zIndex: 1, width: '100%' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '28px', fontSize: '0.82rem' }}>
            <Link href="/" className="nav-link" style={{ fontSize: '0.82rem' }}>Ana Sayfa</Link>
            <span style={{ color: '#475569' }}>›</span>
            <Link href="/#hizmetler" className="nav-link" style={{ fontSize: '0.82rem' }}>Hizmetler</Link>
            <span style={{ color: '#475569' }}>›</span>
            <span style={{ color: '#facc15' }}>{data.baslik}</span>
          </div>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: `${data.renk}20`, border: `1px solid ${data.renk}40`,
            color: data.renk, fontSize: '0.75rem', fontWeight: 700,
            letterSpacing: '2px', textTransform: 'uppercase' as const,
            padding: '6px 16px', borderRadius: '50px', marginBottom: '20px',
          }}>
            {data.icon} Akkale Nakliyat Hizmeti
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '20px',
            lineHeight: 1.15,
            maxWidth: '700px',
          }}>
            {data.baslik}
          </h1>

          <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '36px', maxWidth: '580px' }}>
            {data.kisaAciklama}
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a href="tel:+905301234567" className="btn-primary" style={{ fontSize: '1rem', padding: '14px 32px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={20} /> Hemen Ara
            </a>
            <a href="#teklif" className="btn-outline" style={{ padding: '13px 31px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FileText size={20} /> Ücretsiz Teklif Al
            </a>
          </div>
        </div>
      </section>

      {/* ══ ÖZELLİKLER BANDı ══ */}
      <section style={{ background: `linear-gradient(135deg, ${data.renk} 0%, ${data.renk}aa 100%)`, padding: '0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '32px 24px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center' }}>
            {data.ozellikler.map(oz => (
              <div key={oz} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white', fontSize: '0.9rem', fontWeight: 500 }}>
                <span style={{ fontSize: '1rem' }}>✓</span> {oz}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DETAYLAR + GÖRSEL ══ */}
      <section style={{ padding: '100px 24px', background: '#0A1628' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 460px', gap: '60px', alignItems: 'start' }}>

            {/* Detay İçerikleri */}
            <div>
              <div className="section-badge" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><BookOpen size={16} /> Hizmet Detayları</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#ffffff', margin: '16px 0 40px' }}>
                Neden <span style={{ background: `linear-gradient(135deg, ${data.renk}, #eab308)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Akkale Nakliyat</span>?
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                {data.detaylar.map((d, i) => (
                  <div key={i} style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: `1px solid rgba(255,255,255,0.08)`,
                    borderLeft: `3px solid ${data.renk}`,
                    borderRadius: '12px',
                    padding: '24px 28px',
                    transition: 'all 0.3s ease',
                  }}>
                    <h3 style={{ color: data.renk, fontSize: '1.05rem', fontWeight: 700, marginBottom: '10px' }}>
                      {d.baslik}
                    </h3>
                    <p style={{ color: '#94a3b8', fontSize: '0.93rem', lineHeight: 1.8 }}>
                      {d.icerik}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sağ Kolon: Görsel + Fiyat Bilgisi */}
            <div style={{ position: 'sticky', top: '100px' }}>
              {/* Hizmet Görseli */}
              <div style={{ position: 'relative', height: '300px', borderRadius: '20px', overflow: 'hidden', marginBottom: '28px', boxShadow: `0 20px 60px ${data.renk}30` }}>
                <Image
                  src={data.gorsel}
                  alt={data.baslik}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, transparent 50%, rgba(5,13,26,0.8) 100%)` }} />
                <div style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
                  <div style={{ fontSize: '2.5rem' }}>{data.icon}</div>
                </div>
              </div>

              {/* Fiyat Bilgisi */}
              <div style={{
                background: 'rgba(255,255,255,0.04)',
                border: `1px solid ${data.renk}30`,
                borderRadius: '16px',
                padding: '24px',
                marginBottom: '24px',
              }}>
                <h3 style={{ color: '#facc15', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <FileText size={16} /> Fiyat Bilgisi
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  {data.fiyatBilgisi}
                </p>
              </div>

              {/* İletişim CTA */}
              <div style={{ background: `linear-gradient(135deg, ${data.renk}15, transparent)`, border: `1px solid ${data.renk}30`, borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
                <div style={{ marginBottom: '12px', display: 'flex', justifyContent: 'center' }}>
                  <Phone size={40} color={data.renk} />
                </div>
                <p style={{ color: '#e2e8f0', fontWeight: 600, marginBottom: '16px', fontSize: '0.95rem' }}>Hemen Arayın, Anında Teklif Alın</p>
                <a href="tel:+905301234567" className="btn-primary" style={{ display: 'block', textAlign: 'center' }}>
                  0530 123 45 67
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SÜREÇ ADIMLARI ══ */}
      <section style={{ padding: '100px 24px', background: '#0f2040' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="section-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><Settings size={16} /> Çalışma Sürecimiz</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#ffffff', margin: '16px 0 12px' }}>
              Adım Adım <span style={{ background: `linear-gradient(135deg, ${data.renk}, #eab308)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Nasıl Çalışıyoruz?</span>
            </h2>
            <p style={{ color: '#64748b', fontSize: '1rem' }}>Şeffaf ve planlı bir süreçle her taşıma mükemmel sonuçlanır.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
            {data.surec.map((s) => (
              <div key={s.adim} style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                padding: '28px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
            >
                {/* Step number background */}
                <div style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '5rem', fontWeight: 900, color: `${data.renk}10`, lineHeight: 1 }}>
                  {s.adim}
                </div>

                <div style={{
                  width: '50px', height: '50px',
                  background: `${data.renk}20`,
                  border: `1px solid ${data.renk}40`,
                  borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.6rem', marginBottom: '16px',
                }}>
                  {s.icon}
                </div>

                <div style={{ color: data.renk, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' as const, marginBottom: '8px' }}>
                  ADIM {s.adim}
                </div>
                <h3 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 700, marginBottom: '10px' }}>{s.baslik}</h3>
                <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: 1.7 }}>{s.aciklama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BÜYÜK GÖRSEL BÖLÜMÜ ══ */}
      <section style={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
        <Image
          src={data.gorsel}
          alt={data.baslik}
          fill
          style={{ objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(5,13,26,0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', padding: '0 24px' }}>
            <div style={{ fontSize: '4rem', marginBottom: '16px' }}>{data.icon}</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#ffffff', marginBottom: '16px' }}>
              {data.baslik} İçin <span className="gradient-text">Bizi Arayın</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', marginBottom: '28px' }}>
              Ücretsiz ekspertiz ve anında fiyat teklifi için 7/24 hizmetinizdeyiz.
            </p>
            <a href="tel:+905301234567" style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: 'white', color: '#0a1628',
              fontWeight: 700, fontSize: '1.1rem',
              padding: '16px 40px', borderRadius: '50px',
              textDecoration: 'none',
              boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
            }}>
              <Phone size={24} /> 0530 123 45 67
            </a>
          </div>
        </div>
      </section>

      {/* ══ S.S.S. ══ */}
      <section style={{ padding: '100px 24px', background: '#0A1628' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><HelpCircle size={16} /> Sık Sorulan Sorular</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#ffffff', margin: '16px 0' }}>
              Merak Ettikleriniz
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {data.sss.map((item, i) => (
              <details key={i} style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid rgba(255,255,255,0.08)`, borderRadius: '12px', overflow: 'hidden' }}>
                <summary style={{
                  padding: '20px 24px',
                  color: '#e2e8f0',
                  fontSize: '0.98rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  listStyle: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '16px',
                }}>
                  <span>{item.soru}</span>
                  <span style={{ color: data.renk, fontSize: '1.3rem', flexShrink: 0 }}>+</span>
                </summary>
                <div style={{ padding: '0 24px 20px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.8, paddingTop: '16px' }}>{item.cevap}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TEKLİF FORMU ══ */}
      <section id="teklif" style={{ padding: '100px 24px', background: '#0f2040' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 480px', gap: '60px', alignItems: 'start' }}>

            <div>
              <div className="section-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><FileText size={16} /> Teklif Formu</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#ffffff', margin: '16px 0 20px' }}>
                Ücretsiz Fiyat <span className="gradient-text">Teklifi Alın</span>
              </h2>
              <p style={{ color: '#64748b', lineHeight: 1.8, marginBottom: '32px', fontSize: '0.95rem' }}>
                {data.baslik} hizmeti için ücretsiz teklif almak isterseniz formu doldurun veya bizi arayın.
                Uzman ekibimiz en kısa sürede sizinle iletişime geçecek.
              </p>

              {/* İletişim Bilgileri */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { icon: <Phone size={20} />, label: 'Telefon', value: '0530 123 45 67', href: 'tel:+905301234567' },
                  { icon: <MessageCircle size={20} />, label: 'WhatsApp', value: '0530 123 45 67', href: 'https://wa.me/905301234567' },
                  { icon: <Mail size={20} />, label: 'E-posta', value: 'info@akkalenakliyat.com', href: 'mailto:info@akkalenakliyat.com' },
                  { icon: <Clock size={20} />, label: 'Çalışma Saatleri', value: '7/24 Hizmetinizdeyiz', href: undefined },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{
                      width: '44px', height: '44px',
                      background: `${data.renk}20`, border: `1px solid ${data.renk}40`,
                      borderRadius: '10px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0,
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ color: '#64748b', fontSize: '0.75rem', marginBottom: '2px' }}>{item.label}</div>
                      {item.href ? (
                        <a href={item.href} style={{ color: '#e2e8f0', fontSize: '0.95rem', fontWeight: 500, textDecoration: 'none' }}>{item.value}</a>
                      ) : (
                        <div style={{ color: '#e2e8f0', fontSize: '0.95rem', fontWeight: 500 }}>{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <IletisimFormu />
            </div>
          </div>
        </div>
      </section>

      {/* ══ DİĞER HİZMETLER ══ */}
      <section style={{ padding: '80px 24px', background: '#0A1628', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h3 style={{ color: '#94a3b8', fontSize: '1rem', fontWeight: 500, marginBottom: '24px', textAlign: 'center' }}>
            Diğer Hizmetlerimiz
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>
            {hizmetler.filter(h => h.slug !== data.slug).map(h => (
              <Link key={h.slug} href={`/hizmetler/${h.slug}`} className="district-tag" style={{ fontSize: '0.88rem', padding: '10px 20px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                {h.baslik} <ChevronRight size={14} />
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
