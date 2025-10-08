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
function abrirmenu() {
  menu = document.getElementById("lateralmenu");
  content = document.getElementById("content");
  body = document.getElementById("body");
  botaoentrar = document.getElementById("menubutton");
  menu.classList.add("menuopened");
  content.classList.add("blurcontent");
  content.classList.add("corrigircontent");
  body.classList.add("blurwallpaper");
  botaoentrar.classList.remove("openmenu");
  botaoentrar.classList.add("desaparecerbotao");
  document.getElementById("lateralmenu").innerHTML =
    '<button onclick="fecharmenu()" id="fecharmenu">X</button> <div id="menuoptions">  <div class="menuoption"><a href=""><img src="img/buttonexit.svg">Sair</a></div> <div class="menuoption"><a href="info.html"><img src="img/infoicon.svg">Informações</a></div> <div class="menuoption"><a></a></div> <div class="menuoption"><a></a></div> <div class="menuoption"><a></a></div>  </div>';
}
function fecharmenu() {
  menu = document.getElementById("lateralmenu");
  content = document.getElementById("content");
  body = document.getElementById("body");
  menu.classList.remove("menuopened");
  content.classList.remove("blurcontent");
  content.classList.remove("corrigircontent");
  body.classList.remove("blurwallpaper");
  botaoentrar.classList.add("openmenu");
  botaoentrar.classList.remove("desaparecerbotao");
  document.getElementById("lateralmenu").innerHTML = "";
}
