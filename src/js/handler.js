if(document.getElementById('auth-css') == null){
    let authCss = document.createElement('link')
    authCss.id = "auth-css"  
    authCss.rel = "stylesheet"
    authCss.type = "text/css"
    authCss.href = "../assets/css/auth.css"
    document.head.appendChild(authCss)
}

//login button click action
document.getElementById('login-btn').addEventListener('click', () => {
    if(document.getElementById('auth-signup-script') == null){
        let auth_script = document.createElement('script')
        auth_script.id = 'auth-signup-script'
        auth_script.src = '../js/auth-login.js'
        document.body.appendChild(auth_script)
    }
    doTheThing("200px")         //LOL//
})

//signup button click action
document.getElementById('signup-btn').addEventListener('click', () => {
    if(document.getElementById('auth-login-script') == null){
        let auth_script = document.createElement('script')
        auth_script.id = 'auth-signup-script'
        auth_script.src = '../js/auth-signup.js'
        document.body.appendChild(auth_script)
    }
    doTheThing("200px")
})

function doTheThing(height){
    document.getElementById('welcome-txt').style.transition = "opacity 0.3s ease"
    document.getElementById('welcome-txt').style.opacity = "0"
    document.getElementById('auth-btn-wrapper').style.transition = "opacity 0.3s ease"
    document.getElementById('auth-btn-wrapper').style.opacity = "0"
    document.getElementById('nav').style.opacity = "0"
    
    document.getElementById('welcome-msg').style.height = document.getElementById('welcome-msg').clientHeight - 25*2 +"px"

    setTimeout(() => {
        document.getElementById('auth-btn-wrapper').style.display = "none"
        document.getElementById('welcome-txt').style.display = "none"
        document.getElementById('welcome-msg').style.height = height
        document.getElementById('welcome-msg').style.width = "clamp(236px, 400px, 80%)"
    }, 301)
}