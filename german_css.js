var defaultStyleLink, otherStyleLink;

defaultStyleLink = document.getElementById("Default");
germanStyleLink = document.getElementById("German");

function setActiveStyleSheet ( styleId ) {

	var i = 0;
	var linkItem, linkArray;

	linkArray = document.getElementsByTagName("link");

	for ( i = 0; i < linkArray.length; i++ ) {
		linkItem = linkArray[i];

		if ( linkItem.getAttribute("rel").indexOf("style") != -1 && linkItem.getAttribute("title") ) {
			linkItem.disabled = true;
	
			if (linkItem.getAttribute("title") === styleId ) {
				linkItem.disabled = false;
			}
		}
	}
}

defaultStyleLink.onclick = function() {
	setActiveStyleSheet( this.id );
};
	
otherStyleLink.onclick = function() {
	setActiveStyleSheet( this.id );
};

