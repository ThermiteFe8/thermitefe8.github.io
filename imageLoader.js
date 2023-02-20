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
        funnyImage.src = ballsDirectory + mediaFiles[i];
        document.getElementById('imageHolder').appendChild(funnyImage);
    }
}