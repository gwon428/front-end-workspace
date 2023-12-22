const id = document.querySelector("#id");
const idSpan = document.querySelector("#id-span");
const pwd = document.querySelector("#password");
const pwdSpan = document.querySelector("#password-span");
const pwdCheck = document.querySelector("#password-check");
const pwdCheckSpan = document.querySelector("#password-check-span");

const idText = "필수 입력 항목입니다.";
const pwdText = "영문자 대/소문자, 특수문자, 숫자 포함 8 ~ 32글자";
const pwdCheckText = "비밀번호와 일치하지 않습니다.";

id.addEventListener("input", function () {
  if (id.value !== "") {
    idSpan.innerHTML = "";
  } else {
    idSpan.innerHTML = idText;
  }
});

const regExp = /^[!-~]{8,32}$/;
pwd.addEventListener("input", function () {
  if (regExp.test(pwd.value)) {
    console.log(pwd.value);
    pwdSpan.innerHTML = "";
  } else {
    pwdSpan.innerHTML = pwdText;
  }
});

pwdCheck.addEventListener("input", function () {
  if (pwd.value === pwdCheck.value) {
    pwdCheckSpan.innerHTML = "";
  } else {
    pwdCheckSpan.innerHTML = pwdCheckText;
  }
});

function validate() {
  if (id.value === "") {
    id.focus();
    idSpan.innerHTML = idText;
    return false;
  } else if (!regExp.test(pwd.value)) {
    pwd.focus();
    pwdSpan.innerHTML = pwdText;
    return false;
  } else if (pwd.value !== pwdCheck.value) {
    pwdCheck.focus();
    pwdCheckSpan.innerHTML = pwdCheckText;
    return false;
  }
  return true;
}
