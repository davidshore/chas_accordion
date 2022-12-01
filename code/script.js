// A function that adds and remove the class "active" on the section you click on.
function toggle() {
  this.classList.toggle("active");
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle;
document.getElementById("section2").onclick = toggle;
document.getElementById("section3").onclick = toggle;

// Frågor som ska svaras!
// - 1.Why should you make your html accessable?
// - Svar1: Throgh an structured HTML with semantically rich tags we can make our web pages more accessible
// - svar1: for our screen reader to undrestand the content and regions of the page and all diffrent elements available for our users.
// - 2.What are landmarks in a html page and why should you have them?
// - Svar2: Landmarks are semantic elements tha are used to define diffrent part of our webb and it is for blind users to have the ability to jump to diffrent part of a webb page.
// - 3.What are semantic elements and why should you use them?
// - Svar3: Semantic element are elements with meanings that provide our users to navigate and interact with our webbsite and basically it means that we should use correct element for our content in our HTML.
// - Svar3: for example using button element to add a link to our HTML.
// - 4.When do you use the role attribute?
// - Svar4: We use role attributes to identify to parsing software the exact function of an element and its children as part of a web to better accessibility for our users.
