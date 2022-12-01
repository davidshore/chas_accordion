// A function that adds and remove the class "active" on the section you click on.
/*function toggle() {
  this.classList.toggle("active")
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle


*/

const quest = document.getElementsByClassName("title");
let i;

for (i = 0; i < quest.length; i++) {
  quest[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    
    
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}