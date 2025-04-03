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

const habitInput = document.getElementById("habit-name");
const addHabitBtn = document.getElementById("add-habit");
const habitGrid = document.getElementById("habit-grid");

let habits = JSON.parse(localStorage.getItem("habits")) || [];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function saveHabits() {
  localStorage.setItem("habits", JSON.stringify(habits));
}

function toggleDay(habitIndex, dayIndex) {
  habits[habitIndex].days[dayIndex] = !habits[habitIndex].days[dayIndex];
  saveHabits();
  renderGrid();
}

function deleteHabit(index) {
  habits.splice(index, 1);
  saveHabits();
  renderGrid();
}

function renderGrid() {
  habitGrid.innerHTML = "";

  if (habits.length === 0) {
    habitGrid.innerHTML = "<p style='opacity: 0.6;'>Add up to 5 habits to start tracking 💡</p>";
    return;
  }

  // Header row
  const header = document.createElement("div");
  header.className = "habit-row header-row";
  header.innerHTML = `<div class='habit-name-cell'>Habit</div>` + 
    days.map(day => `<div class='day-cell'>${day}</div>`).join("");
  habitGrid.appendChild(header);

  habits.forEach((habit, i) => {
    const row = document.createElement("div");
    row.className = "habit-row";

    const nameCell = document.createElement("div");
    nameCell.className = "habit-name-cell";
    nameCell.textContent = habit.name;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => deleteHabit(i);
    nameCell.appendChild(deleteBtn);
    row.appendChild(nameCell);

    days.forEach((_, d) => {
      const dayCell = document.createElement("div");
      dayCell.className = "day-cell";
      if (habit.days[d]) {
        dayCell.classList.add("filled");
      }
      dayCell.onclick = () => toggleDay(i, d);
      row.appendChild(dayCell);
    });

    habitGrid.appendChild(row);
  });
}

addHabitBtn.addEventListener("click", () => {
  const name = habitInput.value.trim();
  if (!name || habits.length >= 5) return;
  habits.push({ name, days: [false, false, false, false, false, false, false] });
  habitInput.value = "";
  saveHabits();
  renderGrid();
});

renderGrid();
