export interface Launchable {
  label: string
  command: string
  args: string[]
  created: Date
}

export interface StoreLaunchable extends Launchable {
  id: number
}

export interface LauncherState {
  nextID: number
  launchables: StoreLaunchable[]
}

export const CREATE_LAUNCHABLE = 'CREATE_LAUNCHABLE'
export const UPDATE_LAUNCHABLE = 'UPDATE_LAUNCHABLE'
export const DELETE_LAUNCHABLE = 'DELETE_LAUNCHABLE'
export const RUN_LAUNCHABLE = 'RUN_LAUNCHABLE'
export const RUN_LAUNCHABLE_SUCCESS = 'RUN_LAUNCHABLE_SUCCESS'
export const RUN_LAUNCHABLE_FAILUIRE = 'RUN_LAUNCHABLE_FAILUIRE'

export interface CreateLaunchableAction {
  type: typeof CREATE_LAUNCHABLE
  payload: Launchable
}

export interface UpdateLaunchableAction {
  type: typeof UPDATE_LAUNCHABLE
  id: number
  payload: Partial<Launchable>
}

export interface RunLaunchableAction {
  type: typeof RUN_LAUNCHABLE
  id: number
}

export interface RunLaunchableSuccessAction {
  type: typeof RUN_LAUNCHABLE_SUCCESS
  launchable: StoreLaunchable
}

export interface RunLaunchableFailureAction {
  type: typeof RUN_LAUNCHABLE_FAILUIRE
  launchable: StoreLaunchable
  payload: Error
}

export interface DeleteLaunchableAction {
  type: typeof DELETE_LAUNCHABLE
  id: number
}

export type RunLauncableOutcomeAction =
  | RunLaunchableSuccessAction
  | RunLaunchableFailureAction

export type LauncherActionTypes =
  | CreateLaunchableAction
  | UpdateLaunchableAction
  | DeleteLaunchableAction
  | RunLaunchableAction
  | RunLaunchableSuccessAction
  | RunLaunchableFailureAction
