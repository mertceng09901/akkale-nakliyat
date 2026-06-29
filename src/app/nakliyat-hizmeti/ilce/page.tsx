import { nakliyeIlceleri } from '@/utils/ilceler';

// Tip tanımlamalarını kaldırdık (JavaScript uyumlu hale getirdik)
export async function generateMetadata({ params }) {
  const { ilce: slug } = await params;
  
  const ilceVerisi = nakliyeIlceleri.find((i) => i.slug === slug);
  const ilceAdi = ilceVerisi ? ilceVerisi.isim : 'İstanbul';

  const markaAdi = 'Nef Nakliyat';
  const anahtarKelime = `${ilceAdi} Evden Eve Nakliyat`;

  return {
    title: `${anahtarKelime} - ${markaAdi}`,
    description: `Nef Nakliyat ile ${ilceAdi} bölgesinde güvenilir, asansörlü ve sigortalı profesyonel evden eve nakliyat hizmeti.`,
    alternates: {
      canonical: `https://www.nefnakliyat.com/nakliye-hizmeti/${slug}`,
    },
  };
}

export default async function NakliyeHizmetiPage({ params }) {
  const { ilce: slug } = await params;
  
  const ilceVerisi = nakliyeIlceleri.find((i) => i.slug === slug);
  const ilceAdi = ilceVerisi ? ilceVerisi.isim : 'İstanbul';

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Sayfa içeriği aynı kalabilir */}
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
          <span className="text-blue-600">{ilceAdi}</span> Evden Eve Nakliyat Hizmetleri
        </h1>
        {/* ... geri kalan içerik ... */}
      </div>
    </main>
  );
}
