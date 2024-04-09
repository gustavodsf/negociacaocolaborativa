import * as z from 'zod';

// Email validation schame for newsletter
export const emailSchema = z.object({
    email: z.string().email({ message: 'O e-mail é obrigatório.' }),
});

// Contact form validation schema
export const contactFormSchema = z.object({
    name: z.string().min(3, { message: 'O nome é obrigatório' }),
    email: z.string().email({ message: 'O e-mail é obrigatório.' }),
    message: z
        .string()
        .min(4, {
            message: 'Sua mensagem deve ter pelo menos 4 caracteres.',
        })
        .max(320, {
            message: 'Sua mensagem não pode ter mais de 320 caracteres.',
        }),
});
