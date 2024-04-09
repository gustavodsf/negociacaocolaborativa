import * as z from 'zod';

export const commentSchema = z.object({
    postId: z.string(),
    userId: z.string(),
    comment: z.string(),
});

export const commentDeleteSchema = z.object({
    id: z.string(),
    userId: z.string(),
});

export const commentFormSchema = z.object({
    comment: z
        .string()
        .min(3, { message: 'O comentário deve ter pelo menos 3 caracteres.' })
        .max(500, { message: 'O comentário deve ter no máximo 500 caracteres.' }),
});
