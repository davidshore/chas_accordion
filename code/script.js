// A function that adds and remove the class "active" on the section you click on.
function toggle() {
  this.classList.toggle("active")
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
// document.getElementById("section1").onclick = toggle

// add toggle function to all "titles"

const titles = document.getElementsByClassName("title")
const titlesList = [...titles]
titlesList.forEach(title => {
  title.onclick = toggle
});





// QUESTIONS 


// 1. Why should you make your html accessible?

// Having a website that is accessible ensures that all users, including people with disabilities,
// get a better experience and have easier access to the information on the site.


// 2. What are landmarks in an html page and why should you have them?

// Landmarks enable blind people to access the website by using a screen reader which jumps to
// different sections (landmarks) on the page. These could include elements such as a header, navbar
// and main.


// 3. What are semantic elements and why should you use them?

// Semantics is about using the correct elements (tags) in your HTML. 
// These elements describe the content like a header, paragraph and article.
// It also enables searchengines to determine the importance of the content.


// 4. When do you use the role attribute?

// In order for programs such as screen readers and magnifiers to work
// the role attribute describes the role of an element for those programs.
// You may have a link that acts as a button and choose button in the role attribute.
