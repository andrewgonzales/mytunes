// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  events: {},
  initialize: function() {
    this.on('add',function(){
      if(this.length === 1){ 
      }
    },this);

    this.on('ended', function(){
      this.trigger('dequeue', this);
    }, this);

    this.on('dequeue',function(){
      this.remove(this.first());
      if(this.length !== 0){
        this.playFirst();
      }
    }, this);

  },


  playFirst: function() {
    this.first().play();
  }
});