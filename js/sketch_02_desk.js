function setup() {
	let s = min(windowWidth,windowHeight) * 0.9;
	createCanvas(s, s,WEBGL);
	background(0);
	
	//shader
	sh = createShader(vert,frag);
	this.shader(sh);
	sh.setUniform("u_resolution", [width*pixelDensity(),height*pixelDensity()]);
	noStroke();	
	rectMode(CENTER);
}

function draw() {
	sh.setUniform("u_time", millis()/1000);
	background(0);
	rect(0,0,width, height);
}