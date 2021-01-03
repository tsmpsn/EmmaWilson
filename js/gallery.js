/* Display pop-up */

var imageMap = {
	1: "img/GALLERY1.jpg",
	2: "img/GALLERY2.jpg",
	3: "img/GALLERY3.jpg",
	4: "img/GALLERY4.jpg",
	5: "img/GALLERY5.jpg",
	6: "img/GALLERY6.jpg",
	7: "img/GALLERY7.jpeg",
	8: "img/GALLERY8.jpg",
	9: "img/GALLERY9.jpg",
	10: "img/GALLERY10.jpg",
	11: "img/GALLERY11.jpg",
	12: "img/GALLERY12.jpg",
	13: "img/GALLERY13.jpg",
	14: "img/GALLERY14.jpg",
	15: "img/GALLERY15.jpg",
	16: "img/GALLERY16.jpg",
	17: "img/GALLERY17.jpg",
	18: "img/GALLERY18.jpg"
};

var currentImage = 0;

document.addEventListener("keydown", function(e) {
	switch(expression) {
		case 37:
			previousImage();
			break;
		case 39:
			nextImage();
			break;
		case 27:
			hideFullImage();
			break;
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