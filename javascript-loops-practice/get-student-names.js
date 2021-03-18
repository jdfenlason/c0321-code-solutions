/* exported getStudentNames */
function getStudentNames(student) {
  var names = [];
  for (var key in student) {
    names.push(key);
  }
  return names;
}
