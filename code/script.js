// A function that adds and remove the class "active" on the section you click on.
function toggle() {
  this.classList.toggle("active")
  if (this.className.includes('active')) {
    this.firstElementChild.setAttribute('src', 'IMG/minus.png')
  } else {
    this.firstElementChild.setAttribute('src', 'IMG/plus.png')
  }
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle
document.getElementById("section2").onclick = toggle
document.getElementById("section3").onclick = toggle

const accordionChildren = document.querySelector('.accordion').children

console.log(accordionChildren)
for (let i = 0; i < accordionChildren.length; i++) {
  if (i%2===0){
    accordionChildren[i].style.backgroundColor = 'blanchedalmond'
  } else {
    accordionChildren[i].style.backgroundColor = 'pink'
  }
}