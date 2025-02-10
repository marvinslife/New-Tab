function loadGame(game) {
    document.getElementById('game-frame').src = `games/${game}/index.html`;
    document.getElementById('game-container').style.display = 'block';
}

function toggleFullscreen() {
    let iframe = document.getElementById('game-frame');
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
    }
}
