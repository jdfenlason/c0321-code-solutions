/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
var shia = {
  name: "Shia Lebouf",
  age: 34,
};

function isOldEnoughToDrink(age) {
  if ((age) => 21) {
    return true;
  } else {
    return;
    false;
  }
};

function isOldEnoughToDrive(age) {
  if ((age) => 18) {
    return true;
  } else {
    return false;
  }
};

function isOldEnoughToDrinkAndDrive(age) {
  return false;
};

function isUnderFive(number) {
  if (number <= 5) {
    return true;
  } else {
    return false;
  }
};

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

function startsWithJ(string) {
  if (string[0] === "J") {
    return true;
  } else {
    return false;
  }
};

function isOldEnoughToDrink(person) {
  if ((person) => 21) {
    return true;
  } else {
    return false;
  }
};
function isOldEnoughToDrive(person) {
  if ((person) => 18) {
    return true;
  } else {
    return false;
  }
};

function isOldEnoughToDrinkAndDrive(person) {
  return false;
};

function categorizeAcidity(ph) {
  if (ph === 7) {
    return "neutral";
  }
  if (ph < 7 && ph > 0) {
    return "acid";
  }
  if (ph > 8 && ph < 14) {
    return "base";
  } else {
    return "invalid ph level";
  }
};

function introduceWarnerBro(name) {
  if (name === "yakko" || name === "wakko") {
    return "We're the warner brothers";
  }
  if (name === "dot") {
    return "I'm cute~";
  } else {
    return "Goodnight everybody";
  }
};
