# Mock/Echo gearup materials

## Project code

The `mock` folder was created using our React app setup. It contains the app itself. 

## Playwright tests

The `testing` folder was created via `npm init playwright@latest`. It contains our Playwright example tests. We did not install a GH actions script; otherwise we used the defaults. 

You can see the Playwright configuration in `playwright.config.ts`. This shouldn't be modified much; it's the default except that we:
* modified the `webServer` parameter to start the gearup project so that Playwright can interact with it. Notice that when your tests run, the configuration will actually run them on multiple browsers: Chrome, Firefox, and Safari. If you need to speed up your tests during development, you can comment some of these out.

### How to run?

Run tests with `npx playwright test`. 

To enable tracing, run `npx playwright test --trace on`. If tracing is on, you'll be given the option to watch and interact with a trace of your (failing) test(s). 
