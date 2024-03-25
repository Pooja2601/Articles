## Available Scripts

In the project directory, you can run:

## `npm start`

## `npm test`

## `npm test:ci` // To check test case coverage report. ex: index.html file is created inside folder `coverage/src/     containers/index.html`

### `npx cypress open` // To run cypress e2e Test

Runs the app in the development mode usine `npm start` command.

Container / Presentational Component ( Stateful/ StateLess Component)
src -> containers -> Articles // Articles contains list of articles which is an Container Component which includes business logic

src --> components --> ArticleList // Article list represents Presentational Component, can be reused.

src --> utils --> hooks // Custom Hook

## Test Case

1. Unit Test cases are implemented using react-testing-library and jest for containers. Please run command `npm test` to view test results and `npm test:ci` to view coverage report.
2. Automation Testing is implemented using cypress, run `npx cypress open` command to view in test runner.
