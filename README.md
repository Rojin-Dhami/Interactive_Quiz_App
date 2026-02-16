# 🧠 BrainBlitz: Dynamic React Quiz App

A high-performance, interactive quiz application built with **React** and **Vite**. This app challenges users with a mix of static web development trivia and a **dynamically generated math engine**.



## 🚀 Features
* **Dual-Logic Question Bank:** * **Static:** Hand-picked Web Development questions.
    * **Dynamic:** Auto-generated addition and subtraction problems using a custom JavaScript engine.
* **Real-time Timer:** A 10-second countdown for each question to simulate high-pressure environments.
* **Persistent High Scores:** Saves your best performance locally using the Browser's `localStorage`.
* **Dynamic UI Feedback:** * Progress bar tracking your journey.
    * Urgency-based timer styling (turns red during the final 5 seconds).
* **Responsive Design:** Fully centered, mobile-friendly layout built with pure CSS Flexbox.

## 🛠️ Tech Stack
* **Core:** React.js (Hooks: `useState`, `useEffect`, `useMemo`)
* **Tooling:** Vite (for ultra-fast development)
* **Styling:** Custom CSS3 (Flexbox, Transitions, Keyframes)
* **Logic:** Custom Math Utility for infinite question generation.

## 📂 Project Structure
```text
src/
 ┣ components/     # UI Components
 ┣ mathUtils.js    # The "Brain": Random question generator logic
 ┣ questions.js    # The static technical question bank
 ┣ App.jsx         # Main Logic & State Management
 ┣ App.css         # Custom styles and layout
 ┗ main.jsx        # Entry point
```
## 🚀 Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Sushil-Bhatta-sb/LAB-4-QUIZ_GAME

```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run Development Server

```bash
npm run dev
```

## 🔮 Roadmap
1.**[ ] Hard Mode**: Increase number ranges to $1-100$.

2.**[ ] Multiplication/Division:** Adding more complexity to the math engine.

3.**[ ] Category Selection**: Let users choose between "Math Only" or "Tech Only".

Developed by Rojin Dhami
