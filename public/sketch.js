var socket;
var rs = 0;
var gs = 0;
var bs = 0;
var widths = 2;
function setup() {
	let c = createCanvas(900, 550);
	background(255);

	socket = io.connect("http://localhost:3000");
	socket.on('mouse', newDrawing);
	c.style('box-shadow', '0px 4px 4px rgba(0, 0, 0, 0.25)');
	c.parent('drawingCanvas');
}

function saveDrawing() {
	saveCanvas();
}

function newDrawing(data) {
	strokeWeight(data.width);
	stroke(data.r, data.g, data.b);
	line(data.x, data.y, data.px, data.py);
}

function mouseDragged() {
	var data = {
		x: mouseX,
		y: mouseY,
		px: pmouseX,
		py: pmouseY,
		r: rs,
		g: gs,
		b: bs,
		width: widths
	}
	socket.emit('mouse', data);

	strokeWeight(widths);
	stroke(rs, gs, bs);
	if (mouseIsPressed === true) {
		line(mouseX, mouseY, pmouseX, pmouseY);
	}
}

function weight(a){
	widths = a;
}

function color1(col) {
	switch (col) {
		case 'Red': rs = 244; gs = 11; bs = 11;
			break;
		case 'Blue': rs = 3; gs = 76; bs = 157;
			break;
		case 'Green': rs = 0; gs = 128; bs = 0;
			break;
		case 'Yellow': rs = 255; gs = 255; bs = 0;
			break;
		case 'Purple': rs = 128; gs = 0; bs = 128;
			break;
		case 'Pink': rs = 255; gs = 192; bs = 203;
			break;
		case 'Orange': rs = 245; gs = 123; bs = 6;
			break;
		case 'Black': rs = 0; gs = 0; bs = 0;
			break;
		case 'White': rs = 255; gs = 255; bs = 255;
			break;
	};

}


