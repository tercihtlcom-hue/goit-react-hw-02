# React + Vite

Kanka, projenin GitHub'da jilet gibi durması ve mentorların "Adam yapmış" demesi için sağlam bir README.md şart. Senin için hem Türkçe hem İngilizce (çünkü GoIT genelde İngilizce ister) karışık, profesyonel bir dosya hazırladım.

Projenin en ana dizinindeki (package.json'ın yanı) README.md dosyasını aç ve içindekileri silip şunları yapıştır:

☕ Sip Happens Café - Feedback App
This is a modern, responsive feedback tracking application built with React and Vite. It allows users to collect and manage customer feedback for a café business.

🚀 Features
Real-time Statistics: Instant calculation of total feedback and positive feedback percentage.

Persistent Storage: Uses localStorage to save feedback data, so it stays even after refreshing the page.

Conditional Rendering: * Shows a "No feedback yet" notification when there's no data.

The "Reset" button only appears after the first feedback is given.

Responsive Design: Fully functional on mobile and desktop.

Modular CSS: Styled using CSS Modules to prevent naming conflicts.

🛠️ Tech Stack
Frontend: React 18

Build Tool: Vite

Styling: CSS Modules

Normalization: modern-normalize

📦 Project Structure
Plaintext
src/
├── components/
│   ├── App/             # Main application logic & state
│   ├── Description/     # Header and intro text
│   ├── Options/         # Feedback buttons (Good, Neutral, Bad, Reset)
│   ├── Feedback/        # Statistics display
│   └── Notification/    # Empty state message
├── index.css            # Global styles
└── main.jsx             # Entry point
