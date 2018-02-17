function CategoriesApiService(
    Restangular
) {
    return new CategoriesApi(Restangular);
};

CategoriesApiService.$inject = [
    'Restangular',
];

angular.module( 'api' )
    .service( 'CategoriesApi', CategoriesApiService );
