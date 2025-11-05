var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
var hitZoneSize = 25;
var damageFromObstacle = 10;
var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
    
sawBladeHitZone.x = 400;
sawBladeHitZone.y = 100;
game.addGameItem(sawBladeHitZone);

var obstacleImage = draw.bitmap("img/sawblade.png");
sawBladeHitZone.addChild(obstacleImage);

function createSawBlade (x,y) {
var hitZoneSize = 25
var damageFromObstacle = 10;
var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);

sawBladeHitZone.x = x;
sawBladeHitZone.y = y;

var obstacleImage = draw.bitmap("img/sawblade.png");
obstacleImage.x = -hitZoneSize;
obstacleImage.Y = -hitZoneSize;
sawBladeHitZone.addChild(obstacleImage);
}

enemy.velocityX = 1;
enemy.velocityY = 1;
enemy.rotationalVelocity = 1;

enemy.onPlayerCollision = function () {};
game.changeIntegrity(-10)
game.increaseScore(100);
enemy.fadeOut();

function createEnemy(x, y){
  createEnemy(400, groundY -10);
  createEnemy(800, hroundY -100);
  createEnemy(1200, groundY -50)
}
function createReward(x, Y) {
  var reward = game.createGameItem('reward, 20');
  var img = draw.bitmap('img/sparklecoin.png');
  img.x = -15;
  img.y = -15;
  reward.addChild(img);
  reward.x = x;
  reward.y = y;
  reward.onPlayerCollision = function () {
    reward.fadeOut();
  }
  game.addGameItem(reward);
}

function createMarker(x, y) {
  var marker =game.createGameItem('marker', 10);
  var visual= draw.rect(20, 20, 'rgba(129, 2, 255, 0.5)');
  visual.x = -10;
  visual.y = -10;
  marker.adChild(visual);
  marker.x = x;
  marker.y =y;
  game.addGameItem(marker);
}
    function startLevel() {
      // TODO 13 goes below here
array[index]
object.propertyName
var firstGameItemObject = gameObjects[0];

var firstX = firstGameItemObject.x;
var firstY = firstGameItemObject.y;

var firstType = firstGameItemObject.type;
createSawBlade(firstX, firstY);

for (var i = 0; i < myArray.length; i++) {
  var eachElement = myArray[i];

  // code to do something with each element
}


      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
