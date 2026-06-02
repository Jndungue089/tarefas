// T1 - Formulário
const formulario = document.getElementById('formularioContato');
const resultadoFormulario = document.getElementById('resultadoFormulario');

formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  resultadoFormulario.textContent = `Nome: ${nome} | Email: ${email} | Mensagem: ${mensagem}`;

  formulario.reset();
});

// T2 - Mini pauta
const adicionarPauta = document.getElementById('adicionarPauta');
const corpoTabelaPauta = document.getElementById('corpoTabelaPauta');
let contador = 0;

adicionarPauta.addEventListener('click', () => {
  const tema = document.getElementById('tema').value.trim();
  const responsavel = document.getElementById('responsavel').value.trim();
  const status = document.getElementById('status').value;

  if (!tema || !responsavel) {
    alert('Preencha tema e responsável para adicionar a mini pauta.');
    return;
  }

  contador += 1;
  const linha = document.createElement('tr');
  const colunaNumero = document.createElement('td');
  const colunaTema = document.createElement('td');
  const colunaResponsavel = document.createElement('td');
  const colunaStatus = document.createElement('td');

  colunaNumero.textContent = String(contador);
  colunaTema.textContent = tema;
  colunaResponsavel.textContent = responsavel;
  colunaStatus.textContent = status;

  linha.appendChild(colunaNumero);
  linha.appendChild(colunaTema);
  linha.appendChild(colunaResponsavel);
  linha.appendChild(colunaStatus);

  corpoTabelaPauta.appendChild(linha);

  document.getElementById('tema').value = '';
  document.getElementById('responsavel').value = '';
  document.getElementById('status').value = 'Pendente';
});

// T3 - Manipulação de texto
const textoOriginal = document.getElementById('textoOriginal');
const resultadoTexto = document.getElementById('resultadoTexto');

const atualizarResultado = (texto) => {
  resultadoTexto.textContent = texto || '---';
};

document.getElementById('btnMaiusculas').addEventListener('click', () => {
  atualizarResultado(textoOriginal.value.toUpperCase());
});

document.getElementById('btnMinusculas').addEventListener('click', () => {
  atualizarResultado(textoOriginal.value.toLowerCase());
});

document.getElementById('btnInverter').addEventListener('click', () => {
  const invertido = textoOriginal.value.split('').reverse().join('');
  atualizarResultado(invertido);
});

document.getElementById('btnLimpar').addEventListener('click', () => {
  textoOriginal.value = '';
  atualizarResultado('');
});
