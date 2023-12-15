// 이미지 3장 배열 만들어서
// 1번 2번 3번에 이미지 랜덤으로 출력
// 이미지 src의 주소가 1번 = 2번 = 3번 => stop!!!!

let imgArr = [];
function random() {
  const img = document.querySelectorAll("img");
  const h2 = document.querySelector("h2");

  imgArr.push(Math.floor(Math.random() * 3 + 1));
  imgArr.push(Math.floor(Math.random() * 3 + 1));
  imgArr.push(Math.floor(Math.random() * 3 + 1));
  console.log(imgArr);
  img[0].setAttribute("src", `/resources/spy${imgArr[0]}.jpg`);
  img[1].setAttribute("src", `/resources/spy${imgArr[1]}.jpg`);
  img[2].setAttribute("src", `/resources/spy${imgArr[2]}.jpg`);
  if (imgArr[0] == imgArr[1] && imgArr[1] == imgArr[2]) {
    console.log("stop");
    h2.style.visibility = "visible";
  } else {
    imgArr = [];
  }
}

// function restart() {
//     const
// }

click.addEventListener("click", random);
restart.addEventListener("click2", restart);
