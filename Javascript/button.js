const corner = document.getElementById("Corner");
const homebutton = document.getElementById("btn");
const button = document.getElementById("hbtn");

homebutton.addEventListener("click", () => {
corner.classList.toggle("homeanim"), button.classList.toggle("homebtnanim");
});