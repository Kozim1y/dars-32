var elForm = document.querySelector(".form-name");
var elInput = elForm.querySelector(".input-name");
var elResult = elForm.querySelector(".form-result");

elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  var inputNamber = parseInt(elInput.value.trim(), 10);
  var message = '';

  if (inputNamber % 3 === 0 && inputNamber % 5 ===0) {
    message += "FizzBuzz";
  } else if (inputNamber % 3 === 0) {
    message += "Fizz";
  } else if (inputNamber % 5 === 0) {
    message += "Buzz";
  } else
  {
    message = inputNamber; 
  }

  elResult.textContent = message
})