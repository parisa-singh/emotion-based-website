// Apply saved emotion-based theme
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

// Elements
const newDumpBtn = document.getElementById("new-dump");
const dumpList = document.getElementById("dump-list");
const dumpInput = document.getElementById("dump-input");
const emotionInput = document.getElementById("dump-emotion");
const textInput = document.getElementById("dump-text");
const submitDumpBtn = document.getElementById("submit-dump");

let brainDumps = JSON.parse(localStorage.getItem("brainDumps")) || [];

function saveDumps() {
  localStorage.setItem("brainDumps", JSON.stringify(brainDumps));
}

function renderDumps() {
  dumpList.innerHTML = "";
  brainDumps.forEach((entry, index) => {
    const dumpItem = document.createElement("div");
    dumpItem.className = "dump-entry";
    dumpItem.innerHTML = `
      <p><strong>Date:</strong> ${entry.date}</p>
      <p><strong>Emotions:</strong> ${entry.emotion}</p>
      <p><strong>Dump:</strong></p>
      <p>${entry.text}</p>
      <button onclick="deleteDump(${index})">Delete</button>
    `;
    dumpList.appendChild(dumpItem);
  });
}

function deleteDump(index) {
  brainDumps.splice(index, 1);
  saveDumps();
  renderDumps();
}

newDumpBtn.addEventListener("click", () => {
  dumpInput.classList.remove("hidden");
  emotionInput.focus();
});

submitDumpBtn.addEventListener("click", () => {
  const date = new Date().toLocaleDateString();
  const emotion = emotionInput.value.trim();
  const text = textInput.value.trim();

  if (!emotion || !text) {
    alert("Please fill in both fields 💛");
    return;
  }

  brainDumps.unshift({ date, emotion, text });
  saveDumps();
  renderDumps();

  emotionInput.value = "";
  textInput.value = "";
  dumpInput.classList.add("hidden");
});

window.deleteDump = deleteDump;
renderDumps();
