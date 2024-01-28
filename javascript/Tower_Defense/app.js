const canvas = document.getElementById("canvas1")

//Getting the rendering context, by canvas API object `ctx`
const ctx = canvas.getContext("2d")
//this object provides methods like draw shapes, text, images, and more on the canvas.

canvas.width = 900
canvas.height = 600

//global Constants
const winningScore = 30 //minimum score to complete level
const cellSize = 100
const cellGap = 3
//gobal Variables
let numberOfResources = 300
let enemyInterval = 600
let gameOver = false
let frame = 0
let score = 0
//global Arrays
const enemyPositions = [] //vertial (y) position is constant, keep track of that
const projectiles = [] //to keep record of projectile this defender is shooting
const defenders = []
const resources = []
const gameGrid = []
const enemies = []

//mouse hover
const mouse = {
  x: undefined,
  y: undefined,
  width: 0.1,
  height: 0.1,
}
let canvasPosition = canvas.getBoundingClientRect() //returns DOM rectangel object containing size and position of an element's border box, relative to the viewport
canvas.addEventListener("mousemove", function (e) {
  mouse.x = e.x - canvasPosition.left //mouse x-distance wrt canvas left border
  mouse.y = e.y - canvasPosition.top //mouse y-distance wrt canvas top border
})

canvas.addEventListener("mouseleave", function () {
  mouse.x = undefined
  mouse.y = undefined
})

//Game board
const controlsBar = {
  width: canvas.width,
  height: cellSize,
}

//creating blue print for cell object
class Cell {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.width = cellSize
    this.height = cellSize
  }

  //draw rectangular cell when mouse hover over it
  draw() {
    if (mouse.x && mouse.y && collision(this, mouse)) {
      ctx.strokeStyle = "black"
      ctx.strokeRect(this.x, this.y, this.width, this.height)
    }
  }
}

//creating grid
function creatGrid() {
  //creating columns of grid
  for (let y = cellSize; y <= canvas.height; y += cellSize) {
    //creating rows of grid
    for (let x = 0; x <= canvas.width; x += cellSize) {
      //creating new object for each cell and calling the constructor
      gameGrid.push(new Cell(x, y))
    }
  }
}
creatGrid()

//iterating over arrary of Cell object array and calling draw Method
function handleGameGrid() {
  for (let i = 0; i < gameGrid.length; i++) {
    gameGrid[i].draw()
  }
}

//Projectile
class Projectile {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.width = 10
    this.height = 10
    this.power = 20
    this.speed = 5
  }

  updat() {
    this.x += this.speed
  }

  draw() {
    ctx.fillStyle = "black"
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.width, 0, Math.PI * 2)
    ctx.fill()
  }
}

function handelProjectiles() {
  for (let i = 0; i < projectiles.length; i++) {
    projectiles[i].updat()
    projectiles[i].draw()

    for (let j = 0; j < enemies.length; j++) {
      if (
        enemies[j] &&
        projectiles[i] &&
        collision(projectiles[i], enemies[j])
      ) {
        enemies[j].health -= projectiles[i].power
        projectiles.splice(i, 1) //laser will disapear once it hit target
        i--
      }
    }

    //bullete should not reach right edge of canvas
    if (projectiles[i] && projectiles[i].x > canvas.width - cellSize) {
      projectiles.splice(i, 1)
      i-- //after removal of element adjust index of for loop
    }
  }
}

//Defenders
class Defender {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.width = cellSize - cellGap * 2
    this.height = cellSize - cellGap * 2
    this.shooting = false //shoot only when enemy is ahead
    this.health = 100 //health of defender tower
    this.timer = 0 //to manage events related to this defender
  }

  draw() {
    ctx.fillStyle = "blue"
    ctx.fillRect(this.x, this.y, this.width, this.height)
    ctx.fillStyle = "gold"
    ctx.font = "20px Arial"
    //display health of defener on canvas
    ctx.fillText(Math.floor(this.health), this.x + 15, this.y + 30)
  }

  updat() {
    if (this.shooting) {
      this.timer++
      if (this.timer % 100 === 0) {
        projectiles.push(new Projectile(this.x + 70, this.y + 50))
      }
    } else {
      this.timer = 0
    }
  }
}

//when click on canvas place a new defender
canvas.addEventListener("click", function () {
  const gridPositionX = mouse.x - (mouse.x % cellSize) + cellGap //to get nearest horizontal cell
  const gridPositionY = mouse.y - (mouse.y % cellSize) + cellGap
  //not allow to place defender on first row
  if (gridPositionY < cellSize) return
  //not allow to place defenders on top of each other
  for (let i = 0; i < defenders.length; i++) {
    if (defenders[i].x === gridPositionX && defenders[i].y === gridPositionY)
      return
  }
  let defendrCost = 100
  if (numberOfResources >= defendrCost) {
    //place defender tower if sufficient resources are avilable
    defenders.push(new Defender(gridPositionX, gridPositionY))
    numberOfResources -= defendrCost
  }
})

