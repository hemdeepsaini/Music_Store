var AlbumsListPage = {
  init: function () {
    this.$container = $(".albums-container");
    this.render();
    this.bindEvents();
  },

  render: function () {},

  bindEvents: function () {
    $(".btn-favorite", this.$container).on("click", function (e) {
      e.preventDefault();

      var self = $(this);
      var url = $(this).attr("href");
      $.getJSON(url, function (result) {
        if (result.success) {
          $(".glyphicon-star", self).toggleClass("active");
        }
      });

      return false;
    });
  },

  // playSong: function () {
  //   $(".song-source", this.$container).on("click", function (e) {
  //     e.preventDefault();

  //     var self = $(this);
  //     var url = self.attr("href");
  //     console.log(url);
  //     $("#audss").attr("src", url);

  //     var audio = $("#aud");

  //     audio[0].pause();
  //     audio[0].load(); //suspends and restores all audio element

  //     // if (isAutoplay)
  //     audio[0].play();

  //     return false;
  //   });
  // },
};

var SongsListPage = {
  init: function () {
    this.$container = $(".songs-container");
    this.render();
    this.bindEvents();
    this.playSong();
  },

  render: function () {},

  bindEvents: function () {
    $(".btn-favorite", this.$container).on("click", function (e) {
      e.preventDefault();

      var self = $(this);
      var url = $(this).attr("href");
      console.log(url);
      $.getJSON(url, function (result) {
        if (result.success) {
          $(".glyphicon-star", self).toggleClass("active");
        }
      });

      return false;
    });
  },

  playSong: function () {
    $(".song-source", this.$container).on("click", function (e) {
      e.preventDefault();

      var self = $(this);
      var url = self.attr("href");
      console.log(url);
      $("#audss").attr("src", url);

      var audio = $("#aud");

      audio[0].pause();
      audio[0].load(); //suspends and restores all audio element

      // if (isAutoplay)
      audio[0].play();

      return false;
    });
  },
};

$(document).ready(function () {
  AlbumsListPage.init();
  SongsListPage.init();
});
