(function () {
  'use strict';

  var adjustPlayerSize = function (containerStyle) {
    var baseWidth = window.innerWidth
    var baseHeight = window.innerHeight;

    containerStyle.width = Math.max(baseWidth, baseHeight * 16 / 9) + 'px';
    containerStyle.height = Math.max(baseHeight, baseWidth * 16 / 9) + 'px';
  };

  var onPlayerReady = function () {
    adjustPlayerSize = adjustPlayerSize.bind(
      null,
      document.querySelector('.bg-player').style
    );

    adjustPlayerSize();

    window.addEventListener('resize', adjustPlayerSize);
  };

  window.onYouTubeIframeAPIReady = function () {
    var player = new YT.Player('bg-player', {
      videoId: 'M7lc1UVf-VE',
      events: {
        onReady: onPlayerReady
      },
      playerVars: {
        autoplay: 1,
        controls: 0,
        loop: 1,
        showinfo: 0,
        disablekb: 1
      }
    });
  };
})();
