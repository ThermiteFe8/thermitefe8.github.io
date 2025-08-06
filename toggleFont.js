var fontArray = ["Times", "OpenDyslexic", "Arial"];
var fontIndex = 0;
var currentSize = 3;


function toggleFont() {
	fontIndex++;
	if(fontIndex > fontArray.length - 1)
	{
		fontIndex = 0;
	}
  document.getElementById("blogMarkdown").style.fontFamily = fontArray[fontIndex];
} 

function increaseSize()
{
	currentSize++;
	if(currentSize <= 0)
	{
		currentSize = 1;
	}
	document.getElementById("blogMarkdown").style.fontSize = currentSize.toString() +'vh';
}

function decreaseSize()
{
	currentSize--;
	document.getElementById("blogMarkdown").style.fontSize = currentSize.toString() +'vh';
}