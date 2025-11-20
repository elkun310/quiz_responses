# Quiz Application - Testing Guide

## Overview
This project includes a comprehensive test suite using **Jest** to ensure the quiz application works correctly.

## Test Structure

```
tests/
├── setup.js           # Test setup and mocks
├── api.test.js        # Tests for QuizAPI class
├── questions.test.js  # Tests for questions database
└── app.test.js        # Tests for QuizApp class
```

## Installation

First, install all dependencies including test dependencies:

```bash
npm install
```

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in watch mode (auto-rerun on file changes)
```bash
npm run test:watch
```

### Run tests with coverage report
```bash
npm run test:coverage
```

## Test Coverage

The test suite covers:

### 1. **QuizAPI Tests** (`api.test.js`)
- ✅ Constructor initialization
- ✅ Quiz data formatting
- ✅ Data validation (user info, answers, score)
- ✅ API endpoint management
- ✅ Quiz submission

### 2. **Questions Database Tests** (`questions.test.js`)
- ✅ Database structure validation
- ✅ 51 MCQ questions verification
- ✅ 9 Essay questions verification
- ✅ Bilingual support (English & Japanese)
- ✅ Question properties validation
- ✅ Unique ID verification
- ✅ Score calculation validation

### 3. **QuizApp Tests** (`app.test.js`)
- ✅ Application initialization
- ✅ Translation system (EN/JA)
- ✅ Dark mode functionality
- ✅ Question loading and randomization
- ✅ Phone number validation
- ✅ Timer functions
- ✅ Score calculation (MCQ + Essay)
- ✅ Navigation (next/previous)
- ✅ Quiz submission
- ✅ Quiz retake functionality

## Running the Application

### Development Server (Port 3000)
```bash
npm start
# or
npm run dev
```

Then open your browser to: **http://localhost:3000**

### Alternative: Use Python HTTP Server
If you encounter port issues, you can use Python's built-in server:

```bash
# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

### Alternative: Use Live Server (VS Code Extension)
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## Troubleshooting

### Port Already in Use
If port 3000 is already in use, you can:

1. **Change the port** in `package.json`:
   ```json
   "start": "http-server -p 5000"
   ```

2. **Kill the process using the port**:
   ```bash
   # Windows
   netstat -ano | findstr :3000
   taskkill /PID <PID> /F
   ```

3. **Use a different server** (see alternatives above)

### Test Failures
If tests fail:
1. Ensure all dependencies are installed: `npm install`
2. Clear Jest cache: `npx jest --clearCache`
3. Check that all source files are present in the `js/` directory

## Coverage Thresholds

The project maintains the following minimum coverage:
- **Branches**: 70%
- **Functions**: 70%
- **Lines**: 70%
- **Statements**: 70%

## Writing New Tests

When adding new features, follow this pattern:

```javascript
describe('Feature Name', () => {
    let instance;

    beforeEach(() => {
        // Setup
        instance = new YourClass();
    });

    test('should do something', () => {
        // Arrange
        const input = 'test';
        
        // Act
        const result = instance.method(input);
        
        // Assert
        expect(result).toBe('expected');
    });
});
```

## Continuous Integration

Tests can be integrated into CI/CD pipelines:

```yaml
# Example GitHub Actions
- name: Run Tests
  run: npm test

- name: Generate Coverage
  run: npm run test:coverage
```

## Additional Resources

- [Jest Documentation](https://jestjs.io/)
- [Jest DOM Matchers](https://github.com/testing-library/jest-dom)
- [Testing Best Practices](https://testingjavascript.com/)
