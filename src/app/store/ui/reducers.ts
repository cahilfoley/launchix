import { UIState, UIActionTypes, OPEN_SIDEBAR, CLOSE_SIDEBAR } from './types'

const defaultState: Readonly<UIState> = {
  sidebarOpen: true
}

export function uiReducer(state = defaultState, action: UIActionTypes): UIState {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return { ...state, sidebarOpen: true }

    case CLOSE_SIDEBAR:
      return { ...state, sidebarOpen: false }

    default:
      return state
  }
}
