$(document).ready(function(){

  // This is a bit of a hack, but it moves us forward modal-wise
  $('[data-toggle="modal"]').click(function(e){
    target = $(e.currentTarget).data('target');
    $('#'+target).modal();
  });

  $('button.js-close').on('click', function(e){
    target = $(e.currentTarget).data('target');
    $('#'+target).modal('hide');
  })

  if (window.location.hash) {
    if ($(window.location.hash+'.modal').size() > 0) {
      $(window.location.hash).modal();
    }
  }

  $('.modal').on('hidden.bs.modal', function(e) {
    if (history.pushState) {
      history.pushState("", document.title, window.location.pathname + window.location.search);
    } else {
      location.hash = '';
    }
  })
});