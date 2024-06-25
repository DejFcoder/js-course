// DOM = DOCUMENT OBJECT MODEL
//              Object{} that represents the page you see in the web browser
//              and provides you with an API to interact with it.
//             Web browser constructs the DOM when it loads an HTML document,
//             and structures all the elements in a tree-like representation.
//             JavaScript can access the DOM to dynamically
//             change the content, structure, and style of a web page.

//document.title = "My Web";
document.body.style.backgroundColor = "#000";
//document.getElementById("");

const userName = "David";
const welcomeMessage = document.getElementById("wlcmMsg")

welcomeMessage.textContent += userName === "" ? `Guest` : userName; 
