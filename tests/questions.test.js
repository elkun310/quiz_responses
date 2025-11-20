// Tests for Questions Database
const fs = require('fs');
const path = require('path');

// Load the questions module
const questionsCode = fs.readFileSync(path.join(__dirname, '../js/questions.js'), 'utf8');
eval(questionsCode);

describe('QUESTIONS_DATABASE', () => {
    test('should be defined', () => {
        expect(QUESTIONS_DATABASE).toBeDefined();
    });

    test('should have mcqs and essays arrays', () => {
        expect(QUESTIONS_DATABASE).toHaveProperty('mcqs');
        expect(QUESTIONS_DATABASE).toHaveProperty('essays');
        expect(Array.isArray(QUESTIONS_DATABASE.mcqs)).toBe(true);
        expect(Array.isArray(QUESTIONS_DATABASE.essays)).toBe(true);
    });

    describe('MCQ Questions', () => {
        test('should have exactly 51 MCQ questions', () => {
            expect(QUESTIONS_DATABASE.mcqs).toHaveLength(51);
        });

        test('each MCQ should have required properties', () => {
            QUESTIONS_DATABASE.mcqs.forEach((question) => {
                expect(question).toHaveProperty('id');
                expect(question).toHaveProperty('type', 'mcq');
                expect(question).toHaveProperty('text');
                expect(question).toHaveProperty('options');
                expect(question).toHaveProperty('correctAnswer');
                expect(question).toHaveProperty('score');
            });
        });

        test('each MCQ should have bilingual text (en and ja)', () => {
            QUESTIONS_DATABASE.mcqs.forEach((question) => {
                expect(question.text).toHaveProperty('en');
                expect(question.text).toHaveProperty('ja');
                expect(typeof question.text.en).toBe('string');
                expect(typeof question.text.ja).toBe('string');
            });
        });

        test('each MCQ should have valid correctAnswer index', () => {
            QUESTIONS_DATABASE.mcqs.forEach((question) => {
                expect(question.correctAnswer).toBeGreaterThanOrEqual(0);
                expect(question.correctAnswer).toBeLessThan(4);
            });
        });
    });

    describe('Essay Questions', () => {
        test('should have exactly 9 essay questions', () => {
            expect(QUESTIONS_DATABASE.essays).toHaveLength(9);
        });

        test('each essay should have required properties', () => {
            QUESTIONS_DATABASE.essays.forEach((question) => {
                expect(question).toHaveProperty('id');
                expect(question).toHaveProperty('type', 'essay');
                expect(question).toHaveProperty('text');
                expect(question).toHaveProperty('score');
            });
        });
    });
});
