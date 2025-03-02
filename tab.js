/*버튼0 누르면
 * 모든(이전) 버튼에 orange class 제거
 * 버튼0에 orange class명 추가
 * 모든(기존) div에 show class명 제거
 * tab-content0에 show class명 추가
 */
//셀럭터는 성능이 낮기 때문에 변수에 담아서 쓰는 것이 좋다
var tabbtn = $(".tab-button");
var tabctn = $(".tab-content");

for (let i = 0; i < tabbtn.length; i++) {
    tabbtn.eq(i).on("click", function () {
            tabbtn.removeClass("orange");
            tabbtn.eq(i).addClass("orange");
            tabctn.removeClass("show");
            tabctn.eq(i).addClass("show");
        });
}
