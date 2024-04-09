import * as z from "zod";

export const profileFormSchema = z.object({
  firstName: z
    .string()
    .min(2, {
      message: "O primeiro nome deve ter pelo menos 2 caracteres.",
    })
    .max(30, {
      message: "O nome não deve ter mais de 30 caracteres.",
    }),
  lastName: z
    .string()
    .min(2, {
      message: "O sobrenome deve ter pelo menos 2 caracteres.",
    })
    .max(30, {
      message: "O sobrenome não deve ter mais de 30 caracteres.",
    }),
  userName: z.string().optional(),
  email: z.string().email().optional(),
  avatarUrl: z.string().url().optional(),
  website: z.string().optional(),
});

export const profileSchema = z.object({
  id: z.string(),
  fistName: z.string(),
  lastName: z.string(),
  email: z.string().email().optional(),
  userName: z.string().optional(),
  avatarUrl: z.string().url().optional(),
  website: z.string().optional(),
});
