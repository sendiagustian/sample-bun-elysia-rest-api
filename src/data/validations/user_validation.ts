import { z, ZodType } from "zod";

export class UserValidation {
    static readonly CREATE: ZodType = z.object({
        name: z.string().min(1).max(50),
        email: z.string().min(1).max(50).email(),
        password: z.string().min(8),
        phone: z.string().min(9)
    });

    static readonly UPDATE: ZodType = z.object({
        name: z.string().min(1).max(50),
        email: z.string().min(1).max(50).email(),
        phone: z.string().min(9)
    });
}
