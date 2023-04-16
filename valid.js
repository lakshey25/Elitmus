// Wait for the document to load before adding event listeners
$(document).ready(function() {

	// Listen for login form submission
	$('#login-form').submit(function(event) {
		event.preventDefault(); // Prevent form from submitting

		// Get the input values
		var email = $('#email').val().trim();
		var password = $('#password').val().trim();

		// Validate the input values
		if (email === '') {
			$('#error').text('Email cannot be empty.');
			return;
		}

		if (password === '') {
			$('#error').text('Password cannot be empty.');
			return;
		}

		// Redirect to home.html
		window.location.href = 'home.html';
	});

	// Listen for signup form submission
	$('#signup-form').submit(function(event) {
		event.preventDefault(); // Prevent form from submitting

		// Get the input values
		var email = $('#signup-email').val().trim();
		var password = $('#signup-password').val().trim();

		// Validate the input values
		if (email === '') {
			$('#error').text('Email cannot be empty.');
			return;
		}

		if (password === '') {
			$('#error').text('Password cannot be empty.');
			return;
		}

		// Redirect to home.html
		window.location.href = 'home.html';
	});

});
