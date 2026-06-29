import { nakliyeIlceleri } from '../utils/ilceler';

export default function sitemap() {
  // Projeyi canlıya aldığında burayı gerçek domaininle değiştirmelisin
  const baseUrl = 'https://www.nefnakliyat.com';

  // 1. Ana Sayfa (Statik)
  const anaSayfa = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1.0, // Ana sayfa her zaman en yüksek önceliğe sahiptir
  };

  // 2. İlçe Sayfaları (Dinamik SSR Rotalar)
  const ilceSayfalari = nakliyeIlceleri.map((ilce) => ({
    url: `${baseUrl}/nakliyat-hizmeti/${ilce.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8, // Alt hizmet sayfaları için ideal öncelik değeri
  }));

  // Tüm rotaları birleştirip döndürüyoruz
  return [anaSayfa, ...ilceSayfalari];
}