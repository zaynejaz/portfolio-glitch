// toggle play / pause music on click
var track = document.getElementById('track');
var controlBtn = document.getElementById('play-pause');
    
function playPause() {
    if (track.paused) {
        track.play();
        // controlBtn.textContent = "Pause";
        controlBtn.className = "pause";
    } else { 
        track.pause();
        // controlBtn.textContent = "Play";
        controlBtn.className = "play";
    }
}
    
controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function() {
controlBtn.className = "play";
});

// ==============================================================
// toggle play / pause button icon on click
var playPauseMusic = ["playMusic", "pauseMusic"];
var musicStateIcon = null;

function playpauseVisibility(musicState) {
    if(musicStateIcon === musicState) {
        musicStateIcon = null;
    } else {
        musicStateIcon = musicState;
    }
    hidePlayPauseIcon();
}

function hidePlayPauseIcon() {
    var i, musicState, playPauseIcon;
    for(i = 0; i < playPauseMusic.length; i++) {
        musicState = playPauseMusic[i];
        playPauseIcon = document.getElementById(musicState);
        if(musicStateIcon === musicState) {
            playPauseIcon.style.display = "block";
        } else {
            playPauseIcon.style.display = "none";
        }
    }
}