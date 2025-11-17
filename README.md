# Random Quiz Questions Web App

A responsive web application for delivering randomized quizzes with Google Sheets integration for data collection.

## Project Overview

This application allows users to:
- Fill in personal information (Name, Phone, Agent Name)
- Take a timed quiz (20 minutes)
- Answer 30 randomized questions (28 MCQs + 2 Essays)
- Submit answers and view their total score
- Have results automatically saved to Google Sheets

## Project Structure

```
review-web/
├── index.html              # Main HTML entry point
├── package.json            # Project dependencies
├── README.md              # This file
├── styles/
│   └── main.css           # All styling (responsive design)
├── js/
│   ├── app.js             # Main application logic
│   ├── questions.js       # Question database (TASK-003)
│   ├── api.js             # Backend API integration (TASK-008, TASK-010, TASK-012)
│   └── utils.js           # Utility functions
└── .taskmaster/
    ├── tasks.json         # All project tasks
    └── tasks/             # Individual task files
```

## Getting Started

### Prerequisites
- Node.js (for running development server)
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open browser and navigate to:
```
http://localhost:8080
```

## Features

### Current Implementation (TASK-001)
- ✅ Project structure and dependencies set up
- ✅ Responsive HTML/CSS/JavaScript foundation
- ✅ Landing page with user information form
- ✅ Quiz page with question display
- ✅ Timer component (20 minutes)
- ✅ Results page with score display
- ✅ Placeholder question system

### Pending Implementation
- TASK-002: Landing page form validation
- TASK-003: Real question database (51 MCQs + 9 Essays)
- TASK-004: Question randomization logic
- TASK-005: Enhanced quiz UI
- TASK-006: Timer refinements
- TASK-007: Score calculation
- TASK-008: Google Sheets API setup
- TASK-009: Google Sheet structure
- TASK-010: Quiz submission functionality
- TASK-011: Results page enhancements
- TASK-012: Data persistence to Google Sheets
- TASK-013: Responsive design testing
- TASK-014: Answer hiding mechanism
- TASK-015: Testing and QA

## Technical Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Google Apps Script or Serverless Function (TBD)
- **Data Storage**: Google Sheets
- **Development Server**: http-server
- **HTTP Client**: Axios

## Key Files

### index.html
Entry point for the application. Loads CSS and JavaScript files.

### styles/main.css
Contains all styling including:
- Responsive design for mobile, tablet, desktop
- Landing page styles
- Quiz page styles
- Results page styles
- Form and button styles
- Timer styles

### js/app.js
Main application class (QuizApp) that handles:
- Page rendering (landing, quiz, results)
- User information collection
- Quiz flow management
- Timer functionality
- Score calculation
- Event handling

## Scoring System

- **Multiple Choice Questions**: 1 point each (28 questions)
- **Essay Questions**: 5 points each (2 questions)
- **Maximum Score**: 38 points

## Timer

- **Duration**: 20 minutes (1200 seconds)
- **Warning**: Displays in orange when < 10 minutes remain
- **Danger**: Displays in red when < 5 minutes remain
- **Auto-submit**: Quiz automatically submits when time expires

## Data Flow

1. User fills landing page form
2. Quiz loads with 30 randomized questions
3. User answers questions within 20 minutes
4. User submits quiz
5. Score is calculated
6. Results are sent to Google Sheets
7. Results page displays total score

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Development Notes

- All styling is mobile-first responsive
- JavaScript uses vanilla ES6+ (no frameworks)
- Placeholder questions are used until TASK-003 is complete
- Backend integration will be added in TASK-008 through TASK-012

## Next Steps

1. Complete TASK-002: Form validation
2. Complete TASK-003: Add real question database
3. Proceed with remaining tasks in order

## License

MIT
