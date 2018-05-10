class Helper {
  playPauseAndUpdate(song) {
    player.playPause(song);
    setTimeout(function afterHalfSecond() {
    const totalTime = player.getDuration();
      console.log(totalTime);
    $('.total-time').text(player.prettyTime(totalTime));
  }, 500);
  }
}

const helper = new Helper();
