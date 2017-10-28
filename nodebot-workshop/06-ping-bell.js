const five = require('johnny-five')
const dgram = require('dgram')
let board = new five.Board()

board.on('ready', () => {
  let piezo = new five.Piezo(8)
  let server = dgram.createSocket('udp4')

  server.on('message', () => {
    piezo.tone(five.Piezo.Notes.c4, 1000)
  })

  server.bind(1337)
})