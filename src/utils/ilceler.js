const istanbulIlceleri = [
  "Adalar", "Arnavutköy", "Ataşehir", "Avcılar", "Bağcılar", 
  "Bahçelievler", "Bakırköy", "Başakşehir", "Bayrampaşa", "Beşiktaş", 
  "Beykoz", "Beylikdüzü", "Beyoğlu", "Büyükçekmece", "Çatalca", 
  "Çekmeköy", "Esenler", "Esenyurt", "Eyüpsultan", "Fatih", 
  "Gaziosmanpaşa", "Güngören", "Kadıköy", "Kağıthane", "Kartal", 
  "Küçükçekmece", "Maltepe", "Pendik", "Sancaktepe", "Sarıyer", 
  "Silivri", "Sultanbeyli", "Sultangazi", "Şile", "Şişli", 
  "Tuzla", "Ümraniye", "Üsküdar", "Zeytinburnu"
];

const slugify = (text) => {
  const trMap = {
    'çÇ':'c', 'ğĞ':'g', 'şŞ':'s', 'üÜ':'u', 'ıI':'i', 'öÖ':'o'
  };
  for(let key in trMap) {
    text = text.replace(new RegExp('['+key+']','g'), trMap[key]);
  }
  return text.replace(/[^-a-zA-Z0-9\s]+/ig, '') 
             .replace(/\s/gi, "-") 
             .toLowerCase();
}

// İŞTE BURADAKİ 'export' KELİMESİ EKSİKTİ, ONU EKLİYORUZ:
export const nakliyeIlceleri = istanbulIlceleri.map(ilce => {
  return {
    isim: ilce, 
    slug: `${slugify(ilce)}-evden-eve-nakliyat` 
  }
});