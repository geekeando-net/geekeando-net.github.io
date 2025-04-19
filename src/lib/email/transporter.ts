// src/lib/email/transporter.ts
import nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';

/**
 * Creates and returns a configured NodeMailer transporter
 * Uses environment variables for configuration
 * 
 * Required environment variables:
 * - EMAIL_PROVIDER: 'gmail' or 'sendgrid' or 'smtp'
 * - For Gmail: EMAIL_USER, EMAIL_PASSWORD
 * - For SendGrid: SENDGRID_API_KEY
 * - For custom SMTP: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE
 */
export const createTransporter = (): Transporter => {
  // Determine which email provider to use (default to SMTP if not specified)
    const provider = process.env.EMAIL_PROVIDER?.toLowerCase() || 'smtp';

    switch (provider) {
        case 'gmail':
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
            console.warn('Missing Gmail credentials in environment variables');
        }
        return nodemailer.createTransport({
            service: 'Gmail',
            auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
            },
        });

        case 'sendgrid':
        if (!process.env.SENDGRID_API_KEY) {
            console.warn('Missing SendGrid API key in environment variables');
        }
        return nodemailer.createTransport({
            host: 'smtp.sendgrid.net',
            port: 587,
            secure: false,
            auth: {
            user: 'apikey',
            pass: process.env.SENDGRID_API_KEY,
            },
        });

        case 'smtp':
        default:
            return nodemailer.createTransport({
                host: process.env.SMTP_HOST || 'localhost',
                port: parseInt(process.env.SMTP_PORT || '587', 10),
                secure: process.env.SMTP_SECURE === 'true',
                auth: process.env.SMTP_USER && process.env.SMTP_PASS ? {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
                } : undefined,
            });
    }
};

// Backward compatibility for existing SendGrid implementation
export const sendGridTransporter = (): Transporter => {
    if (!process.env.SENDGRID_API_KEY) {
        console.warn('Missing SendGrid API key in environment variables');
    }
    return nodemailer.createTransport({
        host: 'smtp.sendgrid.net',
        port: 587,
        auth: {
        user: 'apikey',
        pass: process.env.SENDGRID_API_KEY,
        },
    });
};
