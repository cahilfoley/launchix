import { openSidebar, closeSidebar } from './actions'

export type UIState = {
  sidebarOpen: boolean
}

export const OPEN_SIDEBAR = 'ui/OPEN_SIDEBAR'
export const CLOSE_SIDEBAR = 'ui/CLOSE_SIDEBAR'

type OpenSidebarAction = ReturnType<typeof openSidebar>
type CloseSidebarAction = ReturnType<typeof closeSidebar>

export type UIActionTypes = OpenSidebarAction | CloseSidebarAction
