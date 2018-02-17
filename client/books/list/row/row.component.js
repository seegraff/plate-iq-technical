function BooksListRowController() {}

BooksListRowController.$inject = [];

angular.module( 'books' )
    .component( 'listRow', {
        templateUrl: 'books/list/row/row.template.html',
        controller: BooksListRowController,
        restrict: 'E',
        bindings: {
            data: '='
        }
    });
