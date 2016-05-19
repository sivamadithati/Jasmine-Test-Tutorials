module.exports = function(config){
  config.set({

    basePath : '',
    preprocessors: {
      'app/views/jasmineDirective.html': ['ng-html2js']
    },
    files : [
      'app/bower_components/jquery/dist/jquery.js',
      'app/bower_components/angular/angular.js',
            'app/bower_components/angular-route/angular-route.js',
        'app/bower_components/ui-router/release/angular-ui-router.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
        'app/app.js',
      'app/controllers/*.js',
      'app/services/*.js',
      'app/filters/*.js',
      'app/directives/*.js',
        'app/views/jasmineDirective.html',
        'tests/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
        'karma-ng-html2js-preprocessor'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
