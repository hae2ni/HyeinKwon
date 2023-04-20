import TODOs from "./todo.js";

const todoWrapper = document.getElementById("wrapper");
const todoContainer = document.getElementById("todoContainer");

function showCategory(data) {
  TODOs.filter((data) => data);
  TODOs.map((data) => {
    const categoryList = document.createElement("li");
    categoryList.classList.add("category");

    categoryList.innerText = data.category;
    todoContainer.appendChild(categoryList);
  });
}

showCategory();
