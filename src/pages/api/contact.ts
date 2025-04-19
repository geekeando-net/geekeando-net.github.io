import type { APIRoute } from 'astro';
import { createTransporter } from '@/lib/email/transporter';
import type { ContactFormData } from '@/types/contact';

export const POST: APIRoute = async ({ request }) => {
    try {
        const data: ContactFormData = await request.json();

        // Validación básica
        if (!data.email || !data.message) {
        return new Response(
            JSON.stringify({ error: 'Email y mensaje son requeridos' }),
            { status: 400 }
        );
        }

        const transporter = createTransporter();

        await transporter.sendMail({
        from: `"Formulario de Contacto" <${process.env.EMAIL_FROM}>`,
        to: process.env.EMAIL_TO,
        subject: data.subject || 'Nuevo mensaje de contacto',
        text: `De: ${data.name} <${data.email}>\n\n${data.message}`,
        html: `<p><strong>De:</strong> ${data.name} &lt;${data.email}&gt;</p>
                <p>${data.message}</p>`,
        });

        return new Response(
        JSON.stringify({ success: true }),
        { status: 200 }
        );
    } catch (error) {
        return new Response(
        JSON.stringify({
            error: 'Error al enviar el mensaje',
            details: (error as Error).message
        }),
        { status: 500 }
        );
    }
};