// script.js
document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.querySelector('.envelope');
    const dot = document.querySelector('.dot');
    const images = document.querySelectorAll('.images img');

    dot.addEventListener('click', function () {
        envelope.classList.toggle('open');
        if (envelope.classList.contains('open')) {
            // Get the dimensions of the envelope
            const envelopeRect = envelope.getBoundingClientRect();
            const envelopeWidth = envelopeRect.width;
            const envelopeHeight = envelopeRect.height;

            images.forEach((img, index) => {
                const imgWidth = img.offsetWidth;
                const imgHeight = img.offsetHeight;

                // Position images outside the envelope, at corners or sides
                let randomX, randomY;

                switch(index) {
                    case 0: // Top-left corner
                        randomX = -imgWidth - 10; // Left of envelope
                        randomY = -imgHeight - 10; // Above envelope
                        break;
                    case 1: // Top-right corner
                        randomX = envelopeWidth + 10; // Right of envelope
                        randomY = -imgHeight - 10; // Above envelope
                        break;
                    case 2: // Bottom-left corner
                        randomX = -imgWidth - 10; // Left of envelope
                        randomY = envelopeHeight + 10; // Below envelope
                        break;
                    case 3: // Bottom-right corner
                        randomX = envelopeWidth + 10; // Right of envelope
                        randomY = envelopeHeight + 10; // Below envelope
                        break;
                    default:
                        randomX = 0;
                        randomY = 0;
                }

                const randomRotation = Math.random() * 360; // Random rotation angle

                img.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotation}deg)`;
            });
        }
    });
});
