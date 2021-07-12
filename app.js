window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const colors = [
    "#60D394",
    "#D36060",
    "#C060D3",
    "#D3D160",
    "#6860D3",
    "#60B2D3",
  ];
  // Click event listener to play sound for each pad.
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubbles(index);
    });
  });
  // Create bubble animation.
  const createBubbles = (index) => {
    const bubble = document.createElement("div");
    const padNum = document.querySelector(`.pad${index + 1}`);
    const header = document.querySelector("header h2");
    padNum.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    header.style.color = colors[index];
    bubble.style.animation = "jump 2s ease";
    // Remove bubble after animation.
    bubble.addEventListener("animationend", function () {
      padNum.removeChild(this);
    });
  };
});
