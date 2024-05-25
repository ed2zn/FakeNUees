document.addEventListener("DOMContentLoaded", function() {
    const verificationSection = document.querySelector('.verification-section');
    verificationSection.addEventListener('click', function() {
        window.location.href = '/index';
    });

    const searchBar = document.querySelector('.search-bar input');
    searchBar.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const newsLink = searchBar.value;
        }
    });
});


