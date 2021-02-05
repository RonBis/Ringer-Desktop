var isPanelHidden = false
var timeoutResize
const body = document.getElementById('full-styled-body')
const panelLeft = document.getElementById('panel-left')

function setPanel(){
    if(body.getBoundingClientRect().width <= 718){
        setTimeout(() => {
            panelLeft.style.display = 'none'
        }, 275);
        setPanelState(true)
    }
    else{
        setTimeout(() => {
            panelLeft.style.display = 'initial'
        }, 275);
        setPanelState(false)
    }
}
function setPanelState(arg){
    isPanelHidden = arg
}
function getPanelState(arg){
    return isPanelHidden
}
window.addEventListener('resize', () => {
    clearTimeout(timeoutResize)
    timeoutResize = setTimeout(setPanel, 250)
})