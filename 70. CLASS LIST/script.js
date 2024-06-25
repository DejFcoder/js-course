// classList = Element property in JavaScript used to interact
//                     with an element's list of classes (CSS classes)
//                     Allows you to make reusable classes for many elements
//                     across your webpage.

// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass, newClass)
// contains()

/* const myH1 = document.getElementById("myH1");
const myButton = document.getElementById("myButton");

myH1.classList.add("enabled")
myButton.classList.add("enabled");
/* myButton.classList.remove("enabled");

myButton.addEventListener("mouseover", (event) => {
  event.target.classList.toggle("hover");
});

myButton.addEventListener("mouseout", (event) => {
    event.target.classList.toggle("hover");
  });
 */
/* myButton.addEventListener("click", (event) => {

    if(event.target.classList.contains("disabled")) {
        event.target.textContent += "xD";
    } else {
        event.target.classList.replace("enabled", "disabled");
    }
})

myH1.addEventListener("click", (event) => {

    if(event.target.classList.contains("disabled")) {
        event.target.textContent += "xD";
    } else {
        event.target.classList.replace("enabled", "disabled");
    }
}) */

let btns = document.querySelectorAll(".myBtns");

btns.forEach(button => {
    button.classList.add("enabled")
})

btns.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover")
    })
})

btns.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover")
    })
})

btns.forEach(button => {
    button.addEventListener("click", event => {

        if(event.target.classList.contains("disabled")) {
            button.textContent += "Xd"
        }  else {
            event.target.classList.replace("enabled", "disabled");
        }
    })
})