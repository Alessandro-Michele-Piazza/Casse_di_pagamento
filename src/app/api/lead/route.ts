import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { leadSchema } from "@/lib/validators";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  const parsed = leadSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Controlla i dati inseriti" },
      { status: 400 },
    );
  }

  const webhookUrl = process.env.CRM_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...parsed.data,
          source: "lp-casse-automatiche",
          submittedAt: new Date().toISOString(),
        }),
      });
    } catch {
      return NextResponse.json(
        { ok: false, message: "Errore temporaneo, riprova più tardi" },
        { status: 502 },
      );
    }
  }

  if (hasSmtpConfig()) {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.LEAD_TO_EMAIL,
        subject: `Nuovo lead casse automatiche: ${parsed.data.company}`,
        text: [
          `Nome: ${parsed.data.fullName}`,
          `Azienda: ${parsed.data.company}`,
          `Telefono: ${parsed.data.phone}`,
          `Email: ${parsed.data.email}`,
          `Comune/Provincia: ${parsed.data.city}`,
          `Tipo attività: ${parsed.data.businessType}`,
          `Messaggio: ${parsed.data.message || "-"}`,
        ].join("\n"),
      });
    } catch {
      return NextResponse.json(
        { ok: false, message: "Errore temporaneo, riprova più tardi" },
        { status: 502 },
      );
    }
  }

  console.info("New lead", {
    company: parsed.data.company,
    city: parsed.data.city,
    businessType: parsed.data.businessType,
    email: parsed.data.email,
  });

  return NextResponse.json({
    ok: true,
    message: "Richiesta inviata correttamente",
  });
}

function hasSmtpConfig() {
  return Boolean(
    process.env.SMTP_HOST &&
    process.env.SMTP_PORT &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS &&
    process.env.LEAD_TO_EMAIL,
  );
}
