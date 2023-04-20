const menu = document.querySelector(".menu").value;
const tags = document.querySelector(".tag").value;
const imgs = document.querySelector(".image").value;

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
