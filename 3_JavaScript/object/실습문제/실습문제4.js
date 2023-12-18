// 1. 정규표현식..
// 2. 폼에서 input 될때마다 정규표현식의 조건과 맞는지 확인해서 p 스타일 변경
// 3. 정규표현식의 조건과 모두 맞아야만 회원가입 버튼 활성화

const btn1 = document.querySelector("button");
const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const name = document.querySelector("#name");
const mail = document.querySelector("#mail");
const hobby = document.querySelector("#hobby");
const live = document.querySelector("#live");
const p = document.querySelectorAll("p");

const regExp1 = /^[A-Za-z]([(A-Za-z){1,}&&(0-9){1,}]){3,11}$/;
const regExp2 = /\w{8}|[\w|\s]{7}/;
const regExp3 = /^가-힣{2}$/;
const regExp4 = /[A-Za-z0-9]@[.com|.net]$/;
const regExp5 = /^가-힣$/;

function check() {
  if (regExp1.test(id.value)) {
    p[0].style.color = "green";
  } else {
    p[0].style.color = "red";
  }
}

function check2() {
  if (regExp2.test(pw.value)) {
    p[1].style.color = "green";
  } else {
    p[1].style.color = "red";
  }
}
