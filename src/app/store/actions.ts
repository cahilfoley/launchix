import { LauncherActionTypes } from './launcher/types'
import { SystemActionTypes } from './system/types'
import { AppState } from './reducers'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { Action, Dispatch } from 'redux'

export * from './launcher/actions'
export * from './system/actions'

export type AppActionTypes = LauncherActionTypes | SystemActionTypes
export type ThunkResult<R> = ThunkAction<R, AppState, void, AppActionTypes>
export type AppDispatch = Dispatch<AppActionTypes>
export type AppThunkDispatch =
  | AppDispatch
  | ThunkDispatch<AppState, void, AppActionTypes>