// =============== Task 1 ===============
const image = document.getElementById("my-image");

const imagesrc = image.getAttribute("src");

console.log(imagesrc);

// =============== Task 2 ===============
const btn = document.getElementById("change-pcture");
btn.addEventListener("click", () => {
  image.setAttribute("src", "Bilal.jpg");
});

// =============== Task 3 ===============
const name = document.getElementById("name");
name.setAttribute("placeholder", "Enter your name");

// =============== Task 4 ===============
const myInput = document.getElementById("myInput");
const enableBtn = document.getElementById("enableBtn");
enableBtn.addEventListener("click", () => {
  myInput.setAttribute("placeholder", "i am working");

  myInput.removeAttribute("disabled");
});

// =============== Task 5 ===============

const para = document.getElementById("para");
const isClass = para.hasAttribute("class");

console.log(isClass);

// =============== Task 6 ===============

const link = document.getElementById("link");
const changebtn = document.getElementById("changebtn");
const pagesrc = link.getAttribute("href");

changebtn.addEventListener("click", () => {
  link.setAttribute("href", "https://www.w3schools.com/");
  link.innerText = "W3 School";
});
