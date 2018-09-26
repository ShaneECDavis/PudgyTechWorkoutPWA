import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import history from './history'
//import configureStore from './store'
import store from './store'
import { PersistGate } from 'redux-persist/integration/react'
import { Loading } from './components/Loading'
import registerServiceWorker from './registerServiceWorker'

//const {store, persistor} = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
