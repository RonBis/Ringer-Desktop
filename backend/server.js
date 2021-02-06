const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const formatMessage = require('./msg')

const app = express()
const server = http.createServer(app)
const io = socketio(server)
const PORT = 3000 || process.env.PORT
const botname = 'RingerBot'

//set static folder
app.use(express.static(path.join(__dirname, '../src')))

//run when client connects
io.on('connection', socket => {
    //Welcome current user
    socket.emit('message', formatMessage(botname, 'Welcome to Ringer!'))

    //Broadcast a message to all the clients except the one who's connecting , when a user connects
    socket.broadcast.emit('message', formatMessage(botname, 'A user has joined the chat'))

    //Runs when a client disconnects
    socket.on('disconnect', () => {
        io.emit('message', formatMessage(botname, 'A user has left the chat'))
    })

    //listen for chat message
    socket.on('chatMessage', msg => {
        io.emit('message', formatMessage('User', msg))
    })
})

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
