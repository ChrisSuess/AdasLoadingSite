function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  
//  var arrtest = document.getElementById("poem").value;
  //document.getElementById("Shansh").innerHTML = arrtest;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  
  return array;
}

var poemArray = document.getElementById('poem').value.split(' ');
poemArray = shuffle(poemArray);
document.write(poemArray.join("\n"));

//var arr = [12, 14, 16, 'Fire', 'Earth'];
//arr = shuffle(arr);
//document.write(arr.join(", "));

