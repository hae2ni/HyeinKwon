const tags = document.querySelector(".tag");
const imgs = document.querySelector(".image");
//,로 구분

const obj = {};

//새로운 메뉴 이름 입력
function menuInput() {
  const menus = document.querySelector("#menuInput").value;
  obj["menu"] = menus;
}
const InputMenu = document.querySelector("#menuInput");
InputMenu.addEventListener("change", menuInput);

//새로운 태그 입력
function tagInput() {
  const tags = document.querySelector("#tagInput").value;
  const tagsArray = tags.split(",");
  obj["tags"] = tagsArray;
}
const InputTags = document.querySelector("#tagInput");
InputTags.addEventListener("change", tagInput);

//입력값을 localStorage에 저장(이름, 태그만 저장합니당)
function newMenuObj() {
  console.log(obj);
  localStorage.setItem("new", JSON.stringify(obj));
  console.log(JSON.parse(localStorage.getItem("new")));
}

//사진 입력
function imgInput() {
  const img = document.querySelector("#imgInput").files;
}
const InputImg = document.querySelector("#imgInput");
InputImg.addEventListener("change", imgInput);

//이미지 미리보기
function loadImg(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    const preview = document.getElementById("preview");

    reader.onload = (e) => {
      preview.src = e.target.result;
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    preview.src = "";
  }
}

//카테고리 선택
function selectCategory() {
  const category = document.querySelector("#selectCategory");
  const newCategory = category.value;
  console.log(newCategory);
  localStorage.setItem("category", newCategory);
}
const CategorySelect = document.querySelector("#selectCategory");
CategorySelect.addEventListener("change", selectCategory);

function saveIn() {
  menuInput();
  tagInput();
  imgInput();
  newMenuObj();
  selectCategory();
}

const saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click", function () {
  location.href = "./salad.html";
  saveIn();
});
