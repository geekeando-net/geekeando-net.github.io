// src/pages/api/contact.ts
import type { APIRoute } from 'astro';
import { Resend } from 'resend';

// Inicializamos Resend fuera del POST para optimizar rendimiento
const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.formData();
        
        // Extraemos los datos
        const name = data.get('name');
        const email = data.get('email');
        const message = data.get('message');
        const isPriority = data.get('priority') === 'true'; 
        const phone = data.get('phone') || 'NOT_PROVIDED';
        const projectType = data.get('project_type') || 'GENERAL_INQUIRY';

        // Validación de seguridad básica
        if (!name || !email || !message) {
            return new Response(JSON.stringify({ 
                error: "MISSING_REQUIRED_FIELDS",
                details: "NAME, EMAIL and MESSAGE are mandatory." 
            }), { status: 400 });
        }

        const subject = isPriority 
            ? `⚠️ [PRIORITY_UPLINK] Emergencia técnica de ${name}`
            : `📩 [SIGNAL] Nuevo mensaje de ${name}`;

        // Intentamos el envío
        const { error } = await resend.emails.send({
            from: 'Geekeando Lab <lab@geekeando.net>',
            to: 'lab@geekeando.net', // Tu correo de destino
            subject: subject,
            replyTo: email as string,
            html: `
                <div style="font-family: 'Courier New', monospace; background-color: #000; color: ${isPriority ? '#f59e0b' : '#ffffff'}; padding: 30px; border: 2px solid ${isPriority ? '#f59e0b' : '#333333'}; line-height: 1.6;">
                    <h1 style="font-size: 20px; border-bottom: 2px solid ${isPriority ? '#f59e0b' : '#333333'}; padding-bottom: 15px; margin-bottom: 20px; text-transform: uppercase;">
                        ${isPriority ? '>> [URGENT] OVERDRIVE_MODE_MESSAGE' : '>> [OK] STANDARD_TRANSMISSION'}
                    </h1>
                    <div style="margin-bottom: 10px;"><strong>USER_ID:</strong> ${name}</div>
                    <div style="margin-bottom: 10px;"><strong>NET_ADDRESS:</strong> ${email}</div>
                    <div style="margin-bottom: 10px;"><strong>PHONE_LINK:</strong> ${phone}</div>
                    <div style="margin-bottom: 10px;"><strong>PROJECT_CORE:</strong> ${projectType}</div>
                    
                    <div style="margin-top: 30px; margin-bottom: 10px; text-transform: uppercase; font-size: 12px; color: #666;">-- DATA_PAYLOAD_START --</div>
                    <div style="background: #111111; padding: 20px; border-left: 4px solid ${isPriority ? '#f59e0b' : '#3b82f6'}; white-space: pre-wrap;">
                        ${message}
                    </div>
                    <div style="margin-top: 10px; margin-bottom: 30px; text-transform: uppercase; font-size: 12px; color: #666;">-- DATA_PAYLOAD_END --</div>
                    
                    <p style="font-size: 10px; color: #444444; margin-top: 40px; border-top: 1px solid #222; padding-top: 10px;">
                        SYSTEM_TIMESTAMP: ${new Date().toLocaleString('es-BO')} | SECURITY_HASH: ${Math.random().toString(16).toUpperCase().slice(2, 10)}
                    </p>
                </div>
            `
        });

        if (error) {
            console.error("Resend Error:", error);
            return new Response(JSON.stringify({ error: "MAIL_SERVICE_FAILURE", details: error }), { status: 500 });
        }

        return new Response(JSON.stringify({ message: "SIGNAL_SENT_SUCCESSFULLY" }), { status: 200 });

    } catch (e) {
        console.error("API Server Error:", e);
        return new Response(JSON.stringify({ error: "INTERNAL_SERVER_ERROR" }), { status: 500 });
    }
};