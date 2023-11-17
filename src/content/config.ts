import { defineCollection, reference, z } from "astro:content";

const projectCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image_src: z.string().optional(),
        image_alt: z.string().optional(),
        created_at: z.coerce.date(),
        category: z.string(),
        type: z.string(),
        technology: z.array(z.string())
        link: z.string().url().optional()
    })
});

export const collections = {
    'project': projectCollection,
}