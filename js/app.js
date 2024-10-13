
/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 60,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

const quotes = [
  "With great power comes great responsibility... and a hefty electricity bill.",
  "Loading wisdom... Hold on tight!",
  "Good things come to those who hustle... and refresh!",
  "Ideas are like electricity... powerful and illuminating!",
  "Creativity is loading... Please hold."
];

let progress = 0;
const progressBar = document.querySelector('.progress');
const quoteElement = document.getElementById('quote');

function updateQuote() {
  // Change the quote dynamically
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
  quoteElement.style.opacity = 1; // Show the quote
}

function simulateLoading() {
  const interval = setInterval(() => {
      progress += 5; // Increase progress by 5%
      progressBar.style.width = `${progress}%`;
      
      // Update quote every 1 second
      if (progress % 20 === 0) {
          updateQuote();
      }

      // Stop the loading simulation at 100%
      if (progress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
              // Hide loader or redirect to your main content
              document.getElementById('preloader').style.display = 'none';
              // Optionally, load your main content here
              document.body.innerHTML += "<h1>Welcome to My Website!</h1>";
          }, 1000);
      }
  }, 200); // Update every 200ms
}

// Start the loading simulation
simulateLoading();
