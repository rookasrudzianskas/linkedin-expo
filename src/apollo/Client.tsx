import {ApolloClient, InMemoryCache, ApolloProvider, TypePolicies} from '@apollo/client';

const typePolicies: TypePolicies = {
  Query: {
    fields: {
      postPaginatedList: {
        keyArgs: false,
        merge(existing = [], incoming) {
          return [...existing, ...incoming];
        },
      },
    },
  },
};

//Provide it to InMemoryCache
new InMemoryCache({ typePolicies });

const client = new ApolloClient({
  uri: 'https://saltillo.stepzen.net/api/bumptious-hummingbird/__graphql',
  headers: {'Authorization':'apikey saltillo::stepzen.io+1000::6696a5e5c5fba15c49fa828865116f1545b285cef6a83195041294b37308c861'},
  cache: new InMemoryCache(),
});

export default client;
