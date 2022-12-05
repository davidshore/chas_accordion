// A function that adds and remove the class "active" on the section you click on.
//function toggle() {
// this.classList.toggle("active");
//}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
//document.getElementById("section1").onclick = toggle;
//document.getElementById("section2").onclick = toggle;
//document.getElementById("section3").onclick = toggle;

const section1 = document.querySelectorAll(".title");

section1.forEach((section) => {
  section.addEventListener("click", (e) => {
    section.classList.toggle("active");
  });
});
/*section1.addEventListener("click", (e) => {
  section1.classList.toggle("active");
});*/

/* 1. Why should you make your html accessible?
Det är viktigt att ha sin webbsidan tillgängligt för alla. Också för att hjlpa 
synskadad och blinda användare
2. What are landmarks in a html page and why should you have them?
Landmarks hjälp till att navigera bättre. Den är används för att definiera 
section i din html, strukturen.
3. What are semantic elements and why should you use them?
Den får html syntaxen att vara mer förstålig genom att definiera olika section
och layout av sin webbsidan samt få sin webbsidan mer informativt och anpassbar.
4. When do you use the role attribute? 
Den finns för att styra element beteende. HTML-attribut är också 
en modifierare av en HTML-elementtyp */
