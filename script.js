document.addEventListener('DOMContentLoaded', function() {
    // Function to show the love words popup
    function showLoveWords() {
        var overlay = document.getElementById('overlay');
        var modal = document.getElementById('modal');

        overlay.style.display = 'block';
        modal.style.display = 'block';
    }

    // Function to close the popup
    function closeModal() {
        var overlay = document.getElementById('overlay');
        var modal = document.getElementById('modal');

        overlay.style.display = 'none';
        modal.style.display = 'none';
    }

    // Example: Add a simple hover effect to the button
    const button = document.querySelector('button');

    button.addEventListener('mouseenter', function() {
        button.style.transform = 'scale(1.1)';
        button.style.transition = 'transform 0.5s ease';
    });

    button.addEventListener('mouseleave', function() {
        button.style.transform = 'scale(1)';
    });

    // Ensure the showLoveWords and closeModal functions are accessible in the global scope
    window.showLoveWords = showLoveWords;
    window.closeModal = closeModal;
});
