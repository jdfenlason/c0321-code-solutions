function graduation(credential) {
  return function (fullName) {
    return `${fullName}, ${credential}`;
  };
}

const medicalSchool = graduation('M.D');
const lawSchool = graduation('Esq.');

console.log('Medical School:', medicalSchool('Jake Fenlason'));
console.log('Law School:', lawSchool('Jake Fenlason'));
