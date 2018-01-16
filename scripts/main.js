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
