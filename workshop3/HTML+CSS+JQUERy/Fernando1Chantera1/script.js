$(document).ready(function() {

    // ============================================
    // I. TOGGLE EFFECT - Random Background Color
    // ============================================
    $('#colorToggleBtn').on('click', function() {
        // Generate random color
        var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        
        // Change background color of the body
        $('body').css('background-color', randomColor);
        
        // Feedback on button
        $(this).text('✅ Color Changed!');
        $(this).css({
            'background-color': '#2c3e50',
            'color': '#fff'
        });
        
        setTimeout(function() {
            $('#colorToggleBtn').text('🎨 Change Background Color');
            $('#colorToggleBtn').css({
                'background-color': '#fff',
                'color': '#333'
            });
        }, 1200);
    });

    // ============================================
    // II. IMAGE GALLERY - Popup Modal
    // ============================================
    $('.gallery-img').on('click', function() {
        var imgSrc = $(this).attr('src');
        var imgAlt = $(this).attr('alt');
        $('#modalImg').attr('src', imgSrc);
        $('#modalImg').attr('alt', imgAlt);
        $('#imageModal').fadeIn(300);
        $('body').css('overflow', 'hidden'); // Prevent scrolling
    });

    // Close modal when clicking X
    $('.modal-close').on('click', function() {
        $('#imageModal').fadeOut(300);
        $('body').css('overflow', 'auto');
    });

    // Close modal when clicking outside the image
    $('#imageModal').on('click', function(e) {
        if (e.target === this) {
            $(this).fadeOut(300);
            $('body').css('overflow', 'auto');
        }
    });

    // Close modal with ESC key
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape') {
            $('#imageModal').fadeOut(300);
            $('body').css('overflow', 'auto');
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
            alert('✅ Form submitted successfully!');
            // Reset the form
            $('#contactForm')[0].reset();
            // Remove any error styles
            $('.form-group input, .form-group textarea').removeClass('error');
            $('.error-message').removeClass('visible');
        } else {
            // Scroll to first error
            $('html, body').animate({
                scrollTop: $('.error:first').offset().top - 150
            }, 500);
        }
    });

    // ============================================
    // IV. Clear error styles on input
    // ============================================
    $('#name, #email, #message').on('input', function() {
        $(this).removeClass('error');
        $(this).siblings('.error-message').removeClass('visible');
    });

    // ============================================
    // V. Smooth Scroll for Navigation
    // ============================================
    $('nav a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 100
            }, 600);
        }
    });

    // ============================================
    // VI. Extra: Add hover effect to nav links
    // ============================================
    $('nav a').on({
        mouseenter: function() {
            $(this).css('transform', 'translateY(-2px)');
        },
        mouseleave: function() {
            $(this).css('transform', 'translateY(0)');
        }
    });

    console.log('✅ jQuery is working correctly!');
});