// cookie = a small text file stored on your computer
//                 used to remember information about the user
//                 saved in name=value pairs

/* console.log(navigator.cookieEnabled) */
/* document.cookie = "firstName=Mato; expires=Sun, 1 January 2000 12:00:00 UTC; path=/";
document.cookie = "lastName=Kubini; expires=Sun, 1 January 2000 12:00:00 UTC; path=/";

console.log(document.cookie); */
setCookie("firstName", "Matko", 180);
setCookie("lastName", "Kubini", 180);
setCookie("age", 18, 180);

console.log(document.cookie);
console.log(getCookie("age"));

function setCookie(name, value, daysToLive) {
  const date = new Date();
  date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function deleteCookie(name) {
  setCookie(name, null, null);
}

function getCookie(name) {
  const cDecoded = decodeURIComponent(document.cookie);
  const cArray = cDecoded.split("; ");
  let result = null;

  cArray.forEach(element => {
    if (element.indexOf(name) == 0) {
      result = element.substring(name.length + 1);
    }
  });
  return result;
}

/* const firstText = document.getElementById("firstText");
const lastText = document.getElementById("lastText");
const submitBtn = document.getElementById("submitBtn");
const cookieBtn = document.getElementById("cookieBtn");

submitBtn.addEventListener("click", () => {
  setCookie("firstName", firstText.value, 365);
  setCookie("lastName", lastText.value, 365);
});

cookieBtn.addEventListener("click", () => {
  firstText.value = getCookie("firstName");
  lastText.value = getCookie("lastName");
});

function setCookie(name, value, daysToLive) {
  const date = new Date();
  date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function getCookie(name) {
  const cDecoded = decodeURIComponent(document.cookie);
  const cArray = cDecoded.split(";");
  let result = null;

  cArray.forEach((element) => {
    if (element.indexOf(name) == 1) {
      result = element.substring(name.length + 2);
    }
  });
  return result;
}

function deleteCookie(name) {
  setCookie(name, null, null);
}

console.log(document.cookie); */

