var $form = document.querySelector('#contact-form');

function handleSubmit(e) {
  event.preventDefault();
  var name = $form.elements.name.value;
  var email = $form.elements.email.value;
  var message = $form.elements.message.value;
  var messageData = {
    name: name,
    email: email,
    message: message
  };
  console.log('This is the Data: ', messageData);
  $form.reset();
}
$form.addEventListener('submit', handleSubmit);
