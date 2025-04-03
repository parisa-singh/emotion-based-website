const moodSelect = document.getElementById("mood-select");
const submitButton = document.getElementById("submit-mood");

const moodThemes = {
  happy: { bg: "#FFF3B0", accent: "#FFE066", text: "#3B3B3B" },
  sad: { bg: "#C7E9F1", accent: "#A9D6E5", text: "#2E2E2E" },
  angry: { bg: "#F4A6A6", accent: "#E29595", text: "#2C2C2C" },
  anxious: { bg: "#A5B8D0", accent: "#7D93B2", text: "#2A2A2A" },
  calm: { bg: "#C8E6C9", accent: "#A5D6A7", text: "#2F2F2F" },
  tired: { bg: "#D8C4E6", accent: "#C6A9E0", text: "#313131" },
  excitement: { bg: "#FEC8D8", accent: "#FDA4BA", text: "#2D2D2D" },
  motivated: { bg: "#FFD6A5", accent: "#FFBC80", text: "#2B2B2B" }
};

submitButton.addEventListener("click", () => {
  const mood = moodSelect.value;
  if (!moodThemes[mood]) return alert("Please select a mood 🌈");

  const { bg, accent, text } = moodThemes[mood];

  // Save theme to localStorage
  localStorage.setItem("mood", mood);
  localStorage.setItem("bgColor", bg);
  localStorage.setItem("accentColor", accent);
  localStorage.setItem("textColor", text);

  // Smooth transition to dashboard
  document.body.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 500);
});
