import React from "react";
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import { createStore } from "~/slices/store";

interface AppProps {
  Component: React.Component;
  pageProps: any;
  store: any;
}

class MyApp extends App<AppProps> {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(createStore)(MyApp);
