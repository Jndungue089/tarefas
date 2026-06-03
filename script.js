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
