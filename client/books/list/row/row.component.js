function BooksListRowController() {
    var self = this;

    self.editing = false;

    self.$onInit = () => {
        console.log('Creating row', self.data);
    };
}

BooksListRowController.$inject = [];

angular.module( 'books' )
    .component( 'listRow', {
        templateUrl: 'books/list/row/row.template.html',
        controller: BooksListRowController,
        bindings: {
            data: '=',
            categories: '<'
        }
    });
