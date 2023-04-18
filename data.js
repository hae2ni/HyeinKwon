const toDos = [
  {
    category: "할 일!",
    todos: [
      { todo: "피아노연습", done: true },
      { todo: "운동가기", done: true },
    ],
  },
  {
    category: "SOPT",
    todos: [
      { todo: "웹팟 세미나", done: false },
      { todo: "웹팟 뒤풀이", done: false },
    ],
  },
  {
    category: "영어 회화",
    todos: [{ todo: "전화영어", done: true }],
  },
  {
    category: "공부",
    todos: [{ todo: "인강", done: false }],
  },
];

const style = [
  "#c7f9cc",
  "#80ed99",
  "#fefee3",
  "#f4f0bb",
  "#fbfaff",
  "#ebd9fc",
];

const DONE_CLASSNAME = "done";

function initToDO() {
  const section = document.querySelector(".whattodo");

  //   할 일 카테고리 보이기
  toDos.map((data) => {
    const article = document.createElement("article");
    article.className = "todo_wrapper";
    section.appendChild(article);
    const div = document.createElement("div");
    div.className = "list";
    section.appendChild(article);
    article.appendChild(div);
    div.innerText = data.category;
    div.addEventListener("click", addToDo);

    // 할 일 리스트 보이기
    data.todos.forEach((data) => {
      const span = document.createElement("span");
      article.appendChild(span);
      span.innerHTML = `
    ${data.todo}`;
      span.classList.add("not_done");
      innerHeart();
      span.addEventListener("click", function () {
        span.classList.toggle(DONE_CLASSNAME);
        notDoneNum();
      });
    });
  });
}

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

  console.log(leftTodoList);
  heart.innerText = leftTodoList.length;
}

//모달
const modal = document.querySelector(".modal");
const addBtn = modal.querySelector(".addBtn");

function addToDo() {
  modal.classList.toggle("hidden");
}

addBtn.addEventListener("click", addToDo);

initToDO();
//해결 못한 것: 하트 안에 숫자 줄이기,,늘리기,,,
//추가 클릭하고 이거 어케 보여주죠,,아 대충 생각났따,,
//페이지 이동만들기이 그러면 기본 끝나 히히
