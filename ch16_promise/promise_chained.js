// show all gifts
const showGifts = (bag) => console.log(bag);

// mum gives the phone
async function getPhoneFromMum() {
  var mumsPhone = {
    make: "Samsung",
    model: "Note",
    color: "black",
  };
  return mumsPhone;
}

// dad gives the phone cover and a bag
async function getPhoneCoverFromDad(phone) {
  var bag = [];
  var phoneCover = { color: "white" };

  bag.push(phone);
  bag.push(phoneCover);

  return bag;
}

// sister gives a SIM
async function getPhoneSimFromSister(bag) {
  var sim = {
    network: "Vodafone",
    number: "07947755623",
  };

  bag.push(sim);
  showGifts(bag);
}

// to use await we need to have
// a function with async keyword
async function askForPhone() {
  // mum gives the kid a phone
  const phone = await getPhoneFromMum();

  // dad gives the phone cover and a bag
  const bag = await getPhoneCoverFromDad(phone);

  // sister gives a SIM
  await getPhoneSimFromSister(bag);
}

askForPhone();
