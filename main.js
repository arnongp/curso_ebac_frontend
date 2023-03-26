const form = document.getElementById('form-valida')
var formularioEValido

function validaFormulario(campo1, campo2) {
  let numero1 = parseInt(campo1)
  let numero2 = parseInt(campo2)
  formularioEValido = numero2 > numero1
  console.log(formularioEValido)
  console.log(numero1)
  console.log(numero2)
  return formularioEValido
}

validaFormulario(31, 61)

form.addEventListener('submit', function (e) {
  e.preventDefault()

  if (formularioEValido) {
    //const containerMensagemSucesso = document.querySelector('.success-message')
    //containerMensagemSucesso.innerHTML = mensagemDeSucesso
    //containerMensagemSucesso.style.display = 'block'

    CampoA.value = ''
    CampoB.value = ''
    mensagem.value = ''
    console.log('deu bom')
  } else {
    console.log('deu ruim')
  }
})
