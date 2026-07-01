// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here

  applyFilter(increaseGreenByBlue);

  applyFilter(decreaseBlue);

  applyFilter(reddify);

applyFilterNoBackground(decreaseBlue);

applyFilterNoBackground(reddify);

applyFilterNoBackground(increaseGreenByBlue);

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterFunction){

  for (let i = 0; i < image.length; i++){
    for (let j = 0; j < image[i].length; j++){

    
    console.log(image[i][j]);
    let pixel = image[i][j];
    let pixelArray = rgbStringToArray(pixel);

    filterFunction(pixelArray);

    // This is where I’ll modify the color values later
    pixelArray[RED] = 200;

    let updatedPixel = rgbArrayToString(pixelArray);


    image [i][j] = updatedPixel;

  
  
    }
  }
}


    

// pixel looks like "rgb(150, 150, 150)"
// pixelArray looks like [150, 150, 150]

// TODO 9 Create the applyFilterNoBackground function

function applyFilterNoBackground(filterFunction) {


  
  var backgroundColor = image[0][0];


  for (var i = 0; i < image.length; i++) {
    for (var j = 0; j < image[i].length; j++) {
      
    
      if (image[i][j] !== backgroundColor) {
        
        
        var pixelArray = rgbStringToArray(image[i][j]);
        
        
        var updatedArray = filterFunction(pixelArray);
        
        
        var updatedString = rgbArrayToString(updatedArray);
        
        
        image[i][j] = updatedString;
      }
      
    }
  }
}



// TODO 6: Create the keepInBounds function
function keepInBound(value){
  if (value < 0) {
    return 0;
  } else if (value > 255){
    return 255
  }else {
    return value;
  }
}
function keepInBounds(value){
  return value < 0 ? 0 : (value > 255 ? 255 : value);
}
console.log(keepInBounds(-20)); // should print 0
console.log(keepInBounds(300)); // should print 255
console.log(keepInBounds(125)); // should print 125

// TODO 4: Create reddify filter function


function reddify(pixel){

  pixel[RED] = 200;

}
var testArray = [100, 100, 100];

reddify(testArray);

console.log(testArray); 

function decreaseBlue(pixel) {
  var newBlue = pixel[BLUE] - 50;
    pixel[BLUE] = keepInBounds(newBlue);
    return pixel; 
}


function increaseGreenByBlue(pixel) {
  
  let currentBlue = pixel[BLUE];
  
  
  let newGreen = pixel[GREEN] + currentBlue;
  
  
  newGreen = keepInBounds(newGreen);
  
  
  pixel[GREEN] = newGreen;
  
  return pixel;
}

// CHALLENGE code goes below here

