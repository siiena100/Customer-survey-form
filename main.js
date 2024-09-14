document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    const form = document.getElementById('survey-form');
    
    // Get all checkboxes for service rating
    const serviceCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    
    // Add event listener to each service rating checkbox to ensure only one is selected at a time
    serviceCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function () {
        serviceCheckboxes.forEach(cb => {
          if (cb !== checkbox) {
            cb.checked = false; // Uncheck all other checkboxes
          }
        });
      });
    });

     // Get all radio buttons for experience rating
     const experienceRadios = document.querySelectorAll('input[type="radio"]');
    
     // Add event listener to ensure only one radio button is selected at a time (default behavior)
     experienceRadios.forEach(radio => {
       radio.addEventListener('change', function () {
         experienceRadios.forEach(rb => {
           if (rb !== radio) {
             rb.checked = false; // Uncheck all other radio buttons
           }
         });
       });
     });

    // Add event listener for form submission
    form.addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Collect form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const age = document.getElementById('number').value;
        const visitDate = document.getElementById('visit-date').value;
        const foodRating = document.getElementById('dropdown').value;
        const serviceRatings = document.querySelectorAll('input[type="checkbox"]:checked');
        const experienceRating = document.querySelector('input[name^="rating"]:checked');
        const comments = document.querySelector('textarea').value;

        // Validate form data
        if (!name || !email || !age || !visitDate || foodRating === " " || !experienceRating) {
            alert('Please fill out all required fields.');
            return;
        }

        // Collect selected service ratings
        const serviceRatingsValues = Array.from(serviceRatings).map(input => input.nextElementSibling.textContent.trim()).join(', ');

        // Get the value of the selected experience rating
        const experienceRatingValue = experienceRating ? experienceRating.nextElementSibling.textContent.trim() : 'None';

        // Display collected data in an alert
        alert(`Name: ${name}\nEmail: ${email}\nAge: ${age}\nDate of Visit: ${visitDate}\nFood Rating: ${foodRating}\nService Ratings: ${serviceRatingsValues}\nExperience Rating: ${experienceRatingValue}\nComments: ${comments}`);
    });
});

  