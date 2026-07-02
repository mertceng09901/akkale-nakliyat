'use client';

import Link from 'next/link';
import Image from 'next/image';
import { nakliyeIlceleri } from '../utils/ilceler';
import { useState, useEffect, useRef } from 'react';
import { Home, Truck, Package, Building2, Music, Shield, Zap, Award, Rocket, Phone } from 'lucide-react';
import IletisimFormu from '../components/IletisimFormu';

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

// ─── 3D Kamyon Kartı ─────────────────────────────────────────────────────────
function Truck3DCard() {
  return (
    <div className="truck-3d-card" style={{ position: 'relative' }}>
      {/* Üst başlık */}
      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <div style={{ fontSize: '3.5rem', marginBottom: '8px' }}>🚚</div>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.4rem',
          color: '#ffffff',
          marginBottom: '6px',
        }}>
          Ücretsiz Teklif Alın
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>2 dakikada anında fiyat öğrenin</p>
      </div>

      {/* Hızlı bilgi rozetleri */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
        {[
          { icon: '🛡️', text: 'Sigortalı Taşıma Garantisi' },
          { icon: '📞', text: '7/24 Müşteri Desteği' },
          { icon: '⭐', text: 'Google\'da 4.9/5 Puan' },
          { icon: '🏆', text: '10+ Yıl Deneyim' },
        ].map((item) => (
          <div key={item.text} style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            background: 'rgba(250, 204, 21, 0.08)',
            border: '1px solid rgba(250, 204, 21, 0.18)',
            borderRadius: '10px',
            padding: '10px 14px',
          }}>
            <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
            <span style={{ color: '#e2e8f0', fontSize: '0.88rem', fontWeight: 500 }}>{item.text}</span>
          </div>
        ))}
      </div>

      <a href="tel:+905301234567" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px' }}>
        📞 Hemen Ara — Ücretsiz
      </a>
      <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#475569', marginTop: '10px' }}>
        🔒 Bilgileriniz gizli tutulur
      </p>

      {/* Dekoratif köşe efekti */}
      <div style={{
        position: 'absolute', top: '-1px', right: '-1px',
        width: '80px', height: '80px',
        background: 'linear-gradient(135deg, #facc15, transparent)',
        borderRadius: '0 24px 0 80px',
        opacity: 0.2,
      }} />
    </div>
  );
}

