# Página pessoal — Alessandra Dias Werner de Jesus

**Assunto:** a página pessoal de uma estudante de Ciência da Computação, onde
quem chega vê quem ela é, o que ela estuda, os horários do semestre e como
entrar em contato.
**Disciplina:** ARA0062 — Desenvolvimento Web em HTML5, CSS, JavaScript e PHP
**Centro Universitário Newton Paiva · 2026/2**

---

## Sobre o projeto

Uma página pessoal de estudante, feita à mão desde a aula 02. Quem chega nela
é alguém que quer saber quem é o autor: um colega de turma, um professor, ou
alguém que recebeu o link numa candidatura de estágio. O que essa pessoa vem
fazer aqui é ler uma apresentação curta, olhar os horários de aula e mandar
uma mensagem pelo formulário.

Dos ciclos 8 a 10 a página ganha o envio de verdade: o formulário passa a
gravar as mensagens num banco de dados, com uma página que lista o que foi
recebido.

---

## Identidade visual

As decisões estão aplicadas em `frontend/css/estilo.css`, todas no `:root`, e
não mudaram neste ciclo.

| Papel | Cor | Por que esta |
|---|---|---|
| `--principal` | `#88005b` | o magenta da Newton Paiva: a página é de um aluno da instituição, e o cabeçalho assume isso |
| `--sobre-principal` | `#ffffff` | branco é o único que passa com folga em cima do magenta |
| `--barra` | `#560035` | o mesmo magenta escurecido, para o menu e o rodapé |
| `--apoio` | `#053e60` | o azul institucional, onde a informação é técnica — `h3` e cabeçalho da tabela |
| `--realce` | `#dfa03f` | o dourado só aparece no contorno do foco, onde precisa gritar |
| `--fundo` | `#f4eff2` | um cinza com um pingo de magenta, para o cartão branco do conteúdo se destacar |
| `--superficie` | `#ffffff` | o branco do conteúdo, onde mora o texto longo |
| `--texto` | `#231f20` | quase preto, e não preto puro: cansa menos em texto corrido |

**Fonte:** `"Poppins"`, com plano B `"Segoe UI", Arial, Helvetica, sans-serif`
· **Escala:** `h1` 2.5rem · `h2` 1.75rem · `h3` 1.25rem · corpo 1rem
· **Segundo tema:** `frontend/css/tema-noite.css`, um modo escuro que só
redefine as variáveis de cor.

---

## JavaScript

Todo o comportamento está em `frontend/js/script.js`, ligado ao `index.html`
por `<script src="js/script.js" defer>`. Não há JavaScript dentro do HTML:
nenhum `<script>` com código e nenhum `onclick=""`.

### O que a página faz

| Comportamento | Onde se vê | Como funciona |
|---|---|---|
| **Saudação pelo horário** | a frase logo abaixo do nome, no cabeçalho | lê a hora do computador de quem visita e escolhe entre *Bom dia*, *Boa tarde* e *Boa noite* com `if` / `else if` / `else` |
| **Botão de tema** | o botão *Tema escuro* do cabeçalho | um clique liga ou desliga o `<link>` do `tema-noite.css` (propriedade `disabled`) e troca o rótulo do botão |
| **Contador da mensagem** | embaixo do campo *Mensagem* | a cada tecla, mostra quantos caracteres ainda cabem; faltando menos de 50, acrescenta a classe `alerta` |
| **Validação do formulário** | o aviso embaixo dos botões, ao clicar em *Enviar* | o evento `submit` cancela o envio e confere as regras abaixo, uma de cada vez, com `if` / `else if` |
| **Dica da mensagem** | o texto cinza dentro do campo *Mensagem* | muda conforme o *Assunto* escolhido, com `switch` |

### As regras da validação

O HTML confere primeiro: `required` nos campos obrigatórios, `type="email"` no
e-mail e `maxlength` na mensagem. O JavaScript confere o que o HTML não sabe:

| Campo | Regra | Estrutura usada |
|---|---|---|
| Nome | os espaços duplos do meio são tirados antes de conferir | `while` |
| Nome | entre 3 e 60 caracteres, sem contar os espaços das pontas | `if` com `\|\|` |
| Nome | nenhum número — `X Æ A-12` é recusado | `for` com `break`, numa função que devolve `true` ou `false` |
| Mensagem | se o assunto for *proposta de trabalho*, pelo menos 20 caracteres | `else if` com `&&` |
| Mensagem | a dica do campo acompanha o assunto | `switch` com `case`, `break` e `default` |

O envio fica **sempre cancelado** até o ciclo 8: ainda não há servidor para
receber os dados. O aviso diz se eles passariam.

**Console conferido** no Chrome e no Firefox, com `Ctrl + F5`: nenhuma
mensagem de erro ao carregar, ao trocar o tema, ao digitar a mensagem, ao
trocar o assunto e ao enviar com cada uma das regras quebrada.

---

## A estrutura

```
.
├─ README.md                 esta folha de rosto
├─ frontend/                 tudo o que roda no NAVEGADOR (client-side)
│   ├─ index.html
│   ├─ css/
│   │   ├─ estilo.css        a folha do projeto; a seção 10 é a do aviso
│   │   └─ tema-noite.css    o segundo tema: só variáveis
│   ├─ js/
│   │   └─ script.js         o comportamento da página, em sete seções
│   └─ img/
│       └─ foto.jpg          imagem de espaço reservado; troque pela sua
└─ backend/                  tudo o que roda no SERVIDOR (server-side)
    ├─ config/
    │   └─ conexao.php       vazio até o ciclo 8
    └─ processa-contato.php
```

---
