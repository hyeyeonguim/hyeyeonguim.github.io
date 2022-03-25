// 자바스크립트
// //구조가 만들어진 다음 실행하라
// window.addEventListener('DOMContentLoaded', ()=>{
//     document.querySelector('h1').style.color='#f00';
//     document.querySelector('h1').style.fontSize= 100 + "px";
// })


//제이쿼리(자바스크립트 라이브러리)
$(function(){
    //$('h1').css({color:'#f00', fontSize:'100px', display:'none'});
    //$('h1').hide();

    function popupClose(){
        //console.log(this)
        //$('.popup').hide();
        $(this).parent().hide(); //팝업이 여러개일경우, 나의 부모태그를 닫아주므로 *매우 효율적*
    }
    $('.btn').on('click', popupClose);
})


