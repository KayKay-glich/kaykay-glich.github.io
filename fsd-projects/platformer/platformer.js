$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
      toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(200, 700, 100, 48);
    createPlatform(300, 720, 100, 42)
    createPlatform(400, 600, 100, 800);
    createPlatform(500, 650, 100, 48);
    createPlatform(600, 500, 100, 900);
    createPlatform(700, 600, 100, 48);
     createPlatform(800, 400, 100, 59);
     createPlatform(900, 500, 100, 10);
     createPlatform(900, 700, 100, 10);
     createPlatform(1000, 300, 100, 300, "Green");




    // TODO 3 - Create Collectables
    createCollectable("kennedi", 640, 400, 0.5, 0);
    createCollectable("diamond", 840, 300, 0.5, 0);
    createCollectable("max", 1009, 200, 0.5, 0);
    createCollectable("database", 700, 700, 0.5, 0);




    // TODO 4 - Create Cannons
    createCannon("top", 1000, 3000 );
    createCannon("right", 500, 3000);
    createCannon("right", 700, 3000);
     createCannon("left", 200, 3000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
