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
const hiddenClass = "hidden";

// 데이터를 카테고리별로 나누기
function filterCategory(filterdId) {
  switch (filterdId) {
    case "all":
      return myMenus;
    case "salad":
      return myMenus.filter((menu) => menu.category === "salad");
    case "sandwich":
      return myMenus.filter((menu) => menu.category === "sandwich");
    case "side":
      return myMenus.filter((menu) => menu.category === "side");
  }
}

// 버튼이 체크되어있는지 확인
function isChecked(checkbox) {
  const is_checked = checkbox.checked;
  if (is_checked === true) {
    showCategory(checkbox);
    showCard(checkbox.id);
  } else {
    discardCategory(checkbox);
    hiddenCard(checkbox.id);
  }
}

// 상위 카테고리 선택된 부분 보여주기
const all = document.querySelector(".all");
const salad = document.querySelector(".salad");
const sandwich = document.querySelector(".sandwich");
const side = document.querySelector(".side");

// 체크박스 체크하면 선택된 카테고리 표시
function showCategory(checkbox) {
  switch (checkbox.id) {
    case "all":
      all.classList.remove(hiddenClass);
      break;
    case "salad":
      salad.classList.remove(hiddenClass);
      break;
    case "sandwich":
      sandwich.classList.remove(hiddenClass);
      break;
    case "side":
      side.classList.remove(hiddenClass);
      break;
  }
}

//체크박스 해제하면 선택된 상위 카테고리 삭제
function discardCategory(checkbox) {
  switch (checkbox.id) {
    case "all":
      all.classList.add(hiddenClass);
      break;
    case "salad":
      salad.classList.add(hiddenClass);
      break;
    case "sandwich":
      sandwich.classList.add(hiddenClass);
      break;
    case "side":
      side.classList.add(hiddenClass);
      break;
  }
}

//상단 태그에서 엑스버튼 눌렀을 때 카드 사라자기
function xbtnhiddenCard(filterdId) {
  const hiddenBtn = filterdId.parentElement;
  const hiddenBtnClass = filterdId.className;
  const checkbox = document.getElementById(hiddenBtnClass);
  `$("checkbox").prop("checked", false)`;

  hiddenBtn.classList.add(hiddenClass);
  hiddenCard(filterdId);
}

//카드 만들기
function makeCard(data) {
  const cardArticle = document.createElement("article");
  cardArticle.classList.add("card");
  cardArticle.classList.add(data.category);

  cardArticle.innerHTML = `
    <h3>${data.name}</h3>
    `;

  const hashtagWrapper = document.createElement("div");
  hashtagWrapper.className = "hashtag_wrapper";
  const hashtagContainer = document.createElement("ul");
  hashtagContainer.className = "hashtag";

  cardArticle.appendChild(hashtagWrapper);
  hashtagWrapper.appendChild(hashtagContainer);

  data.hashtags.forEach((tag) => {
    const hashtag = document.createElement("li");
    hashtag.className = "hashtag_item";

    hashtagContainer.appendChild(hashtag);
    hashtag.innerText = tag;
  });

  const hashtagMore = document.createElement("button");
  hashtagMore.innerText = "+";
  hashtagMore.classList.add("hashtag_btn");
  hashtagWrapper.appendChild(hashtagMore);

  //태그 모달
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerText = `${data.hashtags}`;
  const modalWrapper = document.createElement("div");
  cardArticle.appendChild(modalWrapper);

  function modalOpener() {
    modalWrapper.appendChild(modal);
    modalWrapper.classList.toggle(hiddenClass);
  }
  hashtagMore.addEventListener("click", modalOpener);

  const menuImg = document.createElement("img");
  menuImg.classList.add("stuff");
  menuImg.src = data.img;
  menuImg.alt = data.name;
  cardArticle.appendChild(menuImg);

  const mineBtn = document.createElement("img");
  mineBtn.src = "./assets/heartbtn.png";
  mineBtn.alt = "찜버튼";
  mineBtn.classList.add("minebtn");
  cardArticle.appendChild(mineBtn);
  return cardArticle;
}

function showCard(filterdId) {
  const filteredData = filterCategory(filterdId);
  const cardSection = document.querySelector(".card_section");

  filteredData.map((data) => {
    let cards = makeCard(data);
    // console.log(cards);
    cardSection.appendChild(cards);
  });
}

//카드 없애기
function hiddenCard(filterdId) {
  const cardArticle = document.querySelectorAll(".card");

  cardArticle.forEach((data) => {
    if (data.classList.contains(filterdId)) {
      data.remove();
    } else if (!data.classList.contains(filterdId)) {
      data.remove();
    }
  });
}
