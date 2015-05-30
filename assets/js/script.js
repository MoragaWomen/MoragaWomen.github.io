// alert("This is nowhere near done. I haven't even put in all the content.");
// alert("Will probably change everything except navbar.");

var slideimages = new Array() // create new array to preload images
slideimages[0] = new Image() // create new instance of image object
slideimages[0].src = "assets/images/main-img1.jpg" // set image object src property to an image's src, preloading that image in the process
slideimages[1] = new Image()
slideimages[1].src = "assets/images/main-img2.jpg"
slideimages[2] = new Image()
slideimages[2].src = "assets/images/image3.png"
var descript = new Array()
descript[0] = "Image 1"
descript[1] = "Image 2"
descript[2] = "Image 3"

var step = 0
var whichimage = 0

function slideit(){
 //if browser does not support the image object, exit.
 if (!document.images)
  return
 document.getElementById('slide').src = slideimages[step].src
 document.getElementById('description').innerHTML = descript[step];
 whichimage = step
 if (step<2)
  step++
 else
  step=0
 //call function "slideit()" every 2.5 seconds
 setTimeout("slideit()",2500)
}

function slidelink(){
 if (whichimage == 0)
  window.location = "link1.htm"
 else if (whichimage == 1)
  window.location = "link2.htm"
 else if (whichimage == 2)
  window.location = "link3.htm"
}

slideit()