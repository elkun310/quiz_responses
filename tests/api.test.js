// Tests for QuizAPI class
const fs = require('fs');
const path = require('path');

// Load the API module
const apiCode = fs.readFileSync(path.join(__dirname, '../js/api.js'), 'utf8');
eval(apiCode);

describe('QuizAPI', () => {
    let api;

    beforeEach(() => {
        api = new QuizAPI({
            apiEndpoint: 'https://test-endpoint.com/api',
            timeout: 5000
        });
        global.fetch = jest.fn();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe('Constructor', () => {
        test('should initialize with default config', () => {
            const defaultApi = new QuizAPI();
            expect(defaultApi.timeout).toBe(10000);
        });

        test('should initialize with custom config', () => {
            expect(api.apiEndpoint).toBe('https://test-endpoint.com/api');
            expect(api.timeout).toBe(5000);
        });
    });

    describe('formatQuizData', () => {
        test('should format quiz data correctly', () => {
            const quizData = {
                userInfo: {
                    timestamp: '2025-11-20T14:00:00.000Z',
                    name: 'John Doe',
                    phone: '123-456-7890',
                    agent: 'Agent Smith'
                },
                answers: { 0: 2, 1: 1, 2: 3 },
                score: 25,
                totalQuestions: 30
            };

            const formatted = api.formatQuizData(quizData);

            expect(formatted).toHaveProperty('timestamp', '2025-11-20T14:00:00.000Z');
            expect(formatted).toHaveProperty('name', 'John Doe');
            expect(formatted).toHaveProperty('phone', '123-456-7890');
            expect(formatted).toHaveProperty('agentName', 'Agent Smith');
            expect(formatted).toHaveProperty('answers', { 0: 2, 1: 1, 2: 3 });
            expect(formatted).toHaveProperty('totalScore', 25);
            expect(formatted).toHaveProperty('totalQuestions', 30);
            expect(formatted).toHaveProperty('submittedAt');
        });
    });

    describe('validateQuizData', () => {
        test('should validate complete quiz data', () => {
            const validData = {
                userInfo: {
                    name: 'John Doe',
                    phone: '123-456-7890',
                    agent: 'Agent Smith'
                },
                answers: { 0: 2, 1: 1 },
                score: 10
            };

            const result = api.validateQuizData(validData);
            expect(result.valid).toBe(true);
            expect(result.errors).toHaveLength(0);
        });

        test('should fail validation when userInfo is missing', () => {
            const invalidData = {
                answers: { 0: 2 },
                score: 10
            };

            const result = api.validateQuizData(invalidData);
            expect(result.valid).toBe(false);
            expect(result.errors).toContain('User information is missing');
        });
    });

    describe('setEndpoint and getEndpoint', () => {
        test('should set and get endpoint', () => {
            const newEndpoint = 'https://new-endpoint.com/api';
            api.setEndpoint(newEndpoint);
            expect(api.getEndpoint()).toBe(newEndpoint);
        });
    });
});
