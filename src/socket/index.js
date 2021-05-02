import socketClient from 'socket.io-client'
const SERVER = 'http://localhost:9092'
const EVENT = 'message'
let mapSocket = {}

export function configureSocket (namespace) {
  if (!mapSocket[namespace]) {
    mapSocket[namespace] = socketClient(`${SERVER}/${namespace}`)
  }
}

export function sendMessage (namespace, data) {
  if (mapSocket[namespace]) {
    mapSocket[namespace].emit(EVENT, data)
  }
}

export function readMessage (namespace, resolver) {
  if (mapSocket[namespace]) {
    mapSocket[namespace].on(EVENT, data => {
      resolver(data)
    })
  }
}
