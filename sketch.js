  var frect, mrect; 
  function setup(){
  createCanvas(600,600);
  frect = createSprite(300,200,40,60); 
  frect.shapeColor = "green";
  frect.debug = true;
  mrect = createSprite(400,200,50,60); 
  mrect.shapeColor = "green";
  mrect.debug = true;
  }
  function draw(){
  background("black");
   mrect.x = World.mouseX; 
  mrect.y = World.mouseY; 
  if(mrect.x-frect.x < frect.width/2 + mrect.width/2 &&
  frect.x - mrect.x < frect.width/2 + mrect.width/2 && 
  mrect.y-frect.y < frect.width/2 + mrect.width/2 &&
  frect.y - mrect.y < frect.width/2 + mrect.width/2 ){
     
      frect.shapeColor = "red";
      mrect.shapeColor = "red"; 
    } 
      else { frect.shapeColor = "green";
        mrect.shapeColor = "green"; 
      } drawSprites(); 
    }              