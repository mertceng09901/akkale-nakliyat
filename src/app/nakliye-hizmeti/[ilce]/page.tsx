import { nakliyeIlceleri } from '../../../utils/ilceler';
import { notFound } from 'next/navigation';
import IletisimFormu from '../../../components/IletisimFormu'; // Formunu buraya dahil et

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
        <p className="text-gray-600 mb-8">
          {ilceVerisi.isim} bölgesinde profesyonel nakliyat hizmeti için doğru yerdesiniz.
        </p>

        {/* Teklif formu burada geri gelecek */}
        <div className="mt-8 border-t pt-8">
          <h2 className="text-2xl font-bold mb-4">Hemen Teklif Alın</h2>
          <IletisimFormu /> 
        </div>
      </div>
    </main>
  );
}