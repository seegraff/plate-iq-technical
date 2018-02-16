function BooksListController() {}

BooksListController.$inject = [];

angular.module( 'books' )
    .component( 'booksList', {
        templateUrl: 'books/list/list.template.html',
        controller: BooksListController
    } );
