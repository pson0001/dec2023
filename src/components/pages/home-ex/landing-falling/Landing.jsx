/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef, useState } from 'react'
// import { Link } from 'react-router-dom'
import c from './landing.module.scss'
// import { distance, randomIntFromRange } from './test/utils'
import { resolveCollision } from '../utils/elastic-collison'
import { randomIntFromRange } from './utils'

// import Canvas from './Canvas'

const Landing = () => {
  const canvasRef = useRef()
  const [ctx, setCtx] = useState(null)
  const gravity = 0.5

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d')

      if (ctx) {
        ctx.canvas.width = window.innerWidth
        ctx.canvas.height = window.innerHeight
      }
      setCtx(ctx)
    }
  }, [canvasRef])

  const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2,
  }

  // Event Listeners
  addEventListener('mousemove', (event) => {
    mouse.x = event.clientX
    mouse.y = event.clientY
  })

  addEventListener('resize', () => {
    if (ctx) {
      ctx.canvas.width = innerWidth
      ctx.canvas.height = innerHeight
    }
  })

  // Objects
  class Circle {
    constructor(x, y, width, height, radius, color, text) {
      this.x = x
      this.y = y
      // this.dx = dx
      // this.dy = dy
      this.width = width
      this.height = height
      this.color = color
      this.radius = radius
      this.text = text
      this.velocity = {
        x: (Math.random() - 0.5) * 10,
        y: (Math.random() - 0.5) * 10,
      }
      this.mass = 1
    }

    draw = () => {
      ctx.beginPath()
      ctx.roundRect(this.x, this.y, this.width, this.height, this.radius)
      ctx.fillStyle = this.color
      ctx.fill()
      // ctx.translate(this.x + this.width / 2, this.y + this.height / 2)
      // ctx.rotate((10 * Math.PI) / 180)

      ctx.lineWidth = 4
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillStyle = '#101010'
      ctx.font = '16px'
      ctx.fillText(this.text, this.x + this.width / 2, this.y + this.height / 2)

      ctx.closePath()
    }

    update = (ballArray) => {
      // if (this.y + this.height + this.dy > ctx.canvas.height) {
      //   this.dy = -this.dy
      //   this.dy = this.dy * friction
      //   this.dx = this.dx * friction
      // } else {
      //   this.dy += gravity
      // }

      for (let i = 0; i < ballArray.length; i++) {
        if (this === ballArray[i]) {
          continue
        }

        if (
          this.x + this.width >= ballArray[i].x &&
          this.x <= ballArray[i].x + ballArray[i].width &&
          this.y + this.height >= ballArray[i].y &&
          this.y <= ballArray[i].y + ballArray[i].height
        ) {
          resolveCollision(this, ballArray[i])
        }
      }
      if (this.x <= 0 || this.x + this.width >= innerWidth) {
        this.velocity.x = -this.velocity.x
        // this.dx = -this.dx * friction
      }
      if (this.y <= 0) {
        this.velocity.y = -this.velocity.y
      }
      // console.log(this.y + this.height)
      if (this.y + this.height >= innerHeight) {
        this.velocity.y = 0
        this.y = innerHeight - this.height
        // this.velocity.x = 0
      }
      if (this.y + this.height > ctx.canvas.height) {
        this.y += gravity
      }
      this.x += this.velocity.x
      this.y += this.velocity.y
      // this.x += this.dx
      // this.y += this.dy
      this.draw()
    }
  }

  // Implementation
  let ballOne
  let ballTwo
  let ballThree
  let ballFour
  let ballArray = []
  const init = () => {
    // var dx = randomIntFromRange(-3, 3)
    // var dy = randomIntFromRange(-2, 2)

    ballOne = new Circle(
      300,
      300,
      150,
      44,
      [44],
      '#DEFFC3',
      'USER RESEARCH',
      randomIntFromRange(-3, 3),
      randomIntFromRange(-2, 2)
    )
    ballTwo = new Circle(
      500,
      500,
      110,
      44,
      [40],
      '#FFC9C9',
      'UX DESIGN',
      randomIntFromRange(-3, 3),
      randomIntFromRange(-2, 2)
    )
    ballThree = new Circle(
      800,
      500,
      110,
      44,
      [40],
      '#FFC980',
      'UI DESIGN',
      randomIntFromRange(-3, 3),
      randomIntFromRange(-2, 2)
    )

    ballFour = new Circle(
      1000,
      100,
      150,
      44,
      [40],
      '#A9D8EA',
      'FRONT-END DEV',
      randomIntFromRange(-3, 3),
      randomIntFromRange(-2, 2)
    )
    ballArray.push(ballOne)
    ballArray.push(ballTwo)
    ballArray.push(ballThree)
    ballArray.push(ballFour)
  }
  useEffect(() => {
    if (ctx) {
      // Animation Loop
      const animate = () => {
        requestAnimationFrame(animate)
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ballArray.forEach((ball) => ball.update(ballArray))
      }

      init()
      animate()
    }
  }, [ballOne, ctx, init, mouse.x, mouse.y])

  return (
    <div className={c.landingContainer}>
      <div className={c.canvasContainer}>
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  )
}

export default Landing
