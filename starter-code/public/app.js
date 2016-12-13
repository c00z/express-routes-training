console.log('app.js connected');
$(document).ready(function(){
  console.log('DOM ready');

///Guess the number AJAX
$('#guess-number-form').on('submit', function(event){
    event.preventDefault();
    $.ajax({
      url: 'http://localhost:3000/pick-a-number',
      method: 'GET',
      data: $('#guess-number-form').serialize(),
      success: handleGuessSuccess,
      error: onError
  });
});

function handleGuessSuccess(guessResponse){
console.log(guessResponse);
$('#high-low-correct').html(guessResponse);
}

function onError(xhr, status, errorThrown){
}

///Change the number AJAX
$('#target-number-form').on('submit', function(event){
        event.preventDefault();
        $.ajax({
          url: 'http://localhost:3000/pick-a-number',
          method: 'PUSH',
          data: $('#target-number-form').serialize(),
          success: handleChangeSuccess,
          error: onErrorChange
  });
});

  function handleChangeSuccess(guessResponse){
    console.log(guessResponse);
    $('#target-number-form').html(guessResponse);
  }

function onErrorChange(xhr, status, errorThrown){
  }

});
