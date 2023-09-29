"use strict";
//buttons and counter text
const counter = document.querySelector("#counter");
const btns = document.querySelectorAll(".btn");

//initialize the count variable

let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;

    if (styles.contains("increase")) {
      count++;
    } 
    else if (styles.contains("decrease")) {
      count--;

// Don't count in minus
      if (count === 0) {
      } else {
      // count--;
      }

    } else {
          count = 100;
        }

    // for colors

    if (count > 0) {
      counter.style.color = "blue";
    }

    if (count < 0) {
      counter.style.color = "red";
    }

    if (count === 0) {
      counter.style.color = "black";
    }

    counter.textContent = count;
  });
});

