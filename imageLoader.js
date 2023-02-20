// JavaScript source code
function loadImages(dirName, imageExtension) {
    var penisDirectory = "/Thermite Portfolio/" + dirName + "/fileNames.txt";
    document.getElementById('listHolder').src = penisDirectory;
    var allFiles = document.getElementById('listHolder').innerHTML;
    var fileArray = allFiles.split("\n");
    console.log(fileArray);
    fileArray[0] = document.getElementById('listOfFiles').innerHTML;
    var txtFile = new XMLHttpRequest();
    txtFile.open("GET", "penisDirectory", true);
    txtFile.onreadystatechange = function () {
        if (txtFile.readyState === 4) {  // Makes sure the document is ready to parse.
            if (txtFile.status === 200) {  // Makes sure it's found the file.
                allText = txtFile.responseText;
                lines = txtFile.responseText.split("\n"); // Will separate each line into an array
            }
        }
    }
    console.log(lines[0]);
    txtFile.send(null);

}