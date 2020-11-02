jQuery(function() {
    $('.add_to_fav').on('click', function() {
        $(this).toggleClass('active');
        $(this).find('i').toggleClass('fa-heart-o')
        $(this).find('i').toggleClass('fa-heart')
    })
})