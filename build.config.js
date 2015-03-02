module.exports.config = {

    // load-grunt-configs path
    src : 'grunt/config/*.js',

    // directories
    dir : {
        target: 'target/webapp',
        src : 'app',
        temp : 'target/tmp-ui'
    },

    // files in our application
    files : {
        // all 3th party stuff
        vendor : {
            js : {
                fullNgloader : 'bower_components/angular-loader/angular-loader.js',
                full : [
                    'app/bower_components/jquery/dist/jquery.js',
                    'app/bower_components/angular/angular.js',
                    'app/bower_components/angular-loader/angular-loader.js',
                    'app/bower_components/angular-mocks/angular-mocks.js',
                    'app/bower_components/angular-route/angular-route.js',
                    'app/bower_components/angular-smart-table/dist/smart-table.debug.js'
                ],
                minNgloader : 'bower_components/angular-loader/angular-loader.min.js',
                min : [
                    'app/bower_components/jquery/dist/jquery.min.js',
                    'app/bower_components/angular/angular.min.js',
                    'app/bower_components/angular-loader/angular-loader.min.js',
                    'app/bower_components/angular-route/angular-route.min.js',
                    'app/bower_components/angular-smart-table/dist/smart-table.min.js'
                ]
            },

            styles : {
                full : [
                    'app/bower_components/bootstrap/dist/css/bootstrap.css'
                ],
                min : [
                    'app/bower_components/bootstrap/dist/css/bootstrap.min.css'
                ]
            }
        },

        // application file stuff
        app : {
            tpls : [
                'app/**/*.html',
                'app/index.html'
            ],
            js : [
                'app/**/*.js',
                'app/app.js'
            ],
            styles : [
                'app/**/*.css',
                'app/app.css'
            ]
        }
    }
};
