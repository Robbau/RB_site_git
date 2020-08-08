
let myHeight = windowHeight;
let myWidth = windowWidth;

function setup(){
    
    let cnv = createCanvas( myWidth , myHeight);
    cnv.parent('processingHolderMobile');
    background(245, 247 ,247 );
    cnv.position(0,0);    
    setInterval(draw, 500);


}


function draw(){

  var ellipseSize = 200;
  var ellipseX =random(0, myWidth);
  var ellipseY = random(0, myHeight);
      strokeWeight(2);
     stroke(42, 116, 100);
     noFill();
      // fill(42, 116, 100, 255);
      // noStroke();


      ellipse(ellipseX, ellipseY, ellipseSize, ellipseSize);
  // background(245, 247, 247, 5);
}
