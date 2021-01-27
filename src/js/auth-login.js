//attach login form in welcome-msg div
let loginHeading = document.createElement('p')
loginHeading.id = 'login-heading'
loginHeading.className = 'type-2-heading'
loginHeading.textContent = 'Login'
loginHeading.style.marginBottom = '38px'
document.getElementById('welcome-msg').appendChild(loginHeading)
setTimeout(() => {
    loginHeading.style.opacity = "1"
},500)

let loginWrapper = document.createElement('div')
loginWrapper.id = 'login-wrapper'
document.getElementById('welcome-msg').appendChild(loginWrapper)

let loginForm = document.createElement('form')
loginForm.id = 'login-form'
document.getElementById('login-wrapper').appendChild(loginForm)

let nameInput = document.createElement('input')
nameInput.type = 'text'
nameInput.id = 'name-input'
nameInput.className = 'text-input'
nameInput.placeholder = 'Enter username or email'
nameInput.spellcheck = false
document.getElementById('login-form').appendChild(nameInput)

let passwdInput = document.createElement('input')
passwdInput.type = 'password'
passwdInput.id = 'passwd-input'
passwdInput.className = 'text-input'
passwdInput.placeholder = 'Password'
passwdInput.spellcheck = false
document.getElementById('login-form').appendChild(passwdInput)

setTimeout(() => {
    nameInput.style.opacity = '1'
    passwdInput.style.opacity = '1'
}, 500)
