// DOM Navigation = The process of navigating through the structure
//                                  of an HTML document using JavaScript.
// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// ---------- .firstElementChild ----------
const ulElements1 = document.querySelectorAll("ul");

ulElements.forEach((ulElement) => {
  const firstChild = ulElements1.firstElementChild;
  firstChild.style.backgroundColor = "yellow";
});

// ---------- .lastElementChild ----------
const ulElements2 = document.querySelectorAll("ul");

ulElements.forEach((ulElement) => {
  const lastChild = ulElement2.lastElementChild;
  lastChild.style.backgroundColor = "yellow";
});

// ---------- .nextElementSibling ----------
const element1 = document.getElementById("vegetables");
const nextSibling = element1.nextElementSibling;
nextSibling.style.backgroundColor = "yellow";

// ---------- .previousElementSibling ----------
const element2 = document.getElementById("desserts");
const prevSibling = element2.previousElementSibling;
prevSibling.style.backgroundColor = "yellow";

// ---------- .parentElement ----------
const element3 = document.getElementById("ice cream");
const parent = element3.parentElement;
parent.style.backgroundColor = "yellow";

// ---------- .children ----------
const element4 = document.getElementById("fruits");
const children = element4.children;

Array.from(children).forEach((child) => {
  child.style.backgroundColor = "yellow";
});
