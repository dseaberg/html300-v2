// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function(){

  // Find the example form, and handle its submit event
  const exampleForm = document.querySelector('#example-form')

  exampleForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [0, 1, 2, 3, 5, 8]

    const inputField = document.querySelector('#example-form .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // If the user's input was a number, push it into the array and continue
    if(!isNaN(userNumber)){
      data.push(userNumber)

      // Use reduce to sum all the numbers in the data array
      const sum = data.reduce((accumulator, currentElement) => accumulator + currentElement);

      // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
      document.querySelector('#example-form .output').innerHTML = sum
    }

    // Clear the form field so the user can try again
    inputField.value = ''
  })

  // Make the second form do a filter() operation
  const exampleForm2 = document.querySelector('#example-form2');
  exampleForm2.addEventListener('submit', function(event) {

    event.preventDefault();

    const data = [1, 3, 5, 4, 8, 2, 56, 2, -3];

    const inputField = document.querySelector('#example-form2 .input');
    const userInput = inputField.value;
    const userNumber = parseInt(userInput);

    // If the user's input was a number, then do the operation
    if (!isNaN(userNumber)) {
      const filteredData = data.filter(x => x >= userNumber);
      document.querySelector('#example-form2 .output').innerHTML = filteredData;
    }

    // Clear the form field so the user can try again
    inputField.value = '';
  });

  // Make the third form do a map() operation
  const exampleForm3 = document.querySelector('#example-form3');
  exampleForm3.addEventListener('submit', function(event) {

    event.preventDefault();

    const data = [45, 21, 99, 20, 67, 62, 75];

    const inputField = document.querySelector('#example-form3 .input');
    const userInput = inputField.value;
    const userNumber = parseInt(userInput);

    // If the user's input was a number, then do the operation
    if (!isNaN(userNumber)) {
      const transformedData = data.map(x => x / userNumber);
      document.querySelector('#example-form3 .output').innerHTML = transformedData;
    }

    // Clear the form field so the user can try again
    inputField.value = '';
  });

  // Make the fourth form do an includes() operation
  const exampleForm4 = document.querySelector('#example-form4');
  exampleForm4.addEventListener('submit', function(event) {

    event.preventDefault();

    const data = ['Billy', 'Sam', 'Luke', 'Mark', 'Alexa', 'Emily'];

    const inputField = document.querySelector('#example-form4 .input');
    const userInput = inputField.value;

    const isIncluded = data.includes(userInput);
    document.querySelector('#example-form4 .output').innerHTML = isIncluded;

    // Clear the form field so the user can try again
    inputField.value = '';
  });

  // Make the fifth form do a find() operation
  const exampleForm5 = document.querySelector('#example-form5');
  exampleForm5.addEventListener('submit', function(event) {

    event.preventDefault();

    const data = [9, 30, 1, 44, 52, 24, 85];

    const inputField = document.querySelector('#example-form5 .input');
    const userInput = inputField.value;

    if (userInput === 'odd') {
      const finding = data.find(x => x % 2 === 1);
      document.querySelector('#example-form5 .output').innerHTML = finding;
    } else if (userInput === 'even') {
      const finding = data.find(x => x % 2 === 0);
      document.querySelector('#example-form5 .output').innerHTML = finding;
    }

    // Clear the form field so the user can try again
    inputField.value = '';
  });

});
