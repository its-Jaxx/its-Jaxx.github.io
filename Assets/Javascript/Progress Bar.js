document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.querySelector('.progress-bar'),
          progressFilled = document.querySelector('.progress-filled'),
          progressThumb = document.querySelector('.progress-thumb'),
          currentTimeEl = document.getElementById('current-time'),
          totalTimeEl = document.getElementById('total-time'),
          audioPlayer = document.getElementById('audio-player');

    const formatTime = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

    const updateProgress = () => {
        let percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressFilled.style.width = progressThumb.style.left = `${percent}%`;
        currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
        totalTimeEl.textContent = formatTime(audioPlayer.duration);
    };

    audioPlayer.addEventListener('timeupdate', updateProgress);

    progressBar.addEventListener('click', (e) => {
        audioPlayer.currentTime = (e.offsetX / progressBar.offsetWidth) * audioPlayer.duration;
    });

    audioPlayer.addEventListener('ended', () => {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        updatePlayer(currentTrackIndex);
        playButton.innerHTML = '<img class="Play-Pause-Button no-select" src="./Assets/Images/Music Player/Pause-Button.png">';
    });

    updatePlayer(currentTrackIndex);
});