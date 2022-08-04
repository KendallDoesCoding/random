"use strict";

// Element
const ReDirect_btn = document.getElementById("redirect__btn");

// http Redirect 
const myFunction = function () {
  location.replace("https://youtu.be/dQw4w9WgXcQ");
};

// Listen to Click Event
ReDirect_btn.addEventListener("click", (e) => {
  myFunction();
});
