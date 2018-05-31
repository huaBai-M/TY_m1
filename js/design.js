$(function () {
   var $li =$('.list_small li');
    // var $liBig=$('.list_big li');
    // $liBig.each(function (index,item) {
    //     // console.log(item)
    //     // $liBig.attr('id',$(this).index);
    // })
   $li.each(function (index,item) {
       var $pos=$(this).find('img').position();
       var $pos_x=$pos.left;
       var $pos_y=$pos.top;
       $(this).append('<span></span>');
       //为新增的span添加样式
       $(this).find('span').css({
           'position': 'absolute',
           'backgroundColor': 'rgba(0,0,0,0.5)',
           'left':$pos_x,
           'top':$pos_y
       });
       $(this).find('span').width($(this).find('img').width());
       $(this).find('span').height($(this).find('img').height());
       $('.list_big li').css('display','none');
       $('.list_big li:eq(1)').css('display','block');
       $('.list_description li').css('display','none');
       $('.list_description li:eq(1)').css('display','block');
       $('.list_small li:eq(1)').find('span').css('display','none');
       $(this).click(function () {
           $li.find('span').css('display','block');
          $(this).find('span').css('display','none');
           $('.list_big li').css('display','none');
          $('.list_big li').eq(index).css('display','block');
           $('.list_description li').css('display','none');
           $('.list_description li').eq(index).css('display','block');
       })
   })
});