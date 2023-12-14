function btn1() {
  console.log("최소값 : ", Math.min(5, 9, 7, -3));
  console.log("최대값 : ", Math.max(5, 9, 7, -3));
  console.log("절대값 : ", Math.abs(-8.88888888));
}

function btn2() {
  const number = 2.725;
  console.log("반올림 : ", Math.round(number));
  console.log("버림 : ", Math.floor(number));
  console.log("올림 : ", Math.ceil(number));
}

function btn3() {
  // console.log(Math.random()); // default : 0~1 숫자 중 무작위

  let result = Math.floor(Math.random() * 10 + 1); // 1~10 중 무작위
  console.log(result);

  // Math.random() * 갯수 + 시작수;
  // a~b 중 무작위 = Math.random()*{(b-a)+1} + a
  let result2 = Math.floor(Math.random() * 100 + 10); // 11~100 중 무작위
  console.log(result2);
  let result3 = Math.floor(Math.random() * 100 + 11); // 11~100 중 무작위
  console.log(result3);
}

function btn4() {
  const now = new Date();
  console.log(now);

  console.log("년 : ", now.getFullYear());
  console.log("월 : ", now.getMonth() + 1); // getMonth는 0~11로 계산 => 실제로 출력하려면 +1 필수
  console.log("일 : ", now.getDate());
  console.log("시 : ", now.getHours());
  console.log("분 : ", now.getMinutes());
  console.log("초 : ", now.getSeconds());
}

function btn5() {
  // 년, (월-1), 일, 시, 분, 초
  const a = new Date(2000, 3, 28, 11, 50, 20);
  console.log(a);

  // 년, 월, 일, 시
  const b = new Date(2025, 0, 5, 11, 50);
  console.log(b);

  const c = new Date(2024, 4, 16);
  console.log(c);
}
