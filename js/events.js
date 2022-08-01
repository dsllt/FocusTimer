import {
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  buttonForest,
  buttonRain,
  buttonShop,
  buttonFire
} from './variables.js'

export default function ({ controls, sound, timer }) {
  buttonForest.addEventListener('click', function () {
    if (buttonForest.classList[1] === undefined) {
      buttonForest.classList.add('selected')
      buttonRain.classList.remove('selected')
      buttonShop.classList.remove('selected')
      buttonFire.classList.remove('selected')
      sound.forestOn()
    } else {
      controls.reset()
      sound.forestOff()
    }
  })

  buttonRain.addEventListener('click', function () {
    if (buttonRain.classList[1] === undefined) {
      buttonForest.classList.remove('selected')
      buttonRain.classList.add('selected')
      buttonShop.classList.remove('selected')
      buttonFire.classList.remove('selected')
      sound.fireOn()
    } else {
      controls.reset()
      sound.fireOff()
    }
  })

  buttonShop.addEventListener('click', function () {
    if (buttonShop.classList[1] === undefined) {
      buttonForest.classList.remove('selected')
      buttonRain.classList.remove('selected')
      buttonShop.classList.add('selected')
      buttonFire.classList.remove('selected')
      sound.shopOn()
    } else {
      controls.reset()
      sound.shopOff()
    }
  })

  buttonFire.addEventListener('click', function () {
    if (buttonFire.classList[1] === undefined) {
      buttonForest.classList.remove('selected')
      buttonRain.classList.remove('selected')
      buttonShop.classList.remove('selected')
      buttonFire.classList.add('selected')
      sound.fireOn()
    } else {
      controls.reset()
      sound.fireOff()
    }
  })

  var executed = false

  buttonPlay.addEventListener('click', function () {
    if (!executed) {
      executed = true
      timer.countdown()
      sound.pressAudio()
    } else {
      sound.pressAudio()
    }
  })

  buttonStop.addEventListener('click', function () {
    timer.pause()
    sound.pressAudio()
    executed = false
  })

  buttonPlus.addEventListener('click', function () {
    timer.timeUp()
    sound.pressAudio()
  })

  buttonMinus.addEventListener('click', function () {
    timer.timeDown()
    sound.pressAudio()
  })
}
