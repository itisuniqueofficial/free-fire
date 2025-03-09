'use strict';

// Download Progress Simulation
function startDownload() {
    const progressBar = document.getElementById('progress');
    const button = document.querySelector('.download-btn');
    button.disabled = true;
    button.textContent = 'Downloading...';
    let progress = 0;

    const interval = setInterval(() => {
        if (progress >= 100) {
            clearInterval(interval);
            button.textContent = 'Download Complete';
            window.location.href = 'https://dl.cdn.freefiremobile.com/live/package/FreeFire.apk';
            setTimeout(() => {
                button.textContent = 'Download OB48 APK';
                button.disabled = false;
                progressBar.style.width = '0';
            }, 1500);
        } else {
            progress += 20;
            progressBar.style.width = `${progress}%`;
        }
    }, 200);
}

// Scroll Animation
function handleScrollAnimations() {
    const sections = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));
}

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.download-btn').addEventListener('click', startDownload);
    handleScrollAnimations();
});