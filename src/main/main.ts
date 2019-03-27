import * as url from 'url'
import * as path from 'path'
import { app, BrowserWindow, ipcMain } from 'electron'
import debug from 'utils/debug'
import { attachEvents } from 'events/ipcListeners'

let window: BrowserWindow | null

attachEvents(ipcMain)

const createWindow = () => {
  window = new BrowserWindow({
    width: 1360,
    height: 800,
    webPreferences: { nodeIntegration: true }
  })

  window.loadURL(
    debug.devMode
      ? 'http://localhost:8080/dist/index.html#/home'
      : url.format({
          pathname: path.join(
            process.cwd(),
            debug.devMode ? 'dev/index.html' : 'dist/index.html'
          ),
          protocol: 'file:',
          slashes: true
        })
  )

  window.on('closed', () => {
    window = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (window === null) {
    createWindow()
  }
})
