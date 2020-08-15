import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";

import LaunchListContainer from "./components/LaunchList";
import LaunchProfileContainer from "./components/LaunchProfile";
import DefaultImg from "./components/images/spacex.png";
import "./App.css";

// Apollo Client instance
const client = new ApolloClient({
  uri: "http://api.spacex.land/graphql/",
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <BrowserRouter>
          <img src={DefaultImg} alt="Space X" className="mainImg" />
          <Switch>
            <Route exact path="/" component={LaunchListContainer} />
            <Route exact path="/:id" component={LaunchProfileContainer} />
          </Switch>
        </BrowserRouter>
      </ApolloHooksProvider>
    </ApolloProvider>
  );
};

export default App;
