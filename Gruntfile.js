module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    express: {
        options: {
          // Override defaults here 
        },
        dev: {
          options: {
            script: 'server.js'
          }
        }
    },
    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'dist/js/app.js':['scripts/app.js','scripts/**/*.js']
        }
      }
    },
    copy: {
        main: {
            expand: true,
            src: 'views/*.html',
            dest: 'dist/',
          }
    },
    cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'dist/css/style.min.css': 'style/**/*.css'
        }
      }
    },
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "dist/less/style.css": "less/sample.less"
        }
      }
    },
    watch: {
      styles: {
        files: ['less/**/*.less'],
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    },
    open : {
        dev : {
          path: 'http://localhost:8080/',
          app: 'Google Chrome'
        },
    }
  });
  grunt.registerTask('default', ['copy','uglify','cssmin','express']);
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-open');
};