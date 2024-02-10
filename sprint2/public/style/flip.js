// function mirrorImage(ctx, image, x = 0, y = 0, horizontal = false, vertical = false){
//     ctx.save();  // save the current canvas state
//     ctx.setTransform(
//         horizontal ? -1 : 1, 0, // set the direction of x axis
//         0, vertical ? -1 : 1,   // set the direction of y axis
//         x + horizontal ? image.width : 0, // set the x origin
//         y + vertical ? image.height : 0   // set the y origin
//     );
//     ctx.drawImage(image,0,0);
//     ctx.restore(); // restore the state as it was when this function was called
// }

var images = [
    'img/Skii_spiderman.jpg',
    'img/Boarding_Spiderman.jpg'
  ];
  
  var currentIndex = 0;
  
  function switchImage() {
    var image = document.getElementById('myImage');
    currentIndex = (currentIndex + 1) % images.length;
    image.src = images[currentIndex];
  }
  
  function flipImage() {
    var image = document.getElementById('myImage');
    image.classList.toggle('flipped');
  }