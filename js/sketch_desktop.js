


function setup(){
    let myHeight = windowHeight ;
    let myWidth = windowWidth;
    let cnv = createCanvas( myWidth , myHeight);
    cnv.parent('processingHolder');
    background(255, 255 ,255 );
    cnv.position(0,0);    
    

}
function mouseMoved(){
  if(mouseY < height){
    // (height-height/2)
      var ellipseSize = 200;

      if(windowWidth < 769){
        ellipseSize = 120;
      }
      strokeWeight(2);
      stroke(42, 116, 100);
      noFill();
      // fill(42, 116, 100, 255);
      // noStroke();
      ellipse(mouseX, mouseY, ellipseSize, ellipseSize);
  } 
}
function draw(){
  background(255, 255, 255, 5);
}
