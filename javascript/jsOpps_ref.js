//object literals 
/*
//this is just an oject not function 
//so it is not reusable
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function () {
    console.log('draw');
  }
}; 
circle.draw()
console.log(circle)
*/

//Factory Function
//this function will return object
function createCircle(radius) {
  return {//object is created here
    radius,
    draw: function () {
      console.log('draw')
    }
  };
}

//creating variable and assigning return object of function
const circle = createCircle(1);
//circle.draw();

//Constructor Function
function Circle(radius) {
  //no return statement
  //instead of ruturn will use 'this' keyword
  this.radius = radius;
  this.draw = function () {
    console.log(this);
    console.log('draw');
  };
}

//since Circle is a constructor will use 'new' keyword
const another_circle = new Circle(4);//empty object is created here
//another_circle.draw();

//Constructor function converted to a class declaration
/*
class Circle {
  constructor(radius) {
    //instead of ruturn will use 'this' keyword
    this.radius = radius;
    this.draw = function () {
      console.log('draw');
    };
  }
} */

console.log(createCircle.__proto__)