$(document).ready(function () {
  $('form').on('submit', function (e) {
    e.preventDefault()

    const novoItem = $('#novo-item').val()
    const adicionaItem = $('<li></li>')
    $(`<a href="#">${novoItem}</a>`).appendTo(adicionaItem)
    $(adicionaItem).appendTo('ul')
    $('#novo-item').val('')
    console.log(novoItem)
    console.log(adicionaItem)
    $('a').click(function () {
      $(this).addClass('tachado')
    })
  })
})
