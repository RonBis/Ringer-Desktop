const { ipcRenderer, contextBridge } = require('electron')

if(localStorage.getItem('firstRun') == null){
    const firstRun = require('./firstrun')
    firstRun.setConfig()
    firstRun.initTour()
}
else{
    if(localStorage.getItem('firstRun') == 'true'){
        localStorage.setItem('firstRun', false)
    }
}