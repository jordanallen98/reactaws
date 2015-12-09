var React = require('react');
var ReactDOM = require('react-dom');
var JukeboxApp = require('./jukeboxApp.solution.js');
var SOUND_CLOUD_KEY = require('./config.js');

ReactDOM.render(
  <JukeboxApp soundCloudKey={ SOUND_CLOUD_KEY }/>,
  document.getElementById('app')
);
