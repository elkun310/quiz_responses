// API Integration Module
// Handles communication with Google Sheets backend

class QuizAPI {
    constructor(config = {}) {
        // Configuration for API endpoint
        this.apiEndpoint = config.apiEndpoint || 'https://script.google.com/macros/d/YOUR_SCRIPT_ID/usercallback';
        this.timeout = config.timeout || 10000;
    }

    /**
     * Submit quiz data to backend
     * @param {Object} quizData - Quiz submission data
     * @returns {Promise} Response from backend
     */
    async submitQuiz(quizData) {
        try {
            const payload = this.formatQuizData(quizData);

            const response = await this.sendRequest(payload);

            if (response.success) {
                console.log('Quiz submitted successfully:', response);
                return {
                    success: true,
                    message: 'Quiz submitted successfully',
                    data: response
                };
            } else {
                throw new Error(response.error || 'Failed to submit quiz');
            }
        } catch (error) {
            console.error('Error submitting quiz:', error);
            return {
                success: false,
                message: error.message,
                error: error
            };
        }
    }

    /**
     * Format quiz data for backend submission
     * @param {Object} quizData - Raw quiz data
     * @returns {Object} Formatted data
     */
    formatQuizData(quizData) {
        const { userInfo, answers, score, totalQuestions } = quizData;

        return {
            timestamp: userInfo.timestamp,
            name: userInfo.name,
            phone: userInfo.phone,
            agentName: userInfo.agent || userInfo.agentName,
            answers: answers,
            totalScore: score,
            totalQuestions: totalQuestions,
            submittedAt: new Date().toISOString()
        };
    }

    /**
     * Send HTTP request to backend
     * @param {Object} payload - Data to send
     * @returns {Promise} Response from server
     */
    async sendRequest(payload) {
        return new Promise((resolve, reject) => {
            const timeoutId = setTimeout(() => {
                reject(new Error('Request timeout'));
            }, this.timeout);

            // Use fetch API for modern browsers
            if (typeof fetch !== 'undefined') {
                fetch(this.apiEndpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload),
                    mode: 'no-cors'
                })
                    .then(response => {
                        clearTimeout(timeoutId);
                        // Note: With no-cors mode, we can't read response body
                        // Assume success if request completes
                        resolve({ success: true, message: 'Data submitted' });
                    })
                    .catch(error => {
                        clearTimeout(timeoutId);
                        reject(error);
                    });
            } else {
                // Fallback for older browsers using XMLHttpRequest
                const xhr = new XMLHttpRequest();

                xhr.onload = () => {
                    clearTimeout(timeoutId);
                    try {
                        const response = JSON.parse(xhr.responseText);
                        resolve(response);
                    } catch (e) {
                        resolve({ success: true, message: 'Data submitted' });
                    }
                };

                xhr.onerror = () => {
                    clearTimeout(timeoutId);
                    reject(new Error('Network error'));
                };

                xhr.open('POST', this.apiEndpoint, true);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.send(JSON.stringify(payload));
            }
        });
    }

    /**
     * Validate quiz data before submission
     * @param {Object} quizData - Quiz data to validate
     * @returns {Object} Validation result
     */
    validateQuizData(quizData) {
        const errors = [];

        if (!quizData.userInfo) {
            errors.push('User information is missing');
        } else {
            if (!quizData.userInfo.name) errors.push('Name is required');
            if (!quizData.userInfo.phone) errors.push('Phone is required');
            if (!quizData.userInfo.agent) errors.push('Agent name is required');
        }

        if (!quizData.answers || Object.keys(quizData.answers).length === 0) {
            errors.push('No answers provided');
        }

        if (typeof quizData.score !== 'number') {
            errors.push('Score is invalid');
        }

        return {
            valid: errors.length === 0,
            errors: errors
        };
    }

    /**
     * Set API endpoint
     * @param {string} endpoint - New API endpoint URL
     */
    setEndpoint(endpoint) {
        this.apiEndpoint = endpoint;
    }

    /**
     * Get current API endpoint
     * @returns {string} Current endpoint
     */
    getEndpoint() {
        return this.apiEndpoint;
    }
}

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = QuizAPI;
}
