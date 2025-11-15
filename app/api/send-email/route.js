import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const { ime, email, telefon, poruka } = await request.json()

    // Konfiguracija za Gmail (koristi "App Password")
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    // Pošalji email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "nvopomozi@gmail.me",
      subject: `Nova poruka od ${ime}`,
      html: `
        <h2>Nova poruka iz kontakt forme</h2>
        <p><strong>Ime:</strong> ${ime}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${telefon || "Nije navedeno"}</p>
        <p><strong>Poruka:</strong></p>
        <p>${poruka}</p>
      `
    })

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    })
  } catch (error) {
    console.error("Email error:", error)
    return new Response(
      JSON.stringify({ error: "Greška pri slanju mejla" }),
      { status: 500 }
    )
  }
}
