$(function () {
    $("#navbar-toggle").click(function () {
        function hideResponMenu() {
            $("#navbar-toggle").removeClass('open');
            $("#wp-respon-menu").slideUp();
            $('i.respon-menu-toggle').removeClass('open-submenu');
            $('#respon-menu .sub-menu').slideUp();
        }
        $(this).toggleClass('open');
        $("#wp-respon-menu").stop().slideToggle();

        $(window).resize(hideResponMenu);
        $(window).scroll(hideResponMenu);

        // Ẩn submenu khi click vào navbar-toggle
        if ($('i.respon-menu-toggle').hasClass('open-submenu')) {
            hideResponMenu()
        }
    });
    // Ẩn hiện submenu khi click vào thanh submenu
    $('#respon-menu>li>a').click(function () {
        $(this).next('i.respon-menu-toggle').toggleClass('open-submenu')
        $(this).nextAll('#respon-menu .sub-menu').stop().slideToggle();
        return false;
    })
    // Ẩn hiện submenu khi click vào respon-menu-toggle
    $('i.respon-menu-toggle').click(function () {
        $(this).toggleClass('open-submenu')
        $(this).next('#respon-menu .sub-menu').stop().slideToggle();
    })

    // Xuất hiện backtop
    $(window).scroll(function () {
        // console.log('Vừa scroll')
        // console.log($(this).scrollTop())
        if ($(this).scrollTop() >= 400)
            $('#back-top').fadeIn();
        else
            $('#back-top').fadeOut();
    });
    // Sự kiện click backtop
    $('#back-top').click(function () {
        $('html, body').animate(
            { scrollTop: 0 },
            200
        )
    })
});

