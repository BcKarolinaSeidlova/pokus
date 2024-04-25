var prvni = document.getElementById("Prvni");
var prvniO = document.getElementById("PrvniO");

var druhy = document.getElementById("Druhy");
var druhyO = document.getElementById("DruhyO");

var treti = document.getElementById("Treti");
var tretiO = document.getElementById("TretiO");


prvni.addEventListener("click", Show.bind(prvniO, druhyO, tretiO));
druhy.addEventListener("click", Show.bind(druhyO, prvniO, tretiO));
treti.addEventListener("click", Show.bind(tretiO, prvniO, druhyO));


function Show (A, B, C) {
  if (A.style.getPropertyValue("display") == "none") {
    
   A.style.setProperty("display", "flex");
   B.style.setProperty("display", "none");
   C.style.setProperty("display", "none");
} 
  else {
  A.style.setProperty("display", "none");
  }
}
