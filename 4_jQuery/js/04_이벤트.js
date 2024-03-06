// 1. 이벤트 연결
/*
$("#area1").on("mouseenter", (event)=>{
    $(event.target).css("background-color", "beige").text("마우스가 올라감");
});
$("#area1").on("mouseleave", (event)=>{
    $(event.target).css("background-color", "hotpink").text("마우스가 내려감");
})
*/
/*
$("#area1").on("mouseenter mouseleave", (event) =>{
    if(event.type === "mouseenter"){
    $(event.target).css("background-color", "beige").text("마우스가 올라감");
    } else {
        $(event.target).css("background-color", "hotpink").text("마우스가 내려감");
    }    
});

$("#area1").on("click", (event)=>{
    // 배경 색상은 white, text는 '',
    // mouseenter, mouseleave 이벤트 제거
    $(event.target).css("background-color", "white").text('')
    .off("mouseenter mouseleave");  // off("이벤트명") -> 이벤트 제거
    
});
*/
$("#area1").on({
    mouseenter: (event) => 
        {$(event.target).css("background-color", "beige").text("마우스가 올라감")
    },
    mouseleave: (event) => {
        $(event.target).css("background-color", "hotpink").text("마우스가 내려감")
    },
    click: (event) => {$(event.target).css("background-color", "white").text('')
    .off("mouseenter mouseleave");}
})

// 2) one
$("#area2").one('click', (event)=>{
    alert('처음이자 마지막으로 이벤트 핸들러 실행');
});


// 2. 키보드 이벤트
// 1) keydown, keypress, keyup
/*
// (1) keydown : 키보드가 눌려질 때
$("#textarea1").keydown((e) => {
    console.log(`keydown - e.key : ${e.key}, e.keyCode : ${e.keyCode}`)
});
// (2) keypress : 글자가 입력될 때
$("#textarea1").keypress((e) => {
    console.log(`keypress - e.key : ${e.key}, e.keyCode : ${e.keyCode}`)
});
// (3) keyup : 키보드가 떼어질 때
$("#textarea1").keyup((e) => {
    console.log(`keyup - e.key : ${e.key}, e.keyCode : ${e.keyCode}`)
});
*/
$("#textarea1").on({
    keydown:(e) => {
        console.log(`keydown - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
    },
    keypress: (e) => {
        console.log(`keypress - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
    },
    keyup: (e) => {
        console.log(`keyup - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
    }
});

/* 내 풀이 . . */
/*
$('#textarea2').keyup((e) =>{
    $('#counter').text($('#textarea2').val().length);
    if($('#textarea2').val().length >= 100){
        console.log($('#textarea2').val().length);
        $('#textarea2').val( $('#textarea2').val().substring(0, 99));
        $('#maxLength').css("color", "red");
    } else {
        $('#maxLength').css("color", "black");
    }
})
*/

/* 해설 */
$('#textarea2').keyup((e) => {
    let target = $(e.target);
    let currentLength = $(e.target).val().length;
    $('#counter').text(currentLength);

    let maxLength = parseInt($('#maxLength').text());
    console.log(maxLength);

    if(currentLength > maxLength){
        target.val(target.val().substring(0, maxLength));
        $('#maxLength').css("color", "red");
    } else {
        $('#maxLength').css("color", "black");
    }
})

// 동적으로 아이디 조건 확인

function check() {
    const regExp = /^[a-z][a-z0-9]{3,11}$/;
    return regExp.test($('#userId').val());
}

$('#userId').keyup((e) =>{
    let id=$(e.target).val();   // 제이쿼리 방식
    id = e.target.value;        // 자바스크립트 방식

    const regExp = /^[a-z][a-z0-9]{3,11}$/;
    regExp.test(id)

    if(regExp.test(id)){
        $('#check').text("사용 가능한 아이디입니다.").css("color", "green");
    } else if(id === ""){
        $('#check').text("");
    } else {
        $('#check').text("사용 불가능한 아이디입니다.").css("color", "red");
    } 
});


// 3. trigger() 메서드
/* 같은 이벤트를 여러 개에 걸 때
$('#area3').click(() => {
    let counter = $('#counter2');
    let currentCount = parseInt(counter.text());
    counter.text(++currentCount);
});

$('#btn').click(()=>{
    let counter = $('#counter2');
    let currentCount = parseInt(counter.text());
    counter.text(++currentCount);
})
*/

// 축약
$('#area3').click(() => {
    let counter = $('#counter2');
    let currentCount = parseInt(counter.text());
    counter.text(++currentCount);
});

// #area3에 걸려있는 click 이벤트를 나도 쓰겠다.
$('#btn').click(()=>{
    $('#area3').trigger("click");
})