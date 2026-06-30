'use client';

import { useState } from 'react';

export default function IletisimFormu() {
  const [formData, setFormData] = useState({
    ad: '',
    telefon: '',
    nereden: '',
    nereye: '',
    detay: ''
  });
  const [durum, setDurum] = useState<{ tip: 'bekliyor' | 'basarili' | 'hata', mesaj: string } | null>(null);
  const [yukleniyor, setYukleniyor] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setYukleniyor(true);
    setDurum(null);

    try {
      const response = await fetch('/api/iletisim', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setDurum({ tip: 'basarili', mesaj: data.mesaj });
        setFormData({ ad: '', telefon: '', nereden: '', nereye: '', detay: '' });
      } else {
        setDurum({ tip: 'hata', mesaj: data.mesaj });
      }
    } catch {
      setDurum({ tip: 'hata', mesaj: 'Bağlantı hatası oluştu, lütfen tekrar deneyin.' });
    } finally {
      setYukleniyor(false);
    }
  };

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.07)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '10px',
    padding: '12px 16px',
    color: '#e2e8f0',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    colorScheme: 'dark' as const,
    fontFamily: "'Inter', sans-serif",
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.8rem',
    color: '#94a3b8',
    marginBottom: '6px',
    fontWeight: 500 as const,
    letterSpacing: '0.3px',
  };

  return (
    <div style={{
      background: 'rgba(10, 22, 40, 0.85)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: '1px solid rgba(245, 158, 11, 0.2)',
      borderRadius: '20px',
      padding: '36px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>📋</div>
        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.4rem',
          color: '#ffffff',
          marginBottom: '6px',
          fontWeight: 700,
        }}>
          Ücretsiz Fiyat Teklifi
        </h3>
        <p style={{ color: '#64748b', fontSize: '0.85rem' }}>
          Formu doldurun, sizi arayalım
        </p>
      </div>

      {durum?.tip === 'basarili' ? (
        <div style={{ textAlign: 'center', padding: '40px 20px' }}>
          <div style={{ fontSize: '4rem', marginBottom: '16px' }}>✅</div>
          <h4 style={{ color: '#10b981', fontSize: '1.2rem', marginBottom: '8px', fontWeight: 700 }}>
            Talebiniz Alındı!
          </h4>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '20px' }}>
            {durum.mesaj}
          </p>
          <button
            onClick={() => setDurum(null)}
            style={{
              background: 'rgba(16,185,129,0.15)',
              border: '1px solid rgba(16,185,129,0.4)',
              color: '#10b981',
              padding: '10px 24px',
              borderRadius: '50px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: 600,
            }}
          >
            Yeni Teklif İste
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

          <div>
            <label style={labelStyle}>Ad Soyad <span style={{ color: '#ef4444' }}>*</span></label>
            <input
              required
              type="text"
              name="ad"
              value={formData.ad}
              onChange={handleChange}
              placeholder="Adınız Soyadınız"
              style={inputStyle}
              onFocus={e => { e.target.style.borderColor = 'rgba(245,158,11,0.6)'; e.target.style.boxShadow = '0 0 0 3px rgba(245,158,11,0.1)'; }}
              onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.12)'; e.target.style.boxShadow = 'none'; }}
            />
          </div>

          <div>
            <label style={labelStyle}>Telefon Numarası <span style={{ color: '#ef4444' }}>*</span></label>
            <input
              required
              type="tel"
              name="telefon"
              value={formData.telefon}
              onChange={handleChange}
              placeholder="0530 xxx xx xx"
              style={inputStyle}
              onFocus={e => { e.target.style.borderColor = 'rgba(245,158,11,0.6)'; e.target.style.boxShadow = '0 0 0 3px rgba(245,158,11,0.1)'; }}
              onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.12)'; e.target.style.boxShadow = 'none'; }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label style={labelStyle}>Nereden</label>
              <input
                type="text"
                name="nereden"
                value={formData.nereden}
                onChange={handleChange}
                placeholder="Kadıköy"
                style={inputStyle}
                onFocus={e => { e.target.style.borderColor = 'rgba(245,158,11,0.6)'; e.target.style.boxShadow = '0 0 0 3px rgba(245,158,11,0.1)'; }}
                onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.12)'; e.target.style.boxShadow = 'none'; }}
              />
            </div>
            <div>
              <label style={labelStyle}>Nereye</label>
              <input
                type="text"
                name="nereye"
                value={formData.nereye}
                onChange={handleChange}
                placeholder="Şişli"
                style={inputStyle}
                onFocus={e => { e.target.style.borderColor = 'rgba(245,158,11,0.6)'; e.target.style.boxShadow = '0 0 0 3px rgba(245,158,11,0.1)'; }}
                onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.12)'; e.target.style.boxShadow = 'none'; }}
              />
            </div>
          </div>

          <div>
            <label style={labelStyle}>Eşya / Detay</label>
            <textarea
              name="detay"
              value={formData.detay}
              onChange={handleChange}
              rows={3}
              placeholder="Örn: 3+1 ev, asansör yok, 4. kat..."
              style={{ ...inputStyle, resize: 'vertical', minHeight: '80px' }}
              onFocus={e => { e.target.style.borderColor = 'rgba(245,158,11,0.6)'; e.target.style.boxShadow = '0 0 0 3px rgba(245,158,11,0.1)'; }}
              onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.12)'; e.target.style.boxShadow = 'none'; }}
            />
          </div>

          <button
            disabled={yukleniyor}
            type="submit"
            style={{
              width: '100%',
              background: yukleniyor ? 'rgba(245,158,11,0.5)' : 'linear-gradient(135deg, #f59e0b, #ef4444)',
              color: 'white',
              fontWeight: 700,
              fontSize: '1rem',
              padding: '15px',
              borderRadius: '50px',
              border: 'none',
              cursor: yukleniyor ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              fontFamily: "'Inter', sans-serif",
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 4px 20px rgba(245,158,11,0.35)',
              marginTop: '6px',
            }}
            onMouseEnter={e => {
              if (!yukleniyor) {
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 30px rgba(245,158,11,0.5)';
              }
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 20px rgba(245,158,11,0.35)';
            }}
          >
            {yukleniyor ? '⏳ Gönderiliyor...' : '🎯 Teklif İste — Ücretsiz'}
          </button>

          {durum?.tip === 'hata' && (
            <div style={{
              background: 'rgba(239,68,68,0.1)',
              border: '1px solid rgba(239,68,68,0.3)',
              borderRadius: '10px',
              padding: '12px 16px',
              color: '#fca5a5',
              fontSize: '0.88rem',
              textAlign: 'center',
            }}>
              ⚠️ {durum.mesaj}
            </div>
          )}

          <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#475569', marginTop: '4px' }}>
            🔒 Bilgileriniz güvende — Spam göndermeyiz
          </p>
        </form>
      )}
    </div>
  );
}