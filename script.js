const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.2 }
);

reveals.forEach((el) => revealObserver.observe(el));

const steps = document.querySelectorAll(".story-step");
const stickySection = document.querySelector(".sticky");

const stepObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        steps.forEach((step) => step.classList.remove("is-active"));
        entry.target.classList.add("is-active");
        if (stickySection) {
          stickySection.dataset.active = entry.target.dataset.step;
        }
      }
    });
  },
  { threshold: 0.6 }
);

steps.forEach((step) => stepObserver.observe(step));
