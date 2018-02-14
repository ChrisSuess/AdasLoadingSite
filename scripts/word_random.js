function parseText(id){
var content = document.getElementById(id).innerHTML;
document.getElementById(id).innerHTML = "";
var n = content.length;
for(var c = 0;c < n;c++){
var letter = content.charAt(c);
document.getElementById(id).innerHTML += "<span id='span"+c+"'>"+letter+"</span>";
}
}

function animateText(id,rate,numbers){
var result = scrambleText(id,numbers);
if(result != false){
window.setTimeout(function(){animateText(id,rate,result)},rate*1000);
}
}


function scrambleText(id,numbers){


var max = parseInt(document.getElementById(id).lastChild.id.substring(4)) -1;
console.log("first max: "+max);
if(numbers == null){
var numbers = [1];

for(var c = 0;c <= max;c++){
numbers[c] = c;
}
}

var randmax = numbers.length - 1;
if(randmax < 1){
document.getElementById("span"+numbers[0]).style.color="red";
console.log("end: "+randmax);
return false;

}
else{

console.log(randmax+" numbers to choose from.");

var key1 = numbers.splice(Math.round(Math.random()*randmax-1),1)[0];
randmax = numbers.length - 1;

console.log(randmax+" numbers to choose from."); 

var key2 = numbers.splice(Math.round(Math.random()*randmax-1),1)[0];

console.log(key1+" switches with "+key2);
var id1 = "span"+key1;
var id2 = "span"+key2;

var rect1 = document.getElementById(id1).getBoundingClientRect();
var rect2 = document.getElementById(id2).getBoundingClientRect();
var left1 = rect1.left;
var left2 = rect2.left;
var top1 = rect1.top;
var top2 = rect2.top;


var dif1 = left2 - left1;
var dif2 = left1 - left2;
var tdif1 = top2 - top1;
var tdif2 = top1 - top2;

//var new1 = left1 + dif;
//var new2 = left2 - dif;

document.getElementById(id1).style.position="relative";
document.getElementById(id2).style.position="relative";

document.getElementById(id1).style.left=dif1+"px";
document.getElementById(id2).style.left=dif2+"px";

document.getElementById(id1).style.top=tdif1+"px";
document.getElementById(id2).style.top=tdif2+"px";

document.getElementById(id1).style.color="red";
document.getElementById(id2).style.color="red";

return numbers;
}
}
