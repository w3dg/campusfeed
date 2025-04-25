"use server";
import { EventSchema } from "../../lib/schema";

export async function addEvent(formData) {
  const eventData = EventSchema.safeParse(formData);

  const GRAPHQL_ENDPOINT = process.env.NEXT_HYGRAPH_ENDPOINT;
  const GRAPHQL_API_TOKEN = process.env.NEXT_HYGRAPH_API_TOKEN;

  if (!eventData.success) {
    console.log("error", eventData.error.errors);
    return {
      success: false,
      message: "Invalid data",
    };
  }

  try {
    const mutation = `
      mutation CreateEventModel($data: EventModelCreateInput!) {
        createEventModel(data: $data) {
          id
          title
        }
      }
    `;

    const variables = {
      data: {
        title: eventData.data.title,
        venue: eventData.data.venue,
        start: new Date(eventData.data.startDate).toISOString(), // Convert to ISO8601
        end: new Date(eventData.data.endDate).toISOString(),
        socialMedia: eventData.data.socialLinks,
        registrationLink: eventData.data.registrationLinks,
        guideLinePdfLink: eventData.data.guideLinePdfLink,
        posterImage: eventData.data.image,
        description: eventData.data.description,
        emailId: eventData.data.email,
        contactNumber: parseInt(eventData.data.phone),
        eventPrize: 1000.0,
        organizingSchoolOrSociety: eventData.data.school,
        relationToUser: eventData.data.position,
      },
    };

    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GRAPHQL_API_TOKEN}`,
      },
      body: JSON.stringify({ query: mutation, variables }),
    });

    const result = await response.json();

    if (result.errors) {
      console.error("GraphQL Errors:", result.errors);
      return {
        success: false,
        message: "Failed to submit event",
      };
    }

    // telegram verification message

    const text = JSON.stringify(eventData.data, null, 2);
    const POST_URL = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${process.env.TELEGRAM_CHAT_ID}&text=${text}`;
    await fetch(POST_URL);

    // true if all execution is successful
    return {
      success: true,
      message: "Event submitted successfully",
      data: result.data.createEvent,
    };
  } catch (error) {
    console.error("Error submitting event:", error);
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}
