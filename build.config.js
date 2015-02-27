module.exports.config = {

    // load-grunt-configs path
    src : 'grunt/config/*.js',

    // directories
    dir : {
        target: 'target/webapp',
        src : '',
        temp : 'target/tmp-ui'
    },

    // files in our application
    files : {
        // all 3th party stuff
        vendor : {
            js : {
                fullNgloader : 'bower_components/angular-loader/angular-loader.js',
                full : [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/angular/angular.js',
                    'bower_components/angular-loader/angular-loader.js',
                    'bower_components/angular-mocks/angular-mocks.js',
                    'bower_components/angular-route/angular-route.js',
                    'bower_components/angular-smart-table/dist/smart-table.debug.js'
                ],
                minNgloader : 'bower_components/angular-loader/angular-loader.min.js',
                min : [
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/angular/angular.min.js',
                    'bower_components/angular-loader/angular-loader.min.js',
                    'bower_components/angular-route/angular-route.min.js',
                    'bower_components/angular-smart-table/dist/smart-table.min.js'
                ]
            },

            styles : {
                full : [
                    'bower_components/bootstrap/dist/css/bootstrap.css'
                ],
                min : [
                    'bower_components/bootstrap/dist/css/bootstrap.min.css'
                ]
            }
        },

        // application file stuff
        app : {
            tpls : [
                'app/**/*.tpl.html'
            ],
            sites : [
                'app/**/*.html',
                'index.html'
            ],
            js : [
                'app/**/*.js',
                'app.js'
            ],
            styles : [
                'app/**/*.css',
                'app.css'
            ]
        }
    }
};
