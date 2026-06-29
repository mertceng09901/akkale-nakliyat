import Link from 'next/link';
import { nakliyeIlceleri } from '../utils/ilceler';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Nef Nakliyat - İstanbul Evden Eve</h1>
        
        <h2 className="text-2xl font-semibold mb-6">Hizmet Bölgelerimiz</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {nakliyeIlceleri.map((ilce) => (
            <Link 
              key={ilce.slug} 
              href={`/nakliye-hizmeti/${ilce.slug}`}
              className="p-4 bg-white border border-gray-200 rounded hover:border-blue-500 transition"
            >
              {ilce.isim} Nakliyat
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}