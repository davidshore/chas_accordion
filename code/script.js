// A function that adds and remove the class "active" on the section you click on.
function toggle() {
  this.classList.toggle("active")
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
//document.getElementById("section1").onclick = toggle;

//document.getElementById("section2").onclick = toggle;

//document.getElementById("section3").onclick = toggle;

//document.getElementById("section4").onclick = toggle;

// den andra varianten av kod/ extrauppgiften:

const list = document.querySelectorAll(".title");
list.forEach(item => {

  item.addEventListener("click", toggle );

 })


//Why should you make your html accessable?

//för att göra webbplatsernas innehåll 
//tillgängligt för en större och bredare skara människor; även de som har olika typer av 
//funktionsnedsättningar ( ljuskänslighet, inlärningssvårigheter, synskador, hörselskador för 
//att ge några exempel.. ) Detta för en större social hållbarhet och för all del rättvisa, nu när 
//samhället blir allt mer digitaliserat- så många som möjligt ska kunna använda webbplatser 
//och webbtjänster utan besvär.


//What are landmarks in a html page and why should you have them?

//Landmarks, är när en använder "logiska namn" på sina sektioner på 
//en webbplats istället för att tex använda <div> överallt. 
//( <header><nav><main><aside><form><footer><section> )
//De hjälper "accessibility tools/Techniques" att läsa upp sidorna i ett 
// logiskt format för tex synskadade människor. 

//What are semantic elements and why should you use them?

// Semantiska element, är för att visa vilken betydelse eller mening 
//ett ord har för både din browser och för webbutvecklaren,
//och semantisk HTML är att vi ger våra HTML-element ett namn 
//med betydelse. Även detta för att underlätta för "accessibility tools."
// ( header, footer, main och nav är semantiska landmarks! )


//When do you use the role attribute?

// Role används för att ge "semantiska namn" till "icke-semantiska" html- taggar
// tex a, div, span- för att de tidigare nämnda tillgänglighetsverktygen skall
// kunna se tex om "en länk även har ett syfte som knapp", till exempel.
// Det främsta syftet med role är att tillandahålla tillgänglighet.


