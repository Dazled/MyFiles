// script.js
document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.querySelector('.envelope');
    const dot = document.querySelector('.dot');

    dot.addEventListener('click', function() {
        envelope.classList.toggle('open');
    });
});

