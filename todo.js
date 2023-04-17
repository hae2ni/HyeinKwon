const toDos = [
  {
    category: "할 일!",
    todos: ["피아노연습", "운동가기"],
  },
  {
    category: "SOPT",
    todos: ["웹팟 세미나", "웹팟 뒤풀이"],
  },
  {
    category: "영어 회화",
    todos: ["전화 영어", "일기 쓰기"],
  },
  {
    category: "공부",
    todos: ["알고리즘", "인강듣기"],
  },
];

// 할 일 리스트 보여주기
const DONE_CLASSNAME = "done";

for (i = 0; i < toDos.length; i++) {
  const section = document.querySelector(".whattodo");

  const article = document.createElement("article");
  article.className = "todo_wrapper";

  const div = document.createElement("div");
  div.className = "list";

  section.appendChild(article);
  article.appendChild(div);
  div.innerText = toDos[i].category;

  for (j = 0; j < toDos[i].todos.length; j++) {
    const span = document.createElement("span");
    article.appendChild(span);

    span.className += "not_done";
    span.innerText = toDos[i].todos[j];

    span.addEventListener("click", function () {
      span.classList.toggle(DONE_CLASSNAME);
      console.log("here");
    });
  }
}

// 할 일 갯수를 세서 보여주기
const leftTodo = document.querySelector(".todoing");
var count = 0;
for (i = 0; i < toDos.length; i++) {
  for (j = 0; j < toDos[i].todos.length; j++) {
    count++;
    console.log(count);
  }
}
leftTodo.innerText = count;
