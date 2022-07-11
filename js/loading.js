$("document").ready(function(){

    let bar = new ProgressBar.Line("#pro1",{
        strokeWidth: 4, /* 바 굵기 */
        color: "pink", /* 바 색깔 */
        trailColor: "#e1e1e1", /* 바 차는거 뒤에 배경 */
        duration: 1000, /* 바가 차는 시간 1000=1초 */
        trailWidth: 4, /* 바 차는거 뒤에 배경의 굵기 */
        /* 몇퍼센트 찼는지 글로 알려주는 코드 */
        step: function(state, circle){
            circle.setText(Math.round(circle.value() * 100)+"%")
        }
    })
    bar.animate(1) /* 바가 어느정도 차는지 (0.3 = 30%, 1 = 100%) */

})