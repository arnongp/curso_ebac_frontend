const form = document.getElementById('form-numero')
const campoA = document.getElementById('campoA')
const campoB = document.getElementById('campoB')

let formEValido = false

function validaForm(numero2, numero1) {
  return parseInt(numero2) > parseInt(numero1)
}

form.addEventListener('submit', function (e) {
  e.preventDefault()

  const containerMessage = document.querySelector('.message-form')

  if (formEValido) {
    containerMessage.innerHTML = 'Formulário é válido'
    containerMessage.classList.add('success')
    containerMessage.classList.remove('error')
    campoA.value = ''
    campoB.value = ''
  } else {
    containerMessage.innerHTML = 'Formulário inválido'
    containerMessage.classList.add('error')
    containerMessage.classList.remove('success')
    campoA.value = ''
    campoB.value = ''
  }
})

campoA.addEventListener |
  campoB.addEventListener('keyup', function (e) {
    formEValido = validaForm(campoB.value, campoA.value)

    if (!formEValido) {
      document.querySelector('.message-alert').classList.add('alert')
      document.querySelector('.message-alert').style.display = 'block'
      document.querySelector('.message-alert').innerHTML =
        'Campo B deve ser maior que Campo A'
    } else {
      document.querySelector('.message-alert').style.display = 'none'
    }
  })
