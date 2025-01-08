# collinkleest.com

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/collinkleest/collinkleest.com/ci.yaml)
![Website](https://img.shields.io/website?url=https%3A%2F%2Fcollinkleest.app)
![GitHub Release](https://img.shields.io/github/v/release/collinkleest/collinkleest.com)

Personal Portfolio Website for Collin Kleest.

This portfolio site is built in [Next.js](https://nextjs.org/) and is generated into a static site via next.
This site is hosted on github pages and can be found at [collinkleest.com](https://collinkleest.com).

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Local Development](#local-development)
3. [Committing](#committing)
4. [Build](#build)
5. [Testing](#testing)
6. [Linting](#linting)
7. [Formatting](#formatting)

### Prerequisites

Make sure you have [nodejs](https://nodejs.org/) installed at least version (v18.17) for nextjs.\
Here is the downloads page for node [https://nodejs.org/en/download](https://nodejs.org/en/download)\
Once you have node installed you will need to install [pnpm](https://pnpm.io/) package manager, we use pnpm over npm in this project.\
You are free to use [npm](https://www.npmjs.com/) or [yarn](https://classic.yarnpkg.com) if you wish to do so but this project is setup for pnpm.\
You can install it with the following command

```bash
$ npm install -g pnpm
```

### Local Development

Install dependencies with your package manager, I am using pnpm as my package manager.

```bash
$ pnpm install
```

Running the app in development mode

```bash
$ pnpm dev
```

### Committing

This project follows conventional commits to keep a track record of commits and changes in a changelog.

If you aren't familiar with conventional commits that is fine because we have a cli tool that will help with this.

For more information check the conventional commits [specification](https://www.conventionalcommits.org/en/v1.0.0/)

```bash
$ pnpm commit
```

### Build

The app can be built with the following command

```bash
$ pnpm build
```

This will create a production build in static files out of the directory `out`.

### Linting

This project uses [eslint](https://eslint.org/) for linting.

You can run the following command to lint the project.

```bash
$ pnpm lint
```

### Formatting

This repo uses [prettier](https://prettier.io/) to do code formatting.

Prettier configuration can be found in `.prettierrc.json` at the root level of the project.

Code formatting will run as a husky pre-staging but you can run the formmatter with the following command

```bash
$ pnpm format
```

To check if files are up to the prettier standard run the following.

```bash
$ pnpm format:check
```

### Releasing

Releasing follows the semver practice.

If you want to release a new version run the following

```bash
$ pnpm release
```
