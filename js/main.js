var elModal = document.getElementById('modal');
var elSignin = document.getElementById('signin');
var elClose = document.getElementById('close');
var elSubmit = document.getElementById('submit');
var elUser = document.getElementById('user');
var elPass = document.getElementById('pass');


elSignin.addEventListener('click', function (e) {
  elModal.style.display = 'block';
});

elClose.addEventListener('click', function (e) {
  elModal.style.display = 'none';
});


elSubmit.addEventListener('click', function (e) {
  // elUser.classList.add('error');
  // elPass.classList.add('error');

  // If the value in either field is blank: '', add the error (trim() it first)
  // If the value in either field less than X character (length), add the error

  var allInputFields = document.querySelectorAll('.field');
  allInputFields.forEach(field => {
    // Check the "value" of each "field"
    field.classList.add('error');

    // Add a "focus" eventlistner to each "field"


  });



});
