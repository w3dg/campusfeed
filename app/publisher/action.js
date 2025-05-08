"use server";
import { graphQLclient } from "@/lib/graphql";
import { EventSchema } from "../../lib/schema";
import { gql } from "@apollo/client";

export async function addEvent(formData) {
  const eventData = EventSchema.safeParse(formData);

  if (!eventData.success) {
    console.log("error", eventData.error.errors);
    return {
      success: false,
      message: "Invalid data",
    };
  }

  try {
    const CREATE_EVENT = gql`
      mutation CreateEventModel(
        $title: String!
        $eventPrize: Float!
        $description: String!
        $posterImage: String!
        $start: String!
        $end: String!
        $venue: String!
        $organizingSchoolOrSociety: String!
        $socialMedia: String
        $contactNumber: Int!
        $emailId: String!
        $registrationLink: String
        $guideLinePdfLink: String
        $relationToUser: String!
      ) {
        createEventModel(
          data: {
            title: $title
            eventPrize: $eventPrize
            description: $description
            posterImage: $posterImage
            venue: $venue
            start: $start
            end: $end
            organizingSchoolOrSociety: $organizingSchoolOrSociety
            socialMedia: $socialMedia
            contactNumber: $contactNumber
            emailId: $emailId
            registrationLink: $registrationLink
            guideLinePdfLink: $guideLinePdfLink
            relationToUser: $relationToUser
          }
        ) {
          id
        }
      }
    `;

    await graphQLclient.mutate({
      mutation: CREATE_EVENT,
      variables: {
        title: eventData.data.title,
        eventPrize: parseFloat(eventData.data.prizeAmount),
        description: eventData.data.description,
        posterImage: eventData.data.image,
        start: new Date(eventData.data.startDate).toISOString(),
        end: new Date(eventData.data.endDate).toISOString(),
        venue: eventData.data.venue,
        organizingSchoolOrSociety: eventData.data.school,
        socialMedia: eventData.data.socialLinks,
        contactNumber: parseInt(eventData.data.phone),
        emailId: eventData.data.email,
        registrationLink: eventData.data.registrationLinks,
        guideLinePdfLink: eventData.data.guideLinePdfLink,
        relationToUser: eventData.data.position,
      },
    });

    // telegram verification message

    const text = JSON.stringify(eventData.data, null, 2);
    const POST_URL = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${process.env.TELEGRAM_CHAT_ID}&text=${text}`;
    await fetch(POST_URL);

    // true if all execution is successful
    return {
      success: true,
      message: "Event submitted successfully",
    };
  } catch (error) {
    console.error("Error submitting event:", error);
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}
