document.addEventListener("DOMContentLoaded", () => {
    const btnInicio = document.querySelector(".btn-inicio");
  
    btnInicio.addEventListener("mouseenter", () => {
      btnInicio.classList.add("animar-glow");
    });
  
    btnInicio.addEventListener("mouseleave", () => {
      btnInicio.classList.remove("animar-glow");
    });
  });

  window.addEventListener('load', () => {
    const fadeInSections = document.querySelectorAll('.fade-in');
    fadeInSections.forEach((section) => {
      section.style.animationPlayState = 'running';
    })});

    window.addEventListener('load', () => {
      document.body.style.animationPlayState = 'running';
    });