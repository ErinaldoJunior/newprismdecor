$(document).ready(function() {
    // Inicializa os carousels
    $('#myCarousel, #carousel-thumbs').carousel({
      interval: false
    });
  
    // Manipula os thumbnails do carousel
    $('[id^=carousel-selector-]').on('click', function() {
      var id = parseInt($(this).attr('id').split('-').pop());
      $('#myCarousel').carousel(id);
    });
  
  
    // Esconde as setas de navegação se houver poucos itens
    if ($('#carousel-thumbs .carousel-item').length < 2) {
      $('#carousel-thumbs [class^=carousel-control-]').remove();
      $('.machine-carousel-container #carousel-thumbs').css('padding', '0 5px');
    }
  
    // Atualiza automaticamente ao deslizar o carousel
    $('#myCarousel').on('slide.bs.carousel', function(e) {
      var id = parseInt($(e.relatedTarget).attr('data-slide-number'));
      $('[id^=carousel-selector-]').removeClass('selected');
      $('[id=carousel-selector-' + id + ']').addClass('selected');
    });
  
    // Navegação por gestos swipe
    $('#myCarousel').on('swipeleft', function() {
      $(this).carousel('next');
    }).on('swiperight', function() {
      $(this).carousel('prev');
    });
  
    // Lightbox para imagens
    $('[data-toggle="lightbox"]').on('click', function(event) {
      event.preventDefault();
      var src = $(this).attr('href');
      if (src) {
        $('body').append('<div class="lightbox-overlay"></div>');
        $('body').append('<div class="lightbox"><img src="' + src + '" alt=""></div>');
      }
    });
  
    // Lightbox para imagens do carousel
    $('#myCarousel .carousel-item img').on('click', function(e) {
      var src = $(e.target).attr('data-remote');
      if (src) {
        $('body').append('<div class="lightbox-overlay"></div>');
        $('body').append('<div class="lightbox"><img src="' + src + '" alt=""></div>');
      }
    });
  
    // Fecha o lightbox ao clicar fora da imagem
    $(document).on('click', '.lightbox-overlay', function() {
      $('.lightbox, .lightbox-overlay').remove();
    });
  });
  

  $(document).ready(function() {
    // Inicializa os carousels
    $('#myCarousel2, #carousel-thumbs2').carousel({
      interval: false
    });
  
    // Manipula os thumbnails do carousel
    $('[id^=carousel-selector-]').on('click', function() {
      var id = parseInt($(this).attr('id').split('-').pop());
      $('#myCarousel2').carousel(id);
    });
  
  
    // Esconde as setas de navegação se houver poucos itens
    if ($('#carousel-thumbs .carousel-item').length < 2) {
      $('#carousel-thumbs [class^=carousel-control-]').remove();
      $('.machine-carousel-container #carousel-thumbs').css('padding', '0 5px');
    }
  
    // Atualiza automaticamente ao deslizar o carousel
    $('#myCarousel2').on('slide.bs.carousel', function(e) {
      var id = parseInt($(e.relatedTarget).attr('data-slide-number'));
      $('[id^=carousel-selector-]').removeClass('selected');
      $('[id=carousel-selector-' + id + ']').addClass('selected');
    });
  
    // Navegação por gestos swipe
    $('#myCarousel2').on('swipeleft', function() {
      $(this).carousel('next');
    }).on('swiperight', function() {
      $(this).carousel('prev');
    });
  
    // Lightbox para imagens
    $('[data-toggle="lightbox"]').on('click', function(event) {
      event.preventDefault();
      var src = $(this).attr('href');
      if (src) {
        $('body').append('<div class="lightbox-overlay"></div>');
        $('body').append('<div class="lightbox"><img src="' + src + '" alt=""></div>');
      }
    });
  
    // Lightbox para imagens do carousel
    $('#myCarousel2 .carousel-item img').on('click', function(e) {
      var src = $(e.target).attr('data-remote');
      if (src) {
        $('body').append('<div class="lightbox-overlay"></div>');
        $('body').append('<div class="lightbox"><img src="' + src + '" alt=""></div>');
      }
    });
  
    // Fecha o lightbox ao clicar fora da imagem
    $(document).on('click', '.lightbox-overlay', function() {
      $('.lightbox, .lightbox-overlay').remove();
    });
  });
  