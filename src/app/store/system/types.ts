export type SystemState = {
  loggedIn: boolean
  session: string
  userName: string
}

export const UPDATE_SESSION = 'UPDATE_SESSION'

type UpdateSessionAction = {
  type: typeof UPDATE_SESSION
  payload: SystemState
}

export type SystemActionTypes = UpdateSessionAction
