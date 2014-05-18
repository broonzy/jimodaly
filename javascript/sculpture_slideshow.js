// Two methods for timers - setTimeout and SetInterval (single / repeating)

/*function simpleMessage() {
	alert("This is just an alert box");
}

// settimeout is in milliseconds
setTimeout(simpleMessage,5000);*/

var myImage = document.getElementById("mainImage");

var imageArray = ["images/gal_sculpture/sculpture_1.jpg","images/gal_sculpture/sculpture_2.jpg",
	"images/gal_sculpture/sculpture_3.jpg","images/gal_sculpture/sculpture_4.jpg","images/gal_sculpture/sculpture_5.jpg",
	"images/gal_sculpture/sculpture_6.jpg"];
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









