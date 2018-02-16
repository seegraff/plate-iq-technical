function BooksFilterController() {}

BooksFilterController.$inject = [];

angular.module( 'books' )
    .component( 'booksFilter', {
        templateUrl: 'books/filter/filter.template.html',
        controller: BooksFilterController
    } );
