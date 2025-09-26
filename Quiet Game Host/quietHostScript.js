function newGame()
{
	fetch('TaskList.txt')
  .then(response => response.text())
  .then((data) => {
    console.log(data)
  })
}

function randomParameter(inputJson)
{
	
}