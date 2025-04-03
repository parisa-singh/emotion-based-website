const bg = localStorage.getItem("bgColor");
const accent = localStorage.getItem("accentColor");
const text = localStorage.getItem("textColor");

if (bg && accent && text) {
  document.body.style.backgroundColor = bg;
  document.body.style.color = text;
  document.documentElement.style.setProperty("--bg-color", bg);
  document.documentElement.style.setProperty("--accent-color", accent);
  document.documentElement.style.setProperty("--text-color", text);
}

const categoryList = document.getElementById("category-list");
const newCategoryInput = document.getElementById("new-category");
const addCategoryBtn = document.getElementById("add-category");
const grid = document.getElementById("intentions-grid");

let intentionsData = JSON.parse(localStorage.getItem("intentions")) || {};

function saveIntentions() {
  localStorage.setItem("intentions", JSON.stringify(intentionsData));
}

function renderCategories() {
  categoryList.innerHTML = "";
  grid.innerHTML = "";

  const hasCategories = Object.keys(intentionsData).length > 0;

  if (!hasCategories) {
    grid.innerHTML = "<p style='opacity: 0.6;'>Add a category to start setting intentions 🌱</p>";
  }

  Object.keys(intentionsData).forEach(category => {
    // Sidebar
    const li = document.createElement("li");
    li.textContent = category;

    const deleteCatBtn = document.createElement("button");
    deleteCatBtn.textContent = "🗑️";
    deleteCatBtn.className = "delete-btn";
    deleteCatBtn.onclick = () => {
      delete intentionsData[category];
      saveIntentions();
      renderCategories();
    };

    li.appendChild(deleteCatBtn);
    categoryList.appendChild(li);

    // Grid Item
    const gridItem = document.createElement("div");
    gridItem.className = "grid-item";

    const title = document.createElement("h4");
    title.textContent = category;
    gridItem.appendChild(title);

    const ul = document.createElement("ul");
    intentionsData[category].forEach((item, i) => {
      const itemLi = document.createElement("li");
      itemLi.textContent = item;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "❌";
      deleteBtn.className = "delete-btn";
      deleteBtn.onclick = () => {
        intentionsData[category].splice(i, 1);
        saveIntentions();
        renderCategories();
      };

      itemLi.appendChild(deleteBtn);
      ul.appendChild(itemLi);
    });

    gridItem.appendChild(ul);

    const input = document.createElement("input");
    input.placeholder = "Add intention...";
    gridItem.appendChild(input);

    const addBtn = document.createElement("button");
    addBtn.textContent = "Add";
    addBtn.onclick = () => {
      const val = input.value.trim();
      if (!val) return;
      intentionsData[category].push(val);
      saveIntentions();
      renderCategories();
    };
    gridItem.appendChild(addBtn);

    grid.appendChild(gridItem);
  });
}

addCategoryBtn.addEventListener("click", () => {
  const name = newCategoryInput.value.trim();
  if (!name || intentionsData[name]) return;
  intentionsData[name] = [];
  newCategoryInput.value = "";
  saveIntentions();
  renderCategories();
});

renderCategories();
