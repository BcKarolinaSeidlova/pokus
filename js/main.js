var prvni = document.getElementById("Prvni");
var DIV1 = document.getElementById("PrvniO");

var druhy = document.getElementById("Druhy");
var DIV2 = document.getElementById("DruhyO");

var treti = document.getElementById("Treti");
var DIV3 = document.getElementById("TretiO");


prvni.addEventListener("click", Show.bind(DIV1, DIV2, DIV3));
druhy.addEventListener("click", Show.bind(DIV2, DIV1, DIV3));
treti.addEventListener("click", Show.bind(DIV3, DIV1, DIV2));


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
