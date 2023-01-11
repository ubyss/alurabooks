import { ReactElement } from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:9000/graphql",
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

type Props = {
  children: ReactElement;
};

const ABApolloClient = ({ children }: Props) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ABApolloClient;
