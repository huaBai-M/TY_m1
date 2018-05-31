$(function () {
    // $('.hide_show').on('click', function () {
    //     $('.nav_hide').css('display', 'block')
    //     $('.log').css('background-color', 'transparent')
    //     $('.ct_header').css('background-color', '#0a0a0a')
    //     $('.hide_show').attr('src', 'images/index_imags/index_25.png')
    //     if ($('.hide_show').attr('src') == 'images/index_imags/index_25.png') {
    //         $('.hide_show').on('click', function () {
    //             $('.nav_hide').css('display', 'none')
    //             $('.hide_show').attr('src', 'images/index_imags/index_06.png')
    //             $('nav').css('background-color', '#666')
    //             $('.log').css('background-color', '#313131')
    //         })
    //     }
    //
    // })
    // $('.dl-menuwrapper button').click(function () {
    //     $('.header').css('background-color', '#0a0a0a')
    // })
})

$(function () {
    var $a = $('.list li a');
    $a.on('click', function() {
        $a.removeClass('active');
        $(this).addClass('active');
    })
});