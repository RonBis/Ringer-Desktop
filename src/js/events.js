const collapseBtn = document.getElementById('collapse-msg-explorer')
collapseBtn.addEventListener('click', () => {
    if(!getPanelState()){
        panelLeft.style.display = 'none'
        setPanelState(true)
    }
    else{
        panelLeft.style.display = 'initial'
        setPanelState(false)
    }
})