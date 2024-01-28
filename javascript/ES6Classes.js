//using strinct mode
'use strict';//prevent us modifying global object

//Defining Functions in JS
//Funtion Declaration: these are Hoiseted
function sayHello() { } // 
//Funtion Expression: these are not Hoiseted
const sayGoodbye = function () { }; //semicolon is neccessary

//Defining Class in JS
//Class Declaration: these are not Hoisted
class Triangle { }
//Class Expression: these 
const Square = class { };

/* 
//In JS Class is sugar coating on Funtion
function Circle(radius) {
  this.radius = radius;

  this.draw = function () {
    console.log('draw');
  }
} */

//Symbols(): return unique value can be use as property name
//Used for Attribute || Methods that defined outside & inside of constructor
//everytime we call symbol() we get different identifier
//private Attribute
const _Pi = Symbol(); 
//private Method
const _area = Symbol();//private method 

//WeakMap(): A dictionary where keys are object & values can be anything 
//Used for Attribute || Methods that defined inside of constructor
//private Attribute
const _radius = new WeakMap();
//private Method
const _move = new WeakMap();

class Circle {
  //constructor
  constructor(radius) {
    //private properties inside constructor

    //WeakMap()
    _radius.set(this, radius);

    //Symbol()
    this[_Pi] = 3.141;

    //Private Method inside constructor
    //WeakMap()
    _move.set(this,() => { // function got called from draw() Method
    console.log('Circle move', this);
    });
    
    //methods that are defined inside constructor are NOT a part of prototype of circle object
    this.proto = () => { 
      console.log('This is a protoype of Circle Object');
    };
  }

  //Instance Method 
  //defined inside body of Class becomes a part of prototype of class object
  draw() {
    _move.get(this)(); //this returns reference to fuction since _move is method to call it use '()'
    console.log("radius is: ",_radius.get(this)); //getting radius in context of this
  }

  //Static Method
  //NO need to create instance of class
  static parse(str) { 
    const radius = JSON.parse(str).radius;//parsing radius value
    return new Circle(radius);//Instance is created here which will be returned
  }

  //Private Method
  //Symbol()
  //in ES6 [symbol_name] gets computed and becomes name of Method
  [_area]() {
    return _Pi * (this.radius**2)
  }

  //Getter & Setter in ES6
  get radius() {
    return _radius.get(this);
  }
    
  set radius(value) {
    if (value <= 0) throw new Error("value is negative");
    _radius.set(this,value)
  }
}

//Instance object of Circle Class
const c = new Circle(4);

//c.parse() not accessible since it it a static method
Circle.parse(5)//acessing class ctatic method
//this is similar to accessing library function Ex. np.ones(7) in python

//strict mode
c.draw()//call by method allowed

const draw = c.draw; //creating Method reference
draw(); //calling by Method reference not allowed in strict mode
//stand alone function call || global function

console.log(c.radius);
console.log(c._Pi); //private property

const key = Object.getOwnPropertySymbols(c)[0]; //accesing private property
console.log(c[key]);