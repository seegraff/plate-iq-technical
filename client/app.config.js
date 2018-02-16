angular.module( 'app' )
    .config( [ '$locationProvider', '$stateProvider', '$urlRouterProvider',
        function config( $locationProvider, $stateProvider, $urlRouterProvider ) {
            $locationProvider.hashPrefix( '!' );

            var rootState = {
                name: 'root',
                url: '/',
                template: 'Testestestset'
            };

            $stateProvider.state( rootState );

            $urlRouterProvider.when( '', '/' );

            $urlRouterProvider.otherwise( '/404' );
        }
    ] );
