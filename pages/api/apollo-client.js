import { ApolloClient, InMemoryCache } from "@apollo/client";



const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
    cache: new InMemoryCache(),
    fetchOptions: {
      mode: 'no-cors',
    },
});

export default client;
