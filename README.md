# MindGlow: An Emotion-Based Self-Care Dashboard 🌈

Welcome to **MindGlow**, a self-care productivity dashboard that adapts to your emotions. Built with **HTML, CSS, and JavaScript**, this soft aesthetic project helps you organize your thoughts, track your habits, set intentions, and reflect based on how you feel.

---

## 🎯 Features

- **Mood Picker** – Choose how you feel and unlock a color-themed dashboard experience.
- **Dynamic Theme** – All pages reflect your selected mood with custom background, accent, and text colors.
- **Dashboard** – Central hub with glowing mood orb, animated entry, and buttons to all tools.
- **Affirmations** – List up to 20 affirmations to keep your mindset strong.
- **Brain Dump** – A soothing space to write out what's on your mind.
- **Intentions Grid** – Create and organize intentions under personalized categories.
- **Habit Tracker** – Track up to 5 habits weekly with interactive checkboxes.
- **Mood Orb** – A magical glowing orb that floats in the top-left, returning you to the mood picker.

---

## 💖 Tech Stack

- **HTML5** – Semantic structure
- **CSS3** – Custom animations, transitions, responsive layout
- **JavaScript (Vanilla)** – Interactivity, localStorage persistence

---

## 📁 Directory Structure

```
emotion-based-ui/
├── index.html                  # Mood selection screen
├── dashboard.html              # Main page after mood is chosen
├── affirmations.html
├── brain-dump.html
├── intentions.html
├── habit-tracker.html
│
├── scripts/
│   ├── app.js
│   ├── affirmations.js
│   ├── brain-dump.js
│   ├── intentions.js
│   └── habits.js
│
├── style/
│   ├── main.css
│   └── components.css
│
├── sounds/
│   └── click.mp3               # Mood orb chime
```

---

## 🌸 Mood Color Themes

| Mood        | Main Color  | Accent Color |
|-------------|-------------|---------------|
| Happy       | #FFF3B0     | #FFE066       |
| Sad         | #C7E9F1     | #A9D6E5       |
| Angry       | #F4A6A6     | #E29595       |
| Anxious     | #A5B8D0     | #7D93B2       |
| Calm        | #C8E6C9     | #A5D6A7       |
| Tired       | #D8C4E6     | #C6A9E0       |
| Excitement  | #FEC8D8     | #FDA4BA       |
| Motivated   | #FFD6A5     | #FFBC80       |

---

## 🧠 How It Works

- User selects a mood → stored in `localStorage`
- Theme colors are dynamically applied using CSS variables
- Mood orb updates color + emoji and links back to mood picker
- Each feature page pulls mood theme and adapts accordingly
- All data (affirmations, intentions, habits, dumps) are saved with `localStorage`

---

## 🚀 Getting Started

1. Clone or download this repository
2. Open `index.html` in your browser
3. Choose a mood and explore your dashboard ✨

> No frameworks, no backend — just pure creative frontend joy 💫

---

## ✨ Inspired By

- Cozy productivity tools ☁️
- Therapy and reflection journaling 🧘‍♀️
- Moodboards, pastel planners, bullet journals 💕

---


