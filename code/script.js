// A function that adds and remove the class "active" on the section you click on.
// function toggle() {
//   this.classList.toggle("active")
// }

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
// document.getElementById("section1").onclick = toggle
// document.getElementById("section2").onclick = toggle
// document.getElementById("section3").onclick = toggle


const title = document.getElementsByClassName("title");
 let i;

for (i=0; i < title.length; i++) {
  title[i].addEventListener('click', function(){
    this.classList.toggle("active")

  let panel = this.nextElementSibling;
  if(panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
  })
 }

