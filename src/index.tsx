import React from 'react'
import ReactDOM from 'react-dom'

import App from 'app'

import 'index.css'
import { Provider } from 'react-redux'
import store from 'store'

const { NODE_ENV } = process.env
console.log(
  `[Odyssoft Clock-Faces] Running ${NODE_ENV || 'development'} environment`
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
