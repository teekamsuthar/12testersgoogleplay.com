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
let isDeleting = false; 

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!isDeleting && letterIndex <= currentWord.length) {
    animatedText.textContent = currentWord.slice(0, letterIndex); 
    letterIndex++; 
    setTimeout(typeEffect, 150); 
  } else if (isDeleting && letterIndex > 0) {
    animatedText.textContent = currentWord.slice(0, letterIndex); 
    letterIndex--; 
    setTimeout(typeEffect, 150); 
  } else {
    isDeleting = !isDeleting;

    if (!isDeleting) {
      wordIndex = (wordIndex + 1) % words.length; 
     }

    setTimeout(typeEffect, 500); 
  }
}
typeEffect();
typeEffect();
//scrool animation 
document.getElementById('learn-more-btn').addEventListener('click', function () {
  document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('steps').addEventListener('click', function () {
  document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' });
});


document.getElementById('get-started').addEventListener('click', function () {
  document.getElementById("pricing").scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('about-us').addEventListener('click', function () {
  document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
});

//navbar
document.getElementById("nav-toggle").addEventListener("click", function() {
  document.getElementById("nav-links").classList.toggle("active");
});
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  // Ensure the first item is always open
  const firstItem = faqItems[0];
  const firstAnswer = firstItem.querySelector(".faq-answer");
  firstItem.classList.add("open");
  firstAnswer.style.maxHeight = firstAnswer.scrollHeight + "px";

  faqItems.forEach((item, index) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");

      // Close all FAQ items except the one being clicked
      faqItems.forEach((faq, i) => {
        if (i !== index) {
          const answer = faq.querySelector(".faq-answer");
          faq.classList.remove("open");
          answer.style.maxHeight = null; // Reset height
        }
      });

      // Toggle the current FAQ item
      if (isOpen) {
        item.classList.remove("open");
        answer.style.maxHeight = null; // Reset height if it's already open
      } else {
        item.classList.add("open");
        answer.style.maxHeight = answer.scrollHeight + "px"; // Set height dynamically
      }
    });
  });
});





