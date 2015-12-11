var React = require('react');
var SearchSoundCloud = require('./searchSoundCloud.js');

// TODO: Handle async stream loading vs play/pause/stop state
// TODO: Implement the state pattern
var JukeboxApp = React.createClass({
  propTypes: {
    soundCloudKey: React.PropTypes.string.isRequired
  },

  getInitialState: function() {
    // TODO: Inject dependencies, don't rely on globals
    SC.initialize({
      client_id: this.props.soundCloudKey
    });

    return {
      queriedTracks: [],
      playlist: [],
      currentTrack: {
        position: -1,
        stream: null,
        timer: null
      },
      isJukeboxPlaying: false
    };
  },

  addToPlaylist: function(track) {
    
  },

  removeFromPlaylist: function(track) {
  
  },

  findTrackInPlaylist: function(track) {
  
  },

  getCurrentTrack: function() {
  
  },

  pausePlaying: function() {
  
  },

  resumePlaying: function() {
  
  },

  stopPlaying: function() {
  
  },

  handleSearchResults: function(results) {
  
  },

  playTrack: function(track) {
  
  },

  render: function() {
  
    return (
      <section className="has-footer">
        <header>
          <div className="container text-center">
            <h1>Jukebox</h1>
          </div>
        </header>

        <article>
          <div className="container text-center">
            <h7>AudioVisualizer</h7>

            <SearchSoundCloud onSearchResults={ this.handleSearchResults } />  
          </div>
        </article>

        <footer className="fixed-footer">

        </footer>
      </section>
    );
  }
});


module.exports = JukeboxApp;
