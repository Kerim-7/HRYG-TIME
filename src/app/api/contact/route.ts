import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";
    let data: { name?: string; phone?: string; message?: string } = {};

    if (contentType.includes("application/json")) {
      data = await req.json();
    } else if (contentType.includes("application/x-www-form-urlencoded")) {
      const formData = await req.formData();
      data = {
        name: String(formData.get("name") || ""),
        phone: String(formData.get("phone") || ""),
        message: String(formData.get("message") || ""),
      };
    } else {
      const formData = await req.formData();
      data = {
        name: String(formData.get("name") || ""),
        phone: String(formData.get("phone") || ""),
        message: String(formData.get("message") || ""),
      };
    }

    if (!data.name || !data.phone) {
      return NextResponse.json({ ok: false, error: "Заполните имя и телефон" }, { status: 400 });
    }

    console.log("New contact message:", data);

    // имитация отправки письма/телеграм-уведомления
    await new Promise((r) => setTimeout(r, 300));

    return NextResponse.json({ ok: true, message: "Спасибо! Мы скоро свяжемся." });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false, error: "Ошибка сервера" }, { status: 500 });
  }
}


