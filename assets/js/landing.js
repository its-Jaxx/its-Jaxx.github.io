document.addEventListener('DOMContentLoaded', () => {
    const landingPage = document.getElementById('landing-page');
    const mainContent = document.getElementById('main-content');

    landingPage.addEventListener('click', () => {
        landingPage.style.opacity = 0;
        setTimeout(() => {
            landingPage.style.display = 'none';
            mainContent.style.display = 'block';
            mainContent.style.opacity = 0;
            setTimeout(() => {
                mainContent.style.opacity = 1;
                const audio = new Audio('./assets/media/audio.mp3');
                audio.volume = 0.05;
                audio.loop = true;
                audio.play();
            }, 50);
        }, 500);
    });
});