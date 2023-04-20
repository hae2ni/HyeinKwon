import { toDos } from "./todo.js";

const DONE_CLASSNAME = "done";
let clickCategoryId;

function initToDO() {
  const section = document.querySelector(".whattodo");

  //   할 일 카테고리 보이기
  toDos.map((data) => {
    const article = document.createElement("article");
    article.className = "todo_wrapper";
    section.appendChild(article);
    const div = document.createElement("div");
    div.id = data.category;
    div.className = "list";
    section.appendChild(article);
    article.appendChild(div);
    div.innerText = data.category;

    div.addEventListener("click", function (event) {
      clickCategoryId = event.target.id;
      // console.log(evednt.target.id);
      openModal();
      // const clickCategory = d
    });

    // 할 일 리스트 보이기
    data.todos.forEach((data) => {
      const span = document.createElement("span");
      article.appendChild(span);
      span.innerHTML = `
    ${data.todo}
    `;
      span.classList.add("not_done");
      innerHeart();

      span.addEventListener("click", function () {
        span.classList.toggle(DONE_CLASSNAME);
        notDoneNum();
      });
    });
  });
}
initToDO();
//미완료 할 일 갯수 세는 함수
function notDoneNum() {
  const leftTodo = document.getElementsByClassName("not_done"); //안 끝낸 것
  let leftTodoList = Array.from(leftTodo);
  const heart = document.querySelector(".todoing");

  let count = [];

  //끝난 부분 계산
  leftTodoList.forEach((spanData) => {
    if (spanData.classList.contains(DONE_CLASSNAME)) {
      count.push(spanData);
    }
  });
  heart.innerText = leftTodoList.length - count.length;
}

//하트 안에 있는 숫자 구현
function innerHeart() {
  const leftTodo = document.getElementsByClassName("not_done"); //안 끝낸 것
  let leftTodoList = Array.from(leftTodo);
  const heart = document.querySelector(".todoing");

  heart.innerText = leftTodoList.length;
}

//모달
const modal = document.querySelector(".modal");
const addBtn = modal.querySelector(".addBtn");

addBtn.addEventListener("click", function () {
  closeModal();
  addToDo();
});

function openModal() {
  modal.classList.remove("hidden");
  const newToDo = modal.querySelector(".addInput");
  newToDo.focus();
}

function closeModal() {
  modal.classList.add("hidden");
}

function addToDo() {
  console.log(clickCategoryId);

  const newToDo = modal.querySelector(".addInput").value;
  modal.querySelector(".addInput").innerText = newToDo;
  console.log(newToDo);
  const clickArticle = document.querySelector(`#${clickCategoryId}`).parentNode;

  const span = document.createElement("span");
  clickArticle.appendChild(span);
  span.innerHTML = `
    ${newToDo}
    `;
  span.classList.add("not_done");
  innerHeart();

  span.addEventListener("click", function () {
    span.classList.toggle(DONE_CLASSNAME);
    notDoneNum();
  });

  console.log(clickArticle.parentNode);
}
