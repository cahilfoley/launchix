import {
  CREATE_LAUNCHABLE,
  DELETE_LAUNCHABLE,
  LauncherState,
  LauncherActionTypes,
  UPDATE_LAUNCHABLE
} from './types'

const initialState: LauncherState = {
  nextID: 1,
  launchables: []
}

export function launcherReducer(
  state = initialState,
  action: LauncherActionTypes
): LauncherState {
  switch (action.type) {
    case CREATE_LAUNCHABLE:
      return {
        ...state,
        launchables: [
          ...state.launchables,
          {
            ...action.payload,
            id: state.nextID
          }
        ],
        nextID: state.nextID + 1
      }

    case UPDATE_LAUNCHABLE:
      return {
        ...state,
        launchables: state.launchables.map(launchable => {
          if (launchable.id === action.id) {
            return {
              ...launchable,
              ...action.payload
            }
          }
          return launchable
        })
      }

    case DELETE_LAUNCHABLE:
      return {
        ...state,
        launchables: state.launchables.filter(
          launchable => launchable.id !== action.id
        )
      }

    default:
      return state
  }
}
