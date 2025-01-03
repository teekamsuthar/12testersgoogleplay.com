function animateCounter(element, targetValue, duration) {
    let startValue = 0;
    const increment = targetValue / (duration / 10); 
    const interval = setInterval(() => {
      startValue += increment;
      if (startValue >= targetValue) {
        element.textContent = targetValue; 
        clearInterval(interval); 
      } else {
        element.textContent = Math.floor(startValue); 
      }
    }, 10); 
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target.querySelector(".htmega-counter-number");
          const targetValue = parseInt(counter.dataset.toValue, 10);
          animateCounter(counter, targetValue, 2000); 
          observer.unobserve(entry.target); 
        }
      });
    },
    { threshold: 0.5 } 
  );

  document.querySelectorAll(".htmega-counter-content").forEach((content) => {
    observer.observe(content);
  });

  const animatedText = document.getElementById("animated-text");
const words = ["Games", "Apps"];
let wordIndex = 0;
let letterIndex = 0; 
function typeEffect() {
  if (wordIndex < words.length) {
    const currentWord = words[wordIndex];

    if (letterIndex < currentWord.length) {
      animatedText.textContent += currentWord[letterIndex]; 
      letterIndex++; 
      setTimeout(typeEffect, 150); 
    } else {
      setTimeout(() => {
        animatedText.textContent = ""; 
        letterIndex = 0; 
        wordIndex++; 
        if (wordIndex >= words.length) {
          wordIndex = 0; 
        }
        setTimeout(typeEffect, 500);
      }, 1000); 
    }
  }
}

typeEffect();
//scrool animation 
document.getElementById('learn-more-btn').addEventListener('click', function () {
  document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' });
});
//navbar
document.getElementById("nav-toggle").addEventListener("click", function() {
  document.getElementById("nav-links").classList.toggle("active");
});
