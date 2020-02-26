// this is an external js-file
// it is important that this file ends with ".js"
// like a css file you can use the js-file to define
// javascript outside of your html file

// in javascript, comments are defined with to leading slashs
// like "//"

// function code copied from
// https://github.com/daneden/animate.css#usage-with-javascript
// this function can be used later without redifining it:
function animateCSS(element, animationName, callback) {
  const node = document.querySelector(element);
  node.classList.add("animated", animationName);

  function handleAnimationEnd() {
    node.classList.remove("animated", animationName);
    node.removeEventListener("animationend", handleAnimationEnd);

    if (typeof callback === "function") callback();
  }

  node.addEventListener("animationend", handleAnimationEnd);
}

// getElementById will bring you the defined element,
// so you can use it:
document.getElementById(
  "test-external-js-file-click-event"
).onclick = function() {
  //  use the function defined before:
  animateCSS(
    // the element-selector, like css-notation:
    "#test-external-js-file-click-event",
    // the desired animation
    // check https://github.com/daneden/animate.css#animations
    // for possible values
    "bounce"
  );
};
