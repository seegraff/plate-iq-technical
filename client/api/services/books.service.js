function BooksApiService(
    Restangular
) {
    return new BooksApi(Restangular);
};

BooksApiService.$inject = [
    'Restangular',
];

angular.module( 'api' )
    .service( 'BooksApi', BooksApiService );
