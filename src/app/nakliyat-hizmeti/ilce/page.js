import { nakliyeIlceleri } from '@/utils/ilceler';

// 1. Statik Rota Oluşturma (Performans ve SEO için Kritik)
// Bu fonksiyon, projen build edilirken 39 ilçenin sayfasını önceden SSR/SSG olarak hazırlar.
export function generateStaticParams() {
  return nakliyeIlceleri.map((ilce) => ({
    ilce: ilce.slug,
  }));
}

// 2. Dinamik SEO Meta Verileri
// Her ilçe için özel Title, Description ve Canonical etiketlerini burada üretiyoruz.
export async function generateMetadata({ params }: { params: { ilce: string } }) {
  // Next.js 15 ve sonrasında params asenkron olarak gelir, bu yüzden await kullanıyoruz
  const { ilce: slug } = await params;
  
  // URL'deki slug'ı kullanarak doğru ilçe adını buluyoruz
  const ilceVerisi = nakliyeIlceleri.find((i) => i.slug === slug);
  const ilceAdi = ilceVerisi ? ilceVerisi.isim : 'İstanbul';

  const markaAdi = 'Nef Nakliyat';
  const anahtarKelime = `${ilceAdi} Evden Eve Nakliyat`;

  return {
    title: `${anahtarKelime} - ${markaAdi}`,
    description: `Nef Nakliyat ile ${ilceAdi} bölgesinde güvenilir, asansörlü ve sigortalı profesyonel evden eve nakliyat hizmeti.`,
    alternates: {
      canonical: `https://www.nefnakliyat.com/nakliye-hizmeti/${slug}`, // Canlı domain adresin neyse burayı güncellemelisin
    },
  };
}

// 3. Sayfa Tasarımı (UI)
export default async function NakliyeHizmetiPage({ params }: { params: { ilce: string } }) {
  const { ilce: slug } = await params;
  
  const ilceVerisi = nakliyeIlceleri.find((i) => i.slug === slug);
  const ilceAdi = ilceVerisi ? ilceVerisi.isim : 'İstanbul';

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        
        {/* Dinamik Başlık */}
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
          <span className="text-blue-600">{ilceAdi}</span> Evden Eve Nakliyat Hizmetleri
        </h1>
        
        {/* Dinamik İçerik Alanı */}
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          <strong>Nef Nakliyat</strong> olarak, {ilceAdi} bölgesinde yılların getirdiği tecrübe ile profesyonel taşımacılık hizmeti sunuyoruz. Eşyalarınızın güvenliği bizim önceliğimizdir. Asansörlü araçlarımız ve sigortalı taşıma sözleşmemiz ile {ilceAdi} içi ve şehirler arası nakliye ihtiyaçlarınıza çözüm üretiyoruz.
        </p>

        {/* Örnek Hizmet Maddeleri */}
        <ul className="space-y-3 text-gray-600 list-disc list-inside mb-8">
          <li>Ücretsiz Ekspertiz ve Fiyatlandırma</li>
          <li>Ambalajlı ve Sigortalı Taşımacılık</li>
          <li>Asansörlü Nakliyat Araçları</li>
          <li>Uzman ve Profesyonel Kadro</li>
        </ul>

        {/* Aksiyon Çağrısı (CTA) */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Hemen Fiyat Alın</h3>
          <p className="text-blue-700 mb-4">
            {ilceAdi} bölgesindeki nakliye işleminiz için en uygun fiyat garantisini sunuyoruz.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition duration-300">
            İletişime Geç
          </button>
        </div>

      </div>
    </main>
  );
}