import * as ReactDOM from 'react-dom'
import * as React from 'react'
import { ipcRenderer } from 'electron'
import { Provider } from 'react-redux'
import configureStore, { history } from './store/configureStore'
import App from './App'

const store = configureStore(ipcRenderer.sendSync('LOAD_STATE'))

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('renderer')
)
