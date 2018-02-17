function BooksDeleteController(
    BooksApi,
    $scope
) {
    var self = this;

    self.click = () => {
        BooksApi.delete(self.data.uuid).then((result) => {
            delete self.data;
        });
    };
}

BooksDeleteController.$inject = [
    'BooksApi',
    '$scope',
];

angular.module( 'books' )
    .component( 'booksDelete', {
        templateUrl: 'books/delete/delete.template.html',
        controller: BooksDeleteController,
        bindings: {
            data: '='
        }
    } );
