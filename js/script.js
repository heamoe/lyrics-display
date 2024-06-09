const playButton = document.getElementById('play-button');
const record = document.getElementById('record');
const audio = document.getElementById('audio');
let isPlaying = false;

playButton.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        record.style.animation = 'none';
        playButton.textContent = 'Play';
    } else {
        audio.play();
        record.style.animation = 'spin 2s linear infinite';
        playButton.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
});

record.addEventListener('animationend', () => {
    if (!isPlaying) {
        record.style.animation = 'none';
    }
});
