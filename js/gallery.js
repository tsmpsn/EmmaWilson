/* Display pop-up */

var imageMap = {
	1: "img/GALLERY 1.jpg",
	2: "img/GALLERY 2.jpg",
	3: "img/GALLERY 3.jpg",
	4: "img/GALLERY 4.jpg",
	5: "img/GALLERY 5.jpg",
	6: "img/GALLERY 6.jpg",
	7: "img/GALLERY 7.jpeg",
	8: "img/GALLERY 8.jpg",
	9: "img/GALLERY 9.jpg",
	10: "img/GALLERY 10.jpg",
	11: "img/GALLERY 11.jpg",
	12: "img/GALLERY 12.jpg",
	13: "img/GALLERY 13.jpg",
	14: "img/GALLERY 14.jpg",
	15: "img/GALLERY 15.jpg",
	16: "img/GALLERY 16.jpg",
	17: "img/GALLERY 17.jpg",
	18: "img/GALLERY 18.jpg"
};

var currentImage = 0;

// Left and right key press

$("html").keydown(function(e) {
	if(e.keyCode == 37) { // left
		console.log("left");
		previousImage();
	}
	else if(e.keyCode == 39) { // right
		nextImage();
		console.log("right");
	}
});

// Show/hide gallery slideshow

function showFullImage(imageID) {
	currentImage = imageID.substr(3,4);
	document.getElementById("fullGalleryImage").alt = currentImage;
	document.getElementById("fullGalleryImage").src = imageMap[currentImage];
	$("#imageBacking").removeClass("hideFullImage");
}

function hideFullImage() {	
	$("#imageBacking").addClass("hideFullImage");
}

/* Switching image */

function nextImage() {
	currentImage = document.getElementById("fullGalleryImage").alt;
	var newImage = parseInt(currentImage);
	if (currentImage != Object.keys(imageMap).length) {
		newImage += 1;
	} else {
		newImage = 1;
	}
	document.getElementById("fullGalleryImage").alt = newImage;
	document.getElementById("fullGalleryImage").src = imageMap[newImage];
}

function previousImage() {
	currentImage = document.getElementById("fullGalleryImage").alt;
	var newImage = parseInt(currentImage);
	if (currentImage == 1) {
		newImage = Object.keys(imageMap).length;
	} else {
		newImage -= 1;
	}
	document.getElementById("fullGalleryImage").alt = newImage;
	document.getElementById("fullGalleryImage").src = imageMap[newImage];
}