import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Apollo Client instance
const client = new ApolloClient({
  uri: "http://api.spacex.land/graphql/",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
