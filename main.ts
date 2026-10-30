radio.onReceivedNumber(function (receivedNumber) {
    music.play(music.stringPlayable("C5 C5 C5 C5 C5 C5 C5 C5 ", 233), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Yes)
})
radio.onReceivedString(function (receivedString) {
    music.play(music.stringPlayable("C5 C5 C5 C5 C5 C5 C5 C5 ", 233), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.No)
})
basic.forever(function () {
    radio.setGroup(1)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendString("1")
    }
})
