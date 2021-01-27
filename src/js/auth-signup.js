//attach signup form in welcome-msg div
let signUpHeading = document.createElement('span')
signUpHeading.id = 'signUp-heading'
signUpHeading.className = 'type-2-heading'
signUpHeading.textContent = 'Sign up on'
signUpHeading.style.marginBottom = '38px'
document.getElementById('welcome-msg').appendChild(signUpHeading)

let headingLogo = document.createElement('i')
headingLogo.id = 'heading-logo'
signUpHeading.appendChild(headingLogo)

setTimeout(() => {
    signUpHeading.style.opacity = "1"
},500)

let signUpWrapper = document.createElement('div')
signUpWrapper.id = 'signUp-wrapper'
document.getElementById('welcome-msg').appendChild(signUpWrapper)

let signUpForm = document.createElement('form')
signUpForm.id = 'signUp-form'
signUpForm.method = 'POST'
document.getElementById('signUp-wrapper').appendChild(signUpForm)


  




//---------------------------------------------------------

let inputContainer = document.createElement('div')
inputContainer.className = 'input-container'
document.getElementById('signUp-form').appendChild(inputContainer)

let nameInput = document.createElement('input')
nameInput.type = 'text'
nameInput.id = 'full-name-input'
nameInput.className = 'text-input'
nameInput.placeholder = 'Full name'
nameInput.spellcheck = false
inputContainer.appendChild(nameInput)

let nextBtn = document.createElement('a')
nextBtn.id = 'next-btn'
inputContainer.appendChild(nextBtn)



//----------------------------------------------------------





let nicknameInput = document.createElement('input')
nicknameInput.type = 'text'
nicknameInput.id = 'nick-name-input'
nicknameInput.className = 'text-input'
nicknameInput.placeholder = 'Nick name of your choice'
nicknameInput.spellcheck = false
document.getElementById('signUp-form').appendChild(nicknameInput)

let emailInput = document.createElement('input')
emailInput.type = 'email'
emailInput.id = 'email-input'
emailInput.className = 'text-input'
emailInput.placeholder = 'A valid email address'
emailInput.spellcheck = false
document.getElementById('signUp-form').appendChild(emailInput)

let passwdInput = document.createElement('input')
passwdInput.type = 'password'
passwdInput.id = 'passwd-input'
passwdInput.className = 'text-input'
passwdInput.placeholder = 'Create a strong password'
passwdInput.spellcheck = false
document.getElementById('signUp-form').appendChild(passwdInput)

let passwdConfInput = document.createElement('input')
passwdConfInput.type = 'password'
passwdConfInput.id = 'passwd-conf-input'
passwdConfInput.className = 'text-input'
passwdConfInput.placeholder = 'Confirm password'
passwdConfInput.spellcheck = false
document.getElementById('signUp-form').appendChild(passwdConfInput)

let submitBtn = document.createElement('input')
submitBtn.type = 'submit'
submitBtn.id = 'submit-signup'
submitBtn.className = 'btn'
submitBtn.value = 'Create account'
document.getElementById('signUp-form').appendChild(submitBtn)

setTimeout(() => {
    nameInput.style.opacity = '1'
    // nicknameInput.style.opacity = '1'
    // emailInput.style.opacity = '1'
    // passwdInput.style.opacity = '1'
    // passwdConfInput.style.opacity =  '1'
}, 800)