document.getElementById('landing-page').addEventListener('click', () => {
    const hasEntered = localStorage.getItem('hasEntered') === 'true';

    if (hasEntered) {
        document.getElementById('landing-page').style.display = 'none';
        
        const isMuted = localStorage.getItem('isMuted') === 'true';
        const isPaused = localStorage.getItem('isPaused') === 'true';
        
        if (isMuted) {
            audioPlayer.muted = true;
            volumeIcon.src = './Assets/Images/Music Player/Volume Off.png';
        } else {
            audioPlayer.muted = false;
            volumeIcon.src = './Assets/Images/Music Player/Volume On.png';
        }

        if (isPaused) {
            audioPlayer.pause();
            playButton.innerHTML = '<img class="Play-Pause-Button no-select" src="./Assets/Images/Music Player/Play-Button.png">';
        } else {
            audioPlayer.play();
            playButton.innerHTML = '<img class="Play-Pause-Button no-select" src="./Assets/Images/Music Player/Pause-Button.png">';
        }
    } else {
        document.getElementById('landing-page').style.display = 'none';
        audioPlayer.play();

        localStorage.setItem('hasEntered', 'true');
        
        const imageUrls = [
            './Assets/Images/Icons/Theme Set/F-1.png',
            './Assets/Images/Icons/Theme Set/F-2.png',
            './Assets/Images/Icons/Theme Set/F-3.png',
            './Assets/Images/Icons/Theme Set/F-4.png',
            './Assets/Images/Icons/Theme Set/F-5.png',
            './Assets/Images/Icons/Theme Set/F-6.png',
            './Assets/Images/Icons/Theme Set/F-7.png'
        ];

        imageUrls.forEach(url => {
            const img = new Image();
            img.src = url;
        });
    }
});