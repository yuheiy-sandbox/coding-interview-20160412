(function () {
  'use strict';

  var ModalMovie = function (el) {
    this.el = el;
    this.youtubeId = this.el.dataset.movie;
    this.isOpen = false;

    this.el.addEventListener('click', this.onClick.bind(this));
  };

  ModalMovie.prototype.lock = function () {
    this.isOpen = true;
  };

  ModalMovie.prototype.unlock = function () {
    this.isOpen = false;
  };

  ModalMovie.prototype.onClick = function (evt) {
    evt.preventDefault();
    this.open();
  };

  ModalMovie.prototype.initPlayer = function () {
    var player = new YT.Player('player', {
      videoId: this.youtubeId,
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1,
        rel: 0
      }
    });
  };

  ModalMovie.prototype.createElements = function () {
    var root = document.createElement('div');
    root.id = 'modal';

    var bg = document.createElement('div');
    bg.classList.add('modal-bg');
    root.appendChild(bg);

    var close = document.createElement('div');
    close.classList.add('modal-close');
    close.addEventListener('click', this.close.bind(this));
    root.appendChild(close);

    var player = document.createElement('div');
    player.id = 'player';
    player.classList.add('modal-player');
    root.appendChild(player);

    document.body.appendChild(root);
  };

  ModalMovie.prototype.removeElements = function () {
    var modal = document.getElementById('modal');
    modal.parentNode.removeChild(modal);
  };

  ModalMovie.prototype.freeze = function () {
    document.body.style.overflow = 'hidden';
  };

  ModalMovie.prototype.unfreeze = function () {
    document.body.style.overflow = '';
  };

  ModalMovie.prototype.open = function () {
    if (this.isOpen) {
      return;
    }

    this.freeze();
    this.createElements();
    this.initPlayer();
    this.lock();
  };

  ModalMovie.prototype.close = function () {
    if (!this.isOpen) {
      return;
    }

    this.unfreeze();
    this.removeElements();
    this.unlock();
  };

  var init = function () {
    var movies = document.querySelectorAll('[data-movie]');

    Array.from(movies).forEach(function (el) {
      var modal = new ModalMovie(el);
    });
  };

  init();
})();
