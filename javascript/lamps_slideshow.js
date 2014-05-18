// Two methods for timers - setTimeout and SetInterval (single / repeating)

/*function simpleMessage() {
	alert("This is just an alert box");
}

// settimeout is in milliseconds
setTimeout(simpleMessage,5000);*/

var myImage = document.getElementById("mainImage");

var imageArray = ["images/gal_lamps/lamps_1.jpg","images/gal_lamps/lamps_2.jpg",
	"images/gal_lamps/lamps_3.jpg","images/gal_lamps/lamps_4.jpg","images/gal_lamps/lamps_5.jpg",
	"images/gal_lamps/lamps_6.jpg","images/gal_lamps/lamps_7.jpg"];
var imageIndex = 0;

function changeImage() {
	myImage.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

// setInterval is also in milliseconds
var intervalHandle = setInterval(changeImage,2500);


myImage.onclick =  function() {
	clearInterval(intervalHandle);
};









