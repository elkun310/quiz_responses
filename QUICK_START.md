# Quick Start Guide - Quiz Application

## ✅ Project is Now Running!

Your quiz application is currently running at:
- **http://localhost:3000**
- **http://127.0.0.1:3000**

## 📋 Available Commands

### Start the Application
```bash
npm start          # Start server on port 3000
npm run dev        # Start with no caching (for development)
```

### Run Tests
```bash
npm test                # Run all tests once
npm run test:watch      # Run tests in watch mode
npm run test:coverage   # Run tests with coverage report
```

## 🧪 Test Suite Summary

I've created a comprehensive test suite for your project with **3 test files**:

### 1. **API Tests** (`tests/api.test.js`)
- Tests QuizAPI class
- Validates data formatting
- Tests submission logic
- Validates user input

### 2. **Questions Tests** (`tests/questions.test.js`)
- Validates 51 MCQ questions
- Validates 9 Essay questions
- Checks bilingual support (EN/JA)
- Ensures data integrity

### 3. **App Tests** (`tests/app.test.js`)
- Tests QuizApp main class
- Validates translations
- Tests quiz flow
- Validates scoring system
- Tests timer functionality

## 🎯 What Was Fixed

**Problem**: Port 8080 was blocked (permission denied)

**Solution**: Changed to port 3000 in `package.json`

## 📊 Test Coverage

Run this command to see detailed coverage:
```bash
npm run test:coverage
```

Expected coverage: **70%+** across all metrics

## 🚀 Next Steps

1. **View the app**: Open http://localhost:3000 in your browser
2. **Run tests**: Execute `npm test` to verify everything works
3. **Review tests**: Check the `tests/` folder to see all test cases
4. **Read docs**: See `TESTING_README.md` for detailed testing guide

## 🛠️ Troubleshooting

### If port 3000 is also blocked:
Edit `package.json` and change the port:
```json
"start": "http-server -p 5000"
```

### If tests fail:
```bash
npm install              # Reinstall dependencies
npx jest --clearCache    # Clear Jest cache
npm test                 # Run tests again
```

### Alternative servers:
```bash
# Python
python -m http.server 8000

# Or use VS Code Live Server extension
```

## 📁 Project Structure

```
quiz-ai/
├── js/
│   ├── app.js          # Main application
│   ├── api.js          # API integration
│   └── questions.js    # Question database
├── tests/
│   ├── setup.js        # Test configuration
│   ├── api.test.js     # API tests
│   ├── questions.test.js  # Questions tests
│   └── app.test.js     # App tests
├── styles/
│   └── main.css        # Styles
├── index.html          # Entry point
├── package.json        # Dependencies & scripts
├── jest.config.js      # Jest configuration
└── babel.config.js     # Babel configuration
```

## ✨ Features Tested

- ✅ User registration form validation
- ✅ Language switching (English ⟷ Japanese)
- ✅ Dark mode toggle
- ✅ Random question selection (28 MCQ + 2 Essay)
- ✅ 20-minute timer
- ✅ Answer tracking
- ✅ Score calculation
- ✅ Quiz submission to Google Sheets
- ✅ Results display
- ✅ Quiz retake functionality

---

**Happy Testing! 🎉**
