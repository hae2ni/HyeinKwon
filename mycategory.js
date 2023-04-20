import TODOs from "./todo.js";

const todoWrapper = document.getElementById("wrapper");
const todoContainer = document.getElementById("todoContainer");

function showCategory() {
  TODOs.filter((data) => data);
  TODOs.map((data) => {
    const categoryList = document.createElement("li");
    categoryList.classList.add("category");
    categoryList.draggable = true;

    categoryList.innerText = data.category;
    todoContainer.appendChild(categoryList);
  });
}

showCategory();

function dragCategory() {
  let categoryArray = todoContainer.childNodes;
  console.log(categoryArray);

  categoryArray.forEach((element) => {
    todoContainer.append(element);
  });
}
todoContainer.addEventListener("click", dragCategory);
