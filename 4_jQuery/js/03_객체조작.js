// 1. Content 설정
// 1-1) html() : content 영역의 태그와 텍스트를 모두 가져온다.
console.log($('#content1').html());     // <a>네이버로</a>

// content1의 내용(태그 + 텍스트)을 content2에 추가
$('#content2').html($('#content1').html());
// $('#content2').text($('#content1').html());로 가져오면 <a> 태그까지 텍스트로 읽음
console.log("content2 : " + $('#content2').html());

// 1-2) text() : content 영역의 텍스트만 가져온다.
console.log($('#content3').text());     // 네이버로

// content3의 내용(텍스트)을 content4에 추가
$('#content4').text($('#content3').text());
console.log("content4 : " + $('#content4').html());


// 2. 요소 추가
// 2-1. 자바스크립트와 제이쿼리
// 자바스크립트
const p = document.createElement("p");
p.innerHTML = '자바스크립트 추가';
document.querySelector("#area1").appendChild(p);
// 제이쿼리
const p2 = $("<p>").html("제이쿼리로 추가");
$("#area1").append(p2);

// 2-2. 요소 추가 1 [부모 기준]
// $(A).append(B) : A 요소의 자식 요소로 B 요소를 뒷부분에 추가한다.
$("#area1").append("<span>B</span>");

// $(A).prepend(c) : A 요소의 자식 요소로 C 요소를 앞부분에 추가한다.
$("#area1").prepend("<span>C</span>");

// $(A).after(D) : A 요소의 형제 요소로 D 요소를 뒷부분에 추가한다. (자식 요소 X)
$("#area1").after('<span>D</span>');

// $(A).before(E) : A 요소의 형제 요소로 E 요소를 앞부분에 추가한다. (자식 요소 X)
$("#area1").before('<span>E</span>');


// 2-3. 요소 추가 2 [자식 기준]
// $(B).appendTo(A) : B 요소를 A 요소의 자식 요소로 뒷부분에 추가한다.
$('<span>B</span>').appendTo("#area2");

// $(C).prependTo(A) : C 요소를 A 요소의 자식 요소로 앞부분에 추가한다.
$('<span>C</span>').prependTo("#area2");

// $(D).insertAfter(A) : D 요소를 A 요소의 형제 요소로 뒷부분에 추가한다.
$('<span>D</span>').insertAfter("#area2");

// $(E).insertBefore(A) : E 요소를 A요소의 형제 요소로 앞부분에 추가한다.
$('<span>E</span>').insertBefore("#area2");


// 3. 요소 복제
/* (event가 1개일 때는 event 하나에 enter와 leave가 모두 출력됐으나 event가 2개가 되면서 enter와 leave가 분리됨)
    만일
    1) 한 개의 이벤트 핸들러가 설정되면 두 이벤트 모두 한 곳에서 적용
    2) 2개 이상이 되면 해당 이벤트 핸들러의 이벤트가 분리
*/
$(".item").hover(
    /*
    (event)=>{
        console.log("event1 : " + event.type);    // mouseenter
        console.log(event.target);
        $(event.target).addClass("bg-hotpink");
    },
    (event)=>{
        console.log("event2 : " + event.type);  // mouseleave
        console.log(event.target);
        $(event.target).removeClass("bg-hotpink");
    }
    */
   (event) => {
    $(event.target).toggleClass("bg-hotpink");
   }
);
$('#btn1').click(() => {
//    $("#clone-result").html($("#item1")); --> 복제가 아니라 원래꺼를 가지고 내려오게 됨
//    $('#clone-result').append('<div id="item1" class="item">');
// 이벤트까지 복제하려면 매개값으로 true를 전달해야 함!

//    let item = $("#item1").clone();       => 이벤트까지는 복제가 안됨
    let item = $("#item1").clone(true);     // 이벤트까지 복제 O
    $("#clone-result").html(item);
});


// 4. 요소 제거
// 1) remove : 선택된 요소의 이벤트까지 삭제
$('#remove').click(() => {
   let item = $("#item2").remove();
   $("#remove-result").append(item);
});

// 2) detach : 
$('#detach').click(() =>{
    let item = $("#item2").detach();
    $("#remove-result").append(item);
});

// 3) empty : 요소를 비우는 것이기 때문에 상위 요소를 target해야
$('#empty').click(() =>{
    $("#remove-test").empty();
});


// 5. 배열 관리
let array = [
    {name: '구글', link: 'https://google.com'},
    {name: '네이버', link: 'https://naver.com'},
    {name: '다음', link: 'https://daum.net'},
]

// 자바스크립트
array.forEach((element, index, origin) =>{
    console.log(element);                   // 배열 속 객체
    console.log("index : " + index);
    console.log(origin);                   // 배열 자체
    console.log("JavaScript----------------");
});

// 제이쿼리
$(array).each((index, element)=>{
    console.log(index);
    console.log(element);
    console.log(element.name);
    console.log(element.link);
    console.log("jQuery----------------");

    // $("#each-test").append(`<h4><a href=${element.link}> ${element.name}</a></h4>`);
});

// html 방식에 필요한 외부변수
let output = "";
$(array).each((i, e) =>{
    // append 방식
    // const result = `<h4><a href=${e.link}>${e.name}</a></h4>`;
    // $("#each-test").append(result);

    // html 방식
    output += `<h4><a href=${e.link}>${e.name}</a></h4>`;
})

// html 방식에 필요한 함수
$("#each-test").html(output);