
var myImage = document.getElementById("homePhoto");
var imageArray = ["bgimg1A", "bgimg1D", "bgimg1E"];
var imageIndex = 0;

function changeImage() {
    homePhoto.setAttribute("class", imageArray[imageIndex]);
    imageIndex++;
    if(imageIndex >= imageArray.length) {
        imageIndex = 0;
    }
}

var intervalHandle = setInterval(changeImage, 2500); // Change image every 2.5s

myPhoto.onclick = function() {
    clearInterval(intervalHandle);
}