const quotes = [
    "With great power comes great responsibility... and a hefty electricity bill.",
    "Loading wisdom... Hold on tight!",
    "Good things come to those who hustle... and refresh!",
    "Ideas are like electricity... powerful and illuminating!",
    "Creativity is loading... Please hold."
];

const progressBar = document.querySelector('.progress');
const quoteElement = document.getElementById('quote');

let progress = 0;

// Function to update the quote dynamically
function updateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
    quoteElement.style.opacity = 1; // Show the quote
}

// Function to simulate loading
function simulateLoading() {
    const interval = setInterval(() => {
        if (progress < 100) {
            progress += 2; // Increment progress by 2% for each update
            progressBar.style.width = `${progress}%`; // Update progress bar width

            // Update quote every 20% of progress
            if (progress % 20 === 0 && progress <= 100) {
                updateQuote();
            }
        } else {
            clearInterval(interval);
        }
    }, 100); // Update every 100ms
}

// Start the loading simulation
simulateLoading();

// Start a timer to determine the loading time
const loadingStart = Date.now();
const loadingInterval = setInterval(() => {
    const loadingTime = Math.floor((Date.now() - loadingStart) / 1000); // in seconds

    // Only hide the preloader once loading is complete (when progress reaches 100%)
    if (progress >= 100) {
        clearInterval(loadingInterval);
        document.getElementById('preloader').style.display = 'none';
        alert('Website Loaded!'); // Replace this with your actual content display logic
    }
}, 100); // Check every 100ms
