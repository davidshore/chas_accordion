const questionDivs = document.querySelectorAll('.question');

questionDivs.forEach((div) => {
  div.addEventListener('click', () => {
    div.nextElementSibling.classList.toggle('active');
    if (div.firstElementChild.innerText == '+') {
      div.firstElementChild.innerText = '-';
    } else {
      div.firstElementChild.innerText = '+';
    }

    if (div.ariaExpanded == 'false') {
      div.ariaExpanded = 'true';
    } else {
      div.ariaExpanded = 'false';
    }
  });
});

// Why should you make your html accessible?
// To make the webpage accessable to all people including those with disabilities. Access to information is a human right.

// What are landmarks in an html page and why should you have them?
// A landmark is an easy way to navigate through the website. it makes it easier for blind people for example to jump between sections. Landmarks can be <main>, <nav>, <footer>, <header>, <section> and <aside>.

// What are semantic elements and why should you use them?
// Semantic elements are elements with a meaning. They tell us about what type of content is in the elements, for exampel a <form> tells us there will be a form withing the element and a <button> tells us we can interact in some way.

// When do you use the role attribute?
// The role attribute allows us to tell the user what type of content it is when semantic tags are not an option to use. For exampel a <button> and a <div role="button"> tells us the element is a button.
