// A function that adds and remove the class "active" on the section you click on.
function toggle() {
    this.classList.toggle("active");
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
//document.getElementById("section1").onclick = toggle
let titleList = document.querySelectorAll(".title");

/* for (let i = 0; i < titleList.length; i++) {
    titleList[i].addEventListener("click", toggle);
} */

titleList.forEach((title) => {
    title.addEventListener("click", toggle);
});

//- Why should you make your html accessable?
//  So that everyone can use your website equally. Mainly focusing on people with various disabilities such as hearing/vision impairment or missing limbs.

//- What are landmarks in a html page and why should you have them?
//  Different semantic parts of a website so that screen reader users can easily navigate. Like <header>, <footer> or <nav>

//- What are semantic elements and why should you use them?
//  Semantic elements are elements with a specific use in mind. Should be used for accessability since they define the content that should be there, making it easier
//  for screen readers and such to navigate the website in a good manner. Semantic tags also have built in landmarks. It also just makes the code easier to work with than if
//  everything was a <div>.

//- When do you use the role attribute?
//  To define what something is. If a link is a button. Or as in this accordion in this assignment, the clickable "titles" should have the "button" role.
