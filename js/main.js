let btn = document.querySelector(".toggler");
let ulCont = document.querySelector(".nav-list");
let ul = document.querySelector("ul");

let searchBtn = document.querySelector(".sCont");
let anotherToggler = document.querySelector(".ndSearch");
let searchInput = document.querySelector(".search-input");

console.log(anotherToggler);

btn.addEventListener("click", () => {
  ulCont.classList.toggle("hidden");
});

searchBtn.onclick = () => {
  searchInput.classList.toggle("hidden");
  searchInput.classList.toggle("flex");
};
anotherToggler.onclick = () => {
  searchInput.classList.toggle("hidden");
  searchInput.classList.toggle("flex");
};
