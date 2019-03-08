# PerfBudgetWebpackPlugin
Webpack plugin to set budget on individual file

Installation
------------
Install the plugin with npm:
```shell
$ npm install @jabong/perf-budget-webpack-plugin --save-dev
```
 
Basic Usage
-----------

```javascript

const PerfBudgetWebpackPlugin = require('@js-factory/perf-budget-webpack-plugin');

const webpackConfig = {
  entry: 'index.js',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  plugins: [
    new PerfBudgetWebpackPlugin({
        bundle: {
          js: 10000,
          css: 1000
        }
    })
  ]
};
```

Need
-----------

Performance budget requires to set the budget on important files separately. Here, we can set that individually based on js as well as css.