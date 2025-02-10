function loadGame(game) {
    // Hide the home page and show the game container
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';

    // Load the selected game into the iframe
    const gameFrame = document.getElementById('game-frame');
    gameFrame.src = `games/${game}/index.html`;
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

function goHome() {
    // Hide the game container and show the home page
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('home-page').style.display = 'block';
    
    // Stop the game by resetting the iframe src
    document.getElementById('game-frame').src = '';
}
