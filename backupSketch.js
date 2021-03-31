var socket;

function setup(){
	let c = createCanvas(500, 500);
	background(255);

	socket = io.connect("http://localhost:3000");
	socket.on('mouse', newDrawing);
	c.style('box-shadow', '0px 4px 4px rgba(0, 0, 0, 0.25)')
	c.parent('drawingCanvas');
}

function newDrawing(data){
	noStroke();
	fill(0);
  	ellipse(data.x, data.y, 10);
}

function mouseDragged(){
	console.log('Sending:' + mouseX + ',' + mouseY);
	
	var data = {
		x: mouseX,
		y:mouseY
	}	
	socket.emit('mouse', data);
	
	noStroke();
	fill(0);
  	ellipse(mouseX, mouseY, 10, 10);
}

function draw(){
	
}

