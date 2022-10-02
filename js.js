let texto1 = "hola";

document.querySelector("#click").addEventListener("click", funcionDeApoyo);

function funcionDeApoyo() {
  let variablelalala = textoa(texto1);
  document.querySelector("#resultado").innerHTML = variablelalala;
}

function textoa(texto) {
  let textoInvertido ="";

  for (let i = texto.length; i >= 0; i--) {
    textoInvertido += texto.charAt(i);
  }
  return textoInvertido;
}
