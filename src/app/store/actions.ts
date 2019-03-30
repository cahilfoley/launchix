import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { LauncherActionTypes } from './launcher/types'
import { SystemActionTypes } from './system/types'
import { UIActionTypes } from './ui/types'
import { AppState } from './reducers'
import { Dispatch } from 'redux'

export * from './launcher/actions'
export * from './system/actions'
export * from './ui/actions'

export type AppActionTypes = LauncherActionTypes | SystemActionTypes | UIActionTypes
export type ThunkResult<R> = ThunkAction<R, AppState, void, AppActionTypes>
export type AppDispatch = Dispatch<AppActionTypes>
export type AppThunkDispatch = AppDispatch | ThunkDispatch<AppState, void, AppActionTypes>
