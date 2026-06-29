# 🚀 Nef Nakliyat - SEO Odaklı Nakliye Platformu

Nef Nakliyat, İstanbul genelinde evden eve nakliyat hizmetleri sunan, **Next.js** tabanlı, yüksek performanslı ve SEO uyumlu bir web platformudur.

## 🛠 Kullanılan Teknolojiler
* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Dil:** TypeScript
* **Stil:** Tailwind CSS
* **Dağıtım:** Vercel
* **SEO:** Dinamik Meta Etiketleri & Canonical URL Yapısı

## 💡 Temel Özellikler
* **Dinamik Rota Yönetimi:** İstanbul'un tüm ilçeleri için otomatik oluşturulan, SEO uyumlu sayfa yapıları.
* **Server-Side Rendering (SSR):** Google botları için optimize edilmiş, hızlı içerik sunumu.
* **Dinamik SEO:** Her ilçe sayfası için özelleştirilmiş `title`, `description` ve `canonical` etiketleri.
* **Hızlı ve Modern Arayüz:** Tailwind CSS ile mobil uyumlu, temiz ve kullanıcı odaklı tasarım.
* **İletişim Formu:** Kullanıcıların kolayca teklif alabilmesini sağlayan entegre form yapısı.

## 📂 Proje Yapısı
```text
nef-nakliyat/
├── src/
│   ├── app/                # Next.js App Router sayfaları
│   │   ├── nakliye-hizmeti/[ilce]/page.tsx  # Dinamik ilçe sayfaları
│   │   └── page.tsx        # Ana sayfa
│   ├── components/         # Tekrar kullanılabilir bileşenler (Form vb.)
│   └── utils/              # İlçe verileri ve slug yardımcıları
├── public/                 # Statik dosyalar
└── package.json
