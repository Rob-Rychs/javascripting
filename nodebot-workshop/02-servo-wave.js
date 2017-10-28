const five = require('johnny-five')
let board = new five.Board()
board.on('ready', () => {
  let servo = new five.Servo(9)

  servo.sweep([0, 180])
  board.wait(3000, () => {
    servo.stop()
    servo.center()
  })
})