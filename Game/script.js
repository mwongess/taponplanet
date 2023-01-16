"use strict";

const ellipse = document.querySelector("#ellipse");
const bang1 = document.querySelector("#bang1");
const bang2 = document.querySelector("#bang2");
const bang3 = document.querySelector("#bang3");

setTimeout(() => {
  ellipse.style.display = "none";
  bang1.style.display = "block";
  setTimeout(() => {
    bang1.style.display = "none";
    bang2.style.display = "block";
    setTimeout(() => {
      bang2.style.display = "none";
      bang3.style.display = "block";
    }, 1500);
  }, 1000);
}, 1000);
