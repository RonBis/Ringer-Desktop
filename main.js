const { app, BrowserWindow, ipcMain } = require('electron')

var mainWin = null

function createMainWindow(){
    mainWin = new BrowserWindow({
        title: 'Ringer',
        icon: __dirname+'/src/assets/images/paper-plane.png',
        minWidth: 500,
        minHeight: 330,
        show: false,
        webPreferences: {
            contextIsolation: true,
            preload: __dirname+'/src/js/init_app.js',
            enableRemoteModule: false
        }
    })
    mainWin.setMenu(null)
    mainWin.setMenuBarVisibility(null)
    mainWin.webContents.openDevTools()
    mainWin.loadFile('./src/html/index.html')
    mainWin.on('ready-to-show', () => { mainWin.show() })
    console.log('Exiting createMainWindow() function')
}

app.once('ready', () => {
    console.log('Creating main window')
    createMainWindow()
})
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit()
    }
})