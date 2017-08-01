
var aux;

function preloading() {
    aux = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("globalUniverse").style.display = "block";
}
