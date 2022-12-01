// A function that adds and remove the class "active" on the section you click on.
/* function toggle() {
  this.classList.toggle("active")
}
 */
// Selects and HTML element, and calls a function which will be executed when the element is clicked.
/* document.getElementById("section1").onclick = toggle */


const icon1 = document.querySelector('#icon1')
const icon2 = document.querySelector('#icon2')
const titels = document.querySelectorAll('.title');

titels.forEach((title) => {
  title.addEventListener('click',(e)=>{
    e.currentTarget.classList.toggle('active')
  })
})

// section1.addEventListener('click',(e)=>{
//   e.currentTarget.classList.toggle('active')

  // Icon1.classList.toggle('none')
  // Icon2.classList.toggle('active')

  // if ( Icon1.style.display = 'block'){
  //   Icon1.style.display = 'none'
  //   Icon2.style.display = 'block'
  //  }else{
  //   Icon1.style.display = 'block'
  //   Icon2.style.display = 'none'
  //  }

  // if ( Icon1.style.display = 'block'){
  //   Icon1.style.display = 'none'
  //  }
  //  else{
  //   Icon1.style.display = 'block'
  //  }

  //  if ( Icon2.style.display = 'none'){
  //   Icon2.style.display = 'block'
  //  }
  //  else{
  //   Icon1.style.display = 'none'
  //  }
  
// })




