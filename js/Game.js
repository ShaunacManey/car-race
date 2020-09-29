class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
    car1=createSprite(100,200);
    car2=createSprite(300,200);
    carsarray=[car1,car2]
  }
  play(){
    form.hide()
    text("the game has started best of luck",120,100);
    Player.getallplayersinfo()
    if(allplayers!==undefined){
      var positiony=120;
      var index=0
      var positionx=0
      for(var plr in allplayers){
        index=index+1
        positionx=positionx+200
        positiony=displayHeight-allplayers[plr].distance
        carsarray[index-1].x=positionx
        carsarray[index-1].y=positiony
        if(plr==="player"+player.index){
          carsarray[index-1].shapeColor="red"
          camera.position.x=displayWidth/2
          camera.position.y=carsarray[index-1].y
        }
        
        else{
          carsarray[index-1].shapeColor="black"
        }
        drawSprites()      }
    }
    if(keyIsDown(UP_ARROW)&&player.index!==null){
      player.distance=player.distance+20
      player.updateplayerinfo()
    }
  }
}
