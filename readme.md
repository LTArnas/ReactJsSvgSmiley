# Boilerplate Project for ReactJS

> Currently, only development scenario is set up.
I.e. Building for production and such is not set up.

Essentially a bundle of files that are common to ReactJS projects, so you don't have to recreate them for every new project.

This project probably would be better served as a fork, or guide, to make your own boilerplate.

## Setup Walkthrough

- Create a directory for your new project.
    - `mkdir newProject`
    - `cd newProject`
- Initialize a local Git repository.
    - `git init`
- Pull the boilerplate stuff.
    - `git pull https://github.com/LTArnas/ReactjsBoilerplate.git`
- Initialize NPM.
    - `npm init`

    > [It will pick up the package.json from the boilerplate. A strictly additive operation.](https://docs.npmjs.com/cli/init#description)
- Get the dependencies.
    - `npm update`

    > Of course, feel free to add more dependencies to `package.json` before you perform the `update` operation. Or, use `npm install` afterwards.
- Get typings.
    - `typings install`

    > Afterwards, you can install more, of course.
- You're basically ready, minus any further per-project stuff. :)

## Boilerplate Overview

So you better know what's going on/what you're getting...

- [NPM](https://www.npmjs.com/) is used to manage external tools/packages/dependencies, like everywhere else.

    > I don't currently use [Browserify](http://browserify.org/) to seperate the management of app dependencies vs environment/tool dependencies. ...I think some people like to do that...? But I try to minimize the amount of tools and such if I can.
- [Gulp](http://gulpjs.com/) is the automation/build workhorse.
- [Babel](https://babeljs.io/) is used as a transpiler.
    - [ES2015 preset](https://babeljs.io/docs/plugins/preset-es2015/) so we can use the new JavaScript standard.
    - [React preset](https://babeljs.io/docs/plugins/preset-react/) for JSX/React.
- [Webpack](https://webpack.github.io/) is used for bundling, transpiling (via Babel), and dev tools (local server, live editing).
    > Even though Webpack is meant to be a bundler. It does more than that and we use it, as is common when developing with ReactJS.

    - [HTML Plugin](https://www.npmjs.com/package/html-webpack-plugin) is used to **generate** an `index.html` file, so we can inject things, etc.
    - [Handlebars](https://www.npmjs.com/package/handlebars) used to define the generated `index.html` via template.
    - [Dev Server](https://webpack.github.io/docs/webpack-dev-server.html) used for... what you typical use such things for; testing.
        > Go to `localhost:8080` while running the server task. **Remember it doesn't rebuild to disk, it's from memory.**

        > [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement.html) is set up.
- [Typings](https://github.com/typings/typings) is used like NPM, but for TypeScript Definition files (`.d.ts`).

    > Actually this is so I get intellisense for external JavaScript.
    E.g. React and ReactDOM.
    It might be too specific use case, but... I need it, and the whole point of this is to make my life easier. Sorry. :)

### Directory Structure

This is probably pretty obvious, and easily changed.

- `src` holds all of the app's source code.
- `build` holds the built files.

## Using [Visual Studio Code](https://code.visualstudio.com/)

I use VSCode, it's kinda great. Extra info for other users of VSCode is in this section.

Because Typings is part of the boilerplate, you are mainly all set.

The only thing to note is, don't forget to initialize your setup as a [JS project](https://code.visualstudio.com/docs/languages/javascript). (The `jsconfig.json` file.)