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

        // Language and theme settings
        this.language = localStorage.getItem('quizLanguage') || 'en'; // 'en' or 'ja'
        this.darkMode = localStorage.getItem('quizDarkMode') === 'true';

        // Initialize API client
        this.api = new QuizAPI({
            apiEndpoint: 'https://script.google.com/macros/s/AKfycbytWIQdwNmI6t7ELybbvUEZ1hGXPXLkdOaWxyasp5-UgzhmX61aIceX9n-08JZNwJDs/exec'
        });

        this.init();
    }

    init() {
        this.applyTheme();
        this.render();
        this.attachEventListeners();
    }

    // Translations
    getTranslation(key) {
        const translations = {
            en: {
                title: '📝 Random Quiz Questions',
                description: "Test your knowledge with our randomized quiz. You'll have 20 minutes to answer 30 questions.",
                fullName: 'Full Name',
                phone: 'Phone Number',
                agent: 'Agent Name',
                startQuiz: 'Start Quiz',
                quizInProgress: 'Quiz in Progress',
                questionOf: 'Question',
                of: 'of',
                multipleChoice: 'Multiple Choice',
                essay: 'Essay',
                previous: '← Previous',
                next: 'Next →',
                submitQuiz: 'Submit Quiz',
                quizComplete: 'Quiz Complete!',
                yourScore: 'Your Score',
                retakeQuiz: 'Retake Quiz',
                excellent: '🎉 Excellent! You did great!',
                good: '👍 Good job! Keep practicing!',
                niceTry: '📚 Nice try! Review the material and try again.',
                keepLearning: "💪 Keep learning! You'll do better next time.",
                required: '*',
                nameRequired: 'Name is required',
                nameMinLength: 'Name must be at least 2 characters',
                phoneRequired: 'Phone number is required',
                phoneInvalid: 'Please enter a valid phone number',
                agentRequired: 'Agent name is required',
                agentMinLength: 'Agent name must be at least 2 characters',
                typeYourAnswer: 'Type your answer here...',
                language: 'Language',
                darkMode: 'Dark Mode'
            },
            ja: {
                title: '📝 ランダムクイズ',
                description: 'ランダムに選ばれた30問の問題に20分以内に答えてください。',
                fullName: '氏名',
                phone: '電話番号',
                agent: 'エージェント名',
                startQuiz: 'クイズを開始',
                quizInProgress: 'クイズ進行中',
                questionOf: '問題',
                of: '/',
                multipleChoice: '選択問題',
                essay: '記述問題',
                previous: '← 前へ',
                next: '次へ →',
                submitQuiz: 'クイズを提出',
                quizComplete: 'クイズ完了！',
                yourScore: 'あなたのスコア',
                retakeQuiz: 'もう一度受ける',
                excellent: '🎉 素晴らしい！よくできました！',
                good: '👍 よくできました！練習を続けてください！',
                niceTry: '📚 よく頑張りました！復習してもう一度挑戦しましょう。',
                keepLearning: '💪 学習を続けましょう！次はもっとよくできます。',
                required: '*',
                nameRequired: '名前は必須です',
                nameMinLength: '名前は2文字以上である必要があります',
                phoneRequired: '電話番号は必須です',
                phoneInvalid: '有効な電話番号を入力してください',
                agentRequired: 'エージェント名は必須です',
                agentMinLength: 'エージェント名は2文字以上である必要があります',
                typeYourAnswer: 'ここに答えを入力してください...',
                language: '言語',
                darkMode: 'ダークモード'
            }
        };
        return translations[this.language][key] || key;
    }

    toggleDarkMode() {
        this.darkMode = !this.darkMode;
        localStorage.setItem('quizDarkMode', this.darkMode);
        this.applyTheme();
    }

    applyTheme() {
        if (this.darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
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
                <div class="settings-bar">
                    <div class="language-select-wrapper">
                        <label for="languageSelect">🌐</label>
                        <select class="settings-select" id="languageSelect">
                            <option value="en" ${this.language === 'en' ? 'selected' : ''}>English</option>
                            <option value="ja" ${this.language === 'ja' ? 'selected' : ''}>日本語</option>
                        </select>
                    </div>
                    <button class="settings-btn dark-mode-btn" id="darkModeToggle">
                        ${this.darkMode ? '☀️' : '🌙'} ${this.getTranslation('darkMode')}
                    </button>
                </div>
                
                <h1>${this.getTranslation('title')}</h1>
                <p>${this.getTranslation('description')}</p>
                
                <div class="form-container">
                    <form id="userInfoForm">
                        <div class="form-group">
                            <label for="name">${this.getTranslation('fullName')} ${this.getTranslation('required')}</label>
                            <input type="text" id="name" name="name" required>
                            <div class="error-message"></div>
                        </div>
                        
                        <div class="form-group">
                            <label for="phone">${this.getTranslation('phone')} ${this.getTranslation('required')}</label>
                            <input type="tel" id="phone" name="phone" required>
                            <div class="error-message"></div>
                        </div>
                        
                        <div class="form-group">
                            <label for="agent">${this.getTranslation('agent')} ${this.getTranslation('required')}</label>
                            <input type="text" id="agent" name="agent" required>
                            <div class="error-message"></div>
                        </div>
                        
                        <button type="submit" class="start-quiz-btn">${this.getTranslation('startQuiz')}</button>
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

        // Get localized question text and options
        const questionText = typeof question.text === 'object' ? question.text[this.language] : question.text;
        const questionOptions = typeof question.options === 'object' && question.options[this.language] ? question.options[this.language] : question.options;

        let questionContent = '';

        if (question.type === 'mcq') {
            questionContent = `
                <div class="options">
                    ${questionOptions.map((option, index) => `
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
                <textarea class="essay-input" id="essayAnswer" placeholder="${this.getTranslation('typeYourAnswer')}">${this.userAnswers[this.currentQuestionIndex] || ''}</textarea>
            `;
        }

        return `
            <div class="container quiz-page">
                <div class="quiz-header">
                    <div class="quiz-title">${this.getTranslation('quizInProgress')}</div>
                    <div class="timer ${timerClass}">${timeDisplay}</div>
                </div>
                
                <div class="question-counter">${this.getTranslation('questionOf')} ${this.currentQuestionIndex + 1} ${this.getTranslation('of')} ${this.quizQuestions.length}</div>
                
                <div class="question-container">
                    <span class="question-type">${question.type === 'mcq' ? this.getTranslation('multipleChoice') : this.getTranslation('essay')}</span>
                    <div class="question-text">${questionText}</div>
                    ${questionContent}
                </div>
                
                <div class="quiz-navigation">
                    <button class="nav-button prev-btn" ${this.currentQuestionIndex === 0 ? 'disabled' : ''}>${this.getTranslation('previous')}</button>
                    ${!isLastQuestion ? `
                        <button class="nav-button next-btn">${this.getTranslation('next')}</button>
                    ` : `
                        <button class="nav-button submit-button submit-btn">${this.getTranslation('submitQuiz')}</button>
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
            message = this.getTranslation('excellent');
        } else if (percentage >= 60) {
            message = this.getTranslation('good');
        } else if (percentage >= 40) {
            message = this.getTranslation('niceTry');
        } else {
            message = this.getTranslation('keepLearning');
        }

        return `
            <div class="container results-page">
                <h1>${this.getTranslation('quizComplete')}</h1>
                
                <div class="score-display">${this.totalScore}/${maxScore}</div>
                <div class="score-label">${this.getTranslation('yourScore')}</div>
                <div class="score-message">${message}</div>
                
                <div class="results-actions">
                    <button class="retake-btn">${this.getTranslation('retakeQuiz')}</button>
                </div>
            </div>
        `;
    }

    attachEventListeners() {
        if (this.currentPage === 'landing') {
            const form = document.getElementById('userInfoForm');
            form.addEventListener('submit', (e) => this.handleStartQuiz(e));

            // Language select dropdown
            const languageSelect = document.getElementById('languageSelect');
            if (languageSelect) {
                languageSelect.addEventListener('change', (e) => {
                    this.language = e.target.value;
                    localStorage.setItem('quizLanguage', this.language);
                    this.render();
                });
            }

            // Dark mode toggle
            const darkModeBtn = document.getElementById('darkModeToggle');
            if (darkModeBtn) {
                darkModeBtn.addEventListener('click', () => this.toggleDarkMode());
            }
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
            this.showFieldError(nameInput, this.getTranslation('nameRequired'));
            isValid = false;
        } else if (name.length < 2) {
            this.showFieldError(nameInput, this.getTranslation('nameMinLength'));
            isValid = false;
        }

        if (!phone) {
            this.showFieldError(phoneInput, this.getTranslation('phoneRequired'));
            isValid = false;
        } else if (!this.isValidPhone(phone)) {
            this.showFieldError(phoneInput, this.getTranslation('phoneInvalid'));
            isValid = false;
        }

        if (!agent) {
            this.showFieldError(agentInput, this.getTranslation('agentRequired'));
            isValid = false;
        } else if (agent.length < 2) {
            this.showFieldError(agentInput, this.getTranslation('agentMinLength'));
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
