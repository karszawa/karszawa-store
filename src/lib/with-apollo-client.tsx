// https://github.com/zeit/next.js/blob/canary/examples/with-apollo/lib/with-apollo-client.js

import React from "react";
import initApollo from "./init-apollo";
import Head from "next/head";
import { renderToString } from "react-dom/server";
import { getMarkupFromTree } from "react-apollo";
import NextApp, { AppContext } from "next/app";
import { NormalizedCacheObject, ApolloClient } from "apollo-boost";

export interface WithApolloClientProps {
  apolloClient: ApolloClient<NormalizedCacheObject>;
}

export default (App: typeof NextApp) => {
  return class Apollo extends NextApp<WithApolloClientProps> {
    static displayName = "withApollo(App)";

    static async getInitialProps(ctx: AppContext) {
      const { Component, router } = ctx;

      const appProps = await App.getInitialProps(ctx);

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      const apollo = initApollo();
      if (typeof window === "undefined") {
        try {
          // Run all GraphQL queries
          await getMarkupFromTree({
            renderFunction: renderToString,
            tree: (
              <App
                {...appProps}
                Component={Component}
                router={router}
                apolloClient={apollo}
              />
            )
          });
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          console.error("Error while running `getDataFromTree`", error);
        }

        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind();
      }

      // Extract query data from the Apollo store
      const apolloState = apollo.cache.extract();

      return {
        ...appProps,
        apolloState
      };
    }

    apolloClient: ApolloClient<NormalizedCacheObject> = null;

    constructor(props: any) {
      super(props);
      this.apolloClient = initApollo(props.apolloState);
    }

    render() {
      return <App {...this.props} apolloClient={this.apolloClient} />;
    }
  };
};
