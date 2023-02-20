// JavaScript source code
function loadImages(dirName, imageExtension) {
    var penisDirectory = "/Thermite Portfolio/" + dirName + "/fileNames.txt";
    function reqListener() {
        console.log(this.responseText);
    }
    var penisDirectory = "/Thermite Portfolio/" + dirName + "/fileNames.txt";
    const req = new XMLHttpRequest();
    req.addEventListener("load", reqListener);
    req.open("GET", penisDirectory);
    req.send();
    console.log(req);

    document.getElementById('listHolder').src = penisDirectory;
    var allFiles = req.split("\n");
    console.log(allFiles[0]);
   

}