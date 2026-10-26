
console.log("O script.js está ligado.");

const saudacao = document.querySelector("#saudacao");

const hora = new Date().getHours();
let cumprimento;

if (hora < 12) {
  cumprimento = "Bom dia";
} else if (hora < 18) {
  cumprimento = "Boa tarde";
} else {
  cumprimento = "Boa noite";
}

saudacao.textContent = `${cumprimento}! Que bom que você passou por aqui.`;

const botaoTema = document.querySelector("#botao-tema");
const temaNoite = document.querySelector("#tema-noite");

function trocarTema() {
  temaNoite.disabled = !temaNoite.disabled;

  if (temaNoite.disabled) {
    botaoTema.textContent = "Tema escuro";
  } else {
    botaoTema.textContent = "Tema claro";
  }
}

botaoTema.addEventListener("click", trocarTema);

const campoMensagem = document.querySelector("#mensagem");
const contador = document.querySelector("#contador");

function contarCaracteres() {
  const restam = campoMensagem.maxLength - campoMensagem.value.length;

  contador.textContent = `Restam ${restam} caracteres`;

  if (restam < 50) {
    contador.classList.add("alerta");
  } else {
    contador.classList.remove("alerta");
  }
}

campoMensagem.addEventListener("input", contarCaracteres);


const formulario = document.querySelector("form");
const campoNome = document.querySelector("#nome");
const campoAssunto = document.querySelector("#assunto");
const aviso = document.querySelector("#aviso");

function temNumero(texto) {
  let achou = false;

  for (let i = 0; i < texto.length; i++) {
    if ("0123456789".includes(texto[i])) {
      achou = true;
      break;
    }
  }

  return achou;
}

function conferirFormulario(evento) {
  evento.preventDefault();

  let nome = campoNome.value.trim();

  while (nome.includes("  ")) {
    nome = nome.replace("  ", " ");
  }

  campoNome.value = nome;   

  if (nome.length < 3 || nome.length > 60) {
    aviso.textContent = "O nome precisa ter entre 3 e 60 letras.";
  } else if (temNumero(nome)) {
    aviso.textContent = "O nome não pode ter números.";
  } else if (campoAssunto.value === "trabalho" && campoMensagem.value.trim().length < 20) {
    aviso.textContent = "Conte mais sobre a proposta (mínimo 20).";
  } else {
    aviso.textContent = "Tudo certo! (No ciclo 8, isto vai para o PHP.)";
  }
}

formulario.addEventListener("submit", conferirFormulario);

function trocarDica() {
  switch (campoAssunto.value) {
    case "duvida":
      campoMensagem.placeholder = "Qual é a sua dúvida?";
      break;
    case "trabalho":
      campoMensagem.placeholder = "Conte a proposta: o que é e o prazo.";
      break;
    default:
      campoMensagem.placeholder = "Escreva a sua mensagem.";
  }
}

campoAssunto.addEventListener("change", trocarDica);

trocarDica();
