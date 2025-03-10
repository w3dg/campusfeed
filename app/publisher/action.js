"use server";
import { EventSchema } from "../../lib/schema";

export async function addEvent(formData) {
  const event = EventSchema.safeParse(formData);

  if (!event.success) {
    return {
      status: 400,
      body: {
        error: event.error.errors,
      },
    };
  }

  // send data via graphql
}
