// Dark / Light Mode Toggle
const toggle = document.getElementById("modeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  toggle.textContent =
    document.body.classList.contains("light-mode") ? "🌞" : "🌙";
});

// FAQ Toggle
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});
