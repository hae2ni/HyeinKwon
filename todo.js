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

    span.innerText = toDos[i].todos[j];
  }
}
