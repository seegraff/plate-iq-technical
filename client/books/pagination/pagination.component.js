function BooksPaginationController() {}

BooksPaginationController.$inject = [];

angular.module( 'books' )
    .component( 'booksPagination', {
        templateUrl: 'books/pagination/pagination.template.html',
        controller: BooksPaginationController
    } );
