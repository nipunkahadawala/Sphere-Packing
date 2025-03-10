import Spheres2Background from 'https://cdn.jsdelivr.net/npm/threejs-components@latest/build/backgrounds/spheres2.cdn.min.js'

const canvas = document.getElementById('webgl-canvas')
const bg = Spheres2Background(canvas, {
    count: 200,
    colors: [0xff0000, 0x000000, 0xffffff],
    minSize: 0.5,
    maxSize: 1
})

const colorsBtn = document.getElementById('colors-btn')

document.body.addEventListener('click', (ev) => {
    if (ev.target !== colorsBtn) bg.togglePause()
})

colorsBtn.addEventListener('click', () => {
    const randomColor = () => Math.floor(Math.random() * 0xffffff)
    bg.spheres.setColors([randomColor(), randomColor(), randomColor()])
    bg.spheres.light1.color.set(randomColor())
})