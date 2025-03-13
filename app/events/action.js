"use server";

import { sendGraphQlRequest } from "@/lib/graphql";

const query = `query EventData {
  eventModels {
    title
    description {
      html
    }
    posterImage
    start
    end
    venue
    organizingSchoolOrSociety
    socialMedia
    contactNumber
    emailId
    registrationLink
    relationToUser
  }
}`;

export async function getEvents() {
  const response = await sendGraphQlRequest(query);
  const parsedData = await response.json();
  const {
    data: { eventModels },
  } = parsedData;

  const events = eventModels.map((record) => {
    return {
      eventPoster: "EventDemo1.svg", //record.posterImage,
      eventName: record.title,
      eventLocation: record.venue,
      eventDate: new Date(record.start)
        .toLocaleString("en-GB", {
          weekday: "short",
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
        .replace(",", "")
        .replaceAll(" ", "-"),
      eventPrize: 200.0,

      eventDescription: record.description.html,
      registrationLink: record.registrationLink,
    };
  });

  console.log(events);

  return { data: events };
}
