// Two methods for timers - setTimeout and SetInterval (single / repeating)

/*function simpleMessage() {
	alert("This is just an alert box");
}

// settimeout is in milliseconds
setTimeout(simpleMessage,5000);*/

var myImage = document.getElementById("mainImage");

var imageArray = ["images/gal_windows/windows_1.jpg","images/gal_windows/windows_2.jpg",
	"images/gal_windows/windows_3.jpg","images/gal_windows/windows_4.jpg","images/gal_windows/windows_5.jpg",
	"images/gal_windows/windows_6.jpg","images/gal_windows/windows_7.jpg","images/gal_windows/windows_8.jpg",
	"images/gal_windows/windows_9.jpg","images/gal_windows/windows_10.jpg","images/gal_windows/windows_11.jpg",
	"images/gal_windows/windows_12.jpg","images/gal_windows/windows_13.jpg","images/gal_windows/windows_14.jpg",
	"images/gal_windows/windows_15.jpg","images/gal_windows/windows_16.jpg","images/gal_windows/windows_17.jpg",
	"images/gal_windows/windows_18.jpg","images/gal_windows/windows_19.jpg","images/gal_windows/windows_20.jpg",
	"images/gal_windows/windows_21.jpg","images/gal_windows/windows_22.jpg","images/gal_windows/windows_23.jpg",
	"images/gal_windows/windows_24.jpg"];
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








