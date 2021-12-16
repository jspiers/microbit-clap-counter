function toggleLED () {
    led.toggle(count / 5, count % 5)
}
input.onSound(DetectedSound.Quiet, function () {
    toggleLED()
    count = (count + 1) % 25
})
let count: number
count = 0
