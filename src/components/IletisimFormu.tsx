'use client';

import { useState } from 'react';

export default function IletisimFormu() {
  const [formData, setFormData] = useState({
    ad: '',
    telefon: '',
    nereden: '',
    nereye: '',
    detay: ''
  });
  const [durum, setDurum] = useState<{ tip: 'bekliyor' | 'basarili' | 'hata', mesaj: string } | null>(null);
  const [yukleniyor, setYukleniyor] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setYukleniyor(true);
    setDurum(null);

    try {
      const response = await fetch('/api/iletisim', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setDurum({ tip: 'basarili', mesaj: data.mesaj });
        setFormData({ ad: '', telefon: '', nereden: '', nereye: '', detay: '' }); // Formu sıfırla
      } else {
        setDurum({ tip: 'hata', mesaj: data.mesaj });
      }
    } catch (error) {
      setDurum({ tip: 'hata', mesaj: 'Bağlantı hatası oluştu, lütfen tekrar deneyin.' });
    } finally {
      setYukleniyor(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 max-w-lg mx-auto mt-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Fiyat Teklifi Alın</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Ad Soyad *</label>
          <input required type="text" name="ad" value={formData.ad} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Telefon Numarası *</label>
          <input required type="tel" name="telefon" value={formData.telefon} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nereden</label>
            <input type="text" name="nereden" value={formData.nereden} onChange={handleChange} placeholder="Örn: Kadıköy" className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nereye</label>
            <input type="text" name="nereye" value={formData.nereye} onChange={handleChange} placeholder="Örn: Şişli" className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Eşya Detayı</label>
          <textarea name="detay" value={formData.detay} onChange={handleChange} rows={3} placeholder="Örn: 3+1 ev eşyası, asansör gereklidir." className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
        </div>

        <button disabled={yukleniyor} type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition duration-300 disabled:opacity-70">
          {yukleniyor ? 'Gönderiliyor...' : 'Teklif İste'}
        </button>

        {durum && (
          <div className={`p-3 rounded-md mt-4 text-center text-sm font-medium ${durum.tip === 'basarili' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {durum.mesaj}
          </div>
        )}
      </form>
    </div>
  );
}