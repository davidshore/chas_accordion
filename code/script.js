// A function that adds and remove the class "active" on the section you click on.
function toggle() {
  this.classList.toggle("active")
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle

const titles = document.querySelectorAll(".title");

titles.forEach(section => {
  if (section.id != "section1") {
    section.addEventListener("click", toggle)
  }
});


/*
- Why should you make your html accessable?
  Accessable html is very heplful for people with disabilities to be able to
  use our web app. Screen readers may need to read our html to be able to let
  the user know what they are interacting with. Accessability is also important
  for metadata. For example for best results on search engines we need to have
  data under correct name. So it's easy for the search engine to filter stuff and
  find the best match.
- What are landmarks in a html page and why should you have them?
  As I said earlier, we need to have correct names in our HTML for Screen readers to be
  able to read. Landmarks are the different parts in a page. Some examples are <header>,
  <nav>, <main> and so on. These are not small elements but "containers" which tells the screen
  reader which part of the page it's reading right now.
- What are semantic elements and why should you use them?
  Semantic elements are elements which actually have a meaning. If we use <div> for every
  element on the page we will have a hard time knowing which element is what. Instead of that
  we could give them sementic names like <article>, <button>, <form> and so on.
- When do you use the role attribute?
  If we need to code our element in another name we can give it a role attribute which
  helps the technologies I talked about earlier get an understanding. If we have a button
  we usually code it as <button>. But if we for some reason have to code it as an <a>, we 
  need to specify the role by typing <a role="button">.
*/