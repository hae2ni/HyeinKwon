const tags = document.querySelector(".tag");
const imgs = document.querySelector(".image");
//,로 구분

//새로운 메뉴 이름 입력
function menuInput() {
  const menus = document.querySelector("#menuInput").value;
  localStorage.setItem("newMenu", menus);
}
const InputMenu = document.querySelector("#menuInput");
InputMenu.addEventListener("change", menuInput);

//새로운 태그 입력
function tagInput() {
  const tags = document.querySelector("#tagInput").value;
  const tagsArray = tags.split(",");
  console.log(tagsArray);
  localStorage.setItem("newTag", tagsArray);
}
const InputTags = document.querySelector("#tagInput");
InputTags.addEventListener("change", tagInput);

function imgInput() {
  const img = document.querySelector("#imgInput").files;
  console.log(img);
  localStorage.setItem("newImg", img);
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
  e.preventDefalut();
  menuInput();
  tagInput();
  imgInput();
  selectCategory();
}

const saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click", function () {
  location.href = "./salad.html";
  saveIn();
});
