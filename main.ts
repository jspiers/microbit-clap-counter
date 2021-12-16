input.onSound(DetectedSound.Quiet, function () {
    led.toggle(count / 5, count % 5)
    if (count == 24) {
        count = 0
    } else {
        count += 1
    }
})
let count = 0
count = 0
