jQuery(function($) {


    // ============ ADD TO FAVOURITE BUTTON ============
    $('.add_to_fav').on('click', function() {
        $(this).toggleClass('active');
        $(this).find('i').toggleClass('fa-heart-o')
        $(this).find('i').toggleClass('fa-heart')
    })

    // ============ ADD TO FAVOURITE BUTTON ============


    // ============ HEADER CATALOG TRIGGER ============
    $('.header_catalog').on('click', function(){
        $(this).toggleClass('active');
        $('.header_catalog_content').toggleClass('active');
    })
    // ============ HEADER CATALOG TRIGGER ============


    // ============ INSTAGRAM FEED ============


    $(window).on("load", function () {
        $.instagramFeed({
            username: "the_snigga", //Имя пользователя
            container: "#inst_main_photo", //Контейнер для изображений
            display_profile: false, //Отображение профиля
            display_biography: false, //Отображение биографии
            display_gallery: true, //Отображение галереи
            styling: true, //Стандартные стили библиотеки
            items: 1, //Количество изображений в галереи
            items_per_row: 1, //Количество изображений в ряд
            margin: 0, //Отступ между изображениями
        });

        $.instagramFeed({
            username: "the_snigga", //Имя пользователя
            container: "#inst_main_collection", //Контейнер для изображений
            display_profile: false, //Отображение профиля
            display_biography: false, //Отображение биографии
            display_gallery: true, //Отображение галереи
            styling: true, //Стандартные стили библиотеки
            items: 7, //Количество изображений в галереи
            items_per_row: 3, //Количество изображений в ряд
            margin: 0, //Отступ между изображениями
        });
    });

    // ============ INSTAGRAM FEED ============


})