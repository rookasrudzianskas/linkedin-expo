import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://<ACCOUNT_NAME>].stepzen.net/api/<API_NAME>/__graphql',
  headers: {'Authorization':'apikey <API_KEY>'},
  cache: new InMemoryCache(),
});

export default client;
