import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import DefaultLayout from '~/components/layouts/default'

interface PageProps {
  foo: string
  custom: string
}

class Page extends Component<PageProps> {
  static getInitialProps({ store }) {
    store.dispatch({ type: 'FOO', payload: 'foo' })

    return { custom: 'custom', ...store.getState() }
  }

  render() {
    return (
      <DefaultLayout>
        <p>Props from Redux {this.props.foo}</p>
        <p>Props from getInitialProps {this.props.custom}</p>
        <p>welcome to next.js!</p>
      </DefaultLayout>
    )
  }
}

export default connect()(Page)
