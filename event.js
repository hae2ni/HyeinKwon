const hiddenClass = "hidden";

// 전체버튼
const ClickedAll = document.getElementById("all");

function clickAll() {
  ClickedAll.classList.toggle(hiddenClass);
}

//샐러드버튼
const ClickedSalad = document.getElementById("salad");

function clickSalad() {
  ClickedSalad.classList.toggle(hiddenClass);
}

//샌드위치버튼
const ClickedSandwich = document.getElementById("sandwich");

function clickSandwich() {
  ClickedSandwich.classList.toggle(hiddenClass);
}

//사이드버튼
const ClickedSide = document.getElementById("side");

function clickSide() {
  ClickedSide.classList.toggle(hiddenClass);
}

//삭제버튼
function deleteNav() {
  console.log("here");
}
