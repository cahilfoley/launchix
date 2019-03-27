import {
  CREATE_LAUNCHABLE,
  DELETE_LAUNCHABLE,
  RUN_LAUNCHABLE_FAILUIRE,
  RUN_LAUNCHABLE_SUCCESS,
  RUN_LAUNCHABLE,
  UPDATE_LAUNCHABLE,
  Launchable,
  RunLauncableOutcomeAction,
  RunLaunchableFailureAction,
  RunLaunchableSuccessAction,
  StoreLaunchable
} from './types'
import { Dispatch } from 'redux'
import { ipcRenderer, IpcMessageEvent } from 'electron'
import { AppState } from '../reducers'
import { getLaunchable } from './selectors'
import { ThunkResult } from '../actions'

export function createLaunchable(launchable: Launchable) {
  return {
    type: CREATE_LAUNCHABLE,
    payload: launchable
  }
}

export function updateLaunchable(id: number, update: Partial<Launchable>) {
  return {
    type: UPDATE_LAUNCHABLE,
    id,
    payload: update
  }
}

export function deleteLaunchable(id: number) {
  return {
    type: DELETE_LAUNCHABLE,
    id
  }
}

export function runLaunchableSuccess(
  launchable: StoreLaunchable
): RunLaunchableSuccessAction {
  return {
    type: RUN_LAUNCHABLE_SUCCESS,
    launchable
  }
}

export function runLaunchableFailure(
  launchable: StoreLaunchable,
  error: Error
): RunLaunchableFailureAction {
  return {
    type: RUN_LAUNCHABLE_FAILUIRE,
    launchable,
    payload: error
  }
}

export function runLaunchable(id: number): ThunkResult<void> {
  return (
    dispatch: Dispatch<RunLauncableOutcomeAction>,
    getState: () => AppState
  ) => {
    const launchable = getLaunchable(getState(), id)
    ipcRenderer.once(
      'LAUNCHABLE_RESULT',
      (event: IpcMessageEvent, err?: Error) => {
        if (err) {
          dispatch(runLaunchableFailure(launchable, err))
        } else {
          dispatch(runLaunchableSuccess(launchable))
        }
      }
    )
    ipcRenderer.send(RUN_LAUNCHABLE, launchable)
  }
}
