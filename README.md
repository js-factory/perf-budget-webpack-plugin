# Performance Budget Webpack Plugin

Webpack plugin to set budget on individual bundle file.

## Installation

Install the plugin with npm:

```shell
$ npm install --save-dev @js-factory/perf-budget-webpack-plugin
```

## Basic Usage

```javascript
const PerfBudgetWebpackPlugin = require("@js-factory/perf-budget-webpack-plugin");

const webpackConfig = {
    entry: "index.js",
    output: {
        path: "dist",
        filename: "bundle.js"
    },
    plugins: [
        new PerfBudgetWebpackPlugin({
            main: { // Chunk Name
                js: 20000,
                css: 1000 // CSS Extracted using extract plugin for each chunk
            },
            dynamicImportChunkName1: {
                js: 10000 // Size in bytes
            },
            dynamicImportChunkName2: {
                js: 10000 // Size in bytes
            }
        })
    ]
};
```
## Example

<p align="center">
    <img alt="marvels" src="/error.png" height="144" width="250">
</p>

## Need

Performance budget requires to set the budget on important files separately.

Here, we can set that individually based on js as well as css.

## Author

[js-factory](https://github.com/js-factory)

## License

[MIT](LICENSE)
