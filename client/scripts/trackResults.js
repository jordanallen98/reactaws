var React = require('react');
var Track = require('./track.js');

var TrackResults = React.createClass({

  getInitialState: function() {
    return {
      selectedTrack: null
    };
  },

  handleTrackSelection: function(track) {
    
  },

  render: function() {

    return (
      <div className="row"></div>
    );
  }
});

module.exports = TrackResults;
