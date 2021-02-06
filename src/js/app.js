const sendChatBtn = document.getElementById('send-chat-btn')
const textingArea = document.getElementById('texting-area')
const msgArea = document.getElementById('msg-area')
const textToBeSent = document.getElementById('chat_text')
const socket = io()

//message from server
socket.on('message', message => {
    console.log(message)
    printMessage(message)
    
    //scroll down on each message arrival
    msgArea.scrollTop = msgArea.scrollHeight
})

sendChatBtn.addEventListener('click', () => {
    //get chat message
    var msg = textToBeSent.value

    //validate message
    if (msg != ''){
        if(!isAllWhiteSpace(msg)){
            //emit message to server
            socket.emit('chatMessage', msg)
        }
    }
})

//Output message to DOM
function printMessage(message){
    var chatText = document.createElement('div')
    chatText.className = 'chattext'

    var sender = document.createElement('div')
    sender.className = 'sender'
    sender.innerHTML = message.username

    var messageContainer = document.createElement('div')
    messageContainer.className = 'message-container'

    var msgText = document.createElement('div')
    msgText.className = 'message'
    msgText.innerHTML = message.text

    var time = document.createElement('div')
    time.className = 'time'
    time.innerHTML = message.time

    messageContainer.appendChild(msgText)
    messageContainer.appendChild(time)

    chatText.appendChild(sender)
    chatText.appendChild(messageContainer)

    textingArea.appendChild(chatText)
    
    textToBeSent.value = '' //clear the textbox after sending a message
    textToBeSent.focus()
}

function isAllWhiteSpace(msg){
    let res = /^\s+$/.test(msg)
    console.log(res)
    return res
}