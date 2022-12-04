// A function that adds and remove the class "active" on the section you click on.
// function toggle() {
//   this.classList.toggle("active")
// };

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
// document.querySelector("#section1").onclick = toggle;
// document.querySelector("#section2").onclick = toggle;
// document.querySelector("#section3").onclick = toggle;

const titles = document.querySelectorAll(".title");

titles.forEach((title) => {
  title.addEventListener("click", () => {
    title.nextElementSibling.classList.toggle('active');
  })
});

titles.forEach((title) => {
  title.addEventListener('mouseover', ()=>{
    title.style.opacity = 0.7
    title.style.cursor = 'pointer'
  })
})

titles.forEach((title) => {
  title.addEventListener('mouseout', ()=>{
    title.style.opacity = 1
  })
})