import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);
// Asegúrate de añadir esta variable en Vercel
const TURNSTILE_SECRET_KEY = import.meta.env.TURNSTILE_SECRET_KEY; 

export const POST: APIRoute = async ({ request }) => {
    const origin = request.headers.get('origin');
    const allowedOrigins = ['https://geekeando.net', 'https://pedrocarranza.com', 'http://localhost:4321'];
    
    const headers = new Headers();
    if (origin && allowedOrigins.includes(origin)) {
        headers.set('Access-Control-Allow-Origin', origin);
        headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
        headers.set('Access-Control-Allow-Headers', 'Content-Type');
    }

    if (request.method === 'OPTIONS') {
        return new Response(null, { headers, status: 204 });
    }

    try {
        const data = await request.formData();
        const token = data.get('cf-turnstile-response') as string; // Token de Cloudflare
        const name = data.get('name') as string;
        const email = data.get('email') as string;
        const message = data.get('message') as string;
        const isPriority = data.get('priority') === 'true';

        // --- VALIDACIÓN DE CLOUDFLARE TURNSTILE ---
        const verifyResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            body: JSON.stringify({
                secret: TURNSTILE_SECRET_KEY,
                response: token,
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        const outcome = await verifyResponse.json();

        if (!outcome.success) {
            return new Response(JSON.stringify({ error: "BOT_DETECTED" }), { 
                status: 403, 
                headers 
            });
        }
        // ------------------------------------------

        const isFromGeekeando = origin?.includes('geekeando.net') || origin?.includes('localhost');

        // 1. NOTIFICACIÓN PARA TI
        const subjectAdmin = isFromGeekeando 
            ? (isPriority ? `⚠️ [PRIORITY] Emergencia: ${name}` : `📩 [BLOG] Mensaje de ${name}`)
            : `💼 [PORTAFOLIO] Contacto de ${name}`;

        await resend.emails.send({
            from: 'Geekeando Lab <lab@geekeando.net>',
            to: 'lab@geekeando.net',
            replyTo: email,
            subject: subjectAdmin,
            html: `<strong>Origen:</strong> ${origin}<br><strong>De:</strong> ${name}<br><strong>Email:</strong> ${email}<br><br><strong>Mensaje:</strong><br>${message}`
        });

        // 2. AUTO-RESPONDER (Solo para Geekeando)
        if (isFromGeekeando) {
            await resend.emails.send({
                from: 'Geekeando Lab <lab@geekeando.net>',
                to: email,
                subject: '>> [Geekeando Lab] Señal recibida',
                html: `
                    <div style="font-family: monospace; background: #000; color: #fff; padding: 20px; border: 1px solid #f59e0b;">
                        <h2 style="color: #f59e0b;">HOLA ${name.toUpperCase()}</h2>
                        <p>Tu transmisión ha sido recibida en nuestro núcleo de datos.</p>
                        <p>Pedro revisará la información pronto.</p>
                        <hr style="border: 1px dashed #f59e0b;">
                        <p style="font-size: 10px;">ID Transmisión: ${Math.random().toString(36).substring(7).toUpperCase()}</p>
                    </div>
                `
            });
        }

        return new Response(JSON.stringify({ message: "OK" }), { status: 200, headers });

    } catch (e) {
        return new Response(JSON.stringify({ error: "SERVER_ERROR" }), { status: 500, headers });
    }
};