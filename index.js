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

  paypal
  .HostedButtons({
    hostedButtonId: "9NMX2XWW9SN6J",
    onApprove: function (data, actions) {
      // Redirect to the success page after approval
      window.location.href = "success.html";
    },
  })
  .render("#paypal-container-9NMX2XWW9SN6J");
