document.addEventListener('DOMContentLoaded', function () {
  // Function to calculate age
  function calculateAge() {
    var dayInput = document.getElementById('day');
    var monthInput = document.getElementById('month');
    var yearInput = document.getElementById('year');
    var output = document.getElementById('output');

    // Check if all fields are filled
    if (!dayInput.value || !monthInput.value || !yearInput.value) {
      output.textContent = 'Please fill in all fields.';
      return;
    }

    // Validate the input values
    var day = parseInt(dayInput.value, 10);
    var month = parseInt(monthInput.value, 10);
    var year = parseInt(yearInput.value, 10);

    // Get the current date
    var currentDate = new Date();

    // Combine the inputs into a string in the format "YYYY-MM-DD"
    var birthdateString = year + '-' + month + '-' + day;

    // Parse the birthdate string into a Date object
    var birthDateObj = new Date(birthdateString);

    // Calculate the difference in milliseconds
    var timeDiff = currentDate - birthDateObj;

    // Compare the years
    var currentYear = currentDate.getFullYear();

    console.log(year);
    console.log(currentYear);
    console.log(year > currentYear);
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      output.textContent = 'Please enter valid numbers.';
      return;
    }

    // Check if the date is valid
    if (day < 1 || day > 31) {
      output.textContent = 'Please enter a valid date.';
      return;
    } else if(month < 1 || month > 12) {
      output.textContent = 'Please enter a valid month.';
      return;
    } else if (year < 1900 || year > currentDate.getFullYear()) {
      output.textContent = 'Please enter a valid year.';
      return;
    }


    // Calculate the age by dividing the time difference by the number of milliseconds in a year
    var age = Math.floor(timeDiff / (365.25 * 24 * 60 * 60 * 1000));

    // Display the age
    output.textContent = 'Your age is: ' + age + ' years.';
  }

  // Attach the calculateAge function to the button click event
  document.querySelector('button').addEventListener('click', calculateAge);
});
