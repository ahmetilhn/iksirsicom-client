export const setStorage = (key, payload) => {
  if (process.client) {
    localStorage.setItem(key, JSON.stringify(payload))
  }
}

export const getStorage = (key) => {
  if (process.client) {
    return JSON.parse(localStorage.getItem(key))
  }
}

export const removeStorage = (key) => {
  if (process.client) localStorage.removeItem(key)
}
