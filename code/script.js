// A function that adds and remove the class "active" on the section you click on.
/* function toggle() {
  this.classList.toggle("active")
}
 */
// Selects and HTML element, and calls a function which will be executed when the element is clicked.
/* document.getElementById("section1").onclick = toggle */

const Section = document.querySelectorAll('.accordion .title');
const description = document .querySelectorAll('.description')

console.log(Section);
Section.forEach((element)=>{
  element.addEventListener('click',()=>{
    description.forEach((element)=>{
      element.classList.toggle('active')
    })
  })
})