var numI, numII, resul, preresul, numItroca, numIItroca, remember;

remember = "";
function pegar() {
  numI = parseFloat(document.getElementById("numI").value);
  numII = parseFloat(document.getElementById("numII").value);
}
function papelparedeblackhole() {
  document.getElementById("body").classList.remove("padrao");
  document.getElementById("body").classList.add("buraconegro");
}
function voltarpapelparedepadrao() {
  document.getElementById("body").classList.add("padrao");
  document.getElementById("body").classList.remove("buraconegro");
}

function multi() {
  /*Função de Multiplicação*/
  limpaprevisu();
  pegar();
  resul = numI * numII;
  if (Number.isNaN(resul)) {
    document.getElementById("resuloutput").innerHTML = "Erro";
  } else {
    document.getElementById("resuloutput").innerHTML =
      numI + " x " + numII + " = " + resul;
    voltarpapelparedepadrao();
  }
  remember = "multi";
}
function divid() {
  /*Divisão */
  limpaprevisu();
  pegar();
  resul = numI / numII;

  if (Number.isNaN(resul)) {
    document.getElementById("resuloutput").innerHTML = "Erro";
  } else if (numII == 0) {
    document.getElementById("resuloutput").innerHTML = "Criando buraco negro";
    papelparedeblackhole();
  } else {
    document.getElementById("resuloutput").innerHTML =
      numI + " : " + numII + " = " + resul;
    voltarpapelparedepadrao();
  }
  remember = "divid";
}
function adiciona() {
  /*Adição*/
  limpaprevisu();
  pegar();
  resul = numI + numII;
  if (Number.isNaN(resul)) {
    document.getElementById("resuloutput").innerHTML = "Erro";
  } else {
    document.getElementById("resuloutput").innerHTML =
      numI + " + " + numII + " = " + resul;
    voltarpapelparedepadrao();
  }
  remember = "adiciona";
}
function subtra() {
  /*Subtração*/
  limpaprevisu();
  pegar();
  resul = numI - numII;
  if (Number.isNaN(resul)) {
    document.getElementById("resuloutput").innerHTML = "Erro";
  } else {
    document.getElementById("resuloutput").innerHTML =
      numI + " - " + numII + " = " + resul;
    voltarpapelparedepadrao();
  }
  remember = "subtra";
}
function media() {
  /*Média*/
  limpaprevisu();
  pegar();
  resul = (numI + numII) / 2;
  if (Number.isNaN(resul)) {
    document.getElementById("resuloutput").innerHTML = "Erro";
  } else {
    document.getElementById("resuloutput").innerHTML =
      "A média de " + numI + " e " + numII + " é " + resul;
    voltarpapelparedepadrao();
  }
  remember = "media";
}
function potencia() {
  /*Potência*/
  document.getElementById("label_input1").innerHTML =
    '<span onclick="infopotencia()" class="infospan">Base (?)</span>';
  document.getElementById("label_input2").innerHTML =
    '<span onclick="infopotencia()" class="infospan">Expoente (?)</span>';
  pegar();
  resul = numI ** numII;
  if (Number.isNaN(resul)) {
    document.getElementById("resuloutput").innerHTML = "Erro";
  } else if (resul === Infinity) {
    document.getElementById("resuloutput").innerHTML = "Valor muito grande";
  } else if (Number.isNaN(numI)) {
    document.getElementById("resuloutput").innerHTML = "Erro";
  } else if (numII < -162) {
    document.getElementById("resuloutput").innerHTML = "Valor muito pequeno";
  } else {
    document.getElementById("resuloutput").innerHTML =
      numI + "^" + numII + " = " + resul;
    voltarpapelparedepadrao();
  }
  remember = "potencia";
}
function porcent() {
  /*Porcentagem*/
  limpaprevisu();
  pegar();
  preresul = (numI / numII) * 100;
  resul = preresul.toFixed(2);
  if (Number.isNaN(preresul) || numII == 0) {
    document.getElementById("resuloutput").innerHTML = "Erro";
  } else {
    document.getElementById("resuloutput").innerHTML =
      numI + " é " + resul + "% de " + numII;
    voltarpapelparedepadrao();
  }
  remember = "porcent";
}
function raiz() {
  /*Raíz*/
  document.getElementById("label_input1").innerHTML =
    '<span onclick="inforaiz()" class="infospan" id="sp1">Radicando (?)<span>';
  document.getElementById("label_input2").innerHTML =
    '<span onclick="inforaiz()" class="infospan" id="sp2">Índice (?)</span>';
  pegar();
  resul = numI ** (1 / numII);
  if (Number.isNaN(resul)) {
    document.getElementById("resuloutput").innerHTML = "Erro";
  } else if (resul === Infinity) {
    document.getElementById("resuloutput").innerHTML = "Erro";
  } else {
    document.getElementById("resuloutput").innerHTML =
      '<strong id="indiceraiz">' +
      numII +
      " </strong>" +
      "√" +
      numI +
      " = " +
      resul;
    voltarpapelparedepadrao();
  }
  remember = "raiz";
}

function limpar() {
  /*Limpar inputs e resultado*/
  document.getElementById("label_input1").innerHTML = "";
  document.getElementById("label_input2").innerHTML = "";
  document.getElementById("resuloutput").innerHTML = " ";
  document.getElementById("numI").value = "";
  document.getElementById("numII").value = "";
  voltarpapelparedepadrao();
  remember = "";
}
function trocar() {
  /* Trocar valores de inputs*/
  document.getElementById("resuloutput").innerHTML = " ";
  document.getElementById("label_input1").innerHTML = "";
  document.getElementById("label_input2").innerHTML = "";
  pegar();
  document.getElementById("numI").value = numII;
  document.getElementById("numII").value = numI;
  voltarpapelparedepadrao();
  remember = "";
}
function previsu() {
  /*Labels de suporte para a operação de potência*/
  document.getElementById("label_input1").innerHTML = "Base";
  document.getElementById("label_input2").innerHTML = "Expoente";
}
function limpaprevisu() {
  /*Limpar Labels de suporte para a operação de potência*/
  document.getElementById("label_input1").innerHTML = " ";
  document.getElementById("label_input2").innerHTML = " ";
}
function previsu2() {
  /*Labels de suporte para a operação de raíz*/
  document.getElementById("label_input1").innerHTML = "Radicando";
  document.getElementById("label_input2").innerHTML = "Índice";
}
function limpaprevisu2() {
  /*Limpar Labels de suporte para a operação de raíz*/
  document.getElementById("label_input1").innerHTML = " ";
  document.getElementById("label_input2").innerHTML = " ";
}

function onchge() {
  if (remember == "multi") {
    multi();
  } else if (remember == "divid") {
    divid();
  } else if (remember == "adiciona") {
    adiciona();
  } else if (remember == "subtra") {
    subtra();
  } else if (remember == "media") {
    media();
  } else if (remember == "potencia") {
    potencia();
  } else if (remember == "porcent") {
    porcent();
  } else if (remember == "raiz") {
    raiz();
  }
}

alert(
  "Olá, isto é uma calculadora simples, na qual foram utilizados: HTML, CSS e JavaScript para compor este projeto. Teste quanto quiser ;-) Autor: Samuel Felipe da Silva"
);
