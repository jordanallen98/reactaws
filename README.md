# Jukebox

> Learn how React works by implementing a Jukebox web application with it.

## Table of Contents

1. [Introduction](#introduction)
1. [Example gif](#example)
1. [Environment](#environment)
  1. [Requirements](#requirements)
  1. [Installing Dependencies](#installing-dependencies)
1. [Objectives](#objectives)
  1. [Basic Requirements](#basic-requirements)
  1. [Extra Credit](#extra-credit)
  1. [Nightare Mode](#nightmare-mode)
1. [Getting Help](#getting-help)
1. [Extra Resources](#extra-resources)
1. [Contributing](#contributing)

## Introduction

## What is ReactJS?
React is a Javascript Library for creating UI components made by Facebook. It is the 'View' in MVC. React allow you to create and render components and its claim to fame is an ultra performant virtual DOM that understands when the real DOM needs to be updated (and when it doesn't!).

## What
Other components used in the React sprint:

1) JSX (Javascript Syntax Extension) - An XML-like language that allows you to write code and then have it compiled to Javascript before loaded in the browser. In server.js, we use Reactify to compile our JSX code.

2) Browserify - A libray that uses the CommonJS method of requiring dependencies. It allows you to only require the dependencies needed for each file, rather than having all dependencies available globally.

3) Soundcloud Api - [docs here]: https://developers.soundcloud.com/docs/api/guide

### What are we doing?

Your mission is to create a Jukebox web application utilizing ReactJS components.
To get a solid understanding of what problems React solves (and does not solve),
you should avoid using Flux until you get to the extra credit section. You can
use any other utility libraries you'd like (i.e. lodash, bluebird).

CSS is your friend, or at least will become friendlier as you master it. Put
your skills to the test and focus on making the application beautiful AND
functional.

# Example
![alt text](https://github.com/IrvingAxelB/MKS26-jukebox/blob/solutionRefactor/example.gif)

### What's in the Repo already?

A web application that you will flesh out with React components
to create your very own Jukebox web application. Dependencies can be installed
via bower and npm.

## Environment

### Requirements

  - Node 0.10.x

### Installing Dependencies

```bash
npm install
npm start
```

### Running the Application

You should run `npm run dev`. This will run the `dev` script from `package.json`; it starts the application with nodemon, a program that automatically restarts the server anytime a server file is changed.

## Objectives

  1. Understand React's data flow (state and props) and View layer solution.
  1. Learn about React component's life cycles.
  1. Get a better CSS foundation

### Basic Requirements

We need an application that allows users to search for, queue up, and play music.

  - [ ] Sketch out what your application will look like; decide what should go in each component.
  - [ ] Utilize the Sound Cloud API for finding music.
  - [ ] Users should be able to select songs from the search results to add to their current playlist.
  - [ ] Add functionality to play the user's playlist.

### Extra Credit

  - [ ] Implement a full playback control panel (seek, next, previous, loop, etc...)
  - [ ] The application should autoplay the next song when the current song ends.
  - [ ] Refactor the code to ES6 for classes, import/exports, etc.
  - [ ] Refactor the code to use Flux Library for data flow

### Nightmare Mode:

  - [ ] Add CSS animations and transitions to UI components.
  - [ ] Add audio visualizations

## Getting Help

  - React Docs: https://facebook.github.io/react/docs/getting-started.html

## Extra Resources

  - Some Best Practices: http://blog.siftscience.com/blog/2015/best-practices-for-building-large-react-applications
  - React's Diffing: http://calendar.perfplanet.com/2013/diff/
  - React/Angular Performance: http://blog.500tech.com/is-reactjs-fast/
  - Discussion on React's License: https://news.ycombinator.com/item?id=8985541

## Contributing

This repository uses [semantic versioning][].
See CONTRIBUTING.md for contribution guidelines.

## License

Copyright 2014, Hack Reactor. All rights reserved. Unauthorized distribution of
any code contained herein is prohibited.

[node-inspector]: https://github.com/node-inspector/node-inspector
[semantic versioning]: http://semver.org/spec/v2.0.0.html
[CONTRIBUTING.md]: CONTRIBUTING.md
[bookstrap.makersquare.com]: Help Desk

