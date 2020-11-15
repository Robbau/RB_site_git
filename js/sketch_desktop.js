


function setup(){
    let myHeight = windowWidth*0.5 ;
    let myWidth = windowWidth*0.5 ;
    let cnv = createCanvas( myWidth , myHeight);
    let colors = ["#FFB974"];
    let i = random(colors.length);
    i = floor(i);
    let currentColor = colors[i];
    let oneColor = color(currentColor);
    cnv.parent('processingHolder');
    background(oneColor);
    // cnv.position(0,0);    
    

}
function mouseMoved(){
  if(mouseY < height){
    // (height-height/2)
      var ellipseSize = 200;

      if(windowWidth < 769){
        ellipseSize = random(60, 120);
      }
      fill(255, 255, 255);
      noStroke();
      ellipse(mouseX, mouseY, ellipseSize, ellipseSize);
  } 
}
function draw(){
  // background(255, 217, 153, 5);
}
