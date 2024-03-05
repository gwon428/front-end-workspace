// window.addEventListener("DOMContentLoaded", function(){
// })

// 1. jQuery 원래 형태
// $(document).ready(function (){
// 1-1. 축약형
$(function (){
    // 1. 태그 선택자
    // JavaScript 방식
    pList = document.querySelectorAll("p");
    for(p of pList){
        p.style.color = "white";
        p.style.backgroundColor = "tomato";
    }

    // jQuery 방식
    $("h5").css("color", "skyblue").css("background-color", "yellow");


    // 2. 아이디 선택자
    // JavaScript 방식 -> id가 id1인 글씨 색깔(color) 변경
    document.querySelector("#id1").style.color="blue";
    
    // jQuery 방식 -> id가 id2인 글씨 색깔 변경
    $("#id2").css("color", "pink").css("background-color", "blue");


    // 3. 클래스 선택자
    // jQuery 방식 (css를 {}를 통해 한꺼번에 주는 것도 가능) - JSON 형태!
    $(".item").css({color : "white", "background-color" : "indigo"});

    // 4. 자식 선택자와 자손 선택자
    $("div > ul > li").css("color", "green");
    $("div > ul > .ch").css("background-color", "lime");
    $("div > h3").css("color", "violet");
    $("div > ul > li > h3").css("color", "indianred");
    $("div h3").css("background-color", "khaki");

    // 5. 속성 선택자
    $("#div1 input[class]").css("background-color", "turquoise");
    $("#div1 input[type=text]").val("change value");
    // ~= 포함관계
    $("#div1 input[class~=test1]").val("123456789");
    // ^= type이 ra로 시작하는 경우
    // prop : property의 약자
    $("#div1 input[type^=ra]").prop("checked", true);
    // $= type이 box로 끝나는 경우
    $("#div1 input[type$=box]").prop("checked", true);
    // *= : ~로 끝나는 경우
    $("#div1 input[class*=st3]").css({width: "100px", height:"200px"}).val("10000");

    // 6. 입력 양식 선택자
    $("#div2 :text").css("background-color", "pink");
    $("#div2 :button").val("버튼");
    $("#div2 :checkbox").prop("checked", true);
    $("#div2 :file").css("background-color", "yellow");

    // 7. 입력 양식 상태에 대한 선택자
    // 1) input 태그 중 활성화된 객체 선택
    $("#div3 input:enabled").css("background-color", "lavender");

    // 2) input 태그 중 비활성화된 객체 선택
    $("#div3 input:disabled").css("background-color", "lightcyan");

    // 3) input 태그 중 체크된 객체 선택 (처음에 checked가 부여된 것들에만 적용됨)
    $("#div3 input:checked").css({width:"30px", height:"30px"});

    // 4) checkbox에 chage 이벤트 핸들러 등록
    $("#div3 :checkbox").change(function(){
        console.log(this);
        console.log($(this));

        let checkbox = $(this);
        // attr : 처음에 체크 해지가 된 상태만 undefined
        console.log(checkbox.attr("checked"));
        // prop : 체크 유무에 따라 결과값이 T/F
        console.log(checkbox.prop("checked"));
    });    

    // 5) select에 change 이벤트 핸들러 등록
    $("#national").change(function(){
        // select 태그의 option 태그 중 선택된 객체 선택
        let value = $("#national>option:selected").val();
        console.log(value);
        $("#result").val(value);
    });
       
});