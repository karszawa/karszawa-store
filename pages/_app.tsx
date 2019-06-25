import React from "react";
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import { ApolloProvider } from "react-apollo";
import withRedux from "next-redux-wrapper";
import "~/polyfills";
import { createStore } from "~/slices/store";
import withApolloClient from "~/lib/with-apollo-client";

interface AppProps {
  Component: React.Component;
  pageProps: any;
  store: any;
  apolloClient: any;
}

class MyApp extends App<AppProps> {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store, apolloClient } = this.props;

    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(withRedux(createStore)(MyApp));
