angular.module( 'app' )
    .config( [ '$locationProvider', '$stateProvider', '$urlRouterProvider',
        function config( $locationProvider, $stateProvider, $urlRouterProvider ) {
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
