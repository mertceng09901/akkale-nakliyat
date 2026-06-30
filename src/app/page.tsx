'use client';

import Link from 'next/link';
import Image from 'next/image';
import { nakliyeIlceleri } from '../utils/ilceler';
import { useState, useEffect, useRef } from 'react';

// ─── Animasyonlu Sayaç ───────────────────────────────────────────────────────
function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 2000;
          const step = (target / duration) * 16;
          const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(start));
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <div ref={ref}>{count.toLocaleString('tr-TR')}{suffix}</div>;
}

// ─── Testimonial Slider ───────────────────────────────────────────────────────
const testimonials = [
  { ad: 'Bayse Nur Karabey', yildiz: 5, yorum: 'Evimizi Taşıyan Abilerin ellerine kollarına sağlık olsun. Çok memnun kaldık, tavsiye ederim! 😊', sehir: 'İstanbul' },
  { ad: 'Bedri Comak', yildiz: 5, yorum: "İstanbul'dan İzmir'e evden eve nakliyat sürecinde Nef Nakliyat ile çalıştık ve çok memnun kaldık. Eşyalarımız profesyonelce paketlendi, zamanında teslim edildi.", sehir: 'İstanbul' },
  { ad: 'Hilal Demir', yildiz: 5, yorum: 'Profesyonel ekiple eşyalarımızı özenle taşıdılar. Çok teşekkür ederiz, tavsiye ederim.', sehir: 'Çekmeköy' },
  { ad: 'Ahmet Yılmaz', yildiz: 5, yorum: "Tuzla'dan Pendik'e taşındık. Ekip çok hızlı ve özenli çalıştı. Eşyalarımızda en ufak bir hasar olmadı. Kesinlikle tavsiye ediyorum.", sehir: 'Tuzla' },
  { ad: 'Fatma Kaya', yildiz: 5, yorum: 'Ofis taşıma hizmeti aldık. Bilgisayarlarımız ve belgelerimiz çok titizlikle paketlendi. İş günü kaybımız olmadı, harika bir organizasyondu.', sehir: 'Kadıköy' },
  { ad: 'Zeynep Arslan', yildiz: 5, yorum: 'Parça eşya taşıma hizmeti aldım. Tek bir koltuk takımı için bile aynı özeni gösterdiler. Fiyatı da gayet uygundu.', sehir: 'Şişli' },
];

const services = [
  { icon: '🏠', title: 'Evden Eve Nakliyat', desc: 'Uzman ekibimiz eşyalarınızı özel paketleme materyalleriyle kırılma ve çizilme riskini minimize ederek taşır.', href: '/hizmetler/evden-eve-nakliyat', color: '#f59e0b' },
  { icon: '🚛', title: 'Şehirler Arası Nakliyat', desc: "Türkiye'nin her noktasına ulaşan taşıma ağımız ile eşyalarınızı belirlenen tarihte güvenle teslim ediyoruz.", href: '/hizmetler/sehirler-arasi-nakliyat', color: '#ef4444' },
  { icon: '📦', title: 'Parça Eşya Taşıma', desc: 'Az sayıda eşyası olan müşterilerimiz için ekonomik ve özenli parça eşya taşıma çözümleri sunuyoruz.', href: '/hizmetler/parca-esya-tasima', color: '#8b5cf6' },
  { icon: '🏢', title: 'Ofis Taşıma', desc: 'İş günü kaybı yaşamadan ofisinizi yeni adresine profesyonelce taşıyoruz.', href: '/hizmetler/ofis-tasima', color: '#06b6d4' },
  { icon: '🎹', title: 'Piyano Taşıma', desc: 'Hassas ve değerli piyanoları özel ekipmanlarla güvenle taşıyan uzman ekibimiz emrinizdedir.', href: '/hizmetler/piyano-tasima', color: '#10b981' },
  { icon: '🛡️', title: 'Sigortalı Taşıma', desc: 'Tüm taşımalarımız sigorta güvencesi altındadır. Eşyalarınıza zarar gelmesi durumunda tam tazminat sağlanır.', href: '/hizmetler/sigortali-tasima', color: '#f97316' },
];

