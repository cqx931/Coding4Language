// This is the content script for the extension

// It only runs on twitter.com as indicated in manifest.json

// Look for all elements that are an "avatar"

console.log("[I'm a content script.]")

$(document).ready(function(){
   // jQuery methods go here...
	
   function lookupAvatars(){
   	    // get any img element contains word avatar in class names
        var avatars = $("img[class*='avatar'],img[class*='Avatar']");
		// Call swapImg() for all of these DOM elements
		for (var i = 0; i < avatars.length; i++) {
		  swapImg(avatars[i]);
		}
	}

	function swapImg(img) {
	  var newimg = chrome.extension.getURL("images/rainbow.png");
	  img.src = newimg;
	}

	document.addEventListener("DOMNodeInserted", function(event) {
	   lookupAvatars();
	});

	lookupAvatars();
});