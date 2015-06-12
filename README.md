# Jukebox

> Learn how React works by implementing a Jukebox web application with it.

## Table of Contents

1. [Introduction](#introduction)
1. [Environment](#environment)
  1. [Requirements](#requirements)
  1. [Installing Dependencies](#installing-dependencies)
1. [Objectives](#objectives)
  1. [Basic Requirements](#basic-requirements)
  1. [Extra Credit](#extra-credit)
1. [Getting Help](#getting-help)
1. [Contributing](#contributing)

## Introduction

## What is ReactJS?

> ReactJS is not a full stack MVC solution and it doesn't claim to be. React is the V in MVC, which means as a developer
you are in charge of finding and/or implementing your own M and C. React's claim to fame is an ultra performant virtual
DOM that understands when the real DOM needs to be updated (and when it doesn't!).

### What are we doing?

Your mission is to create a Jukebox web application utilizing ReactJS components.
To get a solid understanding of what problems React solves (and does not solve),
you should avoid using Flux until you get to the extra credit section. You can
use any other utility libraries you'd like (i.e. lodash, bluebird).

Evaluate the web application as a whole, and then break it down into smaller 
components. Then break those components down, again and again until you feel
you've created a solid View Component that doesn't try to "do to many things"
but is also not completely useless.

CSS is your friend, or at least will become friendlier as you master it. Put
your skills to the test and focus on making the application beautiful AND 
functional.

### What's in the Repo already?

A bare-bones web application that you will flesh out with React components
to create your very own Jukebox web application. Dependencies can be installed
via bower and area already linked from the index.html.

## Environment

### Requirements

  - Node 0.10.x
  - Bower

### Installing Dependencies

```bash
bower install
```

## Objectives
  1. Understand React's data flow and View layer solution.
  1. Learn about React component's life cycles.
  1. Get a better CSS foundation

### Basic Requirments
  - [ ] Create a React component that can search through Sound Cloud tracks
  - [ ] Create a React component that can display a bunch of Tracks
  - [ ] Create a playlist React component
  - [ ] Allow the user to add tracks from search to their playlist
  - [ ] Allow the user to play songs on their playlist

### Extra Credit
  - [ ] Implement a full playback control panel (seek, next, previous, loop, etc...)

### Nightmare Mode:
  - [ ] Add CSS animations and transitions to UI components.
  - [ ] Add audio visualization effects as a React component.

## Getting Help
  - **Halp** at [bookstrap.hackreactor.com/help]

## Contributing
This repository uses [semantic versioning][].
See CONTRIBUTING.md for contribution guidelines.

## License
Copyright 2014, Hack Reactor. All rights reserved. Unauthorized distribution of
any code contained herein is prohibited.

[node-inspector]: https://github.com/node-inspector/node-inspector
[semantic versioning]: http://semver.org/spec/v2.0.0.html
[CONTRIBUTING.md]: CONTRIBUTING.md
[remote-bookstrap.hackreactor.com/help]: http://remote-bookstrap.hackreactor.com/help

