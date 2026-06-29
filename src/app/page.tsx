import { nakliyeIlceleri } from '../../../utils/ilceler'; // Yolu klasör derinliğine göre kontrol et
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ ilce: string }>;
}

// 1. Meta verileri (URL yapısı artık 'nakliye-hizmeti' ile başlıyor)
export async function generateMetadata({ params }: PageProps) {
  const { ilce: slug } = await params;
  const ilceVerisi = nakliyeIlceleri.find((i) => i.slug === slug);
  
  if (!ilceVerisi) return { title: 'Bulunamadı' };

  return {
    title: `${ilceVerisi.isim} Evden Eve Nakliye | Nef Nakliyat`,
    description: `${ilceVerisi.isim} bölgesinde güvenilir, asansörlü ve sigortalı profesyonel evden eve nakliye hizmeti.`,
    alternates: {
      canonical: `https://www.nefnakliyat.com/nakliye-hizmeti/${slug}`,
    },
  };
}

// 2. Sayfa içeriği
export default async function NakliyeHizmetiPage({ params }: PageProps) {
  const { ilce: slug } = await params;
  
  const ilceVerisi = nakliyeIlceleri.find((i) => i.slug === slug);

  // Veri yoksa 404 sayfasına düşür
  if (!ilceVerisi) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
          <span className="text-blue-600">{ilceVerisi.isim}</span> Evden Eve Nakliye
        </h1>
        
        <p className="text-gray-600 mb-6">
          {ilceVerisi.isim} bölgesinde eşyalarınızı güvenle taşımak için Nef Nakliyat olarak profesyonel çözümler sunuyoruz. 
          Asansörlü nakliye, sigortalı taşımacılık ve deneyimli kadromuzla hizmetinizdeyiz.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
          <h2 className="text-xl font-bold text-blue-900 mb-2">Hemen Teklif Alın</h2>
          <p className="text-blue-700">
            {ilceVerisi.isim} içi taşınma süreçleriniz için bizimle hemen iletişime geçin.
          </p>
        </div>
      </div>
    </main>
  );
}