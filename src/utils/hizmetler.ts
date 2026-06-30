export interface Hizmet {
  slug: string;
  baslik: string;
  kisaAciklama: string;
  gorsel: string;
  icon: string;
  renk: string;
  detaylar: {
    baslik: string;
    icerik: string;
  }[];
  surec: {
    adim: number;
    baslik: string;
    aciklama: string;
    icon: string;
  }[];
  ozellikler: string[];
  fiyatBilgisi: string;
  sss: {
    soru: string;
    cevap: string;
  }[];
  metaTitle: string;
  metaDesc: string;
}

export const hizmetler: Hizmet[] = [
  {
    slug: 'evden-eve-nakliyat',
    baslik: 'Evden Eve Nakliyat',
    kisaAciklama: 'İstanbul\'un tüm ilçelerinde sigortalı, asansörlü ve profesyonel ev taşıma hizmeti. Eşyalarınız uzman ellerle güvenle yeni yuvanıza taşınsın.',
    gorsel: '/evden-eve-nakliyat.png',
    icon: '🏠',
    renk: '#f59e0b',
    metaTitle: 'Evden Eve Nakliyat İstanbul | Nef Nakliyat',
    metaDesc: 'İstanbul\'da sigortalı, asansörlü ve profesyonel evden eve nakliyat hizmeti. Uzman ekibimizle güvenli ve hızlı taşınma deneyimi. Ücretsiz teklif alın!',
    detaylar: [
      {
        baslik: 'Profesyonel Paketleme Hizmeti',
        icerik: 'Uzman ekibimiz, eşyalarınızın türü ve hassasiyetine göre özel paketleme materyalleri kullanarak kırılma, çizilme ve deformasyon riskini en aza indirir. Cam eşyalar, tablolar ve değerli objeler özel köpük ve baloncuklu naylonla korunur. Her eşya ayrı ayrı incelenerek en uygun paketleme yöntemi belirlenir.',
      },
      {
        baslik: 'Demonte ve Montaj İşlemleri',
        icerik: 'Mobilyalarınızın söküm ve kurulum işlemleri profesyonel el aletleri ve tekniklerle yapılır. Gardırop, yatak sistemi, çalışma masası gibi tüm mobilyalar eski adresinizde sökülerek yeni adresinizde eksiksiz kurulur. Hiçbir vida, aksesuar kaybolmaz; her parça etiketlenerek taşınır.',
      },
      {
        baslik: 'Güvenli Araç Filo',
        icerik: 'Taşıma araçlarımız özel darbe emici sistemlerle, sabitleyici kayış ve yastıklarla donatılmıştır. Küçük taşımalar için minivan, orta büyüklükteki taşımalar için kamyonet, büyük ev taşımaları için ise TIR kullanılmaktadır. Araçlarımız her taşıma öncesi temizlenir ve kontrol edilir.',
      },
      {
        baslik: 'Koordinasyon ve Zaman Yönetimi',
        icerik: 'Taşınma süreciniz baştan sona planlı şekilde yürütülür. Sözleşme anında belirlenen tarihe ve saate birebir uyulur. Ekip lideri koordinasyonuyla her aşama takip edilir ve müşterimiz her an bilgilendirilir. Taşınma gününde sizi ne bekliyor, önceden detaylıca anlatılır.',
      },
    ],
    surec: [
      { adim: 1, baslik: 'Ücretsiz Ekspertiz', aciklama: 'Uzmanımız evinizi ziyaret ederek eşyaları inceler ve size özel fiyat teklifi sunar.', icon: '🔍' },
      { adim: 2, baslik: 'Planlama', aciklama: 'Taşınma tarihi, araç tipi ve ekip büyüklüğü belirlenir. Detaylı plan hazırlanır.', icon: '📋' },
      { adim: 3, baslik: 'Paketleme', aciklama: 'Taşınma günü ekibimiz gelir, tüm eşyalar özenle paketlenir ve etiketlenir.', icon: '📦' },
      { adim: 4, baslik: 'Taşıma', aciklama: 'Eşyalar güvenli araçlarımıza yüklenerek yeni adresinize taşınır.', icon: '🚛' },
      { adim: 5, baslik: 'Kurulum', aciklama: 'Mobilyalar monte edilir, eşyalar yerlerine yerleştirilir, paketler açılır.', icon: '🏠' },
      { adim: 6, baslik: 'Kontrol', aciklama: 'Son kontrol yapılır, müşteri memnuniyeti teyit edilir, teslimat tutanağı imzalanır.', icon: '✅' },
    ],
    ozellikler: [
      'Sigortalı taşıma güvencesi',
      'Asansörlü nakliyat imkânı',
      '7/24 müşteri desteği',
      'Profesyonel paketleme malzemeleri',
      'Demonte ve montaj dahil',
      'Deneyimli ve eğitimli ekip',
      'Zamanında teslimat garantisi',
      'Ücretsiz ekspertiz hizmeti',
    ],
    fiyatBilgisi: 'Evden eve nakliyat fiyatları; evin büyüklüğü, kat sayısı, asansör durumu, taşınma mesafesi ve eşya miktarına göre değişmektedir. Ortalama 2+1 daire taşıması 5.000₺\'den başlamaktadır. Kesin fiyat için ücretsiz ekspertiz hizmetimizden yararlanın.',
    sss: [
      { soru: 'Nakliyat öncesi ne yapmalıyım?', cevap: 'Değerli belgelerinizi ve küçük kıymetli eşyalarınızı kendiniz taşımanızı öneririz. Çiçekler ve bitkiler için önceden bilgi vermeniz yeterlidir. Gerisi bize kalır!' },
      { soru: 'Taşınma ne kadar sürer?', cevap: '2+1 bir daire için ortalama 4-6 saat sürmektedir. Eşya miktarı, kat sayısı ve mesafeye göre bu süre değişebilir.' },
      { soru: 'Kırılma veya hasar olursa ne olur?', cevap: 'Tüm taşımalarımız sigortalidir. Nadir de olsa oluşabilecek hasarlar sigorta kapsamında tazmin edilir.' },
      { soru: 'Hafta sonu ve tatil günleri çalışıyor musunuz?', cevap: 'Evet, haftanın 7 günü, yılın 365 günü hizmet veriyoruz. Resmi tatillerde ek ücret uygulanmamaktadır.' },
      { soru: 'Asansör yoksa taşıma yapabiliyor musunuz?', cevap: 'Evet, asansörü olmayan binalarda özel ekipman ve tekniklerle taşıma yapıyoruz. Fiyat teklifinde kat sayısı göz önünde bulundurulur.' },
    ],
  },
  {
    slug: 'sehirler-arasi-nakliyat',
    baslik: 'Şehirler Arası Nakliyat',
    kisaAciklama: 'Türkiye\'nin her noktasına güvenli, sigortalı ve planlı şehirlerarası nakliyat hizmeti. Uzun mesafe taşımacılıkta 10 yılı aşkın deneyim.',
    gorsel: '/sehirler-arasi-nakliyat.png',
    icon: '🚛',
    renk: '#ef4444',
    metaTitle: 'Şehirler Arası Nakliyat | Nef Nakliyat İstanbul',
    metaDesc: 'İstanbul\'dan Türkiye\'nin her iline güvenli ve sigortalı şehirlerarası nakliyat. Profesyonel ekip, modern TIR filosu. Ücretsiz teklif!',
    detaylar: [
      {
        baslik: 'Kapsamlı Rota Planlaması',
        icerik: 'Şehirlerarası taşımacılıkta güzergah planlaması son derece önemlidir. Uzman ekibimiz en kısa ve güvenli rotayı belirler. Trafik yoğunluğu, yol durumu ve iklim koşulları göz önünde bulundurularak optimal taşıma zamanı seçilir. Türkiye\'nin her iline düzenli seferlerimiz mevcuttur.',
      },
      {
        baslik: 'Özel Uzun Yol Araçları',
        icerik: 'Şehirlerarası nakliyat için özel donanımlı TIR ve kamyonlarımız kullanılır. Araçlar ısı kontrolü, özel güvenlik kayışları ve darbe emici sistemlerle donatılmıştır. Uzun yol sürücülerimiz hepsi K1, K2 psikoteknik belgeli ve deneyimlidir.',
      },
      {
        baslik: 'Yük Takip Sistemi',
        icerik: 'GPS takip sistemimiz sayesinde eşyalarınızın nerede olduğunu her an anlık olarak takip edebilirsiniz. Müşterilerimize özel takip numarası verilerek taşıma boyunca şeffaf bilgilendirme yapılır.',
      },
      {
        baslik: 'Kapıdan Kapıya Teslimat',
        icerik: 'İstanbul\'daki evinizden alınan eşyalarınız, Türkiye\'nin herhangi bir şehrindeki yeni adresinize kapıdan kapıya teslim edilir. Varış şehrinde de montaj ve yerleştirme hizmeti sunulmaktadır.',
      },
    ],
    surec: [
      { adim: 1, baslik: 'İletişim & Ekspertiz', aciklama: 'Taşınma detaylarınızı alır, eşya envanteri çıkarır ve size özel fiyat teklifi sunarız.', icon: '📞' },
      { adim: 2, baslik: 'Rota & Tarih Belirleme', aciklama: 'En uygun güzergah ve taşınma tarihi ortak belirlenir, sözleşme imzalanır.', icon: '🗺️' },
      { adim: 3, baslik: 'Profesyonel Paketleme', aciklama: 'Uzun yola uygun özel paketleme materyalleriyle tüm eşyalar güvenle paketlenir.', icon: '📦' },
      { adim: 4, baslik: 'Yükleme & Yola Çıkış', aciklama: 'Eşyalar TIR\'a sabitlenerek yola çıkılır. GPS takip sistemi aktif edilir.', icon: '🚛' },
      { adim: 5, baslik: 'Varış & Boşaltma', aciklama: 'Hedef şehirde eşyalar özenle boşaltılır ve yeni adrese taşınır.', icon: '📍' },
      { adim: 6, baslik: 'Kurulum & Teslimat', aciklama: 'Mobilyalar monte edilir, her şey yerli yerine yerleştirilir. Teslimat tutanağı alınır.', icon: '✅' },
    ],
    ozellikler: [
      'Türkiye\'nin her iline hizmet',
      'GPS ile anlık yük takibi',
      'Tam sigorta güvencesi',
      'Kapıdan kapıya teslimat',
      'Uzman uzun yol sürücüleri',
      'Özel TIR ve kamyon filosu',
      'Tarih garantisi',
      'Montaj hizmeti dahil',
    ],
    fiyatBilgisi: 'Şehirlerarası nakliyat fiyatları; mesafe, eşya hacmi ve ağırlığına göre hesaplanmaktadır. İstanbul-Ankara arası 2+1 daire taşıması ortalama 12.000₺\'den başlamaktadır. Kesin fiyat için bizimle iletişime geçin.',
    sss: [
      { soru: 'Eşyalarım kaç günde ulaşır?', cevap: 'Türkiye içinde maksimum 1-3 gün içinde teslimat yapılmaktadır. Mesafeye göre genellikle aynı gün veya ertesi gün teslim edilir.' },
      { soru: 'Eşyaların güvenliği nasıl sağlanıyor?', cevap: 'Araçlarımız özel bağlama ekipmanlarıyla donatılmıştır. Tüm yük sigortalıdır ve GPS ile anlık takip edilmektedir.' },
      { soru: 'Yalnızca İstanbul\'dan mı taşıma yapıyorsunuz?', cevap: 'Hayır, Türkiye\'nin herhangi iki noktası arasında taşıma yapabiliyoruz. Müşterimizin nerede olduğuna bakmaksızın hizmet veriyoruz.' },
      { soru: 'Araç güzergah bilgisine ulaşabilir miyim?', cevap: 'Evet, müşterilerimize özel bir takip numarası veriyoruz. Bu numara ile aracın konumunu anlık olarak web sitemizden takip edebilirsiniz.' },
    ],
  },
  {
    slug: 'ofis-tasima',
    baslik: 'Ofis Taşıma',
    kisaAciklama: 'Kurumsal yapınızı koruyarak ofisinizi yeni adresine minimum iş kaybıyla taşıyoruz. Hafta sonu ve gece taşıma seçenekleriyle iş kesintisi yaşamayın.',
    gorsel: '/ofis-tasima.png',
    icon: '🏢',
    renk: '#06b6d4',
    metaTitle: 'Ofis Taşıma İstanbul | Kurumsal Nakliyat | Nef Nakliyat',
    metaDesc: 'İstanbul\'da profesyonel ofis taşıma hizmeti. İş günü kaybı olmadan, güvenli ve organize ofis nakliyatı. IT ekipmanları, belgeler ve mobilya taşıma.',
    detaylar: [
      {
        baslik: 'IT Ekipmanları ve Teknoloji Taşıma',
        icerik: 'Bilgisayarlar, sunucular, monitörler, yazıcılar ve diğer elektronik ekipmanlar özel anti-statik ambalajlarla korunur. Kablo yönetimi ve bağlantı haritalaması yapılır, böylece yeni ofiste her şeyi eski yerine bağlamak kolaylaşır. Sunucu odalarının taşınmasında özel soğutma ve güvenlik önlemleri alınır.',
      },
      {
        baslik: 'Belge ve Arşiv Güvenliği',
        icerik: 'Kurumsal belgeler, sözleşmeler ve gizli dosyalar numaralı mühürlü kutularda taşınır. Her kutu kayıt altına alınır. İmzalı teslim tutanakları ile belgelerin tamamen güvende olduğundan emin olunur. Gizlilik anlaşması talep eden müşterilerimiz için NDA imzalanabilir.',
      },
      {
        baslik: 'Hafta Sonu ve Gece Taşıma',
        icerik: 'Çalışma saatlerini etkilememek için cumartesi-pazar veya gece taşıma seçenekleri sunuyoruz. Böylece pazartesi sabahı personeliniz yeni ofisinde çalışmaya başlayabilir. Bu zamanlama özelliği sayesinde müşterilerimiz sıfır iş günü kaybı yaşamaktadır.',
      },
      {
        baslik: 'Kurumsal Planlama ve Koordinasyon',
        icerik: 'Özel ofis taşıma koordinatörümüz, şirketinizin IT müdürü ve ofis yöneticisiyle birlikte detaylı taşınma planı hazırlar. Hangi departmanın ne zaman taşınacağı, hangi ekipmanın öncelikli olduğu ve kurulum sırası belirlenip yazılı olarak paylaşılır.',
      },
    ],
    surec: [
      { adim: 1, baslik: 'Keşif & Envanter', aciklama: 'Ofisinizi ziyaret ederek tüm mobilya ve ekipman envanteri çıkarılır.', icon: '📋' },
      { adim: 2, baslik: 'Taşıma Planı', aciklama: 'Departman bazlı taşınma planı hazırlanır. Tarih ve saat belirlenir.', icon: '📅' },
      { adim: 3, baslik: 'Etiketleme', aciklama: 'Tüm ekipman ve mobilyalar özel etiketlerle işaretlenerek kayıt altına alınır.', icon: '🏷️' },
      { adim: 4, baslik: 'Paketleme', aciklama: 'Elektronik ekipmanlar anti-statik ambalajla, belgeler mühürlü kutularla paketlenir.', icon: '📦' },
      { adim: 5, baslik: 'Taşıma', aciklama: 'Yeni ofise güvenli taşıma ve organize boşaltma yapılır.', icon: '🚛' },
      { adim: 6, baslik: 'Kurulum & Test', aciklama: 'Ekipmanlar kurulur, bağlantılar test edilir. Çalışmaya hazır teslim.', icon: '💼' },
    ],
    ozellikler: [
      'Hafta sonu ve gece taşıma',
      'IT ekipmanı uzmanlığı',
      'Belge güvenliği ve gizliliği',
      'Sıfır iş günü kaybı hedefi',
      'Departman bazlı planlama',
      'Kurulum ve kablo yönetimi',
      'Sigortalı taşıma',
      'Proje koordinatörü atama',
    ],
    fiyatBilgisi: 'Ofis taşıma fiyatları; ofis büyüklüğü, çalışan sayısı, ekipman miktarı ve taşıma zamanına (gece/gündüz) göre değişmektedir. Küçük ofisler 8.000₺\'den, orta ölçekli ofisler 20.000₺\'den başlamaktadır.',
    sss: [
      { soru: 'Sunucu odasını güvenle taşıyabilir misiniz?', cevap: 'Evet, özel anti-vibrasyon platformları ve ısı yönetimli araçlarımızla sunucu odalarını güvenle taşıyoruz. IT ekibinizle koordineli çalışıyoruz.' },
      { soru: 'Taşıma sırasında iş kesintisi yaşar mıyız?', cevap: 'Hafta sonu veya gece taşıma tercih ederseniz iş günü kaybı yaşanmaz. Pazartesi sabahı yeni ofisinizde çalışmaya başlayabilirsiniz.' },
      { soru: 'Kurulum hizmeti dahil mi?', cevap: 'Evet, mobilya montajı ve IT ekipmanlarının bağlantı kurulumu hizmete dahildir. Ekibimiz tüm kurulum tamamlanana kadar sahada kalır.' },
    ],
  },
  {
    slug: 'piyano-tasima',
    baslik: 'Piyano Taşıma',
    kisaAciklama: 'Yüksek değerli ve hassas piyanoları özel ekipman ve uzman tekniklerle güvenle taşıyoruz. Akort kaybı olmadan, çizilmeden teslim garantisi.',
    gorsel: '/piyano-tasima.png',
    icon: '🎹',
    renk: '#10b981',
    metaTitle: 'Piyano Taşıma İstanbul | Uzman Piyano Nakliyat | Nef Nakliyat',
    metaDesc: 'İstanbul\'da profesyonel piyano taşıma hizmeti. Kuyruklu piyano, duvar piyanosu, dijital piyano taşıma. Özel ekipman ve uzman ekip. Güvenli teslimat.',
    detaylar: [
      {
        baslik: 'Özel Piyano Taşıma Ekipmanı',
        icerik: 'Piyano taşıma için tasarlanmış özel tekerlekli platformlar, koruyucu pedler, sert ambalaj kutuları ve yüksek kapasiteli kaldırma kayışları kullanıyoruz. Kuyruklu piyanolar için bacak sökme ve yeniden montaj ekipmanlarımız mevcuttur. Tüm ekipmanlarımız düzenli bakımdan geçirilmektedir.',
      },
      {
        baslik: 'Akustik Koruma',
        icerik: 'Piyanonun akustik dengesini korumak için yatırma açısı ve taşıma pozisyonu büyük önem taşır. Uzman ekibimiz kuyruklu piyanoları yatırmak yerine özel eğim açılarında taşır. Titreşim emici malzemeler kullanılarak mekanik aksamın zarar görmesi engellenir.',
      },
      {
        baslik: 'Dar Merdiven ve Balkon Çözümleri',
        icerik: 'Piyanonuzun bulunduğu kat veya bina yapısına göre özel çözümler üretiyoruz. Dar merdivenler için özel teknikler, yüksek katlar için vinç sistemi kullanılmaktadır. Balkon ve pencereden piyano taşıma işlemi uzman ekibimiz tarafından güvenle gerçekleştirilir.',
      },
      {
        baslik: 'Tam Sigorta Güvencesi',
        icerik: 'Her piyano taşıması tam değer sigortası ile güvence altındadır. Piyanonun rayiç değeri üzerinden sigorta yapılmakta, herhangi bir hasar durumunda tam tazminat ödenmektedir. Taşıma öncesi piyano detaylıca fotoğraflanır ve durum raporu tutulur.',
      },
    ],
    surec: [
      { adim: 1, baslik: 'Değerlendirme', aciklama: 'Piyano tipi, konumu, kat bilgisi ve varış adresi değerlendirilir.', icon: '🔍' },
      { adim: 2, baslik: 'Sigortalama', aciklama: 'Piyano değeri üzerinden kapsamlı sigorta yapılır, fotoğraflama tamamlanır.', icon: '🛡️' },
      { adim: 3, baslik: 'Hazırlık', aciklama: 'Geçiş yolları temizlenir, özel ekipmanlar hazırlanır.', icon: '⚙️' },
      { adim: 4, baslik: 'Paketleme', aciklama: 'Piyano koruyucu pedler ve özel ambalajla kaplanır.', icon: '📦' },
      { adim: 5, baslik: 'Güvenli Taşıma', aciklama: 'Piyano araçta sabitlenip titreşim emici malzemelerle korunarak taşınır.', icon: '🚛' },
      { adim: 6, baslik: 'Yerleştirme & Test', aciklama: 'Yeni konumda piyano yerleştirilir, bacaklar takılır, pedal kontrolleri yapılır.', icon: '🎹' },
    ],
    ozellikler: [
      'Kuyruklu ve duvar piyanoları',
      'Dijital piyano taşıma',
      'Özel vinç ve kaldırma sistemi',
      'Akustik koruma önlemleri',
      'Tam değer sigortası',
      'Dar merdiven uzmanlığı',
      'Bacak sökme ve montaj',
      'Taşıma sonrası durum raporu',
    ],
    fiyatBilgisi: 'Piyano taşıma fiyatları; piyano tipi (kuyruklu/duvar/dijital), bulunduğu kat, asansör durumu ve taşınma mesafesine göre değişmektedir. Fiyatlar 2.500₺\'den başlamaktadır. Kesin fiyat için arayınız.',
    sss: [
      { soru: 'Taşıma sonrası piyanomu akort ettirmem gerekir mi?', cevap: 'Taşıma sonrası 2-4 hafta içinde akort yaptırmanızı öneririz. Yeni ortamın ısı ve nem değişimine alışması için bu süre yeterlidir.' },
      { soru: 'Kuyruklu piyano taşıyabiliyor musunuz?', cevap: 'Evet, kuyruklu piyanolar için özel ekipman ve tekniklerimiz mevcuttur. Bacaklar sökülerek özel platformda taşınır.' },
      { soru: 'Balkonumdan piyanoyu indirebilir misiniz?', cevap: 'Evet, vinç sistemimizle balkon veya pencereden güvenli indirme yapabiliyoruz. Bu durum fiyata eklenecektir.' },
      { soru: 'Piyano hasarı için sigorta var mı?', cevap: 'Her taşımada piyanonun tam değeri üzerinden sigorta yapılmaktadır. Herhangi bir hasar durumunda sigorta firması değerlendirme yapar ve tazminat ödenir.' },
    ],
  },
  {
    slug: 'parca-esya-tasima',
    baslik: 'Parça Eşya Taşıma',
    kisaAciklama: 'Az sayıda eşyası olan, tek bir eşya taşıtmak isteyen ya da öğrenci taşınması yapacaklar için ekonomik ve hızlı çözüm.',
    gorsel: '/parca-esya-tasima.png',
    icon: '📦',
    renk: '#8b5cf6',
    metaTitle: 'Parça Eşya Taşıma İstanbul | Nef Nakliyat',
    metaDesc: 'İstanbul\'da ekonomik parça eşya taşıma hizmeti. Tek koltuk, koli, beyaz eşya taşıma. Hızlı, güvenli ve uygun fiyatlı.',
    detaylar: [
      {
        baslik: 'Küçük Taşımalar İçin İdeal',
        icerik: 'Tüm bir evi taşımaya gerek duymayan müşterilerimiz için parça eşya taşıma mükemmel bir çözümdür. Tek bir koltuk takımı, yatak, çamaşır makinesi veya birkaç koli eşya için de aynı özenle hizmet veriyoruz. Küçük taşımaların büyük firmalar tarafından göz ardı edildiğini biliyoruz; bu yüzden biz her taşımaya eşit değer veriyoruz.',
      },
      {
        baslik: 'Öğrenci Taşıma Paketi',
        icerik: 'Üniversite öğrencilerine özel ekonomik paketlerimizle oda, koli ve birkaç parça eşyayı hızlıca taşıyabilirsiniz. Yurt veya apart taşımalarında yenilmez fiyatlar sunuyoruz. İstanbul\'un tüm üniversite semtlerinde aktif olarak hizmet veriyoruz.',
      },
      {
        baslik: 'Beyaz Eşya ve Elektrikli Cihazlar',
        icerik: 'Buzdolabı, çamaşır makinesi, bulaşık makinesi gibi beyaz eşyaların taşınması titiz bir işlem gerektirir. Kapı bağlantıları sabitlenir, iç aksamlar korunur. Su tahliye boruları temizlenerek araç içinde su sızdırmaz şekilde taşınır.',
      },
      {
        baslik: 'Esnek Zamanlama',
        icerik: 'Parça eşya taşımalarında çok daha esnek bir zamanlama sunabiliyoruz. Sabah saatlerinden gece geç saatlere kadar randevu alabilirsiniz. Aynı gün taşıma seçeneği de mevcuttur, önceden bilgi vermeniz yeterlidir.',
      },
    ],
    surec: [
      { adim: 1, baslik: 'Bilgi Alın', aciklama: 'Taşınacak eşyaları ve adresleri bildirin, anında fiyat öğrenin.', icon: '📞' },
      { adim: 2, baslik: 'Randevu', aciklama: 'Size en uygun gün ve saatte randevu ayarlanır.', icon: '📅' },
      { adim: 3, baslik: 'Paketleme', aciklama: 'Eşyalarınız özenle sarılır ve korunur.', icon: '📦' },
      { adim: 4, baslik: 'Taşıma', aciklama: 'Eşyalarınız güvenle yeni adresinize taşınır.', icon: '🚛' },
      { adim: 5, baslik: 'Teslimat', aciklama: 'Eşyalar istediğiniz konuma yerleştirilir.', icon: '✅' },
    ],
    ozellikler: [
      'Tek eşya taşıma imkânı',
      'Öğrenci taşıma paketi',
      'Beyaz eşya uzmanlığı',
      'Aynı gün taşıma seçeneği',
      'Esnek randevu saatleri',
      'Ekonomik fiyatlar',
      'Sigortalı taşıma',
      'Koli ve paketleme hizmeti',
    ],
    fiyatBilgisi: 'Parça eşya taşıma fiyatları eşya sayısı, büyüklüğü ve taşıma mesafesine göre belirlenir. Tek bir eşya taşıması 500₺\'den başlamaktadır. Koli bazlı taşımalarda özel indirimler uygulanmaktadır.',
    sss: [
      { soru: 'Tek bir eşya için de geliyor musunuz?', cevap: 'Evet! Tek bir sandalyeden büyük bir koltuk takımına kadar her büyüklükteki taşımayı yapıyoruz.' },
      { soru: 'Aynı gün taşıma mümkün mü?', cevap: 'Müsaitlik durumuna göre aynı gün taşıma yapabiliyoruz. En az 2-3 saat öncesinden aranırsanız ayarlıyoruz.' },
      { soru: 'Koli paketleme hizmeti var mı?', cevap: 'Evet, profesyonel paketleme malzemeleriyle eşyalarınızı güvenle paketleyebiliyoruz. Bu hizmet ek ücrete tabidir.' },
    ],
  },
  {
    slug: 'sigortali-tasima',
    baslik: 'Sigortalı Eşya Taşıma',
    kisaAciklama: 'Tüm taşımalarımız kapsamlı sigorta güvencesi altındadır. Eşyalarınıza olabilecek her türlü hasar için tam tazminat sağlanır. Gönlünüz rahat olsun.',
    gorsel: '/sigortali-tasima.png',
    icon: '🛡️',
    renk: '#f97316',
    metaTitle: 'Sigortalı Eşya Taşıma İstanbul | Nef Nakliyat',
    metaDesc: 'İstanbul\'da sigortalı nakliyat hizmeti. Tüm eşyalar kapsamlı sigorta güvencesiyle taşınır. Hasar durumunda tam tazminat. Güvenli taşınma.',
    detaylar: [
      {
        baslik: 'Kapsamlı Nakliyat Sigortası',
        icerik: 'Çalıştığımız lisanslı sigorta şirketiyle hazırlanan kapsamlı nakliyat sigortamız; kırılma, çizilme, yanma, su hasarı ve hırsızlık gibi riskleri kapsamaktadır. Sigorta poliçesi taşıma başlamadan müşterimize sunulur ve onaylanır. Eşyanın rayiç değeri üzerinden sigortalama yapılır.',
      },
      {
        baslik: 'Hasar Tespit ve Tazminat Süreci',
        icerik: 'Nadir de olsa yaşanabilecek hasarlarda sigorta eksperi devreye girer. Hasar fotoğraflanır, ekspertiz raporu hazırlanır ve belirlenen tazminat en kısa sürede ödenir. Müşterilerimize tüm bu süreçte rehberlik ediyoruz.',
      },
      {
        baslik: 'Taşıma Öncesi Durum Tespiti',
        icerik: 'Taşıma başlamadan önce tüm eşyaların detaylı fotoğraflaması yapılır ve durum raporu hazırlanır. Bu rapor müşteri ve Nef Nakliyat tarafından imzalanır. Böylece taşıma öncesi ve sonrası karşılaştırma yapılabilmekte, herhangi bir anlaşmazlık önlenmektedir.',
      },
      {
        baslik: 'Değerli Eşya Güvencesi',
        icerik: 'Antika, tablo, heykeltıraş eseri, değerli cam ve porselen gibi özel değerli eşyalar için ek sigorta seçeneği sunulmaktadır. Bu eşyalar özel koruyucu malzemeler ve ayrı kutularda taşınır, sigorta değeri piyasa değerine göre belirlenir.',
      },
    ],
    surec: [
      { adim: 1, baslik: 'Sigorta Değerlendirmesi', aciklama: 'Eşyalarınızın toplam değeri belirlenir, uygun sigorta paketi seçilir.', icon: '💰' },
      { adim: 2, baslik: 'Poliçe Düzenleme', aciklama: 'Sigorta poliçesi hazırlanır, müşteriye sunulur ve imzalanır.', icon: '📄' },
      { adim: 3, baslik: 'Durum Fotoğraflaması', aciklama: 'Tüm eşyalar taşıma öncesi detaylı fotoğraflanır ve durum raporu tutulur.', icon: '📸' },
      { adim: 4, baslik: 'Güvenli Taşıma', aciklama: 'Eşyalar sigorta güvencesiyle özenle taşınır.', icon: '🚛' },
      { adim: 5, baslik: 'Teslim & Kontrol', aciklama: 'Varışta eşyalar tekrar kontrol edilir, durum karşılaştırması yapılır.', icon: '✅' },
      { adim: 6, baslik: 'Hasar Anında Destek', aciklama: 'Herhangi bir hasar durumunda anında sigorta süreci başlatılır.', icon: '🛡️' },
    ],
    ozellikler: [
      'Tam değer sigorta güvencesi',
      'Kırılma ve çizilme kapsamı',
      'Taşıma öncesi durum tespiti',
      'Değerli eşya ek sigortası',
      'Hızlı hasar tazminatı',
      'Lisanslı sigorta şirketi',
      'Şeffaf poliçe süreci',
      'Uzman ekspertiz desteği',
    ],
    fiyatBilgisi: 'Sigortalı taşıma, standart hizmetlerimizin tamamına dahildir. Ek değerli eşya sigortası ise eşyanın değerine göre ayrıca fiyatlandırılmaktadır. Sigorta poliçe bedeli toplam taşıma bedelinin %2-3\'ü arasındadır.',
    sss: [
      { soru: 'Sigorta her taşımaya dahil mi?', cevap: 'Evet, yaptığımız tüm taşımalara temel sigorta dahildir. Değerli eşyalar için ek sigorta paketi talep edebilirsiniz.' },
      { soru: 'Hasar olursa tazminat ne zaman ödenir?', cevap: 'Sigorta firmasının ekspertiz süreci genellikle 5-10 iş günü sürmektedir. Onaylanan tazminat akabinde en geç 15 iş günü içinde ödenir.' },
      { soru: 'Antika ve değerli eşyalarım sigortalanabilir mi?', cevap: 'Evet, değerli eşyalar için özel ekspertiz yaptırılarak rayiç değeri üzerinden sigorta yapılmaktadır.' },
      { soru: 'Sigorta poliçesini önceden görebilir miyim?', cevap: 'Evet, taşıma başlamadan önce sigorta poliçesi size iletilir, okumanız ve onaylamanız için zaman verilir.' },
    ],
  },
];

export function hizmetGetir(slug: string): Hizmet | undefined {
  return hizmetler.find(h => h.slug === slug);
}
