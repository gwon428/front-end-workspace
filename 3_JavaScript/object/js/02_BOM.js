/*
open(첫번째, 두번째, 세번째)
- 첫번째 : 새 창에서 열고자하는 url 주소
- 두번째 : 창 이름, 창 이름이 같은 것이 이미 열려있을 경우 새로 열리지 않고 이미 열려있는 곳에서 새로고침
- 세번쩨 : 새 창의 특성 (브라우저마다 적용범위 다름)
        - width : 창의 너비 (px), height : 창의 높이 (px)
        - resizable : 창 크기 조절 가능 여부
        - location : 주소창
        - menubar : 메뉴바
        - scrollbars : 스크롤바
        - status : 상태표시
        - toolbar : 도구 모음
*/
function btn1() {
  window.open(
    "https://www.naver.com",
    "네이버",
    "width=500, height=600, resizable=no, location=no, menubar=no, scrollbars=no, status=no, toolbar=no"
  );
}

/*
setTimeout(()=>{구현할 함수}, 초 * 1000)
*/
function btn2() {
  let newWindow = open();
  newWindow.alert("1초 후에 페이지가 종료됩니다.");
  setTimeout(() => {
    newWindow.close(); // 창 닫기!
  }, 1000); // 1초 = 1000
}

/*
setInterval
*/
function btn3() {
  let second = 0;
  setInterval(() => {
    console.log(`${++second}초!`);
  }, 1000);
}

/*
location
*/
function btn4() {
  console.log(location);
  console.log(location.href); //전체 URL
  console.log(location.hostname); // 도메인 이름
  console.log(location.pathname); // 경로

  //   location.reload(); //새로고침
  location.href = "https://www.naver.com"; //강제로 창이 변경
}
