$(function () {
    /////////////////////////////
    //topBanner 2022.03.17 최종수정 hyeyeonk
    //$('css선택자').on('이벤트',할일);


    //$('.topBanner i').on('click', ()=>$('.topBanner').slideUp());


    $('.topBanner i').on('click', topbannerHandler);

    function topbannerHandler() {
        //$('.topBanner').hide();
        $('.topBanner').slideUp();
        곱하기(10, 20);
    }

    function 곱하기(a, b) {
        console.log(a * b);
    }

    function 오오오(e) {
        //e.preventDefault(); //a태그 새로고침 안됨
        const tg = e.target;
        console.log(tg, '오오오 클랙했네!');
    }

    $('.ooooo').on('click', 오오오);



    //** 각각의 슬라이드에 애니메이션
    /////////////////////////////
    // 슬릭에 있는 이벤트 : init reinint afterChange 이벤트 두개이상일때 두개다 실행
    $('.mainVisualSlide').on('init reinit afterChange', function () {
        let current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on');
        //메소드 체인
    });

    //메인슬라이드
    $('.mainVisualSlide').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false
    });

    //$('.mainVisualSlide figure').eq(1).addClass('on');
    //전체 슬라이드에서 클래스를 떼고 지금 슬라이드에 클래스를 붙임

    //$('.mainVisualSlide').on('afterChange', function (s, i, c) {
    //console.log(s, i, c); 
    //c => 0,1,2
    //$('.mainVisualSlide figure').removeClass('on');
    //$('.mainVisualSlide figure').eq(c + 1).addClass('on'); //1,2,3
    //});


    // 동영상
    $('.movieBtn i:first-child').on('click', function () {
        $('#adMovie').trigger('pause');
    });
    $('.movieBtn i:last-child').on('click', function () {
        $('#adMovie').trigger('play');
    });


    /////////////////////////////
});