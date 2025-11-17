// Quiz Application Main File
class QuizApp {
    constructor() {
        this.currentPage = 'landing'; // landing, quiz, results
        this.currentQuestionIndex = 0;
        this.userInfo = {};
        this.quizQuestions = [];
        this.userAnswers = {};
        this.totalScore = 0;
        this.timerInterval = null;
        this.timeRemaining = 20 * 60; // 20 minutes in seconds
        this.quizStarted = false;

        // Initialize API client
        this.api = new QuizAPI({
            apiEndpoint: 'https://script.google.com/macros/s/AKfycbytWIQdwNmI6t7ELybbvUEZ1hGXPXLkdOaWxyasp5-UgzhmX61aIceX9n-08JZNwJDs/exec'
        });

        this.init();
    }

    init() {
        this.render();
        this.attachEventListeners();
    }

    render() {
        const app = document.getElementById('app');

        if (this.currentPage === 'landing') {
            app.innerHTML = this.renderLandingPage();
        } else if (this.currentPage === 'quiz') {
            app.innerHTML = this.renderQuizPage();
            this.updateTimer();
        } else if (this.currentPage === 'results') {
            app.innerHTML = this.renderResultsPage();
        }

        this.attachEventListeners();
    }

    renderLandingPage() {
        return `
            <div class="container landing-page">
                <h1>📝 Random Quiz Questions</h1>
                <p>Test your knowledge with our randomized quiz. You'll have 20 minutes to answer 30 questions.</p>
                
                <div class="form-container">
                    <form id="userInfoForm">
                        <div class="form-group">
                            <label for="name">Full Name *</label>
                            <input type="text" id="name" name="name" required>
                            <div class="error-message"></div>
                        </div>
                        
                        <div class="form-group">
                            <label for="phone">Phone Number *</label>
                            <input type="tel" id="phone" name="phone" required>
                            <div class="error-message"></div>
                        </div>
                        
                        <div class="form-group">
                            <label for="agent">Agent Name *</label>
                            <input type="text" id="agent" name="agent" required>
                            <div class="error-message"></div>
                        </div>
                        
                        <button type="submit" class="start-quiz-btn">Start Quiz</button>
                    </form>
                </div>
            </div>
        `;
    }

    renderQuizPage() {
        const question = this.quizQuestions[this.currentQuestionIndex];
        const isLastQuestion = this.currentQuestionIndex === this.quizQuestions.length - 1;
        const timeDisplay = this.formatTime(this.timeRemaining);

        let timerClass = '';
        if (this.timeRemaining < 300) timerClass = 'danger'; // Less than 5 minutes
        else if (this.timeRemaining < 600) timerClass = 'warning'; // Less than 10 minutes

        let questionContent = '';

        if (question.type === 'mcq') {
            questionContent = `
                <div class="options">
                    ${question.options.map((option, index) => `
                        <label class="option">
                            <input type="radio" name="answer" value="${index}" 
                                ${this.userAnswers[this.currentQuestionIndex] === index ? 'checked' : ''}>
                            <span class="option-text">${option}</span>
                        </label>
                    `).join('')}
                </div>
            `;
        } else {
            questionContent = `
                <textarea class="essay-input" id="essayAnswer" placeholder="Type your answer here...">${this.userAnswers[this.currentQuestionIndex] || ''}</textarea>
            `;
        }

        return `
            <div class="container quiz-page">
                <div class="quiz-header">
                    <div class="quiz-title">Quiz in Progress</div>
                    <div class="timer ${timerClass}">${timeDisplay}</div>
                </div>
                
                <div class="question-counter">Question ${this.currentQuestionIndex + 1} of ${this.quizQuestions.length}</div>
                
                <div class="question-container">
                    <span class="question-type">${question.type === 'mcq' ? 'Multiple Choice' : 'Essay'}</span>
                    <div class="question-text">${question.text}</div>
                    ${questionContent}
                </div>
                
                <div class="quiz-navigation">
                    <button class="nav-button prev-btn" ${this.currentQuestionIndex === 0 ? 'disabled' : ''}>← Previous</button>
                    ${!isLastQuestion ? `
                        <button class="nav-button next-btn">Next →</button>
                    ` : `
                        <button class="nav-button submit-button submit-btn">Submit Quiz</button>
                    `}
                </div>
            </div>
        `;
    }

