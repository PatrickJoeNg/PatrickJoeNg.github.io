function showTopButton() {
  const toTopBtn = document.querySelector(".to-top-btn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 75) {
      toTopBtn.classList.add("show-top-btn");
    } else {
      toTopBtn.classList.remove("show-top-btn");
    }
  });
}

function typingEffect() {
  const text = "I'm Patrick Ng.";
  const typingEle = document.getElementById("typing-text");
  const delay = 90;

  startTyping(text, typingEle, delay);
}

function startTyping(text, element, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      element.textContent += text.charAt(i);
    }, delay * i);
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.addEventListener("DOMContentLoaded", typingEffect);
document.addEventListener("DOMContentLoaded", showTopButton);
document.getElementById("to-top").addEventListener("click", scrollToTop);
