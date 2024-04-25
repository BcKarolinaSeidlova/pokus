var prvni = document.getElementById("Prvni");
var DIV1 = document.getElementById("DIV1");

var druhy = document.getElementById("Druhy");
var DIV2 = document.getElementById("DIV2");

var treti = document.getElementById("Treti");
var DIV3 = document.getElementById("DIV3");

var ctvrty = document.getElementById("Ctvrty");
var DIV4 = document.getElementById("DIV4");

prvni.addEventListener("click", Show.bind(null, DIV1, DIV2, DIV3));
druhy.addEventListener("click", Show.bind(null, DIV2, DIV1, DIV3));
treti.addEventListener("click", Show.bind(null, DIV3, DIV1, DIV2));
ctvrty.addEventListerner("click", ShowAll);

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

function ShowAll () {
 DIV1.style.setProperty("display","flex");
 DIV2.style.setProperty("display","flex");
 DIV3.style.setProperty("display","flex");
}
