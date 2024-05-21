"use strict";

// buttons and counter text
const counter = document.querySelector("#counter");
const btns = document.querySelectorAll(".btn");

// initialize the count variable
let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;

    if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("decrease")) {
      // Only decrement if count is greater than 0
      if (count > 0) {
        count--;
      }
    } else {
      count = 0;
    }
  

    // for colors
    if (count > 0) {
      counter.style.color = "blue";
    } else if (count === 0) {
      counter.style.color = "black";
    }

    counter.textContent = count;
  });
});

