import { combineReducers } from 'redux'
import { History } from 'history'
import { connectRouter } from 'connected-react-router'
import { launcherReducer } from './launcher/reducers'
import { systemReducer } from './system/reducers'

export const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    launcher: launcherReducer,
    system: systemReducer
  })

export type AppState = ReturnType<ReturnType<typeof createRootReducer>>
