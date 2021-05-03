import socketClient from 'socket.io-client'
const { REACT_APP_SOCKET_SERVER } = process.env
const { REACT_APP_MESSAGE_EVENT } = process.env
let mapSocket = {}

export function configureSocket (namespace) {
  if (!mapSocket[namespace]) {
    mapSocket[namespace] = socketClient(`${REACT_APP_SOCKET_SERVER}/${namespace}`)
  }
}

export function sendMessage (namespace, data) {
  if (mapSocket[namespace]) {
    mapSocket[namespace].emit(REACT_APP_MESSAGE_EVENT, data)
  }
}

export function readMessage (namespace, resolver) {
  if (mapSocket[namespace]) {
    mapSocket[namespace].on(REACT_APP_MESSAGE_EVENT, data => {
      resolver(data)
    })
  }
}
