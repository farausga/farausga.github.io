let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/itachi2.jpg') {
      myImage.setAttribute('src','images/itachi3.jpg');
    } else if(mySrc === 'images/itachi3.jpg') {
		myImage.setAttribute('src','images/itachi4.jpg');
    } else {
	myImage.setAttribute('src','images/itachi2.jpg');
    } 
}