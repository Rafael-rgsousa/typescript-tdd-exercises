// Generated on 2014-04-14 using generator-angular 0.8.0
'use strict';

module.exports = function (grunt) {
    // Load grunt tasks automatically
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-istanbul');
    grunt.loadNpmTasks('grunt-istanbul-coverage');

    require('load-grunt-config')(grunt, {
        jitGrunt: {

        }
    });
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    grunt.registerTask('buildCoverage',
        [
            'clean:coverage',
            'instrument',
            'concat:coverage',
            'mochaTest:coverage',
            'storeCoverage',
            'makeReport'
        ]);

    grunt.registerTask('test', [
        'clean:default',
        'ts:default',
        'concat:test',
        'mochaTest',
        'buildCoverage',
        'coverage'
    ]);

    grunt.registerTask('install', [
        'npm-install'
    ]);

    grunt.registerTask('default', [
        'clean:default',
        'ts:default',
        'watch'
    ]);
};