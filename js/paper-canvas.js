var lines = [];

paper.install(window);
window.onload = function() {
  paper.setup('paperCanvas');
  var animate = false;
  window.count = 0;

  // Create a circle shaped path, which is automatically
  // placed within the active layer of the project:
  // var path = new Path.Circle({
  // 	center: [80, 50],
  // 	radius: 35,
  // 	fillColor: 'black'
  // });

  function linesLoop () {
    var line = new LineObject();
    lines.push(line);
    console.log("lines: " ,lines);
    window.setTimeout(linesLoop, Math.random() * 3000);
  }

  linesLoop();

  view.onFrame = function(event) {
    count = event.count;
		// On each frame, rotate the path by 3 degrees:
    for (var i = 0; i < lines.length; i++) {
      lines[i].update(event);
    }
	}

}
