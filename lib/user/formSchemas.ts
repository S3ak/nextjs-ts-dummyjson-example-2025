import { z } from "zod";

export const loginFormSchema = z.object({
  firstName: z
    .string()
    .min(2, {
      message: "Your name is required",
    })
    .max(50),
});
