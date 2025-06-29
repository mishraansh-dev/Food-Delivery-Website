function clicked(){
    location.href='menu.html';
};

// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a nav item
    document.querySelectorAll('.nav-menu .item a').forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Contact form submission
    const contactForm = document.querySelector('#contact-box form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('The form was submitted!');
            contactForm.reset();
        });
    }
});

function chinese(){
    location.href='chinese.html';
};
function touch(){
    location.href='south.html';
};

function goToNorthIndian(){
    location.href='north-indian.html';
};

function goToSnacks(){
    location.href='snacks.html';
};

function goToJuice(){
    location.href='juice.html';
};

function goToItalian(){
    location.href='italian.html';
};

function goToMexican(){
    location.href='mexican.html';
};

function goToPunjabi(){
    location.href='punjabi.html';
};

