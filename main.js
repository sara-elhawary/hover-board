const container = document.getElementById("container");
const squares_no = 500;
const colors = ["#e74c3c", "#8e44ad", "#e67e22", "#2ecc71", "#3498db"];
for (let i = 0; i < squares_no; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => {
    const color = getRandomColor();
    square.style.backgroundColor = color;
  });
  container.appendChild(square);
}
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
