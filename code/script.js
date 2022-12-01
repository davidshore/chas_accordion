const allTitles = document.querySelectorAll(".title");

allTitles.forEach((title) => {
  title.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("active");
    if (e.currentTarget.getAttribute("aria-expanded") === "true") {
      console.log("active");
      e.currentTarget.setAttribute("aria-expanded", "false");
    } else {
      console.log("not active");
      e.currentTarget.setAttribute("aria-expanded", "true");
    }
  });
});

// Accessability

// // Why should you make your html accessable?

// You should make your html accessable to make sure all people, no matter their abilities or dissabilities
// can access your web page and the information on it. For example blind people might use a screen reader
// to read your page, and you need to take that into consideration.

// // What are landmarks in a html page and why should you have them?

// Landmarks are top level tags such as header, footer, nav or main which can be used to navigate a page when reading it with a screen reader.

// // What are semantic elements and why should you use them?

// Semantic elements are element-tags used to more clearly show what said element is used for, for example article, section or form.
// You should use semantic elements to make the page more accessable for people with dissablities (such as blindness), and to make it easier for search engines to index your site.

// // When do you use the role attribute?

// Role is a tag used to show what an element is used for when no suitable semantic element is availible, or ther is some technical reason such an element cannot be used. For example the role of "button" is applied to our title element in this accordion exercise
