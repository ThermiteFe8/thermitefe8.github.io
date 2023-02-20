// JavaScript source code
function loadImages(dirName, imageExtension) {
    var directoryHolderGuy = "";
    var penisDirectory = "/Thermite Portfolio/" + dirName + "/fileNames.txt";
    function reqListener() {
        console.log(this.responseText);
        directoryHolderGuy = this.responseText;
    }
    var penisDirectory = "/Thermite Portfolio/" + dirName + "/fileNames.txt";
    const req = new XMLHttpRequest();
    req.addEventListener("load", reqListener);
    req.open("GET", penisDirectory);
    req.send();
    console.log(req);
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
        var secondArray = b.spit(" - ");

        return firstArray[0] - secondArray[0];
    });


    console.log(mediaFiles);
    var ballsDirectory = "/Thermite Portfolio" + dirName + "/";

    for (var i = 0; i < mediaFiles.length; i++) {
        var arraySections = mediaFIles[i].split(" - ");
        var funnyImage = document.createElement(img);
        funnyImage.src = ballsDirectory + mediaFiles[i];
        document.getElementById('imageHolder').appendChild(funnyImage);
    }
   

}