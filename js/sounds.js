export default function () {
  const forestAudio = new Audio('../src/Floresta.wav')
  const rainAudio = new Audio('../src/Chuva.wav')
  const shopAudio = new Audio('../src/Cafeteria.wav')
  const fireAudio = new Audio('../src/Lareira.wav')
  const finishAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
  )
  const pressSound = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
  )

  forestAudio.loop = true
  rainAudio.loop = true
  shopAudio.loop = true
  fireAudio.loop = true

  function forestOn() {
    forestAudio.play()
    rainOff()
    shopOff()
    fireOff()
  }

  function forestOff() {
    forestAudio.pause()
  }

  function rainOn() {
    rainAudio.play()
    forestOff()
    shopOff()
    fireOff()
  }

  function rainOff() {
    rainAudio.pause()
  }

  function shopOn() {
    shopAudio.play()
    forestOff()
    rainOff()
    fireOff()
  }

  function shopOff() {
    shopAudio.pause()
  }

  function fireOn() {
    fireAudio.play()
    forestOff()
    rainOff()
    shopOff()
  }
  function fireOff() {
    fireAudio.pause()
  }

  function endAudio() {
    finishAudio.play()
  }

  function pressAudio() {
    pressSound.play()
  }
  return {
    forestOn,
    forestOff,
    rainOn,
    rainOff,
    shopOn,
    shopOff,
    fireOn,
    fireOff,
    endAudio,
    pressAudio
  }
}
