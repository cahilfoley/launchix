import { exec } from 'child_process'
const fs = require('fs')
const path = require('path')
import { IpcMessageEvent, IpcMain } from 'electron'
import { Launchable } from '../app/store/launcher/types'

export function attachEvents(ipcMain: IpcMain) {
  ipcMain.on('LOAD_STATE', (event: IpcMessageEvent) => {
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
    'RUN_LAUNCHABLE',
    (event: IpcMessageEvent, launchable: Launchable) => {
      exec(`${launchable.command} ${launchable.args.join(' ')}`)
      event.sender.send('LAUNCHABLE_RESULT')
    }
  )
}
