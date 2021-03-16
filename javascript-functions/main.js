function convertMinutesToSeconds(minutes) {
    return minutes * 60;
};

console.log('There are ', convertMinutesToSeconds(5),  ' seconds in 5 minutes' );

function greet(name) {
  return "Hey, " + name;
};
console.log(greet('Beevis'));

function getArea(width, height) {
  return width * height;

};
console.log('The area of the rectangle is ', getArea(17,42));

function getFirstName(person) {

  return person.firstName;
};

console.log('His first name is ', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  return array[array.length - 1];
};

console.log('The last element in the array is ', getLastElement(['propane', 'and', 'propane', 'accessories']));
