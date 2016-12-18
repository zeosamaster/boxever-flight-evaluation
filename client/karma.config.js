// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function (config) {
  config.set({
               // base path, that will be used to resolve files and exclude
               basePath: '',

               // testing framework to use (jasmine/mocha/qunit/...)
               frameworks: ['jasmine'],

               // list of files / patterns to load in the browser

               files: [
                 // bower:js
                 'www/bower_components/angular/angular.js',
                 'www/bower_components/angular-ui-router/release/angular-ui-router.js',
                 'www/bower_components/angular-resource/angular-resource.js',
                 'www/bower_components/angular-animate/angular-animate.js',
                 'www/bower_components/angular-aria/angular-aria.js',
                 'www/bower_components/angular-material/angular-material.js',
                 'www/bower_components/moment/moment.js',
                 'www/bower_components/angular-moment/angular-moment.js',
                 'www/bower_components/angular-messages/angular-messages.js',

                 // endbower
                 'www/app/main.module.js',
                 'www/app/main.config.js',
                 'www/app/main.routes.js',
                 'www/app/dashboard/select/select.module.js',
                 'www/app/dashboard/select/*.js',
                 'www/app/dashboard/search/search.module.js',
                 'www/app/dashboard/search/*.js',
                 'www/app/dashboard/details/details.module.js',
                 'www/app/dashboard/details/*.js',
                 'www/app/dashboard/confirm/confirm.module.js',
                 'www/app/dashboard/confirm/*.js',
                 'www/app/dashboard/dashboard.module.js',
                 'www/app/dashboard/*.js'
               ],

               preprocessors: {
                 '**/*.html': 'ng-html2js',
                 '{app,components}/**/*.js': 'babel'
               },

               ngHtml2JsPreprocessor: {
                 stripPrefix: ''
               },

               babelPreprocessor: {
                 options: {
                   sourceMap: 'inline',
                   optional: [
                     'es7.classProperties'
                   ]
                 },
                 filename: function (file) {
                   return file.originalPath.replace(/\.js$/, '.es5.js');
                 },
                 sourceFileName: function (file) {
                   return file.originalPath;
                 }
               },

               // list of files / patterns to exclude
               exclude: [],

               // web server port
               port: 8080,

               // level of logging
               // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
               logLevel: config.LOG_INFO,

               // reporter types:
               // - dots
               // - progress (default)
               // - spec (karma-spec-reporter)
               // - junit
               // - growl
               // - coverage
               reporters: ['spec'],

               // enable / disable watching file and executing tests whenever any file changes
               autoWatch: false,

               // Start these browsers, currently available:
               // - Chrome
               // - ChromeCanary
               // - Firefox
               // - Opera
               // - Safari (only Mac)
               // - PhantomJS
               // - IE (only Windows)
               browsers: ['PhantomJS'],

               // Continuous Integration mode
               // if true, it capture browsers, run tests and exit
               singleRun: false
             });
};