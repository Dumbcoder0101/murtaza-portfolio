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
        progress += 2; // Increment progress by 2% for each update
        progressBar.style.width = `${progress}%`; // Update progress bar width
        
        // Update quote every 20% of progress
        if (progress % 20 === 0 && progress <= 100) {
            updateQuote();
        }

        // Stop the loading simulation at 100%
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                // Optionally, you can redirect or display a message here
                alert('Website Loaded!'); // Just for demonstration
                // You could also navigate to another page or show actual content
            }, 500); // Delay before showing content
        }
    }, 100); // Update every 100ms
}

// Start the loading simulation
simulateLoading();
