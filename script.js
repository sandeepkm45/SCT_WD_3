class QuizApp {
    constructor() {
        this.currentQuiz = null
        this.questions = []
        this.currentQuestion = 0
        this.score = 0
        this.selectedAnswer = null
        this.timeLeft = 45
        this.timer = null
        this.userAnswers = []
        this.startTime = null
        this.endTime = null
        this.initializeElements()
        this.bindEvents()
    }

    initializeElements() {
        this.mainMenu = document.getElementById("main-menu")
        this.quizScreen = document.getElementById("quiz-screen")
        this.resultsScreen = document.getElementById("results-screen")
        this.quizButtons = document.querySelectorAll(".quiz-btn")
        this.backToMenuBtn = document.getElementById("back-to-menu")
        this.currentQuizType = document.getElementById("current-quiz-type")
        this.questionText = document.getElementById("question-text")
        this.codeExample = document.getElementById("code-example")
        this.optionsList = document.getElementById("options-list")
        this.nextBtn = document.getElementById("next-btn")
        this.progressFill = document.getElementById("progress-fill")
        this.questionCounter = document.getElementById("question-counter")
        this.timerDisplay = document.getElementById("timer")
        this.resultQuizType = document.getElementById("result-quiz-type")
        this.finalScore = document.getElementById("final-score")
        this.correctCount = document.getElementById("correct-count")
        this.wrongCount = document.getElementById("wrong-count")
        this.accuracy = document.getElementById("accuracy")
        this.timeTaken = document.getElementById("time-taken")
        this.performanceMessage = document.getElementById("performance-message")
        this.restartBtn = document.getElementById("restart-btn")
        this.otherQuizBtn = document.getElementById("other-quiz-btn")
        this.homeBtn = document.getElementById("home-btn")
    }

    bindEvents() {
        this.quizButtons.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                const quizType = e.target.getAttribute("data-quiz")
                this.startQuiz(quizType)
            })
        })
        this.backToMenuBtn.addEventListener("click", () => this.goHome())
        this.nextBtn.addEventListener("click", () => this.nextQuestion())
        this.restartBtn.addEventListener("click", () => this.restartQuiz())
        this.otherQuizBtn.addEventListener("click", () => this.switchQuiz())
        this.homeBtn.addEventListener("click", () => this.goHome())
    }

    startQuiz(quizType) {
        this.currentQuiz = quizType
        this.questions = quizType === "html" ? window.htmlQuestions : window.cssQuestions
        this.currentQuestion = 0
        this.score = 0
        this.selectedAnswer = null
        this.userAnswers = []
        this.startTime = new Date()
        this.currentQuizType.textContent = quizType.toUpperCase()
        this.resultQuizType.textContent = quizType.toUpperCase()
        this.showScreen("quiz")
        this.loadQuestion()
        this.startTimer()
    }

    showScreen(screenName) {
        document.querySelectorAll(".screen").forEach((screen) => {
            screen.classList.remove("active")
        })

        switch (screenName) {
            case "menu":
                this.mainMenu.classList.add("active")
                break
            case "quiz":
                this.quizScreen.classList.add("active")
                break
            case "results":
                this.resultsScreen.classList.add("active")
                break
        }
    }

    loadQuestion() {
        const question = this.questions[this.currentQuestion]
        this.questionText.textContent = question.question
        this.codeExample.classList.remove("show")
        if (question.code) {
            this.codeExample.innerHTML = `<pre><code>${question.code}</code></pre>`
            this.codeExample.classList.add("show")
        }
        const progress = ((this.currentQuestion + 1) / this.questions.length) * 100
        this.progressFill.style.width = `${progress}%`
        this.questionCounter.textContent = `${this.currentQuestion + 1} / ${this.questions.length}`
        this.optionsList.innerHTML = ""
        this.selectedAnswer = null
        this.nextBtn.disabled = true
        question.options.forEach((option, index) => {
            const optionElement = document.createElement("div")
            optionElement.className = "option"
            optionElement.textContent = option
            optionElement.addEventListener("click", () => this.selectOption(index, optionElement))
            this.optionsList.appendChild(optionElement)
        })
        this.timeLeft = 45
        this.updateTimer()
    }

    selectOption(index, element) {
        document.querySelectorAll(".option").forEach((opt) => {
            opt.classList.remove("selected")
        })
        element.classList.add("selected")
        this.selectedAnswer = index
        this.nextBtn.disabled = false
    }

    nextQuestion() {
        clearInterval(this.timer)
        const question = this.questions[this.currentQuestion]
        const isCorrect = this.selectedAnswer === question.correct
        this.userAnswers.push({
            question: this.currentQuestion,
            selected: this.selectedAnswer,
            correct: question.correct,
            isCorrect: isCorrect,
            timeLeft: this.timeLeft,
        })

        if (isCorrect) {
            this.score++
        }
        this.showAnswerFeedback()
        setTimeout(() => {
            this.currentQuestion++
            if (this.currentQuestion < this.questions.length) {
                this.loadQuestion()
                this.startTimer()
            } else {
                this.showResults()
            }
        }, 2000)
    }

    showAnswerFeedback() {
        const options = document.querySelectorAll(".option")
        const question = this.questions[this.currentQuestion]

        options.forEach((option, index) => {
            if (index === question.correct) {
                option.classList.add("correct")
            } else if (index === this.selectedAnswer && index !== question.correct) {
                option.classList.add("wrong")
            }
            option.style.pointerEvents = "none"
        })

        this.nextBtn.disabled = true
    }

    startTimer() {
        this.timer = setInterval(() => {
            this.timeLeft--
            this.updateTimer()

            if (this.timeLeft <= 0) {
                this.selectedAnswer = -1
                this.nextQuestion()
            }
        }, 1000)
    }

    updateTimer() {
        this.timerDisplay.textContent = this.timeLeft
        if (this.timeLeft <= 10) {
            this.timerDisplay.style.background = "linear-gradient(135deg, #f44336, #d32f2f)"
        } else if (this.timeLeft <= 20) {
            this.timerDisplay.style.background = "linear-gradient(135deg, #ff9800, #f57c00)"
        } else {
            this.timerDisplay.style.background = "linear-gradient(135deg, #ff6b35, #f7931e)"
        }
    }

    showResults() {
        clearInterval(this.timer)
        this.endTime = new Date()
        this.showScreen("results")
        const correctAnswers = this.score
        const wrongAnswers = this.questions.length - this.score
        const accuracyPercent = Math.round((this.score / this.questions.length) * 100)
        const timeTakenMs = this.endTime - this.startTime
        const timeTakenFormatted = this.formatTime(timeTakenMs)
        this.finalScore.textContent = this.score
        this.correctCount.textContent = correctAnswers
        this.wrongCount.textContent = wrongAnswers
        this.accuracy.textContent = `${accuracyPercent}%`
        this.timeTaken.textContent = timeTakenFormatted
        this.setPerformanceMessage(accuracyPercent)
        this.otherQuizBtn.textContent = this.currentQuiz === "html" ? "Try CSS Quiz" : "Try HTML Quiz"
        this.animateScore()
    }

    setPerformanceMessage(accuracy) {
        let message = ""
        let className = ""
        if (accuracy >= 90) {
            message = "🎉 Excellent! You have mastered this topic!"
            className = "excellent"
        } else if (accuracy >= 75) {
            message = "👍 Good job! You have a solid understanding!"
            className = "good"
        } else if (accuracy >= 60) {
            message = "📚 Not bad! Keep practicing to improve!"
            className = "average"
        } else {
            message = "💪 Keep learning! Practice makes perfect!"
            className = "poor"
        }

        this.performanceMessage.textContent = message
        this.performanceMessage.className = `performance-message ${className}`
    }

    formatTime(milliseconds) {
        const totalSeconds = Math.floor(milliseconds / 1000)
        const minutes = Math.floor(totalSeconds / 60)
        const seconds = totalSeconds % 60
        return `${minutes}:${seconds.toString().padStart(2, "0")}`
    }

    animateScore() {
        let currentScore = 0
        const targetScore = this.score
        const increment = targetScore / 30

        const scoreAnimation = setInterval(() => {
            currentScore += increment
            if (currentScore >= targetScore) {
                currentScore = targetScore
                clearInterval(scoreAnimation)
            }
            this.finalScore.textContent = Math.floor(currentScore)
        }, 50)
    }

    restartQuiz() {
        this.startQuiz(this.currentQuiz)
    }

    switchQuiz() {
        const newQuizType = this.currentQuiz === "html" ? "css" : "html"
        this.startQuiz(newQuizType)
    }

    goHome() {
        this.currentQuiz = null
        this.currentQuestion = 0
        this.score = 0
        this.selectedAnswer = null
        this.userAnswers = []
        clearInterval(this.timer)
        this.showScreen("menu")
    }
}
document.addEventListener("DOMContentLoaded", () => {
    new QuizApp()
})
