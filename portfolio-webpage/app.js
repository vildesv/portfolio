// Back to Top Button
const topBtn = document.getElementById("back-to-top");
window.onscroll = () => {
  if (window.scrollY > 400) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};
topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Animate on Scroll
const revealElements = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1,
});
revealElements.forEach((el) => observer.observe(el));