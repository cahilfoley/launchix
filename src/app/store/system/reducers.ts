import { SystemState, SystemActionTypes, UPDATE_SESSION } from './types'

const initialState: Readonly<SystemState> = {
  loggedIn: false,
  session: '',
  userName: ''
}

export function systemReducer(
  state = initialState,
  action: SystemActionTypes
): SystemState {
  switch (action.type) {
    case UPDATE_SESSION: {
      return {
        ...state,
        ...action.payload
      }
    }
    default:
      return state
  }
}
