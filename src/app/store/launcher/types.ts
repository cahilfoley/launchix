export type LauncherState = {
  nextID: number
  launchables: StoreLaunchable[]
}

export const CREATE_LAUNCHABLE = 'CREATE_LAUNCHABLE'
export const UPDATE_LAUNCHABLE = 'UPDATE_LAUNCHABLE'
export const DELETE_LAUNCHABLE = 'DELETE_LAUNCHABLE'
export const RUN_LAUNCHABLE = 'RUN_LAUNCHABLE'
export const RUN_LAUNCHABLE_SUCCESS = 'RUN_LAUNCHABLE_SUCCESS'
export const RUN_LAUNCHABLE_FAILUIRE = 'RUN_LAUNCHABLE_FAILUIRE'

type CreateLaunchableAction = {
  type: typeof CREATE_LAUNCHABLE
  payload: Launchable
}

type UpdateLaunchableAction = {
  type: typeof UPDATE_LAUNCHABLE
  id: number
  payload: Partial<Launchable>
}

type DeleteLaunchableAction = {
  type: typeof DELETE_LAUNCHABLE
  id: number
}

type RunLaunchableAction = {
  type: typeof RUN_LAUNCHABLE
  id: number
}

export type RunLaunchableSuccessAction = {
  type: typeof RUN_LAUNCHABLE_SUCCESS
  launchable: StoreLaunchable
}

export type RunLaunchableFailureAction = {
  type: typeof RUN_LAUNCHABLE_FAILUIRE
  launchable: StoreLaunchable
  payload: Error
}

export type RunLauncableOutcomeAction = RunLaunchableSuccessAction | RunLaunchableFailureAction

export type LauncherActionTypes =
  | CreateLaunchableAction
  | UpdateLaunchableAction
  | DeleteLaunchableAction
  | RunLaunchableAction
  | RunLaunchableSuccessAction
  | RunLaunchableFailureAction
