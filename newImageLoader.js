// JavaScript source code
var directoryHolderGuy = "";

function loadImages(dirName, imageExtension) {

    var penisDirectory = "/Thermite Portfolio/" + dirName + "/fileNames.txt";
    function reqListener() {
        console.log(this.responseText);
        directoryHolderGuy = this.responseText;
        console.log("Printing directory holder guy");
        console.log(directoryHolderGuy);
        loadImagesPart2(dirName, imageExtension);
    }
    var penisDirectory = "/Thermite Portfolio/" + dirName + "/fileNames.txt";
    const req = new XMLHttpRequest();
    req.addEventListener("load", reqListener);
    req.open("GET", penisDirectory);
    req.send();
    console.log(req);


}
function loadImagesPart2(dirName, imageExtension) {
    var allFiles = directoryHolderGuy.split("\n");
    console.log(allFiles[0]);

    var mediaFiles = [];

    for (var i = 0; i < allFiles.length; i++) {
        if (allFiles[i].includes(imageExtension)) {
            mediaFiles.push(allFiles[i]);
        }
    }


    mediaFiles.sort(function (a, b) {
        var firstArray = a.split(" - ");
        var secondArray = b.split(" - ");

        return firstArray[0] - secondArray[0];
    });


    console.log(mediaFiles);
    var ballsDirectory = "/Thermite Portfolio" + dirName + "/";

    for (var i = 0; i < mediaFiles.length; i++) {
        var arraySections = mediaFiles[i].split(" - ");
        var funnyImage = document.createElement("img");
        if (imageExtension == ".mp4") {
            funnyImage = document.createElement("video");
        }
		console.log(imageExtension);
        if (imageExtension == ".mp4"){
             funnyImage.src = ballsDirectory + mediaFiles[i] + "#t=0.001";  
        }
        else if (imageExtension == ".png")
        {
			console.log("Replacing PNG with JPEG");
            var tempString = mediaFiles[i].replace(".png", ".jpg");
            funnyImage.src = "/Thumbnails/" + tempString;
        }
        else{
             funnyImage.src = ballsDirectory + mediaFiles[i];
        }
        
        
        
        var cleanupHelper = mediaFiles[i];

        if (cleanupHelper.includes("\'")) {
            var tempArray = cleanupHelper.split("\'");
            cleanupHelper = "";
            for (var k = 0; k < tempArray.length - 1; k++) {
                cleanupHelper = cleanupHelper + tempArray[k] + "\\'";
            }
            cleanupHelper = cleanupHelper + tempArray[tempArray.length - 1];

        }

        funnyImage.setAttribute('onclick', ("enlargeImage(\'" + ballsDirectory + cleanupHelper + "\', \'" + cleanupHelper + "\')"));
        funnyImage.setAttribute('class', 'theMedia');
		funnyImage.style.order= arraySections[0];
       // funnyImage.setAttribute('id', cleanupHelper);
        document.getElementById('imageHolder').appendChild(funnyImage);
    }
}

function enlargeImage(imageSource, imageNameInfo) {
    // Get the modal image tag
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");
   // const closeModalBtn = document.querySelector(".btn-close");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    document.getElementById('modal-image').src = imageSource;
    if (imageNameInfo.includes(".png") || imageNameInfo.includes(".mp4") || imageNameInfo.includes(".gif")) {
        imageNameInfo = imageNameInfo.replace(".png", "");
        imageNameInfo = imageNameInfo.replace(".mp4", "");
        imageNameInfo = imageNameInfo.replace(".gif", "");
    }
    var nameSplit = imageNameInfo.split(" - ");
    document.getElementById("zoomedName").innerHTML = nameSplit[1];
    var descriptionHelper = "";
    for (var i = 2; i < nameSplit.length - 1; i++) {
        descriptionHelper = descriptionHelper + nameSplit[i] + " | ";
    }
    descriptionHelper = descriptionHelper + nameSplit[nameSplit.length - 1];
    document.getElementById("zoomedDescription").innerHTML = descriptionHelper;

    
}

function closeImage() {
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");
  //  const closeModalBtn = document.querySelector(".btn-close");
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}
var videoListHolder = "";
function loadVideos(youtubeDirectory) {
    function reqListener() {
        console.log(this.responseText);
        videoListHolder = this.responseText;
        console.log("pronting");
        console.log(videoListHolder);
        loadVideos2();
    }
    var penisDirectory = youtubeDirectory;
    const vidListReq = new XMLHttpRequest();
    vidListReq.addEventListener("load", reqListener);
    vidListReq.open("GET", penisDirectory);
    vidListReq.send();
    console.log(vidListReq);
}

function loadVideos2(){
    var allFiles = videoListHolder.split("\n");
    console.log(allFiles[0]);
    for (var i = 0; i < allFiles.length; i++) {
        var swagVideo = document.createElement("iframe");
        swagVideo.src = allFiles[i];
        swagVideo.setAttribute('class', 'theMedia');
		swagVideo.style.order = i+300;
        document.getElementById('imageHolder').appendChild(swagVideo);
    }

}

function flipOrder()
{
	let allArt = document.getElementsByClassName("theMedia");
	var total = 0;
	for(var i = 0; i < allArt.length; i++)
	{
		allArt[i].style.order = allArt[i].style.order * -1;
		total = total + allArt[i].style.order;
	}
	
	if(total > 0)
	{
		document.getElementById('orderSwapButton').innerHTML = 'Oldest to Newest';
	}
	else
	{
		document.getElementById('orderSwapButton').innerHTML = 'Newest to Oldest';
	}
		
	
}

