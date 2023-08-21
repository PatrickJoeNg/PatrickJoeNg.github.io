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

document.addEventListener("DOMContentLoaded", typingEffect);
