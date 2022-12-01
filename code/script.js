const question = document.querySelectorAll(".question")
const answer = document.querySelectorAll(".answer")
const faqBoxes = document.querySelectorAll(".faq-box")
const boxes = document.querySelectorAll(".boxes")


faqBoxes.forEach((box) => {
    box.addEventListener("click", () => {
        box.classList.toggle("active")             
        
         })
})