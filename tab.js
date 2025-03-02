/*버튼0 누르면
 * 모든(이전) 버튼에 orange class 제거
 * 버튼0에 orange class명 추가
 * 모든(기존) div에 show class명 제거
 * tab-content0에 show class명 추가
*/

$('.tab-button').eq(0).on('click', function(){
    $('.tab-button').removeClass("orange");
    $('.tab-button').eq(0).addClass("orange");
    $('.tab-content').removeClass("show");
    $('.tab-content').eq(0).addClass("show");
});

$('.tab-button').eq(1).on('click', function(){
    $('.tab-button').removeClass("orange");
    $('.tab-button').eq(1).addClass("orange");
    $('.tab-content').removeClass("show");
    $('.tab-content').eq(1).addClass("show");
});

$('.tab-button').eq(2).on('click', function(){
    $('.tab-button').removeClass("orange");
    $('.tab-button').eq(2).addClass("orange");
    $('.tab-content').removeClass("show");
    $('.tab-content').eq(2).addClass("show");
});