    renderResultsPage() {
        const maxScore = 38; // 28 MCQs (1 point each) + 2 Essays (5 points each)
        const percentage = Math.round((this.totalScore / maxScore) * 100);

        let message = '';
        if (percentage >= 80) {
            message = '🎉 Excellent! You did great!';
        } else if (percentage >= 60) {
            message = '👍 Good job! Keep practicing!';
        } else if (percentage >= 40) {
            message = '📚 Nice try! Review the material and try again.';
        } else {
            message = '💪 Keep learning! You\'ll do better next time.';
        }

        return `
            <div class="container results-page">
                <h1>Quiz Complete!</h1>
                
                <div class="score-display">${this.totalScore}/${maxScore}</div>
                <div class="score-label">Your Score</div>
                <div class="score-message">${message}</div>
                
                <div class="results-actions">
                    <button class="retake-btn">Retake Quiz</button>
                </div>
            </div>
        `;
    }

    attachEventListeners() {
        if (this.currentPage === 'landing') {
            const form = document.getElementById('userInfoForm');
            form.addEventListener('submit', (e) => this.handleStartQuiz(e));
        } else if (this.currentPage === 'quiz') {
            const prevBtn = document.querySelector('.prev-btn');
            const nextBtn = document.querySelector('.next-btn');
            const submitBtn = document.querySelector('.submit-btn');

            if (prevBtn) prevBtn.addEventListener('click', () => this.previousQuestion());
            if (nextBtn) nextBtn.addEventListener('click', () => this.nextQuestion());
            if (submitBtn) submitBtn.addEventListener('click', () => this.submitQuiz());

            // Save answer on change
            const radioButtons = document.querySelectorAll('input[type="radio"]');
            radioButtons.forEach(radio => {
                radio.addEventListener('change', (e) => {
                    this.userAnswers[this.currentQuestionIndex] = parseInt(e.target.value);
                });
            });

            const essayInput = document.getElementById('essayAnswer');
            if (essayInput) {
                essayInput.addEventListener('change', (e) => {
                    this.userAnswers[this.currentQuestionIndex] = e.target.value;
                });
            }
        } else if (this.currentPage === 'results') {
            const retakeBtn = document.querySelector('.retake-btn');
            if (retakeBtn) retakeBtn.addEventListener('click', () => this.retakeQuiz());
        }
    }

    handleStartQuiz(e) {
        e.preventDefault();

        const nameInput = document.getElementById('name');
        const phoneInput = document.getElementById('phone');
        const agentInput = document.getElementById('agent');

        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();
        const agent = agentInput.value.trim();

        // Clear previous errors
        this.clearValidationErrors();

        // Validate all fields
        let isValid = true;

        if (!name) {
            this.showFieldError(nameInput, 'Name is required');
            isValid = false;
        } else if (name.length < 2) {
            this.showFieldError(nameInput, 'Name must be at least 2 characters');
            isValid = false;
        }

        if (!phone) {
            this.showFieldError(phoneInput, 'Phone number is required');
            isValid = false;
        } else if (!this.isValidPhone(phone)) {
            this.showFieldError(phoneInput, 'Please enter a valid phone number');
            isValid = false;
        }

        if (!agent) {
            this.showFieldError(agentInput, 'Agent name is required');
            isValid = false;
        } else if (agent.length < 2) {
            this.showFieldError(agentInput, 'Agent name must be at least 2 characters');
            isValid = false;
        }

        if (!isValid) {
            return;
        }

        this.userInfo = { name, phone, agent, timestamp: new Date().toISOString() };
        this.loadQuestions();
        this.currentPage = 'quiz';
        this.quizStarted = true;
        this.startTimer();
        this.render();
    }

