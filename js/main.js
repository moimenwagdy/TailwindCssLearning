let btn = document.querySelector(".toggler");
let ulCont = document.querySelector(".nav-list");
let ul = document.querySelector("ul");

console.log(ul);

btn.addEventListener("click", () => {
  ulCont.classList.toggle("hidden");

  //   if (ulCont.classList.contains("expanded")) {
  //     ulCont.classList.remove("expanded");
  //   } else {
  //     ulCont.classList.add("expanded");
  //   }
  //   if (ulCont.classList.contains("expanded")) {
  //     ulCont.classList.remove("hidden");
  //   }

  //   btn.classList.add("hidden");
});
