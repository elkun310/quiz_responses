module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
    collectCoverageFrom: [
        'js/**/*.js',
        '!js/**/*.test.js',
        '!**/node_modules/**'
    ],
    coverageThreshold: {
        global: {
            branches: 70,
            functions: 70,
            lines: 70,
            statements: 70
        }
    },
    testMatch: [
        '**/tests/**/*.test.js'
    ],
    moduleFileExtensions: ['js'],
    verbose: true
};
