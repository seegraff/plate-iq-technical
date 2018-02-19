angular.module( 'app' )
    .config( [ '$locationProvider', '$stateProvider', '$urlRouterProvider', '$httpProvider', 'RestangularProvider',
        function config( $locationProvider, $stateProvider, $urlRouterProvider, $httpProvider, RestangularProvider ) {
            var rootState = {
                name: 'root',
                url: '/',
                component: 'corePage',
                params: {
                    limit: {
                        value: null,
                        squash: true,
                    },
                    offset: {
                        value: null,
                        squash: true
                    },
                    name: {
                        value: null,
                        squash: true
                    },
                    author: {
                        value: null,
                        squash: true
                    },
                    category: {
                        value: null,
                        squash: true
                    },
                    from: {
                        value: null,
                        squash: true
                    },
                    to: {
                        value: null,
                        squash: true
                    },
                    availability: {
                        value: null,
                        squash: true
                    }
                },
                resolve: {
                    books: (BooksApi, $stateParams) => {
                        return BooksApi.list($stateParams);;
                    },
                    categories: (CategoriesApi) => {
                        return CategoriesApi.list({limit: 1000});
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
