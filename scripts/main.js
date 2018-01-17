//var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello shansh!';

function PrintPoem() {
		      var x = document.getElementById("poem").value;
		      document.getElementById("Shansh").innerHTML = x;
		      var y = document.getElementById('poem').value.split(" ").sort(function(){return 0.5-Math.random()}).join(" ");
		      document.getElementById('Pansh').innerHTML = y;
		      var element = document.getElementById("create");
		      element.outerHTML = "";                     
		      delete element;
}

function Shuffle() {
	//	var shu = document.getElementById('Pansh').value.split(" ").sort(function(){return 0.5-Math.random()}).join(" ");
		var array = document.getElementById('Pansh').value;
		console.log
		document.getElementById('Pansh2').innerHTML = random;
}

 
function saveTextAsFile() {
    var textToSave = document.getElementById("inputTextToSave").value;
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;
 
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
 
    downloadLink.click();
}
 
function destroyClickedElement(event) {
    document.body.removeChild(event.target);
}
 
function loadFileAsText()
{
    var fileToLoad = document.getElementById("fileToLoad").files[0];
 
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent) 
    {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        document.getElementById("inputTextToSave").value = textFromFileLoaded;
    };
    fileReader.readAsText(fileToLoad, "UTF-8");
}
