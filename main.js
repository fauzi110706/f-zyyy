  const toggle = document.getElementById("darkModeToggle");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    
    // ganti icon tombol
    if(document.body.classList.contains("dark")){
      toggle.textContent = "☀️";
    } else {
      toggle.textContent = "🌙";
    }
  });

  // Animasi skill bar saat discroll ke section skills
const skillLevels = document.querySelectorAll(".skill-level");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.8;
  skillLevels.forEach(skill => {
    const rect = skill.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      skill.style.width = skill.getAttribute("data-level");
    }
  });
});

 // 🔥about us Animasi scroll
    const elements = document.querySelectorAll("[data-animate]");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("animated");
      });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
