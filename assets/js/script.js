var slideimages = new Array() // create new array to preload images
slideimages[0] = new Image() // create new instance of image object
slideimages[0].src = "assets/images/main-img1.jpg" // set image object src property to an image's src, preloading that image in the process
slideimages[1] = new Image()
slideimages[1].src = "assets/images/main-img2.jpg"
slideimages[2] = new Image()
slideimages[2].src = "assets/images/main-img3.jpeg"
var descript = new Array()
descript[0] = "" //"Image 1" will add image descriptions when images are finalized
descript[1] = "" //"Image 2"
descript[2] = "" //"Image 3"


var step = 0
var whichimage = 0

function slideit(){
 //if browser does not support the image object, exit.
 if (!document.images)
  return
 document.getElementById('slide').src = slideimages[step].src
 document.getElementById('description').innerHTML = descript[step];
 whichimage = step
 if (step<3)
  step++
 else
  step=0
 //call function "slideit()" every 2.5 seconds
 setTimeout("slideit()",2500)
}

slideit()