var atual;
var localStorage = Window.localStorage;

// FUNCAO DE CADASTRO
function cadastrar() {
  var novo = new Object();
  novo.nome = document.getElementById("nome").value;
  novo.email = document.getElementById("email").value;
  novo.senha = document.getElementById("senha").value;
  novo.confsenha = document.getElementById("confsenha").value;
  window.alert("Cadastro concluído com sucesso!");
  var jt = JSON.stringify(novo);
  localStorage.setItem(novo.email, jt);
}

// FUNCAO AO LOGAR
window.onload = function usuarioLogado() {
  let nomeUsuario = localStorage.getItem("usuario_logado_nome");
  if (nomeUsuario == null || nomeUsuario == "" || nomeUsuario == "null") {
    //    location.href = "/src/index.html";
  }
  var tagA = document.getElementById("nome");
  tagA.innerHTML = `${nomeUsuario}`;
  var tagA = document.getElementById("nome2");
  tagA.innerHTML = `${nomeUsuario}`;
  var tagA = document.getElementById("nome3");
  tagA.innerHTML = `${nomeUsuario}`;
  var tagA = document.getElementById("nome4");
  tagA.innerHTML = `${nomeUsuario}`;
  var tagA = document.getElementById("nome5");
  tagA.innerHTML = `${nomeUsuario}`;
  var tagA = document.getElementById("nome6");
  tagA.innerHTML = `${nomeUsuario}`;
};

// FUNCAO AO DESLOGAR
function logout() {
  // window.alert("");
  localStorage.removeItem("usuario_logado");
  location.href = "/src/index.html";
}
