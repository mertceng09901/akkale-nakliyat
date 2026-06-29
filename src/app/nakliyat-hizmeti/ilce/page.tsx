import { nakliyeIlceleri } from '../../../utils/ilceler';

// Tip tanımlamaları: Next.js 16'da params bir Promise olarak gelir
interface PageProps {
  params: Promise<{ ilce: string }>;
}

export async function generateMetadata({ params }: PageProps) {
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

export default async function NakliyeHizmetiPage({ params }: PageProps) {
  const { ilce: slug } = await params;
  
  const ilceVerisi = nakliyeIlceleri.find((i) => i.slug === slug);
  const ilceAdi = ilceVerisi ? ilceVerisi.isim : 'İlçe';

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
          <span className="text-blue-600">{ilceAdi}</span> Evden Eve Nakliyat Hizmetleri
        </h1>
        
        <p className="text-gray-600 mb-6">
          {ilceAdi} bölgesinde evinizi, ofisinizi veya eşyalarınızı taşımak için Nef Nakliyat olarak profesyonel çözümler sunuyoruz. 
          Asansörlü nakliyat, sigortalı taşımacılık ve deneyimli ekibimizle hizmetinizdeyiz.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
          <h2 className="text-xl font-bold text-blue-900 mb-2">Hemen Fiyat Alın</h2>
          <p className="text-blue-700 mb-4">
            {ilceAdi} içinde uygun fiyatlı ve güvenilir taşımacılık için bizimle iletişime geçin.
          </p>
        </div>
      </div>
    </main>
  );
}