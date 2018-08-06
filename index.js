/**
 * @license The MIT License (MIT)
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 */

'use strict';

// public
module.exports = {
    // base rules
    extends: require.resolve('cjs-eslint'),

    env: {
        node: true,
        browser: true
    },

    globals: {
        debug: false
    },

    // override any settings from the "parent" configuration
    rules: {
        'no-path-concat': 'off'
    }
};
