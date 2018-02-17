function UsersApiService(
    Restangular
) {
    return new UsersApi(Restangular);
};

UsersApiService.$inject = [
    'Restangular',
];

angular.module( 'api' )
    .service( 'UsersApi', UsersApiService );
