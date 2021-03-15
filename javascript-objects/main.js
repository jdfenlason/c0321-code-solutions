var student = {
  firstName: 'Jake',
  lastName: 'Fenlason',
  age: 28
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('Value of fullName:', fullName);

student.livesInIrvine = false;

student.previousOccupation = 'Pro soccer player';


console.log('Value of livesinIrvine:', student.livesInIrvine);
console.log('Value of previousOccupation:', student.previousOccupation);
console.log('Value of student:', student);

var vehicle = {
  make: 'Tesla',
  model: 'S2',
  year: '2020'
};

vehicle['color'] = 'black';

vehicle['isConvertible'] = false;

console.log('Value of vehicle[color]', vehicle['color'] );

console.log("Value of vehicle[isConvertible]", vehicle['isConvertible']);

console.log('Value of vehicle', vehicle);

var pets = {
  name: 'Seba',
  type: 'dog'
};

delete pets.name;
delete pets.type;

console.log('Value of pets:', pets);
