angular.module( 'app' )
    .config( [ '$locationProvider', '$stateProvider', '$urlRouterProvider', '$httpProvider',
        function config( $locationProvider, $stateProvider, $urlRouterProvider, $httpProvider ) {
            $httpProvider.defaults.xsrfCookieName = 'csrftoken';
            $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

            $locationProvider.html5Mode( {
                enabled: true,
                requireBase: false
            } );

            var rootState = {
                name: 'root',
                url: '/',
                template: '<core-page></core-page>'
            };

            $stateProvider.state( rootState );

            $urlRouterProvider.when( '', '/' );

            $urlRouterProvider.otherwise( '/404' );
        }
    ] );
