import socketClient from 'socket.io-client'
const SERVER = 'http://localhost:9092'
const EVENT = 'chatevent'
let socket

export function configureSocket () {
  if (!socket) {
    socket = socketClient(SERVER)
  }
}

export function sendMessage (data) {
  if (socket) {
    socket.emit(EVENT, data)
  }
}

export function readMessage (resolver) {
  if (socket) {
    socket.on(EVENT, data => {
      resolver(data)
    })
  }
}
