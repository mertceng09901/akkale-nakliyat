import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { ad, telefon, nereden, nereye, detay } = body;

    if (!ad || !telefon) {
      return NextResponse.json(
        { mesaj: "Ad ve Telefon alanları zorunludur." },
        { status: 400 }
      );
    }

    console.log("Yeni Talep Geldi:", { ad, telefon, nereden, nereye, detay });

    return NextResponse.json(
      { mesaj: "Talebiniz başarıyla alındı, en kısa sürede dönüş yapılacaktır." },
      { status: 200 }
    );

  } catch (error) {
    console.error("API Hatası:", error);
    return NextResponse.json(
      { mesaj: "Sunucu tarafında bir hata oluştu." },
      { status: 500 }
    );
  }
}