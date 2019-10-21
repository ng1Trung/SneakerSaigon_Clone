window.addEventListener('message', (event) => {
    let nameEvent = event.data.name || ''
    console.log(nameEvent)
    switch (nameEvent) {
        case 'mounted':
            runScript()
            break;
        default:
            break;
    }
})
function runScript () {

   

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


    document.getElementById('sign-up').style.display = 'none'
    let sign  = document.getElementById('user-btn')

    sign.addEventListener('click', function () {

        if (document.getElementById('sign-up').style.display === 'none'
        ) {
            
            document.getElementById('sign-up').style.display = 'block'

        } else {
            document.getElementById('sign-up').style.display = 'none'

        }

    });


    $(document).ready(function(){
        $('.courasel-large-img').slick({
            dots: true,
            autoplay: true,
            autoplaySpeed: 3000,
            fade: true,
        });
    });

    

    $(document).ready(function(){
        $('#best-seller-product-list').slick({
            dots: true,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 1,
        

        });
    });

    $(document).ready(function(){
        $('#new-seller-product-list').slick({
            dots: true,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 1,
        });
    });
}