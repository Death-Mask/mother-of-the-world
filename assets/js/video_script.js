document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('myVideo');
    var playPauseButton = document.getElementById('playPauseButton');

    playPauseButton.addEventListener('click', function() {
      if (video.paused) {
        video.play();
        video.addEventListener('play', function() {
          playPauseButton.style.display = 'none';
        });
      }
      else {
        video.pause();
      }
    });
    video.addEventListener('pause', function() {
      playPauseButton.style.display = 'block';
    });
    video.addEventListener('ended', function() {
      playPauseButton.style.display = 'block';
    });
  });