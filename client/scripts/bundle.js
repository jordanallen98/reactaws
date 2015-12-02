(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var CommentBox = require('./test.js');

ReactDOM.render(
  React.createElement(CommentBox, null),
  document.getElementById('app')
);


// module.exports = app;

/* START SOLUTION */
// ReactDOM.render(
//   <CommentBox />,
//   document.getElementById('example')
// );
/* END SOLUTION */

},{"./test.js":3}],2:[function(require,module,exports){
// var SOUND_CLOUD_KEY =  START SOLUTION 'cffee0b747cf1194f77ce22f4bb28b2e'/* ELSE 'ENTER YOUR SOUND CLOUD KEY' END SOLUTION */;
var test = require('./test.js');
var app = require('./app.js');

},{"./app.js":1,"./test.js":3}],3:[function(require,module,exports){
var CommentBox = React.createClass({displayName: "CommentBox",
  render: function() {
    return (
      React.createElement("h1", null, "Hello, world!")
    );
  }
});

module.exports = CommentBox;

},{}]},{},[2]);
