import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

const createTransporter = () => {
  const provider = process.env.EMAIL_PROVIDER?.toLowerCase() || "smtp";
  switch (provider) {
    case "gmail":
      if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
        console.warn("Missing Gmail credentials in environment variables");
      }
      return nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD
        }
      });
    case "sendgrid":
      if (!process.env.SENDGRID_API_KEY) {
        console.warn("Missing SendGrid API key in environment variables");
      }
      return nodemailer.createTransport({
        host: "smtp.sendgrid.net",
        port: 587,
        secure: false,
        auth: {
          user: "apikey",
          pass: process.env.SENDGRID_API_KEY
        }
      });
    case "smtp":
    default:
      return nodemailer.createTransport({
        host: process.env.SMTP_HOST || "localhost",
        port: parseInt(process.env.SMTP_PORT || "587", 10),
        secure: process.env.SMTP_SECURE === "true",
        auth: process.env.SMTP_USER && process.env.SMTP_PASS ? {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        } : void 0
      });
  }
};

const POST = async ({ request }) => {
  try {
    const data = await request.json();
    if (!data.email || !data.message) {
      return new Response(
        JSON.stringify({ error: "Email y mensaje son requeridos" }),
        { status: 400 }
      );
    }
    const transporter = createTransporter();
    await transporter.sendMail({
      from: `"Formulario de Contacto" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: data.subject || "Nuevo mensaje de contacto",
      text: `De: ${data.name} <${data.email}>

${data.message}`,
      html: `<p><strong>De:</strong> ${data.name} &lt;${data.email}&gt;</p>
                <p>${data.message}</p>`
    });
    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Error al enviar el mensaje",
        details: error.message
      }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
