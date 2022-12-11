// A function that adds and remove the class "active" on the section you click on.
function toggle() {
  this.classList.toggle("active");
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle;
document.getElementById("section2").onclick = toggle;
document.getElementById("section3").onclick = toggle;

const section = document.querySelectorAll(".title");
section.forEach((section) => {
  section.addEventListener("click", (section) => {
    section.classList.toggle("active");
  });
});

/* - Why should you make your html accessible?
Alla människor oavsett nedsättning och funktionalitet ska kunna använda sig av min hemsida. Är man exempelvis blind ska man ändå 
kunna utläsa vad som står och vad som är vad. 

- What are landmarks in an html page and why should you have them?
Att man delar in innehållet på webbsidan som underlättare för skärmläsning. Veta vad som är <header> tex. 


- What are semantic elements and why should you use them?
Semantiska element är att använda <aside> <main> <head> osv istället för att bara använda <div> överallt så det är lättare för 
användaren att veta vad som är vad och hur strukturen på hemsidan är uppbyggd. Detta faller in att vem som helst ska kunna förstå vad som är vad
genom att via taggarna förstå strukturen. 

- When do you use the role attribute?
Man kan inte alltid använda semantiska taggar för allt, som exempelvis <button> men du kan använda dig av role="button" för att förklara, att det är en knapp. 

*/
