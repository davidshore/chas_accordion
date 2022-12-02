// A function that adds and remove the class "active" on the section you click on.
function toggle() {
  this.classList.toggle("active");
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle;

document.getElementById("section2").onclick = toggle;

document.getElementById("section3").onclick = toggle;

//- Why should you make your html accessible?
/*
Asware:
To follow international guidelines to make the web accessible for every individual.
The access to your page should not be limited by diabilities, diversities ages, launguages etc.
By making your page accessible, you make sure that the whole world can get access to 
the information. It also makes it easier for everyone to understand the structure of your
page, so other developers can edit and understand what has been done.

*/

//- What are landmarks in an html page and why should you have them?

/*Answare:
Blind readers can get access to different part of you page by navigating thru the landmarks.
It can also be useful if the device dont have a mouse or touchnavigation (just the keyboard)



*/

//- What are semantic elements and why should you use them?

/* Answare:

Elements should be used for what they are intended to to. A button should be used
to perform an event on a webpage, instead of a div.

*/

//- When do you use the role attribute?

/*
Answare:
When you cant chenge the type of the element by limitations.
Then you can use a role attribute to describe what it is used for
In the task I use role="button" instead of changing the div to a button element.
Theoretically you could build a full page with div elements and
code their behaviour using javascript.


*/
