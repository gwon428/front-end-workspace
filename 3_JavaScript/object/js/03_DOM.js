// load : 모든 로드가 다 끝나고 실행
// DOMContentLoaded : DOM 구조가 로드 되어도 실행 (실행 시점이 load보다 더 빠름)

// window.addEventListener("DOMContentLoaded", function () {
//   const h1 = document.querySelector("h1");
//   console.log(h1); // h1 출력
// });

// const h1 = document.querySelector("h1");
// console.log(h1);

// 1-1. 태그로 가져오기
function btn1() {
  console.log(document.head);
  console.log(document.title);
  console.log(document.body);
  console.log(document.h1); // undefined: 기본적인 틀 태그는 가능
  const h1 = document.getElementsByTagName("h1");
  console.log(h1[0]);
  // 동일한 태그가 여러개 존재할 수 있기 때문에 배열로 리턴
  const div = document.getElementsByTagName("div");
  console.log(div[0]);
  console.log(div[1]);
}

// 1-2. id로 가져오기
function btn2() {
  const div = document.getElementById("testId");
  console.log(div);
} // (태그와 달리) 한 줄만 나옴. 아이디 명은 고유의 값이기 때문에.
// 맨 처음 아이디만 가져옴.

// 1-3. class로 가져오기
function btn3() {
  const div = document.getElementsByClassName("testClass");
  console.log(div);
} // 동일한 class 속성 값을 갖는 태그가 여러개 존재할 수 있기 때문에 배열로 리턴

// 1-4. name으로 가져오기
function btn4() {
  const div = document.getElementsByName("testName");
  console.log(div);
  console.log(document.testName); //undefined
} // 동일한 name 속성 값을 갖는 태그가 여러개 존재할 수 있기 때문에 배열로 리턴

// 1-5. 선택자로 가져오기
function btn5() {
  let div = document.querySelector("#testId");
  console.log(div); // id로 가져온 결과와 같은 값 도출

  div = document.querySelectorAll(".testClass");
  console.log(div);
  console.log(div[0]);
}

// 2-1. 내용 조작하기
function btn6() {
  const div = document.querySelectorAll(".testClass");
  div[0].textContent = "<span>안녕하세요</span>"; //<span>안녕하세요</span>
  div[1].innerHTML = "<span>안녕하세요</span>"; //안녕하세요
  //innerHTML : 태그 자체가 span으로 바뀜!!!
}

// 2-2. 속성 조작하기
function btn7() {
  const div = document.querySelector("#testId");
  div.setAttribute("data-test", "테스트");
  div.setAttribute("data-test", "테스트2");
  console.log(div.getAttribute("class"));
}

// 2-3. 스타일 조작하기
function btn8() {
  const div = document.querySelector("#testId");
  div.style.color = "orange";
  div.style.backgroundColor = "yellow";
}

// 2-4. classList로 조작하기

const div2 = document.querySelector("#testId2");
function btn9() {
  div2.classList.add("black");
}
function btn10() {
  div2.classList.remove("black");
}
function btn11() {
  const check = div2.classList.contains("black");
  console.log(check);
  if (check) {
    div2.classList.remove("black");
    div2.classList.add("skyblue");
  } else {
    div2.classList.add("black");
    div2.classList.remove("skyblue");
  }
}
function btn12() {
  div2.classList.toggle("skyblue");
}

// 3. 문서 객체 추가하기
function btn13() {
  // div 2에 p 태그 생성!!!
  // 문서 객체 생성
  const p = document.createElement("p");
  p.innerHTML = "Lorem Ipsum"; // 요소 추가하기(?)
  // 부모 객체에 추가
  div2.appendChild(p);
}

// 4. 문서 객체 삭제하기
function btn14() {
  const p = document.querySelector("p");
  div2.removeChild(p);
  // = p.parentNode.removeChild(p);
}
