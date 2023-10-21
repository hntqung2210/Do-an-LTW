$('select').change(function(){
    var text = $(this).find('option:selected').text()
    var $aux = $('<select/>').append($('<option/>').text(text))
    $(this).after($aux)
    $(this).width($aux.width())
    $aux.remove()
  }).change()
  