// creating Promise
async function getPhonePromise() {
  let isMomHappy = false;

  if (isMomHappy) {
    return {
      brand: "Samsung",
      color: "black",
    };
  } else {
    throw new Error("Mom is not happy");
  }
}

// consuming promise using then() and catch()
getPhonePromise()
  .then((phone) => {
    console.log("using .then:", phone);
  })
  .catch((error) => {
    console.log("using .then error:", error.message);
  });

// consuming promise using await/async with try...catch
async function consumePhonePromise() {
  try {
    let phone = await getPhonePromise();
    console.log("using await:", phone);
  } catch (error) {
    console.log("using await error:", error.message);
  }
}

consumePhonePromise();
