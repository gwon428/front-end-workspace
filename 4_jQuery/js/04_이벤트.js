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

let count = "";
for(count=0; count<100; count++){
    $("#counter").keyup((e) => {
        console.log(`${e.key}`);
    });
}
