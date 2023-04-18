const myMenus = [
  {
    name: "아보카도쉬림프샐러드",
    hashtags: ["생아보카도", "버터새우", "케이준버터"],
    category: "salad",
    img: "./assets/saladavocado.jpg",
  },
  {
    name: "치킨텐더샐러드",
    hashtags: ["닭안심", "머스타드"],
    category: "salad",
    img: "./assets/saladchiken.jpg",
  },
  {
    name: "와사비크래미샐러드",
    hashtags: ["와사비크림", "크래미"],
    category: "salad",
    img: "./assets/saladcrap.jpg",
  },
  {
    name: "파스타샐러드",
    hashtags: ["칠리", "바질", "파스타"],
    category: "salad",
    img: "./assets/saladpasta.jpg",
  },
  {
    name: "에그마요샌드위치",
    hashtags: ["에그마요", "유기농", "달달"],
    category: "sandwich",
    img: "./assets/sandeggmayo.jpg",
  },
  {
    name: "햄에그샌드위치",
    hashtags: ["햄에그", "기본", "체다치즈"],
    category: "sandwich",
    img: "./assets/sandhamegg.jpg",
  },
  {
    name: "풀드포크샌드위치",
    hashtags: ["수비드", "바베큐소스"],
    category: "sandwich",
    img: "./assets/sandpolk.jpg",
  },
  {
    name: "단호박에그샌드위치",
    hashtags: ["단호박", "에그", "건강"],
    category: "sandwich",
    img: "./assets/sandpumkin.jpg",
  },
  {
    name: "갈릭감자튀김",
    hashtags: ["갈릭", "유기농", "올리브오일"],
    category: "side",
    img: "./assets/sidecrispypotato.jpg",
  },
  {
    name: "감자수프",
    hashtags: ["감자", "유기농", "제철"],
    category: "side",
    img: "./assets/sidesoup.jpg",
  },
  {
    name: "토마토수프",
    hashtags: ["토마토", "다이어트", "유기농"],
    category: "side",
    img: "./assets/sidetomatosoup.jpg",
  },
  {
    name: "그릭요거트",
    hashtags: ["꾸덕", "수제", "그래놀라"],
    category: "side",
    img: "./assets/sideyogart.jpg",
  },
];
const heartbtn = "./assets/heartbtn.png";
const hiddenClass = "hidden";

//데이터를 카테고리별로 나누기
let salad = [];
let sandwich = [];
let side = [];

function whatCategory() {
  myMenus.forEach((menu) => {
    if (menu.category === "salad") {
      salad.push(menu);
    } else if (menu.category === "sandwich") {
      sandwich.push(menu);
    } else {
      side.push(menu);
    }
  });
}
whatCategory();

//버튼이 체크되어있는지 확인
function isChecked(checkbox) {
  const is_checked = checkbox.checked;
  if (is_checked === true) {
    selectedCategory(checkbox);
    //카드 보여주기
  } else {
    discardCategory(checkbox);
    //카드 안 보여주기
  }
}

//상위 카테고리 선택된 부분 보여주기
const selectedAll = document.getElementById("all");
const selectedSalad = document.getElementById("salad");
const selectedSandwich = document.getElementById("sandwich");
const selectedSide = document.getElementById("side");

//체크박스 체크하면 선택된 카테고리 표시
function selectedCategory(checkbox) {
  if (checkbox.id === "allCheck") {
    selectedAll.classList.remove(hiddenClass);
  } else if (checkbox.id === "saladCheck") {
    selectedSalad.classList.remove(hiddenClass);
  } else if (checkbox.id === "sandwichCheck") {
    selectedSandwich.classList.remove(hiddenClass);
  } else {
    selectedSide.classList.remove(hiddenClass);
  }
}

//체크박스 해제하면 선택된 카테고리 삭제
function discardCategory(checkbox) {
  if (checkbox.id === "allCheck") {
    selectedAll.classList.add(hiddenClass);
  } else if (checkbox.id === "saladCheck") {
    selectedSalad.classList.add(hiddenClass);
  } else if (checkbox.id === "sandwichCheck") {
    selectedSandwich.classList.add(hiddenClass);
  } else {
    selectedSide.classList.add(hiddenClass);
  }
}

//카드 만들기
const cardSection = document.querySelector(".card_section");
function makeCard() {
  const cardArticle = document.createElement("article");
  cardArticle.className = "card";
}

//해시태그 자르기

//메뉴 전체 보여주는 함수
function showCard() {
  myMenus.map((menu) => {
    const menuName = document.createElement("h3");
    const hashtagWrapper = document.createElement("div");
    hashtagWrapper.className = "hashtag_wrapper";
    const hashtagContainer = document.createElement("ul");
    hashtagContainer.className = "hashtag";

    cardSection.appendChild(cardArticle);
    cardArticle.appendChild(menuName);
    cardArticle.appendChild(hashtagWrapper);
    hashtagWrapper.appendChild(hashtagContainer);

    menuName.innerText = menu.name;
    console.log(menu);

    menu.hashtags.forEach((hashtag) => {
      const hashtagItem = document.createElement("li");
      hashtagItem.className = "hashtag_item";
      hashtagContainer.appendChild(hashtagItem);

      hashtagItem.innerText = hashtag;
    });

    const menuImg = document.createElement("img");
    menuImg.className = "stuff";
    cardArticle.appendChild(menuImg);
    menuImg.src = menu.img;
    menuImg.alt = menu.name;

    const heartImg = document.createElement("img");
    heartImg.className = "minebtn";
    cardArticle.appendChild(heartImg);
    heartImg.src = heartbtn;
    heartImg.alt = "찜";

    return cardArticle;
  });
}
