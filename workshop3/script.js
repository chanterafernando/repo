$(document).ready(function() {

    // ============================================
    // I. TOGGLE EFFECT - Random Background Color
    // ============================================
    $('#colorToggleBtn').on('click', function() {
        // Generate random color
        var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        // Apply to hero section
        $('.hero').css('background-color', randomColor);
        
        // Add a little animation feedback
        $(this).text('Color Changed!').css('background-color', '#2c3e50').css('color', '#fff');
        setTimeout(function() {
            $('#colorToggleBtn').text('Change Background Color').css('background-color', '#fff').css('color', '#333');
        }, 1000);
    });

    // ============================================
    // II. IMAGE GALLERY - Popup Modal
    // ============================================
    $('.gallery-img').on('click', function() {
        var imgSrc = $(this).attr('src');
        $('#modalImg').attr('src', imgSrc);
        $('#imageModal').fadeIn(300);
    });

    // Close modal when clicking X
    $('.modal-close').on('click', function() {
        $('#imageModal').fadeOut(300);
    });

    // Close modal when clicking outside the image
    $('#imageModal').on('click', function(e) {
        if (e.target === this) {
            $(this).fadeOut(300);
        }
    });

    // Close modal with ESC key
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape') {
            $('#imageModal').fadeOut(300);
        }
    });

    // ============================================
    // III. FORM VALIDATION
    // ============================================
    $('#contactForm').on('submit', function(e) {
        e.preventDefault(); // Prevent actual form submission

        var isValid = true;

        // Validate Name
        var name = $('#name').val().trim();
        if (name === '') {
            $('#name').addClass('error');
            $('#nameError').addClass('visible');
            isValid = false;
        } else {
            $('#name').removeClass('error');
            $('#nameError').removeClass('visible');
        }

        // Validate Email
        var email = $('#email').val().trim();
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (email === '' || !emailPattern.test(email)) {
            $('#email').addClass('error');
            $('#emailError').addClass('visible');
            isValid = false;
        } else {
            $('#email').removeClass('error');
            $('#emailError').removeClass('visible');
        }

        // Validate Message (at least 10 characters)
        var message = $('#message').val().trim();
        if (message === '' || message.length < 10) {
            $('#message').addClass('error');
            $('#messageError').addClass('visible');
            isValid = false;
        } else {
            $('#message').removeClass('error');
            $('#messageError').removeClass('visible');
        }

        // If form is valid, show success alert
        if (isValid) {
            alert('Form submitted successfully!');
            // Optionally reset the form
            // $('#contactForm')[0].reset();
        }
    });

    // ============================================
    // IV. EXTRA: Clear error styles on input
    // ============================================
    $('#name, #email, #message').on('input', function() {
        $(this).removeClass('error');
        $(this).siblings('.error-message').removeClass('visible');
    });

});