var x = (300);
var y = (200);
var s = (700);
var d = (30);


function setup() {
createCanvas(2000,1000);
background (204);
noFill();

}

function draw(){
  ellipse(x,y,d,d);
  ellipse(x,y,2*d,2*d);
  ellipse(x,y,3*d,3*d);
  ellipse(x,y,4*d,4*d);
  ellipse(x,y,5*d,5*d);
  ellipse(x,y,6*d,6*d);
  ellipse(s,y,d,d);
  ellipse(s,y,2*d,2*d);
  ellipse(s,y,3*d,3*d);
  ellipse(s,y,4*d,4*d);
  ellipse(s,y,5*d,5*d);
  ellipse(s,y,6*d,6*d);
}
//js stands for java script , set ups draw once while draw puts up 60 frames per second
