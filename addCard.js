const menu = document.querySelector(".menu").value;
const tags = document.querySelector(".tag").value;
const imgs = document.querySelector(".image").value;
//,로 구분
const tag = tags.split(",");

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

function saveBtn() {
  e.preventDefalut();

  //localStorage에 저장
  localStorage.setItem("menuName", menu);
  localStorage.setItem("tags", tag);
  localStorage.setItem("imgs", imgs);
}

const saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click", saveBtn());
