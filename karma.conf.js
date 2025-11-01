// Karma configuration
// Generated on Fri Oct 31 2025 17:59:15 GMT+0000 (Greenwich Mean Time)

module.exports = function(config) {
	config.set({
		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',

		// start these browsers
		// available browser launchers: https://www.npmjs.com/search?q=keywords:karma-launcher
		browsers: ['Chrome', 'Firefox'],

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// Concurrency level
		// how many browser instances should be started simultaneously
		concurrency: 1,

		// list of files / patterns to exclude
		exclude: [
		],

		// list of files / patterns to load in the browser
		files: [
			{
				included: false,
				pattern: 'test/resources/**/*',
				served: true,
			},
			'dist/index.min.js',
			'test/bench.js',
			'test/*.test.js'
		],

		// frameworks to use
		// available frameworks: https://www.npmjs.com/search?q=keywords:karma-adapter
		frameworks: ['jasmine'],

		// level of logging
		logLevel: config.LOG_INFO,

		// web server port
		port: 9876,

		// preprocess matching files before serving them to the browser
		// available preprocessors: https://www.npmjs.com/search?q=keywords:karma-preprocessor
		preprocessors: {
		},

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://www.npmjs.com/search?q=keywords:karma-reporter
		reporters: ['progress'],

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false
	});
};
