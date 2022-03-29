const productBtn = document.querySelector(".product");
const productMenu = document.querySelector("#productMenu");

const companyBtn = document.querySelector(".company");
const companyMenu = document.querySelector("#companyMenu");

const connectBtn = document.querySelector(".connect");
const connectMenu = document.querySelector("#connectMenu");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");

const allBoxes = document.querySelectorAll(".header__menu");

productBtn.addEventListener("click", () => {
  companyMenu.classList.add("close");
  connectMenu.classList.add("close");
  companyMenu.classList.remove("show");
  connectMenu.classList.remove("show");
  img2.classList.remove("active");
  img3.classList.remove("active");
  if (productMenu.classList.contains("close")) {
    productMenu.classList.remove("close");
    productMenu.classList.add("show");
    img1.classList.add("active");
  } else {
    productMenu.classList.remove("show");
    productMenu.classList.add("close");
    img1.classList.remove("active");
  }
});

companyBtn.addEventListener("click", () => {
  productMenu.classList.add("close");
  connectMenu.classList.add("close");
  productMenu.classList.remove("show");
  connectMenu.classList.remove("show");
  img1.classList.remove("active");
  img3.classList.remove("active");
  if (companyMenu.classList.contains("close")) {
    companyMenu.classList.remove("close");
    companyMenu.classList.add("show");
    img2.classList.add("active");
  } else {
    companyMenu.classList.remove("show");
    companyMenu.classList.add("close");
    img2.classList.remove("active");
  }
});

connectBtn.addEventListener("click", () => {
  companyMenu.classList.add("close");
  productMenu.classList.add("close");
  companyMenu.classList.remove("show");
  productMenu.classList.remove("show");
  img1.classList.remove("active");
  img2.classList.remove("active");
  if (connectMenu.classList.contains("close")) {
    connectMenu.classList.remove("close");
    connectMenu.classList.add("show");
    img3.classList.add("active");
  } else {
    connectMenu.classList.remove("show");
    connectMenu.classList.add("close");
    img3.classList.remove("active");
  }
});

// #######################################################

const btnHamburger = document.getElementById("btnHamburger");
const header = document.querySelector(".header");
const fadeElems = document.querySelectorAll(".has-fade");
const body = document.querySelector("body");

btnHamburger.addEventListener("click", () => {
  if (header.classList.contains("open")) {
    header.classList.remove("open");

    fadeElems.forEach((el) => {
      el.classList.remove("fade-in");
      el.classList.add("fade-out");
    });
  } else {
    header.classList.add("open");
    fadeElems.forEach((el) => {
      el.classList.remove("fade-out");
      el.classList.add("fade-in");
    });
  }
});

let pr = document.querySelector(".sd");
const firstBtn = document.querySelector(".firstBtn");
const secondBtn = document.querySelector(".secondBtn");
const thirdBtn = document.querySelector(".thirdBtn");
const firstUl = document.querySelector(".firstUl");
const secondUl = document.querySelector(".secondUl");
const thirdUl = document.querySelector(".thirdUl");

const img4 = document.querySelector(".img4");
const img5 = document.querySelector(".img5");
const img6 = document.querySelector(".img6");

firstBtn.addEventListener("click", () => {
  secondUl.classList.add("close");
  thirdUl.classList.add("close");
  secondUl.classList.remove("show");
  thirdUl.classList.remove("show");
  img5.classList.remove("active");
  img6.classList.remove("active");
  if (firstUl.classList.contains("close")) {
    firstUl.classList.remove("close");
    firstUl.classList.add("show");
    img4.classList.add("active");
  } else {
    firstUl.classList.remove("show");
    firstUl.classList.add("close");
    img4.classList.remove("active");
  }
});

secondBtn.addEventListener("click", () => {
  firstUl.classList.add("close");
  thirdUl.classList.add("close");
  firstUl.classList.remove("show");
  thirdUl.classList.remove("show");
  img4.classList.remove("active");
  img6.classList.remove("active");
  if (secondUl.classList.contains("close")) {
    secondUl.classList.remove("close");
    secondUl.classList.add("show");
    img5.classList.add("active");
  } else {
    secondUl.classList.remove("show");
    secondUl.classList.add("close");
    img5.classList.remove("active");
  }
});

thirdBtn.addEventListener("click", () => {
  secondUl.classList.add("close");
  firstUl.classList.add("close");
  secondUl.classList.remove("show");
  firstUl.classList.remove("show");
  img4.classList.remove("active");
  img5.classList.remove("active");
  if (thirdUl.classList.contains("close")) {
    thirdUl.classList.remove("close");
    thirdUl.classList.add("show");
    img6.classList.add("active");
  } else {
    thirdUl.classList.remove("show");
    thirdUl.classList.add("close");
    img6.classList.remove("active");
  }
});
