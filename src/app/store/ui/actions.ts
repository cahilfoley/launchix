import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from './types'

export function openSidebar() {
  return { type: OPEN_SIDEBAR as typeof OPEN_SIDEBAR }
}

export function closeSidebar() {
  return { type: CLOSE_SIDEBAR as typeof CLOSE_SIDEBAR }
}
