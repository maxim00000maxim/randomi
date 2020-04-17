function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
 background(random(0,255),random(0,255),random(0,255));
 noStroke() 
 translate(windowWidth/2,windowHeight/2);
  fill(random(0,255),random(0,255),random(0,255));
  triangle(-50,0,50,0,0,-50)
  rect(0,50,50,50);
  
}