let contador = 1;
let dropdown = document.querySelector(".drop");
let marcas = document.getElementById("marcas");
document.getElementById("radio-1").checked = true;

setInterval(function () {
  nextImage();
}, 4000);

function nextImage() {
  contador++;
  if (contador > 4) {
    contador = 1;
  }
  document.getElementById("radio-" + contador).checked = true;
}


marcas.addEventListener("mouseover", function () {
  dropdown.classList.add("opacidade");
});
marcas.addEventListener("mouseleave", function () {
  dropdown.classList.remove("opacidade");
});
