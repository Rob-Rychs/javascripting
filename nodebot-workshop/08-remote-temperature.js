const five = require('johnny-five')
const dnode = require('dnode')

let board = new five.Board()

board.on('ready', () => {
  let sensor = new five.Thermometer({
    controller: 'TMP36',
    pin: 'A0'
  })
  let temp = null

  sensor.on('data', () => {
    temp = this.celsius
  })

  let server = dnode({
    getTemperature: (cb) => {
      cb(temp)
    }
  })

  server.listen(1337)
})