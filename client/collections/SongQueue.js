// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({
  initialize: function() {
    this.on('add', function(song) { //add is being called by AppModel
      if (this.models.length === 1) {
        this.playFirst(song);
      }
    });
    this.on('ended', function() {
      this.remove(this.at(0));
      if (this.models.length > 0) {
        this.playFirst();
      }
    });
    this.on('dequeue', function(song) {
      this.remove(song);
    });
  },
  model: SongModel,
  playFirst: function() {
    this.at(0).play();
  },

});