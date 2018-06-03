$(document).ready(function(){
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