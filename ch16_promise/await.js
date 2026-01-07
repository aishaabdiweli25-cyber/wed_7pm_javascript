// creating Promise
async function getPhonePromise() {
  var phone = {
    brand: "Samsung",
    color: "black",
  };
  return phone;
}

// consuming promise using then()
getPhonePromise().then((phone) => {
  console.log(phone);
});

// consuming promise using await
async function consumePhonePromise() {
  let phone = await getPhonePromise();
  console.log(phone);
}

consumePhonePromise();
