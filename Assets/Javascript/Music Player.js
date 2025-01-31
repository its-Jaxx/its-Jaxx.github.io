let playButton = document.getElementById('play-pause-song');
let audioPlayer = document.getElementById('audio-player');
let prevButton = document.getElementById('previous-song');
let nextButton = document.getElementById('next-song');
let playPauseIcon = document.getElementById('play-pause');

let tracks = [];
let currentTrackIndex = 0;

let volumeBtn = document.getElementById('volume-btn');
let volumeIcon = document.getElementById('volume-icon');

volumeBtn.addEventListener('click', () => {
    if (audioPlayer.muted) {
        audioPlayer.muted = false;
        audioPlayer.volume = 1;
        volumeIcon.src = './Assets/Images/Music Player/Volume On.png';
        localStorage.setItem('isMuted', 'false');
    } else {
        audioPlayer.muted = true;
        audioPlayer.volume = 0;
        volumeIcon.src = './Assets/Images/Music Player/Volume Off.png';
        localStorage.setItem('isMuted', 'true');
    }
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

fetch('./Assets/Javascript/Tracks.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        tracks = shuffleArray(data);
        updatePlayer(currentTrackIndex);
    })
    .catch(error => console.error('Error fetching Tracks.json:', error));

function updatePlayer(trackIndex) {
    if (tracks.length === 0) {
        return;
    }

    let track = tracks[trackIndex];

    let trackHtml = track.info.map(info =>
        `<a href="${info.link}" target="_blank" class="song-title no-select">${info.title}</a>`
    ).join(', ');

    let artistsHtml = track.artists.map(artist =>
        `<a href="${artist.link}" target="_blank" class="artist-link no-select">${artist.name}</a>`
    ).join(', ');

    if (track.tag) {
        artistsHtml = `<span class="tag">${track.tag}</span>` + artistsHtml;
    }

    document.getElementById('song-title').innerHTML = trackHtml;
    document.getElementById('song-artist').innerHTML = artistsHtml;
    document.getElementById('album-image').src = track.cover;
    document.getElementById('audio-source').src = track.file;
    audioPlayer.volume = track.volume / 100;
    volumeIcon.src = './Assets/Images/Music Player/Volume On.png';
    audioPlayer.load();

}

playButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.innerHTML = '<img class="Play-Pause-Button no-select" src="./Assets/Images/Music Player/Pause-Button.png">';
        localStorage.setItem('isPaused', 'false');
    } else {
        audioPlayer.pause();
        playButton.innerHTML = '<img class="Play-Pause-Button no-select" src="./Assets/Images/Music Player/Play-Button.png">';
        localStorage.setItem('isPaused', 'true');
    }
});

nextButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    updatePlayer(currentTrackIndex);
    playButton.innerHTML = '<img class="Play-Pause-Button no-select" src="./Assets/Images/Music Player/Pause-Button.png">';
});

prevButton.addEventListener('click', () => {
    if (audioPlayer.currentTime > 5) {
        audioPlayer.currentTime = 0;
    } else {
        currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        updatePlayer(currentTrackIndex);
        playButton.innerHTML = '<img class="Play-Pause-Button no-select" src="./Assets/Images/Music Player/Pause-Button.png">';
    }
})