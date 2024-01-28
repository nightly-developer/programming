let canvas;//canvas is assign only after window load & can be asscess gloabaly
let ctx;
let flowField;
let flowFieldAnimation;//variable to specify which animation to delete

//window onload operations
window.onload = function () {
  canvas = document.getElementById('canvas1');
  //from canvas will get canvas context wrt type of drawing 
  ctx = canvas.getContext('2d');//holds canvas settings
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
  flowField.animate();//calling pubilc class meethod
}

//handeling window resize Events
window.addEventListener('resize', function () {
  cancelAnimationFrame(flowFieldAnimation);//canceling old animation
  canvas.width = window.innerWidth;//assinging new width & height
  canvas.height = window.innerHeight;
  flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);//creating new instance of class 'FlowFieldEffec;
})

//interact animation with mouse position
const mouse = {
  x: 0, y: 0,
}
window.addEventListener('mousemove', function (e) {
  console.log(e);
  mouse.x = e.x;
  mouse.y = e.y;
})

//You can't call class before declairation
class FlowFieldEffect {
  #ctx;#width;#height; //starting # makes it private 
  //every class needs this special method
  constructor(ctx, width, height) {
    //will use constructor to assign arguments to class filed
    this.#ctx = ctx;
    this.#ctx.strokeStyle = 'white';
    this.#ctx.lineWidth = 5;
    this.#width = width;   //Encapsulation
    this.#height = height;
    this.angle = 0;
  }
  //private class method
  #draw(x, y) {
    const length = 250;
    //x = y = 0;//<-- delte this line
    this.#ctx.beginPath();//it resets the current path
    //so you can start drawing a new path from scratch
    this.#ctx.moveTo(x, y);//it sart path from x,y point
    this.#ctx.lineTo(mouse.x, mouse.y);//it connects to this point
    this.#ctx.stroke();//
  }
  animate() {
    this.angle += 0.1;
    this.#ctx.clearRect(0, 0, this.#width, this.#height);
    this.#draw(this.#width/2,this.#height/2);//staring from midle of canvas
    //schedule a function to be called on the next frame of the browser's native animation loop
    flowFieldAnimation = requestAnimationFrame(this.animate.bind(this));//the 'bind' method is used to create a new function that has its 'this' value set to a specific object int this case its 'FielField' object
    
  }
}