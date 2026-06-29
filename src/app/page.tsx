import Link from 'next/link';
import { nakliyeIlceleri } from '../utils/ilceler';
import IletisimFormu from '../components/IletisimFormu';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center pb-20">
      
      {/* Hero / Karşılama Alanı */}
      <section className="w-full bg-blue-600 py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            İstanbul'un Güvenilir Evden Eve Nakliyat Firması
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Nef Nakliyat olarak, İstanbul'un 39 ilçesinde sigortalı, asansörlü ve profesyonel taşımacılık hizmeti veriyoruz.
          </p>
        </div>
      </section>

      {/* İletişim Formu Alanı (Mavi alanın hemen altına estetik bir şekilde oturtuldu) */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <IletisimFormu />
      </section>

      {/* Hizmet Bölgelerimiz (Internal Linking Alanı - SEO için kritik) */}
      <section className="w-full max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Hizmet Bölgelerimiz
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
          <p className="mt-4 text-gray-600">
            Size en yakın nakliye ekibimize ulaşmak için ilçenizi seçin.
          </p>
        </div>

        {/* 39 İlçe Grid Yapısı */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {nakliyeIlceleri.map((ilce, index) => (
            <Link 
              key={index} 
              href={`/nakliye-hizmeti/${ilce.slug}`}
              className="group flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-200"
            >
              <span className="font-medium text-gray-700 group-hover:text-blue-600">
                {ilce.isim}
              </span>
              <svg 
                className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
  
}