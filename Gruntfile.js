module.exports = function(grunt) {
	grunt.initConfig({
		iife: {
			dist: {
				files: {
					'dist/index.min.js': 'dist/index.min.js'
				},
				options: {
					indent: '    ',
					trimCode: true,
					useStrict: true
				}
			}
		},
		jshint: {
			files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
			options: {
				jshintrc: true,
			},
		},
		karma: {
			unit: {
				background: false,
				configFile: 'karma.conf.js',
				singleRun: true,
			},
		},
		pkg: grunt.file.readJSON('package.json'),
		transform_amd: {
			src: {
				options: {
					cwd: 'src',
					dest: 'dist',
					root: 'dominlinestylefilter',
					src: ['**/?.js']
				}
			},
		},
		uglify: {
			dist: {
				files: {
					'dist/index.min.js': ['src/index.js'],
				},
			},
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
				sourceMap: true,
			},
		},
		watch: {
			files: ['<%= jshint.files %>'],
			tasks: ['test'],
		},
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-transform-amd');
	grunt.loadNpmTasks('grunt-iife');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('test', ['karma']);
	grunt.registerTask('build', ['jshint', 'transform_amd', 'uglify', 'iife']);
	grunt.registerTask('default', ['build', 'test']);
};
