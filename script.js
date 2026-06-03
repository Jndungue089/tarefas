// T1 - Formulário
const formulario = document.getElementById('formularioContato');
const resultadoFormulario = document.getElementById('resultadoFormulario');

if (formulario && resultadoFormulario) {
  formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    resultadoFormulario.textContent = `Nome: ${nome} | Email: ${email} | Mensagem: ${mensagem}`;

    formulario.reset();
  });
}

// T3 - Manipulação de texto
const textoOriginal = document.getElementById('textoOriginal');
const resultadoTexto = document.getElementById('resultadoTexto');

const atualizarResultado = (texto) => {
  if (resultadoTexto) {
    resultadoTexto.textContent = texto || '---';
  }
};

const btnMaiusculas = document.getElementById('btnMaiusculas');
const btnMinusculas = document.getElementById('btnMinusculas');
const btnInverter = document.getElementById('btnInverter');
const btnLimpar = document.getElementById('btnLimpar');

if (textoOriginal && resultadoTexto && btnMaiusculas && btnMinusculas && btnInverter && btnLimpar) {
  btnMaiusculas.addEventListener('click', () => {
    atualizarResultado(textoOriginal.value.toUpperCase());
  });

  btnMinusculas.addEventListener('click', () => {
    atualizarResultado(textoOriginal.value.toLowerCase());
  });

  btnInverter.addEventListener('click', () => {
    const invertido = textoOriginal.value.split('').reverse().join('');
    atualizarResultado(invertido);
  });

  btnLimpar.addEventListener('click', () => {
    textoOriginal.value = '';
    atualizarResultado('');
  });
}
