const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-cont");

function addTask() {
  if (inputBox.value == "") {
    alert("Please enter a task");
  } else {
    let li = document.createElement("li");
    li.innerText = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

inputBox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
  }
});

// function saveData() {
//   localStorage.setItem("data", listContainer.innerHTML);
// }

// function showTask() {
//   listContainer.innerHTML = localStorage.getItem("data");
// }
// showTask();
