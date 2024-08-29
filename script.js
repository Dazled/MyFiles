// script.js
document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.querySelector('.envelope');
    const dot = document.querySelector('.dot');
    const images = document.querySelectorAll('.images img');

    dot.addEventListener('click', function() {
        envelope.classList.toggle('open');
        });
    });
