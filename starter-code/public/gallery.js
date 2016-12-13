console.log('gallery.js connected');
$(document).ready(function(){
  console.log('DOM ready');

  ///Artwork AJAX
  $('#new-artwork-form').on('submit', function(event){
      event.preventDefault();
      $.ajax({
        url: 'http://localhost:3000/pick-a-number',
        method: 'GET',
        data: $('#new-artwork-form').serialize(),
        success: artSuccess,
        error: onError
    });
  });

  function artSuccess(guessResponse){
  console.log(guessResponse);
  $('#high-low-correct').html(guessResponse);
  }

  function onError(xhr, status, errorThrown){
  }
