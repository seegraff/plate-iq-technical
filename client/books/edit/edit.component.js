function BooksEditController() {
    var self = this;

    self.$onInit = () => {
        self.click = () => {
            self.editing = true;
        };
    };
}

BooksEditController.$inject = [];

angular.module( 'books' )
    .component( 'booksEdit', {
        templateUrl: 'books/edit/edit.template.html',
        controller: BooksEditController,
        bindings: {
            data: '=',
            editing: '='
        }
    });
