var slideimages = new Array() // create new array to preload images
slideimages[0] = new Image() // create new instance of image object
slideimages[0].src = "assets/images/main-img2.jpg" // set image object src property to an image's src, preloading that image in the process
slideimages[1] = new Image()
slideimages[1].src = "assets/images/main-img3.jpeg"
slideimages[2] = new Image()
slideimages[2].src = "assets/images/main-img4.jpg"
slideimages[3] = new Image()
slideimages[3].src = "assets/images/main-img5.PNG"
slideimages[4] = new Image()
slideimages[4].src = "assets/images/main-img6.jpg"
var descript = new Array()
descript[0] = "MWA Luncheon"
descript[1] = "Annual Pear Festival"
descript[2] = "Hacienda Christmas Tree Lighting"
descript[3] = "Fashion Show"
descript[4] = "MWA members"


var step = 0
var whichimage = 0

function slideit(){
 	//if browser does not support the image object, exit.
	if (!document.images){
 		return
 	}
	document.getElementById('slide').src = slideimages[step].src
	// document.getElementById('description').innerHTML = descript[step];
	if (step<5){
 		step++
 	}
 	if (step>= 5) {
 		step=0
 	}
 	setTimeout("slideit()",2500)
}

slideit()