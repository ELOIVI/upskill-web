import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// API route: processa el formulari d'inscripció i envia email via Resend
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const { nom, grau, curs, assistencia, comoHaTrobat, motivacio, contacte } = data;

    // Validació bàsica
    if (!nom || !grau || !curs || !assistencia) {
      return NextResponse.json(
        { error: "Falten camps obligatoris" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "UpSkill <onboarding@resend.dev>",
      to: "upskillurv@gmail.com",
      subject: `Nova inscripció: ${nom}`,
      html: `
        <h2>Nova inscripció a UpSkill</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Nom</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${nom}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Grau</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${grau}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Curs</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${curs}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Assistència</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${assistencia}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Com ha trobat UpSkill</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${comoHaTrobat || "-"}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Motivació</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${motivacio || "-"}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Contacte</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${contacte || "-"}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error enviant email:", error);
    return NextResponse.json(
      { error: "Error intern del servidor" },
      { status: 500 }
    );
  }
}