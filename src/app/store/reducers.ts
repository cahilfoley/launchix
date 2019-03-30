import { combineReducers } from 'redux'
import { History } from 'history'
import { connectRouter } from 'connected-react-router'
import { launcherReducer } from './launcher/reducers'
import { systemReducer } from './system/reducers'
import { uiReducer } from './ui/reducers'

export const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    launcher: launcherReducer,
    system: systemReducer,
    ui: uiReducer
  })

export type AppState = Readonly<
  ReturnType<ReturnType<typeof createRootReducer>>
>
