import { createSelector } from 'reselect'
import { AppState } from '../reducers'

export const getUIState = (state: AppState) => state.ui

export const isSidebarOpen = createSelector(
  getUIState,
  ui => !!ui.sidebarOpen
)
