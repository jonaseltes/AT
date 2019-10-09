class LineObject {
  constructor (){
    this.radius = 4;
    this.spacing = 15;
    this.lineWidth = 3;
    this.maxDistance = 600;
    this.counter = 0;
    this.timer = 520;
    this.p1 = showPoint(new Point(randomPosition(this.radius)), this.radius);
    this.p2 = showPoint(new Point(randomPosition(this.radius)), this.radius);
    this.init();
  }

  init (){
    console.log(view);
    this.counter = count;
    var distance = this.p2.position.subtract(this.p1.position);
    if (distance.length > this.maxDistance) {
      this.p2.position = new Point (this.p2.position.subtract(distance.normalize().multiply(distance.length - this.maxDistance)));
    }
    this.line = this.createLine();
  }

  createLine() {
    var path = new Path(this.p1.position, this.p1.position);
    // Give the stroke a color
    var p1 = this.p1;
    var p2 = this.p2;
    path.strokeColor = 'black';
    path.strokeColor = {
      gradient: {
          stops: [p1.strokeColor, p2.strokeColor]
      },
              //origin and destination defines the direction of your gradient. In this case its vertical i.e bottom(blue/cooler) to up(red/warmer) refering to link you sent.
      origin: p1.position, //gradient will start applying from y=200 towards y=0. Adjust this value to get your desired result
      destination: p2.position
    }
    path.strokeWidth = this.lineWidth;
    var direction = this.p2.position.subtract(this.p1.position);
    var directionNormalized = direction.normalize();
    path.segments[0].point = path.segments[0].point.add(directionNormalized.multiply(this.spacing));
    // Move to start and draw a line from there
    // path.moveTo(this.p1.position);
    // Note the plus operator on Point objects.
    // PaperScript does that for us, and much more!
    path.onFrame = function(event){
      var currentDistance = p2.position.subtract(path.segments[1].point);
      if (currentDistance.length > 15 && currentDistance.length > 20) {
        path.segments[1].point = path.segments[1].point.add(directionNormalized.multiply(10));
      }
        // Your animation code goes in here
        // console.log("test");
      // path.segments[1].point += new Point(1, 1);

    }
    return path;
  }

  updatePosition(){
    this.p1.remove();
    this.p2.remove();
    this.line.remove();
    lines.shift();
    // this.p1 = showPoint(new Point(randomPosition(this.radius)), this.radius);
    // this.p2 = showPoint(new Point(randomPosition(this.radius)), this.radius);
    // this.line = this.createLine();
    // this.p1.opacity = 1;
    // this.p2.opacity = 1;
    // this.line.opacity = 1;
    // circle.fadeOut = function(this){
    //   if (this.opacity > 0) {
    //     this.opacity -= 0.1;
    //   }
    // }
  }

  fadeOut(item) {
    if (this.p1.opacity > 0.02) {
      this.p1.opacity -= 0.02;
      this.p2.opacity -= 0.02;
      this.line.opacity -= 0.02;
    }
  }

  update() {
    if (count > this.counter + this.timer) {
      this.updatePosition();
    }

    if (count > this.counter + this.timer - 50) {
      this.fadeOut();
    }
  }

}
