import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(6, "Имя слишком короткое"),
    phone: z.string().regex(/^\d{11}$/, "Телефон должен содержать ровно 11 цифр"),
    email: z.string().email("Некорректный email"),
    comment: z.string().min(5, "Комментарий слишком короткий"),
});

export type ContactSchemaType = z.infer<typeof contactSchema>;