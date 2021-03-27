/* exported todos */

var todos = [];
// eslint-disable-next-line no-unused-vars
var previousTodosJSON = localStorage.getItem('javascript-local-storage');
todos = (JSON.parse(localStorage.getItem('javascript-local-storage')));

window.addEventListener('beforeunload', function (event) {
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
});
