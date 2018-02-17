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
                        value: null,
                        squash: true,
                    },
                    offset: {
                        type: 'string',
                        value: null,
                        squash: true
                    },
                    title: {
                        type: 'string',
                        value: null,
                        squash: true
                    },
                    author: {
                        type: 'string',
                        value: null,
                        squash: true
                    },
                    category: {
                        type: 'string',
                        value: null,
                        squash: true
                    },
                    from: {
                        type: 'string',
                        value: null,
                        squash: true
                    },
                    to: {
                        type: 'string',
                        value: null,
                        squash: true
                    },
                    availability: {
                        type: 'string',
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
