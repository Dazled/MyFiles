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
            const x = Math.random() * 300 - 150; // Random value between -150 and 150
            const y = Math.random() * 300 - 150; // Random value between -150 and 150
            const rotate = Math.random() * 360; // Random rotation between 0 and 360 degrees

            img.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
        });
    }
});
