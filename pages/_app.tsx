import React from "react";
import { Provider } from "react-redux";
import NextApp, { Container, AppContext } from "next/app";
import { ApolloProvider } from "react-apollo";
import withRedux, { AppProps } from "next-redux-wrapper";
import { createStore } from "~/slices/store";
import withApolloClient, {
  WithApolloClientProps
} from "~/lib/with-apollo-client";
import "~/lib/fontawesome";

// interface AppProps {
//   Component: React.Component;
//   pageProps: any; // eslint-disable-line
//   store: any; // eslint-disable-line
//   apolloClient: any; // eslint-disable-line
// }

class MyApp extends NextApp<AppProps & WithApolloClientProps> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      import("quicklink").then(module => {
        module.default();
      });
    }
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

export default withApolloClient(withRedux(createStore)(MyApp) as any);
