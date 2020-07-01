const container = document.getElementById("container");
const squares_no = 500;

for (let i = 0; i < squares_no; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  container.appendChild(square);
}
