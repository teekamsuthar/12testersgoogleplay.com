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

  const heading = document.getElementById("animated-heading");
const text = heading.textContent;
heading.innerHTML = ""; 

const words = text.split(" ");

words.forEach((word, index) => {
  const span = document.createElement("span");
  span.textContent = word;
  span.className = "word";
  span.style.animationDelay = `${index * 0.3}s`; // Stagger animation for each word
  heading.appendChild(span);
});
