let isMomHappy = false;

// Creating a Promise using fat arrow syntax
const newPhonePromise = new Promise((resolve, reject) => {
  if (isMomHappy) {
    let phone = {
      brand: "Samsung",
      color: "black",
    };

    resolve(phone);
  } else {
    let reason = new Error("mom is not happy");
    reject(reason);
  }
});

// Consuming the Promise using fat arrow syntax
let askMom = function () {
  newPhonePromise
    .then((fulfilled) => console.log(fulfilled))
    .catch((error) => console.log(error.message));
};

askMom();
