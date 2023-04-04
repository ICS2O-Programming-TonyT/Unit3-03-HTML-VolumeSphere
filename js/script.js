// Get the form and result elements
const form = document.getElementById('circle-form');
const resultDiv = document.getElementById('result');

// Add event listener to the form submit button
form.addEventListener('submit', function(event) {
  // Prevent default form submission
  event.preventDefault();
  
  // Get the base and height and units values from the form
  const Radius = parseFloat(document.getElementById('Radius').value);
  const Units = document.getElementById('Units').value;
  const Pi = Math.PI
  // Calculate the Volume Circle 
  const volume = (4/3*Pi)*(Radius**3);
  // Display the result
  resultDiv.innerHTML = `The Volume of the Circle is ${volume.toFixed(2)} ${Units}<sup>2</sup>.`;
});
