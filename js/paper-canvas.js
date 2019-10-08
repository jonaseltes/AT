// Create a circle shaped path, which is automatically
// placed within the active layer of the project:
var path = new Path.Circle({
	center: [80, 50],
	radius: 35,
	fillColor: 'red'
});

// Create a new layer and activate it:
var secondLayer = new Layer();

// The second path is added as a child of the second layer:
var secondPath = new Path.Circle({
	center: [120, 50],
	radius: 35,
	fillColor: '#00FF00'
});
