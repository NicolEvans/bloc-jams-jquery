class Helper {
  playPauseAndUpdate (song) {
    player.playPause(song);
    const totalTime = player.getDuration();
    $('.total-time').text(player.prettyTime(totalTime));
  }
}

const helper = new Helper();
