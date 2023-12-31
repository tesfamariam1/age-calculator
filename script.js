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

    // Check if the date is valid
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      output.textContent = 'Please enter valid numbers.';
      return;
    } else if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > currentDate.getFullYear()) {
      output.textContent = 'Please enter a valid date.';
      return;
    }

    // Combine the inputs into a string in the format "YYYY-MM-DD"
    var birthdateString = year + '-' + month + '-' + day;

    // Parse the birthdate string into a Date object
    var birthDateObj = new Date(birthdateString);

    // Calculate the age
    var ageMilliseconds = currentDate - birthDateObj;

    // Convert age from milliseconds to years, months, and days
    var ageDate = new Date(ageMilliseconds);
    var years = ageDate.getUTCFullYear() - 1970;
    var months = ageDate.getUTCMonth();
    var days = ageDate.getUTCDate() - 1; // Subtract 1 to adjust for 0-indexed days

    // Display the age
    output.textContent = `Your age is: ${years} years, ${months} months, and ${days} days.`;
  }

  // Attach the calculateAge function to the button click event
  document.querySelector('button').addEventListener('click', calculateAge);
});
