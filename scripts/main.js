//var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello shansh!';

function PrintPoem() {
		var x = document.getElementById("poem").value;
		document.getElementById("Shansh").innerHTML = x;
		var y = document.getElementById('poem').value.split(" ").sort(function(){return 0.5-Math.random()}).join(" ");
		document.getElementById('Pansh').innerHTML = y;
                document.getElementById('hidden').innerHTML = y;
                document.getElementById("poem").style.display='none';
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
