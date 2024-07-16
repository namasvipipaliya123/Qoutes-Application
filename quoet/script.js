let quotes = [
    
    "The best way to predict the future is to invent it. - Alan Kay",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Learning never exhausts the mind. - Leonardo da Vinci",
    "Simplicity is the ultimate sophistication. - Leonardo da Vinci",
    "It always seems impossible until it's done. - Nelson Mandela",
    "The only way to do great work is to love what you do. - Steve Jobs"
];

let currentQuoteIndex = 0;
let quoteElement = document.getElementById('quote');
let progressCircle = document.getElementById('progress');
let timerText = document.getElementById('timer-text');
let totalTime = 30;
let timeLeft = totalTime;

function updateQuote() {
    quoteElement.style.opacity = 0; 
    setTimeout(() => {
        quoteElement.textContent = quotes[currentQuoteIndex];
        quoteElement.style.opacity = 1; 
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    }, 1000); 
}

function startTimer() {
    timeLeft = totalTime;
    let timer = setInterval(() => {
        timeLeft--;
        let offset = (timeLeft / totalTime) * 283;
        progressCircle.style.strokeDashoffset = offset;
        timerText.textContent = `${timeLeft}s`;
        if (timeLeft === 0) {
            clearInterval(timer);
            updateQuote();
            startTimer();
        }
    }, 1000);
}

updateQuote();
startTimer();