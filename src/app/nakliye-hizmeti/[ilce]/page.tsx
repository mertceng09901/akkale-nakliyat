import { nakliyeIlceleri } from '../../../utils/ilceler';
import { notFound } from 'next/navigation';

// Next.js 15+ için params Promise yapısı
export default async function Page({ params }: { params: Promise<{ ilce: string }> }) {
  const { ilce } = await params;
  const ilceVerisi = nakliyeIlceleri.find((i) => i.slug === ilce);

  if (!ilceVerisi) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
          {ilceVerisi.isim} Evden Eve Nakliyat
        </h1>
        <p className="text-gray-600">
          {ilceVerisi.isim} bölgesinde profesyonel nakliyat hizmeti.
        </p>
      </div>
    </main>
  );
}

// SEO için
export async function generateMetadata({ params }: { params: Promise<{ ilce: string }> }) {
  const { ilce } = await params;
  const ilceVerisi = nakliyeIlceleri.find((i) => i.slug === ilce);
  return {
    title: ilceVerisi ? `${ilceVerisi.isim} Nakliyat` : "Sayfa Bulunamadı",
  };
}