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
};

var SongsListPage = {
  init: function () {
    this.$container = $(".songs-container");
    this.render();
    this.bindEvents();
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
};

var Player = {
  init: function () {
    this.$container = $("#aud");
    this.render();
    this.bindEvents();
  },

  render: function () {},

  bindEvents: function () {
    $(".xxx").on("click", function (e) {
      e.preventDefault();

      var self = $(this);
      var src = $(".xxx").attr("src");
      console.log(src);
      $("#audss").attr("src", src);

      var audio = $("#aud");

      audio[0].pause();
      audio[0].load(); //suspends and restores all audio element

      // if (isAutoplay)
      audio[0].play();
    });
  },
};

$(document).ready(function () {
  AlbumsListPage.init();
  SongsListPage.init();
  Player.init();
});

// function Play(srcc) {
//   //   document.getElementById("audss").src = srcc;
//   console.log(srcc);
// }
