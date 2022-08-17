<div align="center">
  <h1 id="title">Blast</h1>

  <em>A next-generation digital audio sequencer.</em>

  <img src="https://img.shields.io/badge/node-16.17.0-brightgreen?style=flat-square&logo=nodedotjs">
  <img src="https://img.shields.io/badge/JavaScript-ES2015-yellow?style=flat-square&logo=javascript">
</div>

## Table of Contents
- [About](#about)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Pre-requisites](#pre-requisites)
  - [Installation](#installation)
- [Development](#development)
  - [Workflow](#workflow)

# About

**Blast** is a modern digital audio sequencer. **Blast** began as our final-year varsity project, to provide a platform that brings all forms of digital audio to the curious listener. **Blast** aims to become a personalized digital audio streaming platform, tailored towards a niche of audio consumers who prefer a more customized audio streaming environment.

# Features

**Blast** currently supports the features...

- Creating a playlist,
- and more...

<p align="right">(<a href="readme-top">back to top</a>)</p>

# Getting Started

If you would like to contribute towards the project, here are some basic guidelines to get you started...

## Pre-requisites

**Node**

Consult the [official website](https://nodejs.org), for details on setting it up for your OS or distribution.

Ensure that your install version `16.17.0` at the very least! This version with `npm` already.

**NPM**

All versions of `node` above version `16.17.0`, include `npm` in their package.

**MongoDB (Community)**

Consult the [official website](https://www.mongodb.com/try/download/community), for details on setting it up for your OS or distribution.

Ensure that your installed version is `6.0.0` at the very least!

## Installation

To setup your development environment...

1. Clone this repository.

```
git clone --depth 1 https://github.com/vctrblck/blast
```

2. Navigate to the directory.

```
cd blast
```

3. Initialize the project dependencies.

```
npm install
```

4. Ensure that everything is running.

```
npm run develop
```

This should:

1. Launch the front-end of the project to your default browser.
2. Initiate a local server on port `8080`, that connects to an active mongodb service/instance.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# Development

Contributing towards this project occurs in many ways. Continue below for a few common ways.

>**NOTE**
>
> All development is to be branched from the `develop` branch. Details follow...

## Workflow

Any change to the codebase is implemented through this workflow...

1. Ensure that you are on the `develop` branch.
2. Create a new branch.

```
git branch <branch-name>
```

For the branch name, use a name that identifies with the fix.

2. Switch to the new branch

```
git checkout <branch-name>
```

2. Work on changes.
3. Commit changes.
4. Switch to `develop` branch.
5. Merge the new branch with the `develop` branch.
6. Push changes to GitHub.

```
git push origin main
```

7. Launch your web browser and navigate to the project, in your repository.
8. Create a pull request, on GitHub (make sure to describe the changes briefly in the pull request).

<p align="right">(<a href="#readme-top">back to top</a>)</p>
