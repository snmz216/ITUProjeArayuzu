var global1 = "I'm a global!";

//  empty object
var sikayet_listesi = {};

function hehehe()
{
    console.log("hehe")
}

sikayet_listesi["Termal Konfor"] = {
    "Ortam Sıcaklığı": [
        "Çok soğuk",
        "Çok sıcak",
        "Dengesiz sıcaklık",
        "Pencere veya cepheden hava sızıntısı",
        "Düşey sıcaklık farkı",
        "Pencere kenarı-iç taraf sıcaklık farkı",
    ],

    "Işınsal Sıcaklık": [
        "Cepheden doğrudan güneş ışığı",
        "Isı kaynağıyla doğrudan temas",
    ],

    "Bağıl Nem": [
        "Çok kuru",
        "Çok nemli",
    ],

    "Sıcaklık Değişimleri": [
        "Hızlı sıcaklık değişimi",
        "Yavaş sıcaklık değişimi",
    ],

    "Hava Akışı": [
        "Havalandırmadan gelen hava akışı",
        "Pencere veya kapıdan gelen hava akışı",
    ],
};

sikayet_listesi["İç Ortam Hava Kalitesi"] = {
    "İç Mekandaki Taze Hava Miktarı/Kalitesi": [
        "Havalandırmadan gelen havanın kalitesi",
        "Dışarıdan gelen hava kalitesi",
    ],

    "Doğal Havalandırma": [
        "Yetersiz doğal havalandırma",
    ],

    "Koku": [
        "Dışarıdan gelen koku",
        "Hava kirliliği nedeniyle koku",
        "Malzemenin kokusu",
        "Yiyecek kokusu",
        "Tuvalet kokusu",
        "Nem kokusu",
    ],
};

sikayet_listesi["İşitsel/Akustik Konfor"] = {
    "Gürültü Düzeyi": [
        "Konuşma sesi",
        "Ayak sesi",
        "Dışarıdan gelen ses",
        "Havalandırmadan gelen ses",
        "Aydınlatma sesi",
        "Ofis malzemelerinin sesi",
        "Mobilya ve kapı gıcırtısı",
    ],

    "Eko/Yankı": [
        "Çalışma ortamında yankı",
        "Toplantı odasında yankı",
        "Konferans salonundaki yankı",
        "Sosyal alanlarda yankı,"
    ],

    "İşitsel Mahremiyet": [
        "Çalışma ortamında işitsel mahremiyet sağlanamaması",
        "Toplantı salonunda işitsel mahremiyet sağlanamaması",
    ],
};

sikayet_listesi["Görsel Konfor"] = {
    "Gün Işığı": [
        "Yetersiz güneş ışığı",
    ],

    "Yapay Aydınlatma": [
        "Çalışma ortamındaki aydınlatma kalitesi",
        "Masamdaki ışık miktarı",
        "Aydınlatmanın yarattığı gölgeler",
        "Aydınlatmanın sürekli titreşimi",
    ],

    "Kamaşma/Parlama": [
        "Aydınlatmanın neden olduğu parlama",
        "Pencereden gelen güneş ışığından kaynaklanan parlama",
    ],

    "Yansıma": [
        "Ekranlı cihazlardaki yansımalar",
    ],

    "Görsel Mahremiyet": [
        "Çalışma ortamında görsel mahremiyet sağlanamaması",
        "Toplantı salonunda görsel mahremiyet sağlanamaması",
        "Bilgisayar ekranımın görülmesi",
    ],

    "Manzara/Dış Ortamla Bağlantı": [
        "Dışarıyı görememek",
        "Oturduğum yerden görünen manzara",
    ],
};

sikayet_listesi["Bina Tasarımı"] = {
    "Alan Yeterliliği": [
        "Yetersiz çalışma alanı",
        "Yetersiz çalışma masası",
        "Yetersiz sosyal alanlar",
        "Yetersiz toplantı odaları ve ortak çalışma alanları",
        "Yetersiz otopark alanı",
        "Yetersiz depolama alanları",
        "Yetersiz tuvaletler",
        "Alçak kat yüksekliği",
        "Yetersiz asansörler ve yürüyen merdivenler",
        "Yetersiz dış mekanlar",
    ],

    "Yerleşim Düzeni": [
        "Çalışma ortamının yerleşim düzeni",
        "Yetersiz yön işaretleri",
        "Çalışanlar arasında etkileşimin sağlanmmaması",
        "Ofis yerleşiminden kaynaklı insan sirkülasyonu",
        "Diğer bilgisayar ekranlarının dikkat dağıtması",
        "Yerleşimin engelli erişimine uygun olmaması",
    ],

    "İç Ortam Tasarımı": [
        "İç ortam estetiği",
        "Çalışma ortamının kişiselleştirilememesi",
        "Çalışma ortamının renk ve dokusu",
        "İşlevsiz iç ortam",
        "Yetersiz güvenlik önlemleri",
        "Dayanıksız eşya ve armatürler",
        "İç ortamda bitkisel/ekolojik öğelerin bulunmaması",
    ],

    "Mobilyalar": [
        "Mobilyanın konforu",
        "Mobilya ergonomisi",
        "Mobilyaların kişiye göre ayarlanamaması",
        "Mobilyaların modüler olmaması",
    ],

    "Dış Mekan Tasarımı": [
        "Dış mekanlara erişim zorluğu",
        "Dış mekanların tasarımı",
        "Peyzaj",
    ],

    "Titreşim": [
        "Rüzgardan kaynaklanan titreşimler",
        "Araçlardan kaynaklanan titreşimler",
        "Kullanıcılardan kaynaklanan titreşimler",
        "Havalandırmanın sebep olduğu titreşimler",
    ],
};

sikayet_listesi["Bina Hizmetleri"] = {
    "Konfor Koşullarını Kontrol Edebilme": [
        "Isıtma soğutma cihazlarının kontrol edilememesi",
        "Hava akışının kontrol edilememesi (HVAC)",
        "Aydınlatmanın kontrol edilememesi",
        "Güneş kırıcı elemanların kontrol edilememesi",
        "Doğal havalandırmanın kontrol edilememesi",
        "Su sıcaklığının kontrol edilememesi",
    ],

    "Kontrol Cihazlarının Kullanılabilirliği": [
        "Kullanma kılavuzunun olmaması",
        "Kullanma kılavuzunun anlaşılır olmaması",
        "Cihazların hassas ayarlanamaması",
    ],

    "Bina Yönetimi Hizmet Kalitesi": [
        "İklimlendirme/havalandırma hizmetleri",
        "Atık Yönetimi",
        "Güvenlik hizmetleri",
        "Temizlik hizmetleri",
        "Sağlık ve güvenlik prosedürleri",
        "Haşere kontrolü",
        "Posta hizmetleri",
        "Bina yönetim firmasının geri dönüş hızı",
        "Bina yönetim firmasının işletme&bakım uzmanlığı",
        "Kullanıcı geribildirim&şikayetlerinin dikkate alınmaması",
        "Bina yönetim firması hizmetlerinin duyurulmaması",
    ],

    "Bakım&Onarım": [
        "Bakım ve onarım periyodu",
        "Armatür ve ekipmanların yenilenmesi",
        "Dayanıklı ve tamir edilebilir malzemelerin kullanılmaması",
        "Tamirat hizmetleri",
    ],
};