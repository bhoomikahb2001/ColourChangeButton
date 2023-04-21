const button = document.querySelector("button")
const body = document.querySelector("body")
const color =['green', 'blue', 'pink', 'purple', 'red', 'meroon', 'grey','yellow', 'skyblue', 'parrot', 'orange']

body.style.backgroundColor = 'violet'

button.addEventListener('click',changeB)

function changeB() {
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]
}