//handles placement of Defenders
function handelDefenders() {
  for (let i = 0; i < defenders.length; i++) {
    defenders[i].draw()
    defenders[i].updat()

    if (enemyPositions.indexOf(defenders[i].y) !== -1)
      defenders[i].shooting = true
    else defenders[i].shooting = false
    for (let j = 0; j < enemies.length; j++) {
      if (defenders[i] && collision(defenders[i], enemies[j])) {
        enemies[j].movement = 0
        defenders[i].health -= 0.2
      }
      if (defenders[i] && defenders[i].health <= 0) {
        defenders.splice(i, 1) //removes element from array
        i--
        enemies[j].movement = enemies[j].speed //enemy will cont. to move with its pervious speed
      }
    }
  }
}

//Enemies
class Enemy {
  constructor(verticalPostion) {
    this.x = canvas.width //enemy will spawn at the right edge of canvas
    this.y = verticalPostion //y postion of spawn enemy
    this.width = cellSize - cellGap * 2 //enemy is of one cell size
    this.height = cellSize - cellGap * 2
    this.speed = Math.random() * 0.2 + 1 //random speed of enemy
    this.movement = this.speed //speed of changes after collision from defender
    this.health = 100
    this.maxHealth = this.health //maximum damage will give better reward
  }
  updat() {
    this.x -= this.movement //rate of change of speed in x direction
  }

  draw() {
    ctx.fillStyle = "red"
    ctx.fillRect(this.x, this.y, this.width, this.health)
    ctx.fillStyle = "gold"
    ctx.font = "20px Arial"
    //display health of enemy on canvas
    ctx.fillText(Math.floor(this.health), this.x + 15, this.y + 30)
  }
}

function handleEnemies() {
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].updat()
    enemies[i].draw()
    if (enemies[i].x < 0) {
      //if enemy reach left edge game will be over
      gameOver = true
    }
    if (enemies[i].health <= 0) {
      let gainResources = enemies[i].maxHealth / 10
      numberOfResources += gainResources
      score += gainResources
      const removeThisIndex = enemyPositions.indexOf(enemies[i].y)
      enemyPositions.splice(removeThisIndex, 1) //removing vertical position of defeated enemy from array
      enemies.splice(i, 1)
      i--
    }
  }
  if (frame % enemyInterval === 0 && score < winningScore) {
    //enemy will spawn
    let verticalPostion = Math.floor(Math.random() * 5 + 1) * cellSize + cellGap
    enemies.push(new Enemy(verticalPostion))
    console.log("We got New Enemy")
    enemyPositions.push(verticalPostion)
    if (enemyInterval > 120) enemyInterval -= 50 //spawn interval will decrease linearly
  }
}

//Resources
const amount = [20, 30, 40]
class Resource {
  constructor() {
    this.x = Math.random() * canvas.width - cellSize
    this.y = (Math.floor(Math.random() * 5) + 1) * cellSize + 25
    this.width = cellSize * 0.6
    this.height = cellSize * 0.6
    this.amount = amount[Math.floor(Math.random() * amount.length)]
  }

  draw() {
    ctx.fillStyle = "yellow"
    ctx.fillRect(this.x, this.y, this.width, this.height)
    ctx.fillStyle = "balck"
    ctx.font = "20px Arial"
    ctx.fillText(this.amount, this.x + 15, this.y + 25)
  }
}
function handlResources() {
  if (frame % 500 === 0 && score < winningScore) {
    resources.push(new Resource())
  }
  for (let i = 0; i < resources.length; i++) {
    resources[i].draw()
    if (resources[i] && mouse.x && mouse.y && collision(resources[i], mouse)) {
      numberOfResources += resources[i].amount
      resources.splice(i, 1)
      i--
    }
  }
}

//Utilities
function handleGameStatus() {
  ctx.fillStyle = "gold"
  ctx.font = "30px Arial"
  ctx.fillText("Score: " + score, 20, 40)
  ctx.fillText("Resources: " + numberOfResources, 20, 75)
  if (gameOver) {
    ctx.fillStyle = "black"
    ctx.font = "60px Arial"
    ctx.fillText("Game Over", 300, 300)
  }
  if (score > winningScore && enemies.length === 0) {
    ctx.fillStyle = "black"
    ctx.font = "60px ariel"
    ctx.fillText("Level Complete", 135, 300)
    ctx.font = "30px ariel"
    ctx.fillText(`You WIN with ${score} Points!`, 134, 340)
  }
}
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = "blue"
  //fill the rectangles
  ctx.fillRect(0, 0, controlsBar.width, controlsBar.height)
  handleEnemies()
  handleGameGrid()
  handlResources()
  handelDefenders()
  handleGameStatus()
  handelProjectiles()
  frame++
  //call the animate function again and again
  if (!gameOver) requestAnimationFrame(animate)
}
animate()

//collison detection between two rectangels
function collision(first, second) {
  if (
    !(
      first.x > second.x + second.width ||
      first.x + first.width < second.x ||
      first.y > second.y + second.height ||
      first.y + first.height < second.y
    )
  )
    return true
}

window.addEventListener("resize", function () {
  canvasPosition = canvas.getBoundingClientRect()
})
