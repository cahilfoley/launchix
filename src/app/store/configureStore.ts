import { createHashHistory } from 'history'
import { applyMiddleware, compose, createStore, Store } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import { createRootReducer, AppState } from './reducers'
import { AppActionTypes } from './actions'

export const history = createHashHistory()

export type AppStore = Store<AppState, AppActionTypes>

export default function configureStore(preloadedState?: Partial<AppState>) {
  const composeEnhancer: typeof compose =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const middleware = composeEnhancer(
    applyMiddleware(routerMiddleware(history), thunk)
  )

  const store = createStore(
    createRootReducer(history),
    preloadedState,
    middleware
  )

  return store
}
