import z from "zod";

export const postDeleteSchema = z.object({
  id: z.string(),
  user_id: z.string(),
});

export const postSlugSchema = z.object({
  slug: z.string(),
});

export const postCreateSchema = z.object({
  title: z.string(),
  user_id: z.string(),
});

export const postParamSchema = z.object({
  postId: z.string(),
  userId: z.string(),
});

export const postEditFormContentSchema = z.object({
  content: z.any().optional(),
});

export const postEditFormSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "O título deve ter pelo menos 2 caracteres.",
    })
    .max(120, {
      message: "O título não deve ter mais de 120 caracteres.",
    }),
  slug: z
    .string()
    .min(2, {
      message: "Slug deve ter pelo menos 2 caracteres.",
    })
    .max(100, {
      message: "Slug não deve ter mais de 100 caracteres.",
    }),
  categoryId: z.string({
    required_error: "Por favor, selecione uma categoria.",
  }),
  image: z.string().optional(),
  description: z
    .string()
    .min(2, {
      message: "A descrição deve ter pelo menos 2 caracteres.",
    })
    .max(300, {
      message: "A descrição não deve ter mais de 300 caracteres.",
    }),
  content: z.any().optional(),
});

export const postUpdateSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  categoryId: z.string(),
  image: z.string().optional(),
  description: z.string().optional(),
  content: z.any().optional(),
});
