const form = document.getElementById('form-numero')
const campoA = document.getElementById('campoA')
const campoB = document.getElementById('campoB')

let formEValido = false

function validaForm(numero2, numero1) {
  return parseInt(numero2) > parseInt(numero1)
}

form.addEventListener('submit', function (e) {
  e.preventDefault()
})

campoB.addEventListener('keyup', function (e) {
  console.log(e.target.value)
  console.log(campoA.value)

  console.log(validaForm(130, 120))
  console.log(campoA.value)
})
