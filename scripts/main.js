//var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello shansh!';

function PrintPoem() {
		var x = document.getElementById("poem").value;
		document.getElementById("Shansh").innerHTML = x.replace(/\n/g, "<br>");
		var y = document.getElementById('poem').value.split(" ").sort(function(){return 0.5-Math.random()}).join(" ");
		document.getElementById('Pansh').innerHTML = y;
                document.getElementById('hidden').innerHTML = y;
                document.getElementById("poemEnter").style.display='none';
		document.getElementById("load").style.display='none';
}

function reShuffle() {
                var y = document.getElementById('hidden').textContent.split(" ").sort(function(){return 0.5-Math.random()}).join(" ");
                ampMove = y.replace(/&/g, " ");
                document.getElementById('Pansh').innerHTML = ampMove;
                document.getElementById('hidden').innerHTML = y;
}

function promptNewInnerHtml() {
                var userText = prompt("Input some text.");
                var elem = document.getElementById("hidden").textContent;
                var added = elem + " " + userText
		document.getElementById("hidden").innerHTML = added;
		document.getElementById("Pansh").innerHTML = added.replace(/&/g, " ");
}

function allowDrop(ev) {
        ev.preventDefault();
                }

function drag(ev) {
        ev.dataTransfer.setData("Text", ev.target.id);
                }

function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("Text");
        ev.target.appendChild(document.getElementById(data));
                }

function saveTextAsFile() {
    var textToSave = document.getElementById("Pansh").value;
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
