const $div = document.querySelector('div')
let position = [0, 0]
let distance = [0, 0]
let dragging = false

$div.addEventListener('mousedown', function (e) {
    dragging = true
    position[0] = e.clientX
    position[1] = e.clientY
})

$div.addEventListener('mouseup', function (e) {
    dragging = false
})

document.addEventListener('mousemove', function (e) {

    if (!dragging) {
        return
    }

    distance[0] = e.clientX - position[0]
    distance[1] = e.clientY - position[1]

    const left = parseInt($div.style.left || 0)
    const top = parseInt($div.style.top || 0)

    $div.style.left = left + distance[0] + 'px'
    $div.style.top = top + distance[1] + 'px'
})
