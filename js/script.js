// Quotes array for loading messages
const quotes = [
    "with great power, comes the great electricity bill...",
    "Why do programmers prefer dark mode? Because light attracts bugs!",
"Code is like humor. When you have to explain it, it’s bad.",
    "If at first you don’t succeed, call it version 1.0."
];

// Function to display a random quote
function displayRandomQuote() {
    const quoteElement = document.getElementById("quote");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}

// Function to simulate progress bar filling and content loading
function simulateLoading() {
    const progressBar = document.querySelector(".progress");
    const preloader = document.getElementById("preloader");
    let progress = 0;
    let loadingDuration = Math.random() * 5000 + 5000; // Random duration between 5s and 10s

    const loadingInterval = setInterval(() => {
        if (progress < 100) {
            progress += 1; // Increment progress
            progressBar.style.width = progress + "%"; // Update progress bar width
        } else {
            clearInterval(loadingInterval); // Stop loading when 100%
            setTimeout(() => {
                preloader.classList.add('hidden'); // Hide preloader
                document.getElementById("wrapper").style.display = "block"; // Show main content
            }, 500); // Short delay to allow the fade out
        }
    }, loadingDuration / 100); // Adjust interval speed based on total duration
}

// Start the loader and display a quote
displayRandomQuote();
simulateLoading();
