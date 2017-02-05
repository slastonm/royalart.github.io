
$('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
        columnWidth: '.grid-sizer'
    }
});

$( document ).ready(function() {
    $('.show-menu').click( function(event){
        event.preventDefault();
        $('#overlay').fadeIn(100,
            function(){
                $('.aside-menu')
                    .css('display', 'block') //
                    .animate({opacity: 1, left: '0'}, 100);
            });

    });

    $('.close, #overlay').click( function(){
        $('.aside-menu')
            .animate({opacity: 0, left: '-445px'}, 300,
                function(){
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(100);
                }
            );
    });
});

