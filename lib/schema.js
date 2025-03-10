import { z } from "zod";

export const EventSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  position: z.string(),
  email: z.string().email(),
  phone: z.string().regex(/^\d{10}$/),
  title: z.string(),
  school: z.string(),
  venue: z.string(),
  startDate: z.string().date(),
  endDate: z.string().date(),
  socialLinks: z.string().url().optional(),
  registrationLinks: z.string().url(),
  image: z.string().url(),
  description: z.string(),
});
