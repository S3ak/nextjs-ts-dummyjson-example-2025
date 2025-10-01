import { z } from "zod";

export const UserSchema = z.object({
  /** Unique identifier UUID */
  id: z.string(),
  /** Unique email not prohibited no @noroff.no domain */
  email: z.email(),
  name: z.string(),
  role: z.enum(["student", "guest", "admin"]),
  age: z.number().optional(),
  birthdate: z.date().optional(),
  languages: z.array(z.string()),
  images: z.array(z.string()),
});

export type User = z.infer<typeof UserSchema>;
