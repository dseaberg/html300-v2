console.log('Connected');

// Handles the form submission and alerts on any errors.
document.getElementById('formSubmitButton').addEventListener('click', function(event) {
  event.preventDefault();

  const cardNumber = document.getElementById('cardNumber').value;
  if (!(cardNumber.length === 15 || cardNumber.length === 16)) {
    alert('Please enter a valid card number.');
  }
  const zipCode = document.getElementById('zipCode').value;
  if (zipCode.length !== 5) {
    alert('Please enter a zip code.');
  }
  const cvv = document.getElementById('cvv').value;
  if (!(cvv.length === 3 || cvv.length === 4)) {
    alert('Please enter a valid CVV.');
  }
});
