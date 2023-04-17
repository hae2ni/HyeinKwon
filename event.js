const data = [
  {
    name: "아보카도쉬림프샐러드",
    hashtag: ["생아보카도", "버터새우", "케이준버터"],
    category: "salad",
  },
  {
    name: "치킨텐더샐러드",
    hashtag: ["닭안심", "머스타드"],
    category: "salad",
  },
  {
    name: "와사비크래미샐러드",
    hashtag: ["와사비크림", "크래미"],
    category: "salad",
  },
  {
    name: "파스타샐러드",
    hashtag: ["칠리", "바질", "파스타"],
    category: "salad",
  },
  {
    name: "에그마요샌드위치",
    hashtag: ["에그마요", "유기농", "달달"],
    category: "saladwich",
  },
  {
    name: "바질치킨샌드위치",
    hashtag: ["닭안심", "바질", "수제"],
    category: "saladwich",
  },
  {
    name: "풀드포크샌드위치",
    hashtag: ["수비드", "바베큐소스"],
    category: "salad",
  },
  {
    name: "단호박에그샌드위치",
    hashtag: ["단호박", "에그", "건강"],
    category: "saladwich",
  },
  {
    name: "갈릭감자튀김",
    hashtag: ["갈릭", "유기농", "올리브오일"],
    category: "side",
  },
  {
    name: "감자수프",
    hashtag: ["감자", "유기농", "제철"],
    category: "side",
  },
  {
    name: "토마토수프",
    hashtag: ["토마토", "다이어트", "유기농"],
    category: "side",
  },

  {
    name: "그릭요거트",
    hashtag: ["꾸덕", "수제", "그래놀라"],
    category: "side",
  },
];

// 카테고리 체크

// 각 상위 카테고리
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

function showData() {
  const card = document.querySelector(".card");
  const div = document.querySelector(".hashtag_wrapper");
  const ul = document.querySelector(".hashtag");

  const itemName = document.createElement("h3");
  const hashtagItem = document.createElement("li");

  const hashtagBtn = document.createElement("button");
  hashtagBtn.innerText = "+";

  card.appendChild(itemName);
  ul.appendChild(hashtagItem);

  div.appendChild(hashtagBtn);
}
