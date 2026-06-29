import { nakliyeIlceleri } from '../../../utils/ilceler';

// Tip tanımlaması
interface PageProps {
  params: Promise<{ ilce: string }>;
}

// SEO Meta Verileri
export async function generateMetadata({ params }: PageProps) {
  const { ilce: slug } = await params;
  const ilceVerisi = nakliyeIlceleri.find((i) => i.slug === slug);
  const ilceAdi = ilceVerisi ? ilceVerisi.isim : 'İlçe';

  return {
    title: `${ilceAdi} Evden Eve Nakliyat | Nef Nakliyat`,
    description: `${ilceAdi} bölgesinde sigortalı, asansörlü ve profesyonel evden eve nakliyat hizmeti. Hemen fiyat teklifi alın.`,
    alternates: {
      canonical: `https://www.nefnakliyat.com/nakliye-hizmeti/${slug}`, // Burası klasör isminle aynı olmalı
    },
  };
}

// Sayfa İçeriği
export default async function NakliyeHizmetiPage({ params }: PageProps) {
  const { ilce: slug } = await params;
  const ilceVerisi = nakliyeIlceleri.find((i) => i.slug === slug);

  // Eğer ilçe bulunamazsa 404 sayfasına yönlendir veya hata mesajı göster
  if (!ilceVerisi) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">İlçe bulunamadı.</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
          <span className="text-blue-600">{ilceVerisi.isim}</span> Evden Eve Nakliyat
        </h1>
        <p className="text-gray-600">
          {ilceVerisi.isim} ve çevresinde profesyonel, güvenilir nakliyat hizmeti için Nef Nakliyat yanınızda.
        </p>
      </div>
    </main>
  );
}