// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  events: {},
  initialize: function() {
    this.on('add',function(){
      if(this.length === 1){
        this.playFirst();
      }
    },this);

    this.on('ended', function(){
      this.remove(this.first());
      if(this.length !== 0){
        this.playFirst();
      }
    }, this)

    this.on('dequeue',function(){
      this.remove(this.first());
    });
  },


  playFirst: function() {
    this.first().play();
  }
});