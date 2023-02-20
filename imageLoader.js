// JavaScript source code
function loadImages(dirName, imageExtension) {
    var penisDirectory = "/Thermite Portfolio/" + dirName;
    document.getElementById('listHolder').src = penisDirectory + "/fileNames.txt";
    var allFiles = document.getElementById('listHolder').innerHTML;
    var fileArray = allFiles.split("\n");
    console.log(fileArray);
    fileArray[0] = document.getElementById('listOfFiles').innerHTML

}