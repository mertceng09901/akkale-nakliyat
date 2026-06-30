<div align="center">

# 🚚 Nef Nakliyat

### İstanbul Evden Eve Nakliyat — Premium Web Sitesi

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://nef-nakliyat.vercel.app)

**🌐 Canlı Site → [nef-nakliyat.vercel.app](https://nef-nakliyat.vercel.app)**

</div>

---

## 📸 Ekran Görüntüleri

<div align="center">

| Ana Sayfa — Hero | Hizmet Detay | İlçe Sayfası |
|:-:|:-:|:-:|
| Dark navy + altın tasarım | Görsellerle zengin içerik | SEO optimizeli ilçe sayfaları |

</div>

---

## ✨ Özellikler

### 🎨 Tasarım
- **Premium Dark Tema** — Lacivert (`#0A1628`) + Altın (`#f59e0b`) renk paleti
- **Glassmorphism** — Cam efektli kartlar ve formlar
- **Animasyonlar** — Fade-in, float, counter-up, gradient-shift
- **Playfair Display + Inter** — Premium tipografi kombinasyonu
- **Tamamen Responsive** — Mobil, tablet, masaüstü uyumlu

### 📄 Sayfalar
| Sayfa | Açıklama |
|-------|----------|
| `/` | Ana sayfa — Hero, istatistikler, hizmetler, yorumlar, ilçeler |
| `/hizmetler/[hizmet]` | 6 ayrı hizmet detay sayfası |
| `/nakliye-hizmeti/[ilce]` | İstanbul'un 39 ilçesi için SEO sayfaları |
| `/sitemap.xml` | Otomatik oluşturulan XML sitemap |
| `/api/iletisim` | Form gönderimi için API endpoint |

### 🏠 Hizmet Detay Sayfaları
- 🏠 Evden Eve Nakliyat
- 🚛 Şehirler Arası Nakliyat
- 🏢 Ofis Taşıma
- 🎹 Piyano Taşıma
- 📦 Parça Eşya Taşıma
- 🛡️ Sigortalı Taşıma

Her hizmet sayfasında:
- Hero section (arka plan görseli ile)
- Özellikler bandı
- Detaylı içerik + sticky görsel sidebar
- Süreç adımları grid
- Full-width CTA görseli
- Accordion SSS bölümü
- İletişim formu

### 🔍 SEO
- **39 İlçe Sayfası** — Her biri özel title, description ve keyword
- **6 Hizmet Sayfası** — Detaylı meta tag'lar
- **Sitemap.xml** — Otomatik oluşturulur
- **OpenGraph** — Sosyal medya paylaşım kartları
- **JSON-LD** — Structured data hazır

---

## 🛠️ Teknoloji Stack

```
Next.js 16.2     — App Router, SSG, API Routes
TypeScript 5     — Tip güvenliği
Tailwind CSS v4  — Utility-first styling
Vercel           — Deploy & hosting
Google Fonts     — Playfair Display + Inter
```

---

## 📁 Proje Yapısı

```
nef-nakliyat/
├── public/
│   ├── hero-truck.png           # Hero arka plan görseli
│   ├── evden-eve-nakliyat.png   # Hizmet görselleri
│   ├── sehirler-arasi-nakliyat.png
│   ├── ofis-tasima.png
│   ├── piyano-tasima.png
│   ├── parca-esya-tasima.png
│   └── sigortali-tasima.png
│
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Global navbar + footer
│   │   ├── page.tsx             # Ana sayfa
│   │   ├── globals.css          # Design tokens + global stiller
│   │   ├── sitemap.js           # SEO sitemap
│   │   ├── hizmetler/
│   │   │   └── [hizmet]/
│   │   │       └── page.tsx     # Hizmet detay sayfası
│   │   ├── nakliye-hizmeti/
│   │   │   └── [ilce]/
│   │   │       └── page.tsx     # İlçe sayfası (×39)
│   │   └── api/
│   │       └── iletisim/
│   │           └── route.ts     # Form API endpoint
│   │
│   ├── components/
│   │   └── IletisimFormu.tsx    # İletişim formu (Client Component)
│   │
│   └── utils/
│       ├── ilceler.js           # 39 İstanbul ilçesi + slug'ları
│       └── hizmetler.ts        # 6 hizmet verisi + TypeScript interface
```

---

## 🚀 Kurulum & Çalıştırma

### Gereksinimler
- Node.js 18+
- npm veya yarn

### Kurulum

```bash
# Repoyu klonlayın
git clone https://github.com/mertceng09901/nef-nakliyat.git
cd nef-nakliyat

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

### Production Build

```bash
npm run build
npm start
```

---

## 🌐 Deploy (Vercel)

### Vercel CLI ile

```bash
# Vercel CLI yükle
npm install -g vercel

# Login ol
vercel login

# Production'a deploy et
vercel --prod --yes
```

### Otomatik Deploy (Önerilen)
GitHub reposunu Vercel'e bağlayarak her `git push` sonrası otomatik deploy:

1. [vercel.com](https://vercel.com) → **New Project**
2. GitHub reposunu seçin
3. **Deploy** butonuna tıklayın

---

## ⚙️ Ortam Değişkenleri

Form gönderimi için `.env.local` dosyası oluşturun:

```env
# E-posta servisi (isteğe bağlı)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=info@nefnakliyat.com
```

---

## 📊 Sayfa Performansı

```
✓ Ana sayfa          — Static (SSG)
✓ 6 Hizmet sayfası  — Static (SSG, generateStaticParams)
✓ 39 İlçe sayfası   — Static (SSG, generateStaticParams)
✓ Sitemap           — Static
✓ API /iletisim     — Dynamic (Server)

Toplam: 51 statik sayfa + 1 API endpoint
```

---

## 🎯 Ana Sayfa Bölümleri

1. **Hero Section** — Full-screen, truck görseli, animasyonlu başlık, teklif formu
2. **İstatistikler Bandı** — 500+ müşteri, 39 ilçe, 10+ yıl, %100 memnuniyet
3. **Hizmetler Grid** — 6 glassmorphism kart, detay sayfalarına bağlantı
4. **Neden Biz** — 2 sütun layout, özellik kartları
5. **Müşteri Yorumları** — Otomatik dönen slider + 3 yorum grid
6. **İlçeler Grid** — 39 ilçe, hover animasyonlu
7. **CTA Banner** — Gradient, telefon + WhatsApp butonları

---

## 📱 İletişim Formu

`/api/iletisim` endpoint'i şu alanları kabul eder:

```json
{
  "ad": "Ad Soyad",
  "telefon": "0530 xxx xx xx",
  "nereden": "Kadıköy",
  "nereye": "Şişli",
  "detay": "3+1 ev eşyası"
}
```

---

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/yeni-ozellik`)
5. Pull Request açın

---

## 📄 Lisans

Bu proje **MIT Lisansı** altında lisanslanmıştır.

---

<div align="center">

**Nef Nakliyat** — İstanbul'un Güvenilir Nakliyat Firması 🚚

[![Website](https://img.shields.io/badge/Website-nef--nakliyat.vercel.app-orange?style=flat-square)](https://nef-nakliyat.vercel.app)

</div>
