angular.module( 'app' )
    .config( [ '$locationProvider', '$stateProvider', '$urlRouterProvider', '$httpProvider', 'RestangularProvider',
        function config( $locationProvider, $stateProvider, $urlRouterProvider, $httpProvider, RestangularProvider ) {
            var rootState = {
                name: 'root',
                url: '/',
                component: 'corePage',
                params: {
                    limit: {
                        type: 'string',
                        value: '10',
                        squash: true,
                    },
                    offset: {
                        type: 'string',
                        value: '0',
                        squash: true
                    }
                },
                resolve: {
                    list: (BooksApi, $stateParams) => {
                        var result;

                        if($stateParams.limit && $stateParams.offset) {
                            result = BooksApi.list({limit: $stateParams.limit, offset: $stateParams.offset});
                        } else {
                            result = BooksApi.list();
                        }

                        return result;
                    }
                }
            };

            $stateProvider.state( rootState );

            $urlRouterProvider.when( '', '/' );
            $urlRouterProvider.otherwise( '/404' );

            RestangularProvider.setRequestSuffix("/");

            $httpProvider.defaults.xsrfCookieName = 'csrftoken';
            $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

            $locationProvider.html5Mode( {
                enabled: true,
                requireBase: false
            } );
        }
    ] );
