var React = require('react');
var Track = require('./track.solution.js');

var TrackResults = React.createClass({
  propTypes: {
    tracks: React.PropTypes.array.isRequired,
    onTrackSelected: React.PropTypes.func
  },

  getInitialState: function() {
    return {
      selectedTrack: null
    };
  },

  handleTrackSelection: function(track) {
    if( this.props.onTrackSelected ) {
      this.props.onTrackSelected(track);
    }

    this.setState({
      selectedTrack: track
    });
  },

  render: function() {
    var THIS = this;
    var trackComponents = _.map(this.props.tracks, function(track, i){
      return (
        <div key={i} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <div className="clickable" onClick={ THIS.handleTrackSelection.bind(THIS, track) }>
            <Track track={track} />
          </div>
        </div>
      );
    });

    return (
      <div className="row">
        { trackComponents }
      </div>
    );
  }
});

module.exports = TrackResults;
