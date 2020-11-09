


function setup(){
    let myHeight = windowWidth*0.5 ;
    let myWidth = windowWidth*0.5 ;
    let cnv = createCanvas( myWidth , myHeight);
    cnv.parent('processingHolder');
    background(255, 217 ,153 );
    // cnv.position(0,0);    
    

}
function mouseMoved(){
  if(mouseY < height){
    // (height-height/2)
      var ellipseSize = 200;

      if(windowWidth < 769){
        ellipseSize = 120;
      }
      strokeWeight(2);
      stroke(255, 255, 255);
      noFill();
      fill(255, 255, 255);
      noStroke();
      ellipse(mouseX, mouseY, ellipseSize, ellipseSize);
  } 
}
function draw(){
  // background(255, 217, 153, 5);
}
