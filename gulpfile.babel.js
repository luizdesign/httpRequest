'use strict';

import gulp from 'gulp';
import babelCompiler from './tasks/compilers/babel.js';

const BABEL_CONFIG = {
    'plugins': ['transform-class-properties'],
    'presets': ['es2015']
}
const DIST_FOLDER = './dist';

gulp.task(
    'babel-compile',
    () => {
        let blob = gulp.src('./httpRequest.js');

        babelCompiler(
            blob,
            BABEL_CONFIG,
            DIST_FOLDER
        );
    }
);
