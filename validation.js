document.getElementById('registrationForm').addEventListener('submit', function (event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});

function validateForm() {
    clearErrors();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var city = document.getElementById('city').value;
    var age = document.getElementById('age').value;
    var course = document.getElementById('course').value;
    var gender = document.querySelector('input[name="gender"]:checked');

    if (name.trim() === '') {
        document.getElementById('nameError').innerHTML = 'Name cannot be blank.';
        return false;
    }

    if (!validateEmail(email)) {
        document.getElementById('emailError').innerHTML = 'Invalid email format.';
        return false;
    }

    if (phone.length !== 10 || isNaN(phone)) {
        document.getElementById('phoneError').innerHTML = 'Phone must be a 10-digit number.';
        return false;
    }

    if (city.trim() === '') {
        document.getElementById('cityError').innerHTML = 'City cannot be blank.';
        return false;
    }

    if (age < 18) {
        document.getElementById('ageError').innerHTML = 'Age must be 18 or above.';
        return false;
    }

    if (course.trim() === '') {
        document.getElementById('courseError').innerHTML = 'Semester and Course cannot be blank.';
        return false;
    }

    if (!gender) {
        document.getElementById('genderError').innerHTML = 'Please select a gender.';
        return false;
    }

    return true;
}

function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function clearErrors() {
    var errorElements = document.querySelectorAll('.text-danger');
    errorElements.forEach(function (element) {
        element.innerHTML = '';
    });
}