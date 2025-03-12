import fetch from "cross-fetch";

export function sendAPIRequest(requestQuery) {
  const headers = {
    "content-type": "application/json",
    Authorization: `${process.env.HYGRAPH_TOKEN}`,
  };

  const requestBody = {
    query: requestQuery,
  };

  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(requestBody),
  };
  return fetch(process.env.HYGRAPH_API_ENDPOINT, options);
}
