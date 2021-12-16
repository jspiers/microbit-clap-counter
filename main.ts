let count: number = 0
input.onSound(DetectedSound.Quiet, function () {
    led.toggle(count / 5, count % 5)
    count = (count + 1) % 25
})
