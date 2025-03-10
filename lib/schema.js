import { z } from "zod";

export const EventSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  position: z.string().min(1),
  email: z.string().min(1).email(),
  phone: z
    .string()
    .min(1)
    .regex(/^\d{10}$/),
  title: z.string().min(1),
  school: z.string().min(1),
  venue: z.string().min(1),
  startDate: z.string({
    required_error: "Start date is required",
  }),
  endDate: z.string({
    required_error: "Start date is required",
  }),
  socialLinks: z.optional(z.string().min(1).url()),
  registrationLinks: z.string().min(1).url(),
  image: z.string().min(1).url(),
  description: z.string().min(1),
});
