
const titels = document.querySelectorAll('.title');

titels.forEach((title) => {
  title.addEventListener('click',(element)=>{
    element.currentTarget.classList.toggle('active') 
  })
})




