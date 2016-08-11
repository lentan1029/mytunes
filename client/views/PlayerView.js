// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({ //    this.playerView = new PlayerView({model: this.model.get('currentSong')});

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    // console.log(this.el.trigger);
    var context = this; //TODO: the .on method here is from jquery, and does not implement backbone's this binding
    // console.log(this.$el.on); //jquery .on
    // console.log(this.on); //backbone .on
    this.$el.on('ended', function() {
      context.model.ended();
    });
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
