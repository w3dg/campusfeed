import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const NEXT_HYGRAPH_ENDPOINT = process.env.NEXT_HYGRAPH_ENDPOINT;
const HYGRAPH_TOKEN = process.env.NEXT_HYGRAPH_TOKEN; // Your token from .env

// Add auth headers to each request
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${HYGRAPH_TOKEN}`,
    },
  };
});

// GraphQL endpoint link
const httpLink = new HttpLink({
  uri: NEXT_HYGRAPH_ENDPOINT,
});

// Initialize Apollo Client with auth
export const createGraphQLclient = () =>
  new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

const globalForGraphQl = globalThis;

export const graphQLclient = globalForGraphQl.gql ?? createGraphQLclient();

if (process.env.NODE_ENV !== "production") globalForGraphQl.gql = graphQLclient;
