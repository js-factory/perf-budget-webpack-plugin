const getExtension = require('./utils/getExtension');

/**
 * Performance Budget Webpack Plugin
 */
class PerfBudgetWebpackPlugin {
    /**
     * This is the constructor which is used to associate
     * the options.
     * @param {*} options - Plugin Options [See README.md for more details]
     */
    constructor(options) {
        this.options = options || {};
    }


    /**
     * @description
     * This function is used to compare the budget and size of the files.
     * @param {*} compiler - Compiler Instance
     *  Object represents the fully configured Webpack environment
     * @param {*} compilation - Compilation instance
     *  Object represents a single build of versioned assets
     */
    budgeting(compiler, compilation) {
        compilation.chunks.forEach(({ id, files }) => {
            const { options: { [id]: budget} } = this;
            if (!budget) return;
            files.forEach((fileName) => {
                const {[getExtension(fileName)]: size} = budget;
                if (size) {
                    const fileSize = compilation.assets[fileName].size();
                    if (fileSize > size) {
                        compilation.errors.push(
                            new Error(`PerfBudgetWebpackPlugin:
                                ${id} - ${fileName} - File Size (${fileSize}) exceeds then expected ${size}
                            `)
                        )
                    }
                }
            });
        });
    }

    /**
     * @description
     * Plugins are instanceable objects with an apply method on their prototype.
     * This apply method is called once by the Webpack compiler while installing the plugin.
     * The apply method is given a reference to the underlying Webpack compiler,
     * which grants access to compiler callbacks. 
     * @param {*} compiler - Webpack compiler instance
     */
    apply(compiler) {
        compiler.hooks.emit.tap({
            name: 'PerfBudgetWebpackPlugin',
            stage: Infinity
        }, this.budgeting.bind(this, compiler));
    }
}

module.exports = PerfBudgetWebpackPlugin;
