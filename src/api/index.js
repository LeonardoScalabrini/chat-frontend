const url = '/messages'

export const getMessages = () => {
  return fetch(url)
    .then(response => {
      return response.json().then(data => {
        return data
      })
    })
}
