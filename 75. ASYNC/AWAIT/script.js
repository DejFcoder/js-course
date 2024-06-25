// Async/Await = Async = makes a function return a promise
//                           Await = makes an async function wait for a promise

// Allows you write asynchronous code in a synchronous manner
// Async doesn't have resolve or reject set up as parameters
// Everything after Await is placed in an event queue

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogwalked = true;

      if (dogwalked) {
        resolve("Walking the dog");
      } else {
        reject("You didnt wlaked the dog");
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenClean = false;

      if (kitchenClean) {
        resolve("You clean the kitchen");
      } else {
        reject("The kitchen is not clean");
      }
    }, 2500);
  });
}

function takeOutTheRubbish() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashTakenOut = true;

      if (trashTakenOut) {
        resolve("Taking out the rubbish");
      } else {
        reject("You didnt take out the trash");
      }
    }, 500);
  });
}

async function doChores() {
  try {
    const walkTheDogResult = await walkDog();
    console.log(walkTheDogResult);

    const cleanTheKitchen = await cleanKitchen();
    console.log(cleanTheKitchen);

    const takeOutTrash = await takeOutTheRubbish();
    console.log(takeOutTrash);

    console.log("finish");
  } catch (error) {
    console.error(error);
  }
}

doChores();
