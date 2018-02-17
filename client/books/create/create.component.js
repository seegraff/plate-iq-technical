function BooksCreateController() {}

BooksCreateController.$inject = [];

angular.module( 'books' )
    .component( 'booksCreate', {
        templateUrl: 'books/create/create.template.html',
        controller: BooksCreateController
    } );
