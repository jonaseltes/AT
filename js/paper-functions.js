function randomPosition (radius){
  let point = {
    x: Math.floor(Math.random()*window.innerWidth-radius/2)+radius/2,
    y: Math.floor(Math.random()*window.innerHeight-radius/2)+radius/2
  }
  console.log(point);
  return point;
}

function randomColor(){
  var colors = ["#ffa69e", "#861657", "#f53803", "#f5d020"];
  var color = colors[Math.floor(Math.random()*colors.length)];
  return color;
}

function showPoint (point, radius){
  var int = Math.floor(Math.random()*3);
  var shape;
  switch (int) {
    case 0:
      shape = new Path.RegularPolygon(point, 3, radius*1.5);
      break;
    case 1:
      shape = new Path.Circle(point, radius);
      break;
    case 2:
      var rectCorner = point.subtract(radius);
      console.log("point: " ,point);
      console.log("radius: " ,radius);
      console.log("rectCorner: ",rectCorner);
      shape = new Path.Rectangle(rectCorner, new Size(radius*2, radius*2));
      break;
  }
  console.log("shape: " ,shape);
  shape.strokeColor = randomColor();
  shape.strokeWidth = 3;
  return shape;
}
