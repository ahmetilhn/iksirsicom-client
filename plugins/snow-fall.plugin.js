import SnowFall from 'snow-fall-effect'

export default ({ app }, inject) => {
  inject(
    'snowFall',
    (() => {
      const snowFall = new SnowFall({
        color: '#44A5D7',
        density: 1,
        sizeRange: [5, 25],
        speed: 10,
      })
      snowFall.init()
      return snowFall
    })()
  )
}
