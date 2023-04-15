# NPM library template project

## Setup Instructions
---
1. Update package.json package name, version, library description and keywords.
2. Write code in `src` folder.
3. Write test in `tests` folder.

## Publishing package
---
1. `npm run format`
2. `npm run lint`
3. `npm run build`
4. `npm run test`
5. Increment NPM package version number
6. `npm publish --dry-run`
7. `npm publish`

## Ideal setup for VSCode
---

### ESlint `dbaeumer.vscode-eslint`
TS/JS linter integration for VSCode. Only enable for the workspace.

### Prettier `esbenp.prettier-vscode`
Allow the VSCode formatter to use the prettier configuration. Only enable for the workspace

### Mocha Test Adapter `hbenl.vscode-mocha-test-adapter`
Allow tests to be run in the VSCode sidebar.

Options:
```
"mochaExplorer.nodeArgv": [
    "--loader=ts-node/esm",
    "--no-warnings=ExperimentalWarning",
    "--experimental-specifier-resolution=node"
]
```
### Code coverage `ryanluker.vscode-coverage-gutters`
Highlight code covered by test within VSCode with a live updates.

Options: 
```
"coverage-gutters.showLineCoverage": true,
"coverage-gutters.showRulerCoverage": true
```