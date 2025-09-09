// Show feature sections as they scroll into view
const features = document.querySelectorAll('.feature');

window.addEventListener('scroll', () => {
    features.forEach(feature => {
        const featurePosition = feature.getBoundingClientRect().top;
        if (featurePosition < window.innerHeight / 1.5) {
            feature.classList.add('visible');
        }
    });
});
