import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App, { Container } from 'next/app'
import withRedux from 'next-redux-wrapper'
import { devToolsEnhancer } from 'redux-devtools-extension'

const reducer = (state = { foo: '' }, action) => {
  switch (action.type) {
    case 'FOO':
      return { ...state, foo: action.payload };
    default:
      return state
  }
};

const makeStore = (initialState, _) => {
  return createStore(
    reducer,
    initialState,
    devToolsEnhancer({})
  )
}

interface AppProps {
  Component: React.Component
  pageProps: any
  store: any
}

class MyApp extends App<AppProps> {
  static async getInitialProps({ Component, ctx }) {
    ctx.store.dispatch({ type: 'FOO', payload: 'foo' })

    const pageProps =
      Component.getInitialProps ? await Component.getInitialProps(ctx) : {}

    return { pageProps }
  }

  render() {
    const { Component, pageProps, store } = this.props

    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withRedux(makeStore)(MyApp)
