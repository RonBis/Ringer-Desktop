document.body.onload = init()
function init(){
    setTimeout(()=>{
        document.body.style.opacity="1"
        document.getElementById('welcome-msg').style.opacity = "1"
    },600)

    //load makeElement.js
    // var elementCreator = document.createElement('script')
    // elementCreator.id = 'element-creator'
    // elementCreator.src = './js/makeElement.js'
    // document.body.appendChild(elementCreator)

    //load handler.js
    var site_handler = document.createElement('script')
    site_handler.id = 'site-handler'
    site_handler.src = '../js/handler.js'
    document.body.appendChild(site_handler)
}