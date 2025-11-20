// Tests for QuizApp class
const fs = require('fs');
const path = require('path');

// Load dependencies
const questionsCode = fs.readFileSync(path.join(__dirname, '../js/questions.js'), 'utf8');
const apiCode = fs.readFileSync(path.join(__dirname, '../js/api.js'), 'utf8');
const appCode = fs.readFileSync(path.join(__dirname, '../js/app.js'), 'utf8');

// Evaluate code
eval(questionsCode);
eval(apiCode);

// Mock DOM
document.body.innerHTML = '<div id="app"></div>';

// Remove the DOMContentLoaded listener from app.js before evaluating
const appCodeWithoutListener = appCode.replace(/document\.addEventListener\('DOMContentLoaded'.*?\}\);/s, '');
eval(appCodeWithoutListener);

describe('QuizApp', () => {
    let app;

    beforeEach(() => {
        document.body.innerHTML = '<div id="app"></div>';
        localStorage.clear();
        jest.clearAllMocks();
        app = new QuizApp();
    });

    afterEach(() => {
        if (app.timerInterval) {
            clearInterval(app.timerInterval);
        }
    });

    describe('Constructor and Initialization', () => {
        test('should initialize with default values', () => {
            expect(app.currentPage).toBe('landing');
            expect(app.currentQuestionIndex).toBe(0);
            expect(app.timeRemaining).toBe(1200);
        });

        test('should initialize with English language by default', () => {
            expect(app.language).toBe('en');
        });
    });

    describe('Translation System', () => {
        test('should return English translations', () => {
            app.language = 'en';
            expect(app.getTranslation('title')).toBe('📝 Random Quiz Questions');
            expect(app.getTranslation('startQuiz')).toBe('Start Quiz');
        });

        test('should return Japanese translations', () => {
            app.language = 'ja';
            expect(app.getTranslation('title')).toBe('📝 ランダムクイズ');
            expect(app.getTranslation('startQuiz')).toBe('クイズを開始');
        });
    });

    describe('Question Loading', () => {
        test('should load 28 MCQs and 2 essays', () => {
            app.loadQuestions();
            const mcqs = app.quizQuestions.filter(q => q.type === 'mcq');
            const essays = app.quizQuestions.filter(q => q.type === 'essay');

            expect(mcqs).toHaveLength(28);
            expect(essays).toHaveLength(2);
            expect(app.quizQuestions).toHaveLength(30);
        });
    });

    describe('Phone Validation', () => {
        test('should validate correct phone numbers', () => {
            expect(app.isValidPhone('123-456-7890')).toBe(true);
            expect(app.isValidPhone('1234567890')).toBe(true);
        });

        test('should reject invalid phone numbers', () => {
            expect(app.isValidPhone('123')).toBe(false);
            expect(app.isValidPhone('abc')).toBe(false);
        });
    });

    describe('Timer Functions', () => {
        test('should format time correctly', () => {
            expect(app.formatTime(1200)).toBe('20:00');
            expect(app.formatTime(60)).toBe('01:00');
            expect(app.formatTime(0)).toBe('00:00');
        });
    });

    describe('Score Calculation', () => {
        test('should calculate score for correct MCQ answers', () => {
            app.quizQuestions = [
                { id: 'mcq-1', type: 'mcq', correctAnswer: 2, score: 1 },
                { id: 'mcq-2', type: 'mcq', correctAnswer: 1, score: 1 }
            ];
            app.userAnswers = { 0: 2, 1: 1 };

            const score = app.calculateScore();
            expect(score).toBe(2);
        });

        test('should award points for answered essay questions', () => {
            app.quizQuestions = [
                { id: 'essay-1', type: 'essay', score: 5 }
            ];
            app.userAnswers = { 0: 'This is my essay answer.' };

            const score = app.calculateScore();
            expect(score).toBe(5);
        });
    });
});
