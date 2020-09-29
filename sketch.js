var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;
var allplayers

var car1,car2,carsarray

var form, player, game;


function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount==2){
    gameState=1
    game.update(1)

  }
  if(gameState==1){
    clear()
    game.play();

  }
}
