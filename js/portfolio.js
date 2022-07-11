$("document").ready(function(){

    // 풀페이지
    let page = new fullpage(".fullpage",{
        // 섹션 나누기
        anchors : ["home", "about", "works", "contact"],

        // 인디케이터바 생성
        navigation: true,

        // 인디케이터바 생성시 옆에 뜨는 문구
        navigationTooltips: ["Home", "About", "Works", "Contact"],

        // 인디케이터 - 홈에선 안뜨고 그 밑에선 뜨도록
        onLeave: function(origin, destination, direction){
            if(origin.index >= 0 && direction == "down"){
                $("#fp-nav ul li").fadeIn()
            }else if(origin.index == 1 && direction =="up"){
                $("#fp-nav ul li").fadeOut()
            }

            // 해당 섹션에서 인디케이터 문구 고정
            $("#fp-nav ul li").removeClass("on").eq(destination.index).addClass("on")
        },

        // work - 해당 인덱스에 on클래스 부여
        afterSlideLoad: function(section, origin, destination){
            let params = {
                section: section,
                origin: origin,
                destination : destination
            }
            $(".work .box ul li").removeClass("on").eq(destination.index).addClass("on")
        },  


        afterSlideLoad: function(section, origin, destination){
            let params = {
                section: section,
                origin: origin,
                destination : destination
            }
            $(".work .container .tabmenu label").removeClass("on").eq(destination.index).addClass("on")
        }
        
    }) // 풀페이지 끝


    // 인디케이터 - 홈에선 없애기
    $("#fp-nav ul li").css("display", "none")


    // about - modal
    $(".about .left .btn").click(function(){
        // alert()
        $(".window").fadeIn()
        $(".window-content").fadeIn()
    })
    $(".window").click(function(){
        $(".window").fadeOut()
        $(".window-content").fadeOut()
    })


    // work
    $(".container .tabmenu label").eq(0).addClass("on")
    $(".container .tabmenu label").click(function(){

        let i = $(this).index();

        $(".container .tabmenu label").removeClass("on")
        $(this).addClass("on")
    })

    // work - 스와이퍼
    var swiper = new Swiper(".all", {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        spaceBetween: 20,
        slidesPerView: 3,
        slideToScroll: 3,
        freeMode: true,
        autoplay: {
            delay: 3000 
        }
    })

    var swiper = new Swiper(".web", {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        spaceBetween: 20,
        slidesPerView: 3,
        freeMode: true,
        autoplay: {
            delay: 3000 
        }
    })
    
    var swiper = new Swiper(".design", {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        spaceBetween: 20,
        slidesPerView: 3,
        freeMode: true,
        autoplay: {
            delay: 3000 
        }
    })

    var swiper3 = new Swiper(".etc", {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        spaceBetween: 20,
        slidesPerView: 3,
        freeMode: true,
        autoplay: {
            delay: 3000 
        }
    })


    
    
    
})