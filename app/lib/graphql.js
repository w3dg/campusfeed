import fetch from "cross-fetch";

/**
 * Send GraphQL query to HyGraph API
 * Example requestQuery:
  query getNextUserByEmail($email:String!){
    nextUser(where:{email:$email}){
      firstname
      lastname
      email
      posts{
        title
      }
    }
 * Docs: https://hygraph.com/blog/nextjs-graphql
 */
export function sendGraphQlRequest(requestQuery) {
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
