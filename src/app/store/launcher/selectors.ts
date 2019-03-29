import { createSelector } from 'reselect'
import { AppState } from 'store/reducers'

export function getLauncher(state: AppState) {
  return state.launcher
}

export const getLaunchables = createSelector(
  getLauncher,
  launcher => launcher.launchables
)

export const getLaunchable = (state: AppState, id: number) => {
  const launchables = getLaunchables(state)
  for (const launchable of launchables) {
    if (launchable.id === id) {
      return launchable
    }
  }
}
