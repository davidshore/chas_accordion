faqSections = document.querySelectorAll(".title")
faqSections.forEach((section) => {
  section.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("active")
  })
  
});


/* // A function that adds and remove the class "active" on the section you click on.
function toggle() {
  this.classList.toggle("active")
  console.log("working")
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle */


/*
1.You should make your page more accessable because it helps people with 
disability to easily navigate your webpage. This is not only helpful for your readers but also good for your website as 
google tends to rank accessible website higher than non-accessable.

2.Landmarks gives the users the ability to jump to specific sections("landmarkes") o the page.

3. Semantic element are html tags that are descriptive. For example using span is not semantic since span doesnt have a meaning.
Instead of using span when writing text you can use the <p> tag. this help people identify that the text is a paragraph. 

4. Using "Role" is create for describing interactive interfaces that can't be describe with using semantic elements.
A great example is using role in a newsletter signup. So that people with screen readers know that they are on a sign up form for a newsletter.
*/