/* eslint-disable n/no-unpublished-import */
import { merge } from 'webpack-merge';
import common from './webpack.common.js';

export default merge(common, {
    mode: 'production'
});
