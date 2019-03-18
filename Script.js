var degrees = 0;
var test = "test";

function Rotate(el) {
  console.log(el);
  elements[el].style.transform = "rotate("+degrees+"deg)";
}

var elements = document.getElementsByClassName("arBox");
for (var i=0; i<elements.length; i++) {
  elements[i].onmouseover = function() {Rotate(i);}
  // elements[i].style.transform = "rotate("+10+"deg)";
  console.log(i);
  console.log(elements[i]);
}

var x = setInterval(function() {degrees += 1;}, 100);
