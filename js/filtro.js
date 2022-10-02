let botonesFiltros = document.querySelectorAll(".btn___filtro");

for (let i = 0; i < botonesFiltros.length; i++) {
  botonesFiltros[i].addEventListener("click", filtroExpansible);
}

function filtroExpansible() {
  let filtro = this.parentElement.querySelector(".sub---menu");

  let filtros = document.querySelectorAll(".sub---menu");

  let filtroVisible =
    filtro.classList.value.indexOf("filtro---desplegado") > -1;

  for (let i = 0; i < filtros.length; i++) {
    filtros[i].classList.remove("filtro---desplegado");
  }

  if (!filtroVisible) {
    filtro.classList.add("filtro---desplegado");
  }
}
