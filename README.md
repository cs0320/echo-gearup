# Mock gearup materials

## Project code

The `mock` folder was created using Vite app setup. It contains the app itself. The `src` directory contains the main code for the project. The `public` directory might be where you would put images if you needed to use any.

## Playwright tests

The `testing` folder was created via `npm init playwright@latest`. It contains our Playwright example tests. We did not install a GH actions script; otherwise we used the defaults. 

You can see the Playwright configuration in `playwright.config.ts`. This shouldn't be modified much; it's the default except that we:
* modified the `webServer` parameter to start the gearup project so that Playwright can interact with it. Notice that when your tests run, the configuration will actually run them on multiple browsers: Chrome, Firefox, and Safari. If you need to speed up your tests during development, you can comment some of these out.

## How to setup and run
Once cloned:

### Setup Mock from root directory
`cd mock` — Change into the `mock` directory

`npm install` — Installs node_modules folder for dependencies

### Running Mock
`npm run start` — This starts a local server that compiles your code in real time.

### Setup and run Playwright from root directory
`cd testing` — Change into the `testing` directory

`npm install` — Installs node_modules folder for dependencies

`npx install playwright` — Installs everything needed to run PlayWright

### Running tests witih Playwright
`npx playwright test` — Runs tests

`npx playwright show-report` — Shows a code breakdown of test progressions

`npx playwright test --ui`— Opens a UI that allows you to watch and trace your (failing) tests live in a browser

`npx playwright codegen <url>` — Opens a URL and generates tests with locators for elements on the page. 

-> NOTE: You still have to document your tests and add assertions. 

-> NOTE: If you are using your local server, you must start it before you try to use the codegen command.


TODO
## mock-vanilla Directory
This is a very simple HTML and CSS file. It is provided as a reference for basic HTML style and code convention. In Mock, you will be building a React application, so it may not look *exactly* the same, but the general conventions are similar.

For the Gear Up, you do not need to worry about this directory.

# fill todos which is to make you push history of the commands

## DISCLAIMER
there is no one right way to build this project, we offer you stencil for a possible start, but feel free to redesign should you choose