// script.js
document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.querySelector('.envelope');
    const dot = document.querySelector('.dot');
    const images = document.querySelectorAll('.images img');

     images.forEach((img) => {
        img.style.transform = 'translate(0, 0)'; // Start at the center
    });

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

                // Calculate target positions for images to move outside the envelope
                let targetX, targetY;

                switch(index) {
                    case 0: // Move to top-left corner
                        targetX = -envelopeWidth / 2 - imgWidth / 2;
                        targetY = -envelopeHeight / 2 - imgHeight / 2;
                        break;
                    case 1: // Move to top-right corner
                        targetX = envelopeWidth / 2 - imgWidth / 2;
                        targetY = -envelopeHeight / 2 - imgHeight / 2;
                        break;
                    case 2: // Move to bottom-left corner
                        targetX = -envelopeWidth / 2 - imgWidth / 2;
                        targetY = envelopeHeight / 2 - imgHeight / 2;
                        break;
                    case 3: // Move to bottom-right corner
                        targetX = envelopeWidth / 2 - imgWidth / 2;
                        targetY = envelopeHeight / 2 - imgHeight / 2;
                        break;
                    default:
                        targetX = 0;
                        targetY = 0;
                }

                const randomRotation = Math.random() * 360; // Random rotation angle

                // Apply transformation to move images
                img.style.transform = `translate(${targetX}px, ${targetY}px) rotate(${randomRotation}deg)`;
            });
        }
    });
});
