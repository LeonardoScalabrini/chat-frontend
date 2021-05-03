const url = '/messages'

export const getMessages = (chat) => {
  return fetch(`${url}/${chat}`)
    .then(response => {
      return response.json().then(data => {
        return data
      })
    })
}
