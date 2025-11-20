// Test setup file
// This file runs before each test suite

// Mock localStorage
const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
};
global.localStorage = localStorageMock;

// Mock console methods to reduce noise in tests
global.console = {
    ...console,
    log: jest.fn(),
    error: jest.fn(),
    warn: jest.fn(),
};

// Reset mocks before each test
beforeEach(() => {
    jest.clearAllMocks();
    localStorage.getItem.mockReturnValue(null);
});
