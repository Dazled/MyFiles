// script.js
document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.querySelector('.envelope');
    const dot = document.querySelector('.dot');
    const images = document.querySelectorAll('.images img');

    dot.addEventListener('click', function() {
        envelope.classList.toggle('open');
        if (envelope.classList.contains('open')) {
            scatterImages();
        }
    });
 function scatterImages() {
        images.forEach(img => {
            // Adjust scatter range to be outside the envelope's bounds
            const x = (Math.random() - 0.5) * 400; // Random value between -200 and 200
            const y = (Math.random() - 0.5) * 400; // Random value between -200 and 200
            const rotate = Math.random() * 360; // Random rotation between 0 and 360 degrees

            img.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
        });
    }
});
