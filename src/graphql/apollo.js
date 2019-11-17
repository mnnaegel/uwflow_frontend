import { ApolloClient } from 'apollo-client';
import { InMemoryCache, defaultDataIdFromObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';

import { GRAPHQL_ENDPOINT } from '../constants/Api';
import { logOut } from '../utils/Auth';

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      ...token && { Authorization: `Bearer ${token}` },
    }
  }
});  

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      console.log(`[GQL Error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
      // hard coded error message for now
      if (message.includes('JWT')) {
        logOut();
      }
      return null;
    });
  }
  if (networkError) {
    console.log(networkError);
  }
});

const httpLink = new HttpLink({
  uri: GRAPHQL_ENDPOINT
});

const link = ApolloLink.from([
  authLink,
  errorLink,
  httpLink // terminating link must be added last
]);

const cache = new InMemoryCache({
  dataIdFromObject: object => {
    switch (object.__typename) {
      case 'user_shortlist': return `${object.course_id}:${object.user_id}`;
      default: return defaultDataIdFromObject(object);
    }
  }
});

const client = new ApolloClient({
  link,
  cache,
});

export default client;
