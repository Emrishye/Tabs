"use strict";
const tab = document.querySelectorAll(".tab");
const tab1 = document.querySelector(".first");
const tab2 = document.querySelector(".second");
const tab3 = document.querySelector(".third");
const tab4 = document.querySelector(".fourth");
const content = document.querySelectorAll(".content");
console.log(content);
// tab2.addEventListener("click", function () {
//   tab2.classList.toggle("active");
//   tab1.classList.toggle("active");
//   tab3.classList.toggle("active");
//   tab4.classList.toggle("active");
// });

for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener("click", function () {
    for (let j = 0; j < tab.length; j++) {
      tab[j].classList.remove("active");
      content[j].classList.add("hidden");
    }
    tab[i].classList.toggle("active");
    content[i].classList.remove("hidden");
  });
}
