document.getElementById('search-bar').style.display = 'none'
let search  = document.getElementById('search-logo')

search.addEventListener('click', function () {

    if (document.getElementById('search-bar').style.display === 'none'
    ) {
        
        document.getElementById('search-bar').style.display = 'block'

    } else {
        document.getElementById('search-bar').style.display = 'none'

    }

});

$(document).ready(function(){
    $('.courasel-large-img').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
  });

  /*
$(document).ready(function(){
    $('#best-seller-product').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        slidesToShow:4,
        slidesToScroll: 1,

    });
  });
  */






                  