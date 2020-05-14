import React from 'react'
import ReactDOM from 'react-dom'
import App from './views/App'
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import reducer from './reducers'
import saga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(saga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
