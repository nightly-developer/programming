/*
//class function
function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 1 };

  let coputeOptimumLocation = function (factor) {
    console.log("got the factor message from computeOptimumLocation")
    // some satements
    //more satements
  }

  //draw method will call computeOptiumLocation function whichi local
  this.draw = function () {
    coputeOptimumLocation(this.radius*2);

    console.log("draw");

    //getting defaultlocation 
    Object.defineProperty(this, 'defaultLocation', {
      get: function () {
        return defaultLocation;//getting private property
      },
      set: function (value) {
        if (!value.x || !value.y)
          throw new Error("Invalid location")
        else
          console.log("you set the vale with set");
        console.log(value.x,value.y);
      }
    })
  };
}


const circle = new Circle(1)
circle.draw();
circle.defaultLocation = { x: 1, y: 2 };
console.log(circle.defaultLocation)


//-----------Stop Watch-------------
function Stopwatch() {


  
  let duration = startTime = stopTime = 0;
  let runnig = false;

  function get_time() {
    const d = new Date();
    return d.getTime();
  }
  this.start = function () {
    if (runnig === false) {
      startTime = get_time()
      console.log("timer has started");
      runnig = true;
    }
    else {
      console.log("staopwatch is already started")
    }
  }

  this.stop = function () {
    if (runnig === true) {
      stopTime = get_time()
      console.log("timer has stopped");
      runnig = false;
    }
    else {
      console.log("stopwatch is already stopped")
    }
  }

  this.duration = function () {
    duration = (stopTime - startTime) / 1000;
    console.log("duration is:", duration);
  }

  this.reset = function () {
    if (runnig === true) {
      startTime = stopTime = 0;
      runnig = false;
      console.log("stopwatch is reset")
    }
    else {
      console.log("stopwatch is already in reset state")
    }
  }
}

function get_time(){
  const d = new Date();
  console.log(d.getTime());
}

let sw = new Stopwatch()
*/
/*
function Circle(radius) {
  //Instance members
  this.radius = radius;

  this.move = function () {
    console.log('move');
  }
}
//Prototype members
Circle.prototype.draw = function () {
  console.log("draw");
}

const c1 = new Circle(1);
const c2 = new Circle(2);

Circle.prototype.toString = function () {
  return 'Circle with radius ' + this.radius;
}

//Returns instance members
console.log(Object.keys(c1));

//Returns all members (instance + prototype)
for (let key in c2) console.log(key);
//we can cross check if the instance(own) property exits or not
//object.hasOwnProperty('name of property want to check')
//c1.hasOwnProperty('radius') //outputs true & flase for draw
*/
