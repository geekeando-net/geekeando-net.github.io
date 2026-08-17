import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
    loader: glob({
        base: './src/content/projects',
        pattern: '**/index.md',
        generateId: ({ entry }) => entry.replace(/\/index\.md$/, ''),
    }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string().optional().default("Sin descripción"),
        category: z.string(),
        pubDate: z.coerce.date(), // z.coerce ayuda con errores de formato de fecha
        image: image(),
        difficulty: z.string().optional().default("Intermedio"),
        tags: z.array(z.string()).optional().default([]),
        author: z.object({
            name: z.string(),
            avatar: image(), // <--- Validamos el avatar aquí también
            role: z.string()
        }).optional(),
        materials: z.any().optional(),
        codeRepo: z.string().optional(),
        stlLink: z.string().optional(),
        verified: z.boolean().default(false),
        featured: z.boolean().optional().default(false),
        gallery: z.array(image()).optional().default([]),
        steps: z.array(z.object({
            number: z.number(),
            title: z.string(),
            content: z.string(),
            image: image().optional(),
            code: z.string().optional(),
        })).optional(),
        tips: z.array(z.object({
            type: z.enum(["info", "warning", "tip"]),
            message: z.string(),
        })).optional(),
        downloadFiles: z.array(z.object({
            name: z.string(),
            file: z.string(), // Ruta al archivo: "./files/case.stl"
            type: z.string().optional(),
        })).optional(),
    }),
});

export const collections = { projects };