/*
function Stopwatch() { 
  let startTime, endTime, running, duration = 0;

  this.start = function() {
    if (running) 
      throw new Error('Stopwatch has already started.');
    
    running = true; 

    startTime = new Date();
  };

  this.stop = function() {
    if (!running) 
      throw new Error('Stopwatch is not started.');

    running = false; 
      
    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds; 
  };

  this.reset = function() { 
    startTime = null;
    endTime = null;
    running = false; 
    duration = 0; 
  };

  Object.defineProperty(this, 'duration', {
    get: function() { return duration; }
  });
}
*/

//----------------- StopWatch -------------
/*
function Stopwatch() {
  //defining necessary varibales
  let startTime = stopTime = runtime = 0;
  let running = false;

  //function to get current time
  function getTime() {
    const d = new Date;
    return d.getTime();
  }

  this.start = function () {
    if (!running) { 
      startTime = getTime(); 
      console.log(startTime);
      running = true 
    } else {
      console.log("alredy started");
    }
  }

  this.stop = function () {
    if (running) {
      stopTime = getTime();
      runtime += (stopTime - startTime) / 1000;
      running = false
    } else {
      console.log("alredy stopped");
    }
  }

  this.duration = function () {
    if (!running) {
      console.log(runtime);
    } else {
      console.log("stopwatch is running");
    }
  }

  this.reset = function () {
    if (runtime>0) {
      console.log("stopwatch is reset");
      running = false;
      startTime = stopTime = 0;
    } else {
      console.log("stopwatch is alredy in reset stat")
    }
  }
} 

let sw = new Stopwatch;
*/

//--------------------- Prototype StopWatch ----------------
function Stopwatch() {
  let startTime, stopTime, runtime = 0;
  let running = false;

  Object.defineProperty(this,'durtion', {
    get: function () { return runtime; },
    set: function (value) { runtime = value; }
  });

  Object.defineProperty(this, 'start', {
    get: function () { startTime; }
  });

  Object.defineProperty(this, 'stop', {
    get: function () { return stopTime; }
  });

  Object.defineProperty(this, 'running', {
    get: function () { return running; }
  });
}

Stopwatch.prototype.start = function () {
  if (this.running)
    throw new Error('Stopwatch has alredy started.');
  
  this.running = true;//set running state to true 
  this.startTime = new Date();
};

Stopwatch.prototype.stop = function () {
  if (!this.running)
    throw new Error('Stopwatch is not srated.');
  this.running = false;
  this.runtime = new Date();
};

Stopwatch.prototype.reset = function () {
  if (this.runtime > 0) {
    this.startTime = null;
    this.stopTime = null;
    this.running = false;
    this.runtime = 0;
  }
}

const sw = new Stopwatch();
sw.duration = 10;