// ─── 3D Kutu (Hizmetler için) ─────────────────────────────────────────────────
function Box3D({ emoji }: { emoji: string }) {
  return (
    <div className="box-3d-wrapper" style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
      <div className="box-3d">
        <div className="face front">{emoji}</div>
        <div className="face back">📦</div>
        <div className="face right">🚚</div>
        <div className="face left">🏠</div>
        <div className="face top">⭐</div>
        <div className="face bottom">🛡️</div>
      </div>
    </div>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
const testimonials = [
  { ad: 'Bayse Nur Karabey', yildiz: 5, yorum: 'Evimizi Taşıyan Abilerin ellerine kollarına sağlık olsun. Çok memnun kaldık, tavsiye ederim! 😊', sehir: 'İstanbul' },
  { ad: 'Bedri Comak', yildiz: 5, yorum: "İstanbul'dan İzmir'e evden eve nakliyat sürecinde Akkale Nakliyat ile çalıştık ve çok memnun kaldık. Eşyalarımız profesyonelce paketlendi, zamanında teslim edildi.", sehir: 'İstanbul' },
  { ad: 'Hilal Demir', yildiz: 5, yorum: 'Profesyonel ekiple eşyalarımızı özenle taşıdılar. Çok teşekkür ederiz, tavsiye ederim.', sehir: 'Çekmeköy' },
  { ad: 'Ahmet Yılmaz', yildiz: 5, yorum: "Tuzla'dan Pendik'e taşındık. Ekip çok hızlı ve özenli çalıştı. Eşyalarımızda en ufak bir hasar olmadı. Kesinlikle tavsiye ediyorum.", sehir: 'Tuzla' },
  { ad: 'Fatma Kaya', yildiz: 5, yorum: 'Ofis taşıma hizmeti aldık. Bilgisayarlarımız ve belgelerimiz çok titizlikle paketlendi. İş günü kaybımız olmadı, harika bir organizasyondu.', sehir: 'Kadıköy' },
  { ad: 'Zeynep Arslan', yildiz: 5, yorum: 'Parça eşya taşıma hizmeti aldım. Tek bir koltuk takımı için bile aynı özeni gösterdiler. Fiyatı da gayet uygundu.', sehir: 'Şişli' },
];

const services = [
  { icon: <Home size={28} />, title: 'Evden Eve Nakliyat', desc: 'Uzman ekibimiz eşyalarınızı özel paketleme materyalleriyle kırılma ve çizilme riskini minimize ederek taşır.', href: '/hizmetler/evden-eve-nakliyat', color: '#facc15' },
  { icon: <Truck size={28} />, title: 'Şehirler Arası Nakliyat', desc: "Türkiye'nin her noktasına ulaşan taşıma ağımız ile eşyalarınızı belirlenen tarihte güvenle teslim ediyoruz.", href: '/hizmetler/sehirler-arasi-nakliyat', color: '#eab308' },
  { icon: <Package size={28} />, title: 'Parça Eşya Taşıma', desc: 'Az sayıda eşyası olan müşterilerimiz için ekonomik ve özenli parça eşya taşıma çözümleri sunuyoruz.', href: '/hizmetler/parca-esya-tasima', color: '#8b5cf6' },
  { icon: <Building2 size={28} />, title: 'Ofis Taşıma', desc: 'İş günü kaybı yaşamadan ofisinizi yeni adresine profesyonelce taşıyoruz.', href: '/hizmetler/ofis-tasima', color: '#06b6d4' },
  { icon: <Music size={28} />, title: 'Piyano Taşıma', desc: 'Hassas ve değerli piyanoları özel ekipmanlarla güvenle taşıyan uzman ekibimiz emrinizdedir.', href: '/hizmetler/piyano-tasima', color: '#10b981' },
  { icon: <Shield size={28} />, title: 'Sigortalı Taşıma', desc: 'Tüm taşımalarımız sigorta güvencesi altındadır. Eşyalarınıza zarar gelmesi durumunda tam tazminat sağlanır.', href: '/hizmetler/sigortali-tasima', color: '#f97316' },
];

const features = [
  { icon: <Shield size={32} />, title: 'Sigortalı Taşımacılık', desc: 'Tüm eşyalarınız taşıma süresince kapsamlı sigorta güvencesi altındadır.' },
  { icon: <Zap size={32} />, title: '7/24 Hizmet', desc: 'Haftanın 7 günü, günün 24 saati iletişim ve hizmet desteği sunuyoruz.' },
  { icon: <Award size={32} />, title: 'Profesyonel Ekip', desc: '10 yılı aşkın deneyime sahip, eğitimli nakliyat uzmanlarımız emrinizdedir.' },
  { icon: <Rocket size={32} />, title: 'Asansörlü Nakliyat', desc: 'Modern asansörlü sistemlerimizle ağır eşyaları güvenle taşıyoruz.' },
];

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ══════════════════ HERO — LACİVERT ══════════════════ */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #050d1a 0%, #0a1628 50%, #1a2e54 100%)',
      }}>
        {/* Arkaplan kamyon resmi */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/hero-truck.png"
            alt="Akkale Nakliyat - Profesyonel Nakliyat"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center right', opacity: 0.12 }}
            priority
          />
        </div>

        {/* Dekoratif halkalar */}
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(250,204,21,0.18) 0%, transparent 70%)', zIndex: 1 }} />
        <div style={{ position: 'absolute', bottom: '-120px', left: '-80px', width: '520px', height: '520px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(30,58,110,0.5) 0%, transparent 70%)', zIndex: 1 }} />

        <div className="hero-grid">

          {/* Sol İçerik */}
          <div style={{ animation: 'fadeInLeft 0.8s ease forwards' }}>
            <div className="section-badge" style={{ marginBottom: '24px' }}>
              ✨ İstanbul&apos;un Güvenilir Nakliyat Firması
            </div>

            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: '24px',
              color: '#ffffff',
            }}>
              <span style={{ display: 'block' }}>Güvenli &amp; Hızlı</span>
              <span className="gradient-text-animated" style={{ display: 'block' }}>
                Evden Eve Nakliyat
              </span>
            </h1>

            <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.8, marginBottom: '36px', maxWidth: '520px' }}>
              İstanbul&apos;un 39 ilçesinde <strong style={{ color: '#facc15' }}>sigortalı</strong>, <strong style={{ color: '#facc15' }}>asansörlü</strong> ve profesyonel nakliyat hizmeti.
              Eşyalarınız uzman ellerle yeni yuvanıza taşınsın.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
              <a href="tel:+905301234567" className="btn-primary" style={{ fontSize: '1.05rem', padding: '16px 36px' }}>
                📞 Hemen Ara
              </a>
              <a href="#teklif-form" className="btn-outline" style={{ padding: '15px 35px', fontSize: '1.05rem' }}>
                💰 Ücretsiz Teklif Al
              </a>
            </div>

            {/* Güven rozetleri */}
            <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
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

          {/* Sağ: 3D Teklif Kartı — mobilde gizli */}
          <div id="teklif" className="hero-form-col" style={{ animation: 'fadeInRight 0.8s ease 0.2s both' }}>
            <Truck3DCard />
          </div>
        </div>

        {/* Scroll göstergesi */}
        <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', animation: 'float 2s ease-in-out infinite', zIndex: 2 }}>
          <span style={{ color: '#475569', fontSize: '0.72rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Aşağı kaydır</span>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, #facc15, transparent)' }} />
        </div>
      </section>

      {/* ══════════════════ İSTATİSTİKLER — ALTIN ══════════════════ */}
      <section style={{
        background: 'linear-gradient(135deg, #facc15 0%, #eab308 60%, #d97706 100%)',
        padding: '0',
        overflow: 'hidden',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div className="stats-grid">
            {[
              { number: 500, suffix: '+', label: 'Mutlu Müşteri', icon: '😊' },
              { number: 39,  suffix: '',  label: 'İstanbul İlçesi', icon: '📍' },
              { number: 10,  suffix: '+', label: 'Yıl Deneyim', icon: '🏆' },
              { number: 100, suffix: '%', label: 'Müşteri Memnuniyeti', icon: '⭐' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="stat-3d stat-cell"
                style={{
                  padding: '44px 24px',
                  textAlign: 'center',
                  borderRight: i < 3 ? '1px solid rgba(255,255,255,0.25)' : 'none',
                  cursor: 'default',
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{stat.icon}</div>
                <div style={{ fontSize: '2.8rem', fontWeight: 900, color: '#ffffff', lineHeight: 1, marginBottom: '6px', fontFamily: "'Inter', sans-serif" }}>
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                </div>
                <div style={{ color: 'rgba(255,255,255,0.88)', fontSize: '0.9rem', fontWeight: 600 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ TEKLİF FORM — HER CİHAZDA GÖRÜNÜR ══════════════════ */}
      <section id="teklif-form" className="section-navy">
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'center' }}>
            {/* Sol: Bilgi */}
            <div>
              <div className="section-badge">💰 Ücretsiz Teklif</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: '#ffffff', margin: '16px 0 20px' }}>
                Hemen <span className="gradient-text">Teklif Alın</span>
              </h2>
              <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '28px' }}>
                Formı doldurun, uzman ekibimiz sizi 30 dakika içinde arasın. Ücretsiz ekspertiz ve anında fiyat teklifi!
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { icon: '🛡️', text: 'Sigortalı Taşımacılık Güvencesi' },
                  { icon: '⏱️', text: '30 Dakika İçinde Geri Dönüş' },
                  { icon: '💰', text: 'Rekabetçi Fiyat Garantisi' },
                  { icon: '⭐', text: 'Google 4.9/5 Müşteri Puanı' },
                ].map(item => (
                  <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#e2e8f0', fontSize: '0.92rem' }}>
                    <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>{item.text}
                  </div>
                ))}
              </div>
            </div>
            {/* Sağ: Form */}
            <div>
              <IletisimFormu />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ HİZMETLER — BEYAZ ══════════════════ */}
      <section id="hizmetler" className="section-white" style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="section-badge-light">🚚 Hizmetlerimiz</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0A1628', marginBottom: '16px' }}>
              Profesyonel Nakliyat <span className="gradient-text">Çözümleri</span>
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              Her türlü taşınma ihtiyacınız için kapsamlı ve güvenilir nakliyat hizmetleri sunuyoruz.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {services.map((service, i) => (
              <Link key={service.title} href={service.href} style={{ textDecoration: 'none' }}>
                <div
                  className="light-card"
                  style={{
                    padding: '36px',
                    cursor: 'pointer',
                    animation: `fadeInUp 0.6s ease ${i * 0.1}s both`,
                    position: 'relative',
                    overflow: 'hidden',
                    height: '100%',
                  }}
                >
                  {/* Renk şeridi */}
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: `linear-gradient(90deg, ${service.color}, transparent)`, borderRadius: '16px 16px 0 0' }} />

                  <div style={{
                    width: '64px', height: '64px',
                    background: `${service.color}20`,
                    border: `2px solid ${service.color}50`,
                    borderRadius: '16px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '20px',
                    color: service.color,
                  }}>
                    {service.icon}
                  </div>

                  <h3 style={{ color: '#0A1628', fontSize: '1.15rem', fontWeight: 700, marginBottom: '12px', fontFamily: "'Playfair Display', serif" }}>
                    {service.title}
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '20px' }}>
                    {service.desc}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: service.color, fontSize: '0.85rem', fontWeight: 700 }}>
                    Detaylı Bilgi <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ NEDEN BİZ — LACİVERT ══════════════════ */}
      <section className="section-navy" style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', background: 'radial-gradient(circle at right, rgba(245,158,11,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

            {/* Sol */}
            <div>
              <div className="section-badge">🏆 Neden Bizi Seçmelisiniz</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#ffffff', margin: '16px 0 24px' }}>
                İstanbul&apos;un En Güvenilir <span className="gradient-text">Nakliyat Firması</span>
              </h2>
              <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '36px', fontSize: '1rem' }}>
                10 yılı aşkın deneyimimiz, uzman ekibimiz ve modern ekipmanlarımızla taşınma sürecinizi
                stressiz ve sorunsuz hale getiriyoruz. Her müşterimiz bizim için özel ve değerlidir.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
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

            {/* Sağ: 3D Kutu + Özellik Kartları */}
            <div>
              {/* 3D Kutu */}
              <Box3D emoji="🚚" />

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {features.map((feature, i) => (
                  <div
                    key={feature.title}
                    className="glass-card"
                    style={{
                      padding: '24px 20px',
                      animation: `fadeInUp 0.6s ease ${i * 0.15}s both`,
                      transition: 'all 0.3s ease',
                      cursor: 'default',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; }}
                  >
                    <div style={{ color: '#facc15', marginBottom: '12px' }}>{feature.icon}</div>
                    <h3 style={{ color: '#facc15', fontSize: '0.95rem', fontWeight: 700, marginBottom: '8px' }}>{feature.title}</h3>
                    <p style={{ color: '#94a3b8', fontSize: '0.82rem', lineHeight: 1.6 }}>{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ MÜŞTERİ YORUMLARI — BEYAZ ══════════════════ */}
      <section className="section-light" style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="section-badge-light">💬 Müşteri Yorumları</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0A1628', marginBottom: '12px' }}>
              Onlar <span className="gradient-text">Memnun</span>, Sizi de Memnun Edelim
            </h2>
            <p style={{ color: '#64748b', fontSize: '1rem' }}>Google&apos;da 4.9/5 puan ile hizmet veriyoruz</p>
          </div>

          {/* Öne çıkan yorum */}
          <div style={{ maxWidth: '780px', margin: '0 auto 60px', position: 'relative', minHeight: '240px' }}>
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="light-card"
                style={{
                  padding: '44px',
                  position: 'absolute',
                  inset: 0,
                  opacity: i === activeTestimonial ? 1 : 0,
                  transform: i === activeTestimonial ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.98)',
                  transition: 'all 0.6s ease',
                  pointerEvents: i === activeTestimonial ? 'auto' : 'none',
                  borderLeft: '5px solid #facc15',
                }}
              >
                <div style={{ fontSize: '3rem', color: '#facc15', marginBottom: '12px', lineHeight: 1 }}>&ldquo;</div>
                <p style={{ color: '#1e293b', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '24px', fontStyle: 'italic' }}>
                  {t.yorum}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '46px', height: '46px', borderRadius: '50%', background: 'linear-gradient(135deg, #facc15, #eab308)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1a1000', fontWeight: 700, fontSize: '1.1rem' }}>
                      {t.ad.charAt(0)}
                    </div>
                    <div>
                      <div style={{ color: '#0A1628', fontWeight: 700, fontSize: '0.95rem' }}>{t.ad}</div>
                      <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>{t.sehir}</div>
                    </div>
                  </div>
                  <div style={{ color: '#facc15', fontSize: '1.1rem', letterSpacing: '2px' }}>
                    {'⭐'.repeat(t.yildiz)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Noktalar */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '24px', marginBottom: '20px' }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                style={{
                  width: i === activeTestimonial ? '32px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  background: i === activeTestimonial ? 'linear-gradient(135deg, #facc15, #eab308)' : '#cbd5e1',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>

          {/* Yorum Kartları Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '60px' }}>
            {testimonials.slice(0, 3).map((t) => (
              <div
                key={t.ad}
                className="light-card"
                style={{ padding: '28px', borderLeft: '4px solid #facc15' }}
              >
                <div style={{ color: '#facc15', fontSize: '0.95rem', marginBottom: '12px' }}>{'⭐'.repeat(t.yildiz)}</div>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '18px', fontStyle: 'italic' }}>
                  &ldquo;{t.yorum.slice(0, 120)}...&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'linear-gradient(135deg, #facc15, #eab308)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1a1000', fontWeight: 700, fontSize: '0.9rem' }}>
                    {t.ad.charAt(0)}
                  </div>
                  <div>
                    <div style={{ color: '#0A1628', fontSize: '0.88rem', fontWeight: 700 }}>{t.ad}</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.78rem' }}>{t.sehir}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ BÖLGELERİMİZ — LACİVERT + 3D ══════════════════ */}
      <section id="bolgeler" className="section-navy" style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>

        {/* Dekoratif arka plan ışıkları */}
        <div style={{ position: 'absolute', top: '10%', left: '-100px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(250,204,21,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '-80px', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(41,82,163,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="section-badge">📍 Hizmet Bölgelerimiz</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#ffffff', marginBottom: '12px' }}>
              İstanbul&apos;un <span className="gradient-text">39 İlçesinde</span> Hizmet
            </h2>
            <p style={{ color: '#64748b', fontSize: '1rem', maxWidth: '500px', margin: '0 auto' }}>
              Yaşadığınız veya taşınmak istediğiniz ilçeyi seçin, size özel teklif hazırlayalım.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(175px, 1fr))', gap: '14px' }}>
            {nakliyeIlceleri.map((ilce, idx) => (
              <Link key={ilce.slug} href={`/nakliye-hizmeti/${ilce.slug}`} style={{ textDecoration: 'none' }}>
                <div
                  className="district-card-3d"
                  style={{
                    padding: '18px 16px',
                    borderRadius: '14px',
                    fontSize: '0.86rem',
                    fontWeight: 600,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '10px',
                    width: '100%',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#94a3b8',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.35s cubic-bezier(0.23, 1, 0.32, 1)',
                    cursor: 'pointer',
                    animationDelay: `${(idx % 10) * 0.04}s`,
                    animation: 'fadeInUp 0.5s ease both',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = 'perspective(400px) translateZ(14px) translateY(-6px) rotateX(-4deg)';
                    el.style.background = 'linear-gradient(135deg, rgba(250,204,21,0.14) 0%, rgba(234,179,8,0.06) 100%)';
                    el.style.borderColor = 'rgba(250,204,21,0.5)';
                    el.style.color = '#facc15';
                    el.style.boxShadow = '0 20px 40px rgba(0,0,0,0.35), 0 0 0 1px rgba(250,204,21,0.2), inset 0 1px 0 rgba(255,255,255,0.1)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = 'perspective(400px) translateZ(0) translateY(0) rotateX(0)';
                    el.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)';
                    el.style.borderColor = 'rgba(255,255,255,0.08)';
                    el.style.color = '#94a3b8';
                    el.style.boxShadow = 'none';
                  }}
                >
                  {/* Üst altın aksan çizgisi — hover'da görünür */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                    background: 'linear-gradient(90deg, #facc15, #eab308, transparent)',
                    borderRadius: '14px 14px 0 0',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }} className="district-accent-line" />

                  {/* Köşe parıltı efekti */}
                  <div style={{
                    position: 'absolute', top: '-30px', right: '-30px',
                    width: '80px', height: '80px',
                    background: 'radial-gradient(circle, rgba(250,204,21,0.15), transparent)',
                    borderRadius: '50%',
                    transition: 'opacity 0.3s ease',
                    pointerEvents: 'none',
                  }} />

                  {/* İkon + numara */}
                  <div style={{
                    width: '36px', height: '36px',
                    borderRadius: '10px',
                    background: 'rgba(250,204,21,0.1)',
                    border: '1px solid rgba(250,204,21,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.1rem',
                    transition: 'all 0.3s ease',
                  }}>
                    📍
                  </div>

                  {/* İlçe adı */}
                  <div style={{ lineHeight: 1.3 }}>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', transition: 'color 0.3s' }}>{ilce.isim}</div>
                    <div style={{ fontSize: '0.72rem', opacity: 0.6, marginTop: '2px' }}>Nakliyat Hizmeti →</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Alt CTA */}
          <div style={{ textAlign: 'center', marginTop: '56px' }}>
            <p style={{ color: '#475569', fontSize: '0.9rem', marginBottom: '16px' }}>
              İlçenizi bulamadınız mı? Bizi arayın, her noktaya hizmet veriyoruz.
            </p>
            <a href="tel:+905301234567" className="btn-primary">
              📞 Hemen Ara
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════ CTA BANNER — BEYAZ + ALTIN ══════════════════ */}
      <section className="section-white" style={{
        padding: '100px 24px',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}>
        {/* Dekoratif arka plan */}
        <div style={{ position: 'absolute', top: '-80px', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '700px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(250,204,21,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '740px', margin: '0 auto' }}>
          {/* 3D kamyon ikonu */}
          <div style={{
            width: '100px', height: '100px',
            background: 'linear-gradient(135deg, #facc15, #eab308)',
            borderRadius: '28px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '3rem',
            margin: '0 auto 28px',
            boxShadow: '8px 8px 0px rgba(234,179,8,0.25), 0 20px 40px rgba(234,179,8,0.2)',
            transform: 'perspective(400px) rotateX(5deg) rotateY(-5deg)',
            animation: 'float 3s ease-in-out infinite',
          }}>
            🚀
          </div>

          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            color: '#0A1628',
            marginBottom: '16px',
            fontWeight: 700,
          }}>
            Taşınmaya Hazır Mısınız?
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: '40px', lineHeight: 1.7 }}>
            Hemen arayın, uzman ekibimiz size en uygun taşınma planını hazırlasın.
            <strong style={{ color: '#0A1628' }}> Ücretsiz ekspertiz</strong> ve <strong style={{ color: '#0A1628' }}>anında fiyat teklifi</strong> alın!
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="tel:+905301234567"
              className="btn-primary"
              style={{ fontSize: '1.1rem', padding: '18px 44px' }}
            >
              📞 0530 123 45 67
            </a>
            <a
              href="https://wa.me/905301234567"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ fontSize: '1.1rem', padding: '18px 44px' }}
            >
              💬 WhatsApp ile Yaz
            </a>
          </div>

          {/* Alt güven çizgisi */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginTop: '40px', flexWrap: 'wrap' }}>
            {[
              { icon: '🛡️', text: 'Sigortalı Taşıma' },
              { icon: '⏱️', text: 'Zamanında Teslimat' },
              { icon: '💰', text: 'Uygun Fiyat' },
            ].map(item => (
              <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '0.9rem' }}>
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}