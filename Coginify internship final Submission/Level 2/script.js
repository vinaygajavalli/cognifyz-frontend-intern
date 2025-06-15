const colors = ["#007bff", "#28a745", "#fd7e14", "#dc3545", "#343a40", "#6f42c1"];

function changeBackground() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  const container = document.getElementById("container");
  container.style.backgroundColor = randomColor;
  container.style.color = randomColor === "#343a40" ? "white" : "black";
}
