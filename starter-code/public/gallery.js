console.log('gallery.js connected');
$(document).ready(function(){
  console.log('DOM ready');

///Artwork Get
  $('#new-artwork-form').on('submit', function(event){
      event.preventDefault();
      $.ajax({
        url: 'http://localhost:3000/art-gallery',
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
  });


  ///Artwork Post
$('#new-artwork-form').on('submit', function(event){
    event.preventDefault();
    $.ajax({
      url: 'http://localhost:3000/art-gallery',
      method: 'POST',
      data: $('#new-artwork-form').serialize(),
      success: submitArtworkSuccess,
      error: handleError
    });
  });

  function submitArtworkSuccess(newArtworkResponse){
    console.log(newArtworkResponse);
  }

  function handleError(jqXHR, status, error){
  }
