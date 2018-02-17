function BooksListController() {
    var self = this;
}

BooksListController.$inject = [];

angular.module( 'books' )
    .component( 'booksList', {
        templateUrl: 'books/list/list.template.html',
        controller: BooksListController,
        bindings: {
            'data': '=',
            'categories': '<'
        }
    } );
