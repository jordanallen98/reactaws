var React = require('react');
var Track = require('./track.js');

var Playlist = React.createClass({
  propTypes: {
    tracks: React.PropTypes.array.isRequired,
    currentTrack: React.PropTypes.any,
    onTrackSelected: React.PropTypes.func
  },

  playTrack: function(track) {
    if( this.props.onTrackSelected ) {
      this.props.onTrackSelected(track);
    }
  },

  render: function() {
    var trackClasses;
    var THIS = this;

    var trackComponents = _.map(this.props.tracks, function(track, i) {
      trackClasses = ['clickable'];
      if (THIS.props.currentTrack && THIS.props.currentTrack.id === track.id ) {
        trackClasses.push('selected');
      }

      return (
        <div className={ trackClasses.join(' ') } key={ track.id } onClick={ THIS.playTrack.bind(THIS, track)}>
          <Track track={ track } />
        </div>
      )
    });

    return (
      <div className="playlist">
        { trackComponents }
      </div>
    );
  }
});

module.exports = Playlist;
