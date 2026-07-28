/**
 * HAYAT Real Estate — Landing page interactions
 */

document.addEventListener("DOMContentLoaded", () => {
  initFadeIn();
  initButtonPress();
});

function initFadeIn() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const elements = document.querySelectorAll(".fade-up");

  if (prefersReduced) {
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  requestAnimationFrame(() => {
    setTimeout(() => {
      elements.forEach((el) => el.classList.add("is-visible"));
    }, 60);
  });
}

function initButtonPress() {
  document.querySelectorAll(".social-btn").forEach((btn) => {
    btn.addEventListener("pointerdown", () => {
      btn.style.transform = "scale(0.985)";
    });

    const reset = () => {
      btn.style.transform = "";
    };

    btn.addEventListener("pointerup", reset);
    btn.addEventListener("pointerleave", reset);
    btn.addEventListener("pointercancel", reset);
  });
}
