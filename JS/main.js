main.js                        // 🌐 Navbar Toggle for Mobile
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}
  // Hamburger aur nav-links ko select karo
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  // Jab hamburger pe click ho
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

// ✅ Stats Counter Animation
function animateCounter(id, target) {
  let count = 0;
  const speed = Math.ceil(target / 100); // speed control
  const counter = document.getElementById(id);

  const interval = setInterval(() => {
    count += speed;
    if (count >= target) {
      count = target;
      clearInterval(interval);
    }
    counter.innerText = count;
  }, 20);
}

// When page loads, run counters
window.addEventListener("DOMContentLoaded", () => {
  animateCounter("reportedCount", 120); // Example value
  animateCounter("resolvedCount", 75);  // Example value
});
// =============== SLOGAN SLIDER ===============
let sloganIndex = 0;
const slogans = document.querySelectorAll(".slider-slogan h1");

function showSlogan(index) {
  slogans.forEach((s, i) => {
    s.classList.remove("active");
    if (i === index) {
      s.classList.add("active");
    }
  });
}

function nextSlogan() {
  sloganIndex = (sloganIndex + 1) % slogans.length;
  showSlogan(sloganIndex);
}

// Start first slogan
showSlogan(sloganIndex);

// Change every 3s
setInterval(nextSlogan, 3000);

// ✅ Fade-in animation on scroll
const fadeElements = document.querySelectorAll(".stat-box, .hero-content");

window.addEventListener("scroll", () => {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});