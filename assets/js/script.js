$(document).ready(function(){
  $(".card .card-body .card-title").click(function(){
    $(this).siblings(".card-text").toggle(); //sibling llama al hermano
  });
  $('[data-toggle="tooltip"]').tooltip();


  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });
});
