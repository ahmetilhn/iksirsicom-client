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
