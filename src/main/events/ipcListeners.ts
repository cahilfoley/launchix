import { exec } from 'child_process'
const fs = require('fs')
const path = require('path')
import { IpcMessageEvent, IpcMain } from 'electron'
import { IPC_LOAD_STATE, IPC_RUN_LAUNCHABLE } from 'shared/ipcTypes'

export function attachEvents(ipcMain: IpcMain) {
  ipcMain.on(IPC_LOAD_STATE, (event: IpcMessageEvent, ...args: any[]) => {
    console.log(IPC_LOAD_STATE, 'event running')
    if (fs.existsSync(path.join(process.cwd(), 'settings/store.json'))) {
      try {
        event.returnValue = JSON.parse(
          fs.readFileSync(
            path.join(process.cwd(), 'settings/store.json'),
            'utf8'
          )
        )
        return
      } catch (err) {
        console.error('Error loading saved state:', err)
      }
    }
    event.returnValue = {}
  })

  ipcMain.on(
    IPC_RUN_LAUNCHABLE,
    (event: IpcMessageEvent, launchable: StoreLaunchable) => {
      console.log(IPC_RUN_LAUNCHABLE, 'event running', launchable)
      exec(`${launchable.command} ${launchable.args.join(' ')}`)
      event.sender.send('LAUNCHABLE_RESULT')
    }
  )
}
