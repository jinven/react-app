import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../../store/configureStore'
import AsyncApp from './AsyncApp'

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <hr />
          <h1>Async Action</h1>
          <AsyncApp />
        </div>
      </Provider>
    )
  }
}