    isValidPhone(phone) {
        // Accept phone numbers with digits, spaces, dashes, parentheses, and +
        const phoneRegex = /^[\d\s\-\+\(\)]{7,}$/;
        return phoneRegex.test(phone);
    }

    showFieldError(inputElement, message) {
        inputElement.classList.add('error');
        const errorElement = inputElement.parentElement.querySelector('.error-message');
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.add('show');
        }
    }

    clearValidationErrors() {
        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.classList.remove('error');
        });

        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => {
            msg.classList.remove('show');
            msg.textContent = '';
        });
    }

    loadQuestions() {
        // Load questions from QUESTIONS_DATABASE (defined in questions.js)
        if (typeof QUESTIONS_DATABASE === 'undefined') {
            console.error('Questions database not loaded');
            return;
        }

        const allMCQs = QUESTIONS_DATABASE.mcqs;
        const allEssays = QUESTIONS_DATABASE.essays;

        // Randomly select 28 MCQs from 51 available
        const selectedMCQs = this.randomSelect(allMCQs, 28);

        // Always include 2 essays from 9 available
        const selectedEssays = this.randomSelect(allEssays, 2);

        this.quizQuestions = [...selectedMCQs, ...selectedEssays];
    }

    randomSelect(array, count) {
        const shuffled = [...array].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    }

    startTimer() {
        this.timerInterval = setInterval(() => {
            this.timeRemaining--;
            this.updateTimer();

            if (this.timeRemaining <= 0) {
                clearInterval(this.timerInterval);
                this.submitQuiz();
            }
        }, 1000);
    }

    updateTimer() {
        const timerElement = document.querySelector('.timer');
        if (timerElement) {
            timerElement.textContent = this.formatTime(this.timeRemaining);

            // Update timer class
            timerElement.classList.remove('warning', 'danger');
            if (this.timeRemaining < 300) timerElement.classList.add('danger');
            else if (this.timeRemaining < 600) timerElement.classList.add('warning');
        }
    }

    formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.quizQuestions.length - 1) {
            this.currentQuestionIndex++;
            this.render();
        }
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.render();
        }
    }

    calculateScore() {
        let score = 0;

        this.quizQuestions.forEach((question, index) => {
            const userAnswer = this.userAnswers[index];

            if (question.type === 'mcq') {
                if (userAnswer === question.correctAnswer) {
                    score += question.score;
                }
            } else {
                // For essays, award full points if answered (simplified)
                // In production, this would require manual grading
                if (userAnswer && userAnswer.trim().length > 0) {
                    score += question.score;
                }
            }
        });

        return score;
    }

    submitQuiz() {
        clearInterval(this.timerInterval);
        this.totalScore = this.calculateScore();

        // Send data to backend (TASK-012)
        this.sendDataToBackend();

        this.currentPage = 'results';
        this.render();
    }

    sendDataToBackend() {
        // Prepare quiz data for submission
        const quizData = {
            userInfo: this.userInfo,
            answers: this.userAnswers,
            score: this.totalScore,
            totalQuestions: this.quizQuestions.length
        };

        // Validate data before sending
        console.log('Validating quiz data:', quizData);
        const validation = this.api.validateQuizData(quizData);
        if (!validation.valid) {
            console.error('Validation errors:', validation.errors);
            return;
        }

        // Send to backend asynchronously
        this.api.submitQuiz(quizData)
            .then(response => {
                if (response.success) {
                    console.log('Quiz submitted successfully:', response);
                } else {
                    console.error('Failed to submit quiz:', response.message);
                }
            })
            .catch(error => {
                console.error('Error submitting quiz:', error);
            });
    }

    retakeQuiz() {
        this.currentPage = 'landing';
        this.currentQuestionIndex = 0;
        this.userInfo = {};
        this.quizQuestions = [];
        this.userAnswers = {};
        this.totalScore = 0;
        this.timeRemaining = 20 * 60;
        this.quizStarted = false;
        this.render();
    }

    showValidationError(message) {
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(el => {
            el.textContent = message;
            el.classList.add('show');
        });
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});
