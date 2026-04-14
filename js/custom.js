var info, resulexterior, menu, content, body, botaoentrar;

function inforaiz() {
  info = document.getElementById("informacoes");
  info.classList.add("info");
  document.getElementById("informacoes").innerHTML =
    '<button onclick="infotirar()">X</button>   <h5 id="h51">Radicando</h5>   <p>O radicando é o número que está dentro da raiz.</p>   <img id="radicandoimagem" src="img/radicando.svg"> <h5 id="h52">Índice</h5>  <p>Já o índice é o número que está por cima da raiz</p> <img id=indiceimagem src="img/indice.svg">';
}
function infopotencia() {
  info = document.getElementById("informacoes");
  info.classList.add("info");
  document.getElementById("informacoes").innerHTML =
    '<button onclick="infotirar()">X</button>   <h5 id="h501">Base</h5>   <p>A base é o número que está embaixo, este que será operado.</p>   <h5 id="h502"> Expoente</h5> <p>O expoente é o número que fica na parte superior da potência. Este que "dita" quantas vezes a base será multiplicada por ela mesma.</p> <img src="img/potencia.svg" id="potenciaimagem">';
}
function infotirar() {
  info = document.getElementById("informacoes");
  info.classList.remove("info");
  document.getElementById("informacoes").innerHTML = "";
}

