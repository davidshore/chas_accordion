// A function that adds and remove the class "active" on the section you click on.
function toggle() {
  this.classList.toggle("active")
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle
document.getElementById("section2").onclick = toggle
document.getElementById("section3").onclick = toggle




const secOne = document.getElementById("section1");
const secTwo = document.getElementById("section2");
const secThree = document.getElementById("section3");

secOne.addEventListener("click", toggle);
secTwo.addEventListener("click", toggle);
secThree.addEventListener("click", toggle);

const secAll = document.querySelectorAll(".title");

secAll.forEach((e) => {
  e.addEventListener("click", toggle);
})

/* 
Why should you make your html accessable?

so people with disabilities can use them, and not have difficulty to browse the web

What are landmarks in a html page and why should you have them?

HTML5 elements such as main, nav, and aside act as landmarks, or special regions on the page to which screen readers and other assistive technologies can jump. By using landmark elements, you can dramatically improve the navigation experience on your site for users of assistive technology. Rather than using div or span like the old days.

What are semantic elements and why should you use them?

header, main, nav etc are semantic tags that was introduced in HTML5, to help screen readers or other with disabilties to know where they are in the page. It makes web pages more informative and adaptable, allowing browsers and search engines to better interpret content

When do you use the role attribute?

The role attribute describes the role of an element in programs that can make use of it, such as screen readers or magnifiers.
Example:

<a href="#" role="button">Button Link</a>
Screen Readers will read this element as “button” instead of “link”.

*/