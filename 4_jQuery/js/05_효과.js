// 1. show(), hide(), toggle()
$('#show').click(()=>{
    $('#img').show(300);
});

$('#hide').click(()=>{
    $('#img').hide(300);
});

$('#toggle').click(()=>{
    $('#img').toggle(300);
});

// 2. fadeIn(), fadeOut(), fadeToggle(), fadeTo()
$('#fadeIn').click(()=>{
    $('#img2').fadeIn(1000);
});

$('#fadeOut').click(()=>{
    $('#img2').fadeOut(1000);
});

$('#fadeToggle').click(()=>{
    $('#img2').fadeToggle(1000);
});

$("#img2").hover(
    // 화살표 함수가 인식이 안됨..
    // mouseenter
    function () {
        $(this).fadeTo(500, 0.5);
    },

    // mouseleave
    function () { 
        $(this).fadeTo(500, 1);
    }
);


// 3. slideDown(), slideUp()
$('.menu').click((e)=>{
    let content = $(e.target).next();
    /*
    if(content.css("display")=== "none"){
        content.slideDown(500);
    } else {
        content.slideUp(500);
    }
    */
   // slideToggle()
   // content.slideToggle();

   // 하나의 콘텐츠만 slideDown!
   $('.contents').slideUp();
   // 해당 콘텐츠를 다시 눌렀을 때 완전히 다 닫힌 상태가 되도록
   if(content.css("display") === 'none'){
    content.slideDown();
   }
  
})

