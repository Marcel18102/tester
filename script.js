document.addEventListener('DOMContentLoaded', function() {
    // Function to unleash confetti
    function unleashConfetti() {
        var confettiSettings = {
            target: 'confetti-container',
            max: 200,
            size: 2,
            animate: true,
            props: ['circle', 'square'],
            colors: [[255, 87, 112], [255, 131, 166], [255, 179, 204], [255, 224, 236], [255, 242, 249]]
        };

        var confetti = new window.ConfettiGenerator(confettiSettings);
        confetti.render();
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

    // Ensure the unleashConfetti function is accessible in the global scope
    window.unleashConfetti = unleashConfetti;
});
