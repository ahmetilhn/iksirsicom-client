export const lockScroll = (condition) => {
  if (process.client) {
    const body = document.body
    if (condition) {
      body.style.overflow = 'hidden'
    } else {
      body.style.overflow = ''
    }
  }
}

export const goToScroll = (y, target) => {
  if (process.client) {
    const screenX = document.querySelector(target)?.getBoundingClientRect().top
    window.scrollTo({
      top: screenX,
      left: 200,
      behavior: 'smooth',
    })
  }
}
