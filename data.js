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
//init 함수->넣기 태그->불러와서 이벤트 부착(함수화)
//함수 리스트업-> 하나씩 붙여넣기,,,,
//localstorage 저장xxxxxxx
const DONE_CLASSNAME = "done";

const here = () => {
  console.log("here");
};

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
      span.addEventListener("click", function () {
        span.classList.contains(DONE_CLASSNAME);
      });
    });
  });
}

//하트 안에 있는 숫자 구현
function innerHeart() {
  const heartNumber = document.querySelector(".todoing");
  const leftTodo = document.getElementsByClassName("not_done");
  let leftTodoList = Array.from(leftTodo);

  //   if (leftTodoList.classList.contains(DONE_CLASSNAME)) {
  //     leftTodoList.pop();
  //   }
  heartNumber.innerText = leftTodoList.length;
  //   var count = 0;
  //   for (i = 0; i < toDos.length; i++) {
  //     for (j = 0; j < toDos[i].todos.length; j++) {
  //       // if (toDos[i].todos[j].done === true) count++;
  //       if (l) {
  //         console.log(here);
  //       }
  //     }
  //   }

  console.log(leftTodoList);

  //   heartNumber.innerText = count;
}

const modal = document.querySelector(".modal");
const addBtn = modal.querySelector(".addBtn");

function addToDo() {
  modal.classList.toggle("hidden");
}

addBtn.addEventListener("click", addToDo);

initToDO();
innerHeart();

//해결 못한 것: 하트 안에 숫자 줄이기,,늘리기,,,
//추가 클릭하고 이거 어케 보여주죠,,아 대충 생각났따,,
//페이지 이동만들기이 그러면 기본 끝나 히히
