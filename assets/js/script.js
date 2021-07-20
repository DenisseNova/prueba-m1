$(document).ready(function(){
  $(".card .card-body .card-title").click(function(){
    $(this).siblings(".card-text").toggle(); //sibling llama al hermano
  });
  $('[data-toggle="tooltip"]').tooltip()
});