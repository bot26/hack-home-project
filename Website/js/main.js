const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight
c.beginPath()

c.moveTo(0, canvas.height / 2)
c.lineTo(canvas.width,canvas.height / 2)
c.stroke()