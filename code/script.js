// A function that adds and remove the class "active" on the section you click on.
//Option 1
function toggle() {
 this.classList.toggle("active");
}
// Selects and HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle
document.getElementById("section2").onclick = toggle
document.getElementById("section3").onclick = toggle

//-----------------------------------------------------------------------------
//Option 2 - addEventListener
const section = document.querySelectorAll(".title");
section.forEach(sections => {
  sections.addEventListener("click", ()=> {
    sections.classList.toggle("active");
  })
});




//Why should you make your html accessable?
//------------------------------------------
//Websites that are accessible creates a good user experience for those who have disabilities. 
//Therefor it´s important that the websites are built with a good structure and content so the 
//computer or screen readers easier can read the data and the description of the webpage.
//This is important so everyone can get the same access on the web, disabilities or not. 


//What are landmarks in a html page and why should you have them?
//----------------------------------------------------------------
//With landmarks, screen readers can easier help the user to navigate and jump to different sections of a web page.
//Landmarks are HTML elements that gives a website more structure, it can be elements like header, nav, section etc. 


//What are semantic elements and why should you use them?
//---------------------------------------------------------
//Semantic elements gives the website structure and for screen readers it describes the content. 
//This makes it easier for users to know what´s important on the website and what is not, thanks to its structure.
//Then we have some other elements that doesnt tell us anything, like divs and span. 


//When do you use the role attribute?
//-----------------------------------
//Role attribute is when you add an additional information about the element.  
//For example when you have a collection of divs, by adding the role attribute the screen reader can snap up what the 
//collection of elements is supposed to represent and give the user a better idea of the websites function.
//Or you can use the role attribute and describe an a-link as a button to help describing the content.


