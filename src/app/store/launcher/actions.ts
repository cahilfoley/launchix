import { Dispatch } from 'redux'
import { ipcRenderer, IpcMessageEvent } from 'electron'
import { AppState } from 'store/reducers'
import { ThunkResult } from 'store/actions'
import { IPC_RUN_LAUNCHABLE } from 'shared/ipcTypes'
import { getLaunchable } from './selectors'
import {
  CREATE_LAUNCHABLE,
  DELETE_LAUNCHABLE,
  RUN_LAUNCHABLE_FAILUIRE,
  RUN_LAUNCHABLE_SUCCESS,
  UPDATE_LAUNCHABLE,
  RunLauncableOutcomeAction,
  RunLaunchableFailureAction,
  RunLaunchableSuccessAction
} from './types'

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

export function runLaunchableSuccess(launchable: StoreLaunchable): RunLaunchableSuccessAction {
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
  return (dispatch: Dispatch<RunLauncableOutcomeAction>, getState: () => AppState) => {
    const launchable = getLaunchable(getState(), id)
    ipcRenderer.once('LAUNCHABLE_RESULT', (event: IpcMessageEvent, err?: Error) => {
      if (err) {
        dispatch(runLaunchableFailure(launchable, err))
      } else {
        dispatch(runLaunchableSuccess(launchable))
      }
    })
    ipcRenderer.send(IPC_RUN_LAUNCHABLE, launchable)
  }
}
