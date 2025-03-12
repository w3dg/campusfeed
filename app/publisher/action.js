"use server";
import { EventSchema } from "../../lib/schema";

export async function addEvent(formData) {
  const eventData = EventSchema.safeParse(formData);

  if (!eventData.success) {
    console.log("error", eventData.error.errors);
    return {
      success: false,
      message: "Invalid data",
    };
  }

  // send data via graphql

  try {
    const text = JSON.stringify(eventData.data, null, 2);
    const POST_URL = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${process.env.TELEGRAM_CHAT_ID}&text=${text}`;
    await fetch(POST_URL);
    return {
      success: true,
      message: "Event submitted successfully for review",
    };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}
