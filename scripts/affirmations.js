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

const input = document.getElementById("affirmation-input");
const list = document.getElementById("affirmation-list");
const addBtn = document.getElementById("add-affirmation");

let affirmations = JSON.parse(localStorage.getItem("affirmations")) || [];

function saveAffirmations() {
  localStorage.setItem("affirmations", JSON.stringify(affirmations));
}

function renderAffirmations() {
  list.innerHTML = "";
  affirmations.forEach((text, index) => {
    const item = document.createElement("div");
    item.className = "affirmation-item";
    item.innerHTML = `
      <span>${text}</span>
      <button onclick="removeAffirmation(${index})">🗑</button>
    `;
    list.appendChild(item);
  });
}

function addAffirmation() {
  const value = input.value.trim();
  if (value && affirmations.length < 20) {
    affirmations.push(value);
    input.value = "";
    saveAffirmations();
    renderAffirmations();
  } else if (affirmations.length >= 20) {
    alert("Max 20 affirmations 💖");
  }
}

function removeAffirmation(index) {
  affirmations.splice(index, 1);
  saveAffirmations();
  renderAffirmations();
}

addBtn.addEventListener("click", addAffirmation);
window.removeAffirmation = removeAffirmation;
renderAffirmations();
