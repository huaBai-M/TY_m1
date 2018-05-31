$(function () {
    /*区域滚动*/
    mui('.mui-scroll-wrapper').scroll({
        indicators: false
    })
    /*轮播图*/
    mui('.mui-slider').slider({
        interval: 2000
    })
})
// $(function () {
//     var $div =$('.banner2 div');
//     // var $liBig=$('.list_big li');
//     // $liBig.each(function (index,item) {
//     //     // console.log(item)
//     //     // $liBig.attr('id',$(this).index);
//     // })
//     $div.each(function (index,item) {
//         var $pos=$(this).find('img').position();
//         var $pos_x=$pos.left;
//         var $pos_y=$pos.top;
//         $(this).append('<span><img src="images/index_imags/add_1_02.png" alt=""></span>');
//         //为新增的span添加样式
//         $(this).find('span').css({
//             'position': 'absolute',
//             'left':$pos_x,
//             'top':$pos_y,
//             'zIndex':'100',
//             'backgroundColor': 'rgba(0,0,0,0.5)'
//         });
//         $(this).find('span').width($(this).find('img').width());
//         $(this).find('span').height($(this).find('img').height());
//         $(this).find('span').find('img').width($(this).find('img').width());
//         $(this).find('span').find('img').height($(this).find('img').height());
//         $div.find('span').css('display','none');
//         $('.banner2 div:eq(0)').find('span').css('display','block');
//         $(this).click(function () {
//             $div.find('span').css('display','none');
//             $(this).find('span').css('display','block');
//         })
//     })
// })
$(function () {
    var $div =$('.banner4 div');
    // var $liBig=$('.list_big li');
    // $liBig.each(function (index,item) {
    //     // console.log(item)
    //     // $liBig.attr('id',$(this).index);
    // })
    $div.each(function (index,item) {
        var $pos=$(this).find('img').position();
        var $pos_x=$pos.left;
        var $pos_y=$pos.top;
        $(this).append('<span><img src="images/index_imags/add_06.png" alt=""><p class="text_inner">办公室</p></span>');
        //为新增的span添加样式
        $(this).find('span').css({
            'position': 'absolute',
            'left':$pos_x,
            'top':$pos_y,
            'zIndex':'1000',
            'backgroundColor': 'rgba(0,0,0,0.8)'
        });
        $(this).find('span').width($(this).find('img').width());
        $(this).find('span').height($(this).find('img').height());
        $div.find('span').css('display','none');
        $('.banner4 div:eq(0)').find('span').css('display','block');
        $(this).click(function () {
            $div.find('span').css('display','none');
            $(this).find('span').css('display','block');
        })
    })
})