const features = [
  { icon: '🛡️', title: 'Sigortalı Taşımacılık', desc: 'Tüm eşyalarınız taşıma süresince kapsamlı sigorta güvencesi altındadır.' },
  { icon: '⚡', title: '7/24 Hizmet', desc: 'Haftanın 7 günü, günün 24 saati iletişim ve hizmet desteği sunuyoruz.' },
  { icon: '🏆', title: 'Profesyonel Ekip', desc: '10 yılı aşkın deneyime sahip, eğitimli nakliyat uzmanlarımız emrinizdedir.' },
  { icon: '🚀', title: 'Asansörlü Nakliyat', desc: 'Modern asansörlü sistemlerimizle ağır eşyaları güvenle taşıyoruz.' },
];

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formData, setFormData] = useState({ ad: '', telefon: '', nereden: '', nereye: '', tarih: '' });
  const [formDurum, setFormDurum] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleQuickForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormDurum('loading');
    await new Promise(r => setTimeout(r, 1200));
    setFormDurum('success');
    setTimeout(() => setFormDurum('idle'), 4000);
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ══════════════════ HERO ══════════════════ */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #050d1a 0%, #0a1628 40%, #1a2a4a 100%)',
      }}>
        {/* Background truck image */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/hero-truck.png"
            alt="Nef Nakliyat - Profesyonel Nakliyat"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center right', opacity: 0.18 }}
            priority
          />
        </div>

        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)', zIndex: 1 }} />
        <div style={{ position: 'absolute', bottom: '-150px', left: '-100px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(239,68,68,0.1) 0%, transparent 70%)', zIndex: 1 }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 420px', gap: '60px', alignItems: 'center', position: 'relative', zIndex: 2, width: '100%' }}>

          {/* Left Content */}
          <div style={{ animation: 'fadeInLeft 0.8s ease forwards' }}>
            <div className="section-badge" style={{ marginBottom: '24px' }}>
              ✨ İstanbul&apos;un Güvenilir Nakliyat Firması
            </div>

            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: '24px',
              color: '#ffffff',
            }}>
              <span style={{ display: 'block' }}>Güvenli & Hızlı</span>
              <span className="gradient-text-animated" style={{ display: 'block' }}>
                Evden Eve Nakliyat
              </span>
            </h1>

            <p style={{ fontSize: '1.15rem', color: '#94a3b8', lineHeight: 1.8, marginBottom: '36px', maxWidth: '540px' }}>
              İstanbul&apos;un 39 ilçesinde <strong style={{ color: '#fbbf24' }}>sigortalı</strong>, <strong style={{ color: '#fbbf24' }}>asansörlü</strong> ve profesyonel nakliyat hizmeti. 
              Eşyalarınız uzman ellerle yeni yuvanıza taşınsın.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
              <a href="tel:+905301234567" className="btn-primary" style={{ fontSize: '1.05rem', padding: '16px 36px' }}>
                📞 Hemen Ara
              </a>
              <a href="#teklif" className="btn-outline" style={{ padding: '15px 35px', fontSize: '1.05rem' }}>
                💰 Ücretsiz Teklif Al
              </a>
            </div>

            {/* Trust Badges */}
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              {[
                { icon: '⭐', text: '4.9/5 Google Puanı' },
                { icon: '✅', text: '500+ Mutlu Müşteri' },
                { icon: '🛡️', text: 'Tam Sigorta Güvencesi' },
              ].map((badge) => (
                <div key={badge.text} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '0.9rem' }}>
                  <span>{badge.icon}</span>
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Quick Quote Form */}
          <div id="teklif" className="glass-card-dark" style={{ padding: '36px', animation: 'fadeInRight 0.8s ease 0.2s both' }}>
            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚚</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: '#ffffff', marginBottom: '6px' }}>
                Ücretsiz Teklif Alın
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>2 dakikada anında fiyat öğrenin</p>
            </div>

            {formDurum === 'success' ? (
              <div style={{ textAlign: 'center', padding: '40px 20px', animation: 'fadeInUp 0.5s ease' }}>
                <div style={{ fontSize: '4rem', marginBottom: '16px' }}>✅</div>
                <h3 style={{ color: '#10b981', fontSize: '1.3rem', marginBottom: '8px' }}>Talebiniz Alındı!</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>En kısa sürede sizi arayacağız.</p>
              </div>
            ) : (
              <form onSubmit={handleQuickForm} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  { name: 'ad', label: 'Ad Soyad', type: 'text', placeholder: 'Adınız Soyadınız', required: true },
                  { name: 'telefon', label: 'Telefon', type: 'tel', placeholder: '0530 xxx xx xx', required: true },
                  { name: 'nereden', label: 'Nereden', type: 'text', placeholder: 'Örn: Kadıköy', required: false },
                  { name: 'nereye', label: 'Nereye', type: 'text', placeholder: 'Örn: Şişli', required: false },
                  { name: 'tarih', label: 'Taşınma Tarihi', type: 'date', placeholder: '', required: false },
                ].map((field) => (
                  <div key={field.name}>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '6px', fontWeight: 500, letterSpacing: '0.3px' }}>
                      {field.label} {field.required && <span style={{ color: '#ef4444' }}>*</span>}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={e => setFormData({ ...formData, [field.name]: e.target.value })}
                      style={{
                        width: '100%',
                        background: 'rgba(255,255,255,0.07)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '10px',
                        padding: '12px 16px',
                        color: '#e2e8f0',
                        fontSize: '0.9rem',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                        colorScheme: 'dark',
                      }}
                      onFocus={e => { e.target.style.borderColor = 'rgba(245,158,11,0.6)'; }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.12)'; }}
                    />
                  </div>
                ))}

                <button
                  type="submit"
                  disabled={formDurum === 'loading'}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', marginTop: '8px', padding: '16px', fontSize: '1rem', opacity: formDurum === 'loading' ? 0.8 : 1 }}
                >
                  {formDurum === 'loading' ? '⏳ Gönderiliyor...' : '🎯 Teklif İste — Ücretsiz'}
                </button>

                <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#475569', marginTop: '4px' }}>
                  🔒 Bilgileriniz gizli tutulur, spam gönderilmez.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', animation: 'float 2s ease-in-out infinite', zIndex: 2 }}>
          <span style={{ color: '#475569', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Aşağı kaydır</span>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, #f59e0b, transparent)' }} />
        </div>
      </section>

      {/* ══════════════════ İSTATİSTİKLER ══════════════════ */}
      <section style={{
        background: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
        padding: '0',
        overflow: 'hidden',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0' }}>
            {[
              { number: 500, suffix: '+', label: 'Mutlu Müşteri', icon: '😊' },
              { number: 39, suffix: '', label: 'İstanbul İlçesi', icon: '📍' },
              { number: 10, suffix: '+', label: 'Yıl Deneyim', icon: '🏆' },
              { number: 100, suffix: '%', label: 'Müşteri Memnuniyeti', icon: '⭐' },
            ].map((stat, i) => (
              <div key={stat.label} style={{
                padding: '40px 24px',
                textAlign: 'center',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.2)' : 'none',
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{stat.icon}</div>
                <div style={{ fontSize: '2.8rem', fontWeight: 900, color: '#ffffff', lineHeight: 1, marginBottom: '6px', fontFamily: "'Inter', sans-serif" }}>
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                </div>
                <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', fontWeight: 500 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ HİZMETLER ══════════════════ */}
      <section id="hizmetler" style={{ padding: '100px 24px', background: 'linear-gradient(180deg, #0A1628 0%, #0f2040 100%)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="section-badge">🚚 Hizmetlerimiz</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#ffffff', marginBottom: '16px' }}>
              Profesyonel Nakliyat <span className="gradient-text">Çözümleri</span>
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              Her türlü taşınma ihtiyacınız için kapsamlı ve güvenilir nakliyat hizmetleri sunuyoruz.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {services.map((service, i) => (
              <Link key={service.title} href={service.href} style={{ textDecoration: 'none' }}>
                <div
                  className="glass-card"
                  style={{
                    padding: '36px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    animation: `fadeInUp 0.6s ease ${i * 0.1}s both`,
                    position: 'relative',
                    overflow: 'hidden',
                    height: '100%',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = 'translateY(-8px)';
                    el.style.borderColor = service.color + '60';
                    el.style.background = 'rgba(255,255,255,0.08)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = 'translateY(0)';
                    el.style.borderColor = 'rgba(255,255,255,0.1)';
                    el.style.background = 'rgba(255,255,255,0.05)';
                  }}
                >
                  {/* Accent line */}
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${service.color}, transparent)`, borderRadius: '16px 16px 0 0' }} />

                  <div style={{
                    width: '64px', height: '64px',
                    background: `${service.color}20`,
                    border: `1px solid ${service.color}40`,
                    borderRadius: '16px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '2rem',
                    marginBottom: '20px',
                  }}>
                    {service.icon}
                  </div>

                  <h3 style={{ color: '#ffffff', fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px', fontFamily: "'Playfair Display', serif" }}>
                    {service.title}
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '20px' }}>
                    {service.desc}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: service.color, fontSize: '0.85rem', fontWeight: 600 }}>
                    Detaylı Bilgi <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ NEDEN BİZ ══════════════════ */}
      <section style={{ padding: '100px 24px', background: '#0A1628', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', background: 'radial-gradient(circle at right, rgba(245,158,11,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

            {/* Left */}
            <div>
              <div className="section-badge">🏆 Neden Bizi Seçmelisiniz</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#ffffff', margin: '16px 0 24px' }}>
                İstanbul&apos;un En Güvenilir <span className="gradient-text">Nakliyat Firması</span>
              </h2>
              <p style={{ color: '#64748b', lineHeight: 1.8, marginBottom: '36px', fontSize: '1rem' }}>
                10 yılı aşkın deneyimimiz, uzman ekibimiz ve modern ekipmanlarımızla taşınma sürecinizi 
                stressiz ve sorunsuz hale getiriyoruz. Her müşterimiz bizim için özel ve değerlidir.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  '✅ Lisanslı ve Sigortalı Nakliyat',
                  '✅ Deneyimli ve Eğitimli Ekip',
                  '✅ Rekabetçi Fiyatlar',
                  '✅ Zamanında Teslimat Garantisi',
                  '✅ Ücretsiz Ekspertiz Hizmeti',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e2e8f0', fontSize: '0.95rem' }}>
                    {item}
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '16px', marginTop: '36px', flexWrap: 'wrap' }}>
                <a href="tel:+905301234567" className="btn-primary">📞 Hemen Ara</a>
                <a href="#bolgeler" className="btn-outline">📍 Bölgelerimiz</a>
              </div>
            </div>

            {/* Right: Feature Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {features.map((feature, i) => (
                <div
                  key={feature.title}
                  className="glass-card"
                  style={{ padding: '28px 24px', animation: `fadeInUp 0.6s ease ${i * 0.15}s both`, transition: 'all 0.3s ease' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '14px' }}>{feature.icon}</div>
                  <h3 style={{ color: '#fbbf24', fontSize: '1rem', fontWeight: 700, marginBottom: '8px' }}>{feature.title}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.6 }}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ MÜŞTERİ YORUMLARI ══════════════════ */}
      <section style={{ padding: '100px 24px', background: 'linear-gradient(180deg, #0f2040 0%, #0A1628 100%)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="section-badge">💬 Müşteri Yorumları</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#ffffff', marginBottom: '12px' }}>
              Onlar <span className="gradient-text">Memnun</span>, Sizi de Memnun Edelim
            </h2>
            <p style={{ color: '#64748b', fontSize: '1rem' }}>Google&apos;da 4.9/5 puan ile hizmet veriyoruz</p>
          </div>

          {/* Featured Testimonial */}
          <div style={{ maxWidth: '760px', margin: '0 auto 60px', position: 'relative', minHeight: '220px' }}>
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="glass-card-dark"
                style={{
                  padding: '40px',
                  position: 'absolute',
                  inset: 0,
                  opacity: i === activeTestimonial ? 1 : 0,
                  transform: i === activeTestimonial ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.6s ease',
                  pointerEvents: i === activeTestimonial ? 'auto' : 'none',
                }}
              >
                <div style={{ fontSize: '3rem', color: '#f59e0b', marginBottom: '16px', lineHeight: 1 }}>&ldquo;</div>
                <p style={{ color: '#e2e8f0', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '24px', fontStyle: 'italic' }}>
                  {t.yorum}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, #f59e0b, #ef4444)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '1.1rem' }}>
                      {t.ad.charAt(0)}
                    </div>
                    <div>
                      <div style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.95rem' }}>{t.ad}</div>
                      <div style={{ color: '#64748b', fontSize: '0.8rem' }}>{t.sehir}</div>
                    </div>
                  </div>
                  <div style={{ color: '#f59e0b', fontSize: '1.1rem', letterSpacing: '2px' }}>
                    {'⭐'.repeat(t.yildiz)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '24px', marginBottom: '20px' }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                style={{
                  width: i === activeTestimonial ? '32px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  background: i === activeTestimonial ? 'linear-gradient(135deg, #f59e0b, #ef4444)' : 'rgba(255,255,255,0.15)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>

          {/* All Testimonials Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '60px' }}>
            {testimonials.slice(0, 3).map((t) => (
              <div key={t.ad} className="glass-card" style={{ padding: '24px', transition: 'all 0.3s ease' }}
                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'}
                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'}
              >
                <div style={{ color: '#f59e0b', fontSize: '0.9rem', marginBottom: '12px' }}>{'⭐'.repeat(t.yildiz)}</div>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '16px', fontStyle: 'italic' }}>
                  &ldquo;{t.yorum.slice(0, 120)}...&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, #f59e0b, #ef4444)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '0.9rem' }}>
                    {t.ad.charAt(0)}
                  </div>
                  <div>
                    <div style={{ color: '#e2e8f0', fontSize: '0.85rem', fontWeight: 600 }}>{t.ad}</div>
                    <div style={{ color: '#475569', fontSize: '0.75rem' }}>{t.sehir}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ BÖLGELERİMİZ ══════════════════ */}
      <section id="bolgeler" style={{ padding: '100px 24px', background: '#0A1628' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="section-badge">📍 Hizmet Bölgelerimiz</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#ffffff', marginBottom: '12px' }}>
              İstanbul&apos;un <span className="gradient-text">39 İlçesinde</span> Hizmet
            </h2>
            <p style={{ color: '#64748b', fontSize: '1rem', maxWidth: '500px', margin: '0 auto' }}>
              Yaşadığınız veya taşınmak istediğiniz ilçeyi seçin, size özel teklif hazırlayalım.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '12px' }}>
            {nakliyeIlceleri.map((ilce) => (
              <Link
                key={ilce.slug}
                href={`/nakliye-hizmeti/${ilce.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <div
                  style={{
                    padding: '14px 18px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '12px',
                    color: '#94a3b8',
                    fontSize: '0.88rem',
                    fontWeight: 500,
                    transition: 'all 0.25s ease',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.background = 'rgba(245,158,11,0.12)';
                    el.style.borderColor = 'rgba(245,158,11,0.4)';
                    el.style.color = '#fbbf24';
                    el.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.background = 'rgba(255,255,255,0.04)';
                    el.style.borderColor = 'rgba(255,255,255,0.08)';
                    el.style.color = '#94a3b8';
                    el.style.transform = 'translateY(0)';
                  }}
                >
                  <span style={{ fontSize: '0.75rem', opacity: 0.5 }}>📍</span>
                  {ilce.isim} Nakliyat
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ CTA BANNER ══════════════════ */}
      <section style={{
        padding: '80px 24px',
        background: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #8b5cf6 100%)',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.2)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🚀</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#ffffff', marginBottom: '16px', fontWeight: 700 }}>
            Taşınmaya Hazır Mısınız?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '1.1rem', marginBottom: '36px', lineHeight: 1.7 }}>
            Hemen arayın, uzman ekibimiz size en uygun taşınma planını hazırlasın. 
            <strong> Ücretsiz ekspertiz</strong> ve <strong>anında fiyat teklifi</strong> alın!
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+905301234567" style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              background: 'white',
              color: '#ef4444',
              fontWeight: 700, fontSize: '1.1rem',
              padding: '16px 40px', borderRadius: '50px',
              textDecoration: 'none',
              boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.3)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 30px rgba(0,0,0,0.2)'; }}
            >
              📞 0530 123 45 67
            </a>
            <a href="https://wa.me/905301234567" target="_blank" rel="noopener noreferrer" style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              background: '#25D366',
              color: 'white',
              fontWeight: 700, fontSize: '1.1rem',
              padding: '16px 40px', borderRadius: '50px',
              textDecoration: 'none',
              boxShadow: '0 8px 30px rgba(37,211,102,0.4)',
              transition: 'all 0.3s ease',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}
            >
              💬 WhatsApp ile Yaz
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}