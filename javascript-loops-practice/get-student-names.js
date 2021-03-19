/* exported getStudentNames */
function getStudentNames(students) {
  var values = [];
  for (var names of students) {
    values.push(students[names]);
  }
  return values;
}
