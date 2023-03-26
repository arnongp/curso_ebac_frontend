const form = document.getElementById('form-valida')
var formularioEValido

function validaFormulario(campo1, campo2) {
  let numero1 = parseInt(campo1)
  let numero2 = parseInt(campo2)
  formularioEValido = numero2 > numero1
  return formularioEValido
}

validaFormulario(41, 121)

form.addEventListener('submit', function (e) {
  e.preventDefault()

  if (formularioEValido) {
    document.querySelector('#message').innerHTML = 'Formulário Válido'
    console.log('Formulário Válido')
    campoA.value = ''
    campoB.value = ''
  } else {
    document.querySelector('#message').innerHTML = 'Formulário Inválido'
    console.log('Formulário Inválido')
    campoA.value = ''
    campoB.value = ''
  }
})
