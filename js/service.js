$(function () {
   var $li = $('.list li');
    $('.items div').eq(0).find('ul li:eq(0)').css('color','#bb2b2b');
   $li.each(function (index,item) {
       $(this).click(function () {
           console.log(index);
           $('.items li').css('color','#666');
           $('.items div').eq(index).find('ul li:eq(0)').css('color','#bb2b2b');
       })
   })
})
