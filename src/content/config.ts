import { defineCollection, z } from "astro:content";

const projectCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image : z.object({
            image_src: z.string(),
            image_alt: z.string().optional(),
        }).optional(),
        created_at: z.date(),
        category: z.string(),
        type: z.string(),
        technology: z.array(z.string()),
        link: z.string().url().optional(),
        entreprise: z.string().optional(),
    })
});

export const collections = {
    'project': projectCollection,